#!/usr/bin/env node

/**
 * Test script to verify JWT authentication is working correctly
 * 
 * Usage:
 *   node scripts/test-jwt-auth.js
 * 
 * This script will:
 * 1. Check if WORDPRESS_AUTH_REFRESH_TOKEN is set
 * 2. Test a GraphQL query with authentication
 * 3. Verify the token is valid and working
 */

const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

// Manually parse .env.local to avoid 'dotenv' dependency
try {
  const envPath = path.join(__dirname, '..', '.env.local');
  if (fs.existsSync(envPath)) {
    const envConfig = fs.readFileSync(envPath, 'utf8');
    envConfig.split('\n').forEach(line => {
      const match = line.match(/^([^=]+)=(.*)$/);
      if (match) {
        const key = match[1].trim();
        const value = match[2].trim().replace(/^['"]|['"]$/g, ''); // Remove quotes if present
        if (!process.env[key]) {
          process.env[key] = value;
        }
      }
    });
  }
} catch (e) {
  console.warn('⚠️ Could not read .env.local file');
}

const refreshToken = process.env.WORDPRESS_AUTH_REFRESH_TOKEN;
const graphqlUrl = process.env.WP_GRAPHQL_URL || 'https://sun-3-bright-codeio.pantheonsite.io/graphql';

console.log('🧪 Testing JWT Authentication...\n');
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

// Check if token is set
if (!refreshToken) {
  console.error('❌ WORDPRESS_AUTH_REFRESH_TOKEN is not set in .env.local\n');
  console.log('Please follow these steps:');
  console.log('  1. Run: node scripts/get-jwt-token.js <username> <password>');
  console.log('  2. Copy the refresh token from the output');
  console.log('  3. Add it to .env.local: WORDPRESS_AUTH_REFRESH_TOKEN=<token>');
  console.log('  4. Run this test again\n');
  process.exit(1);
}

console.log('✅ WORDPRESS_AUTH_REFRESH_TOKEN is set');
console.log(`   Length: ${refreshToken.length} characters`);
console.log(`   Preview: ${refreshToken.substring(0, 20)}...${refreshToken.substring(refreshToken.length - 20)}\n`);

// Test query - fetch current user info to verify authentication
const query = `
  query GetCurrentUser {
    viewer {
      id
      name
      email
      capabilities
    }
  }
`;

const postData = JSON.stringify({ query });
const url = new URL(graphqlUrl);
const protocol = url.protocol === 'https:' ? https : http;

const options = {
  hostname: url.hostname,
  port: url.port,
  path: url.pathname,
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(postData),
    'Authorization': `Bearer ${refreshToken}`
  }
};

console.log('🔍 Testing GraphQL query with authentication...');
console.log(`   Endpoint: ${graphqlUrl}\n`);

const req = protocol.request(options, (res) => {
  let data = '';

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    try {
      const response = JSON.parse(data);

      console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

      if (response.errors) {
        console.error('❌ Authentication Failed!\n');
        console.error('GraphQL Errors:');
        response.errors.forEach((error) => {
          console.error(`  - ${error.message}`);
          if (error.debugMessage) {
            console.error(`    Debug: ${error.debugMessage}`);
          }
        });
        console.log('\n💡 Troubleshooting:');
        console.log('  1. Verify the JWT plugin is installed and active in WordPress');
        console.log('  2. Check that GRAPHQL_JWT_AUTH_SECRET_KEY is set in wp-config.php');
        console.log('  3. Ensure your refresh token is still valid (they may expire)');
        console.log('  4. Try generating a new token: node scripts/get-jwt-token.js <username> <password>\n');
        process.exit(1);
      }

      if (response.data && response.data.viewer) {
        const { viewer } = response.data;

        if (viewer) {
          console.log('✅ Authentication Successful!\n');
          console.log('Authenticated User:');
          console.log(`  Name:         ${viewer.name}`);
          console.log(`  Email:        ${viewer.email}`);
          console.log(`  ID:           ${viewer.id}`);
          console.log(`  Capabilities: ${viewer.capabilities ? viewer.capabilities.join(', ') : 'N/A'}\n`);
          console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
          console.log('✨ JWT authentication is working correctly!');
          console.log('   Your preview functionality should now work with authenticated requests.\n');
        } else {
          console.log('⚠️  Token is valid but no user data returned');
          console.log('   This might indicate the token is valid but not associated with a user.\n');
        }
      } else {
        console.error('❌ Unexpected response format:', response);
        process.exit(1);
      }
    } catch (error) {
      console.error('❌ Error parsing response:', error.message);
      console.error('Response data:', data);
      process.exit(1);
    }
  });
});

req.on('error', (error) => {
  console.error('❌ Request failed:', error.message);
  console.log('\n💡 Troubleshooting:');
  console.log('  1. Check your internet connection');
  console.log('  2. Verify the WP_GRAPHQL_URL in .env.local is correct');
  console.log('  3. Ensure the WordPress GraphQL endpoint is accessible\n');
  process.exit(1);
});

req.write(postData);
req.end();
