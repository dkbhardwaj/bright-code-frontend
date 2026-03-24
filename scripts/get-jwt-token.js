#!/usr/bin/env node

/**
 * Helper script to obtain JWT refresh token from WordPress
 * 
 * Usage:
 *   node scripts/get-jwt-token.js <username> <password>
 * 
 * Example:
 *   node scripts/get-jwt-token.js admin mypassword
 */

const https = require('https');
const http = require('http');

const args = process.argv.slice(2);

if (args.length < 2) {
  console.error('❌ Error: Missing required arguments\n');
  console.log('Usage: node scripts/get-jwt-token.js <username> <password>\n');
  console.log('Example: node scripts/get-jwt-token.js admin mypassword');
  process.exit(1);
}

const [username, password] = args;
const graphqlUrl = process.env.WP_GRAPHQL_URL || 'https://sun-3-bright-codeio.pantheonsite.io/graphql';

const mutation = `
  mutation LoginUser {
    login(
      input: {
        username: "${username}"
        password: "${password}"
      }
    ) {
      authToken
      refreshToken
      user {
        id
        name
        email
      }
    }
  }
`;

const postData = JSON.stringify({
  query: mutation
});

const url = new URL(graphqlUrl);
const protocol = url.protocol === 'https:' ? https : http;

const options = {
  hostname: url.hostname,
  port: url.port,
  path: url.pathname,
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(postData)
  }
};

console.log('🔐 Attempting to authenticate with WordPress...\n');
console.log(`GraphQL URL: ${graphqlUrl}`);
console.log(`Username: ${username}\n`);

const req = protocol.request(options, (res) => {
  let data = '';

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    try {
      const response = JSON.parse(data);

      if (response.errors) {
        console.error('❌ GraphQL Errors:');
        response.errors.forEach((error) => {
          console.error(`  - ${error.message}`);
        });
        process.exit(1);
      }

      if (response.data && response.data.login) {
        const { authToken, refreshToken, user } = response.data.login;

        console.log('✅ Authentication successful!\n');
        console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
        console.log('User Information:');
        console.log(`  Name:  ${user.name}`);
        console.log(`  Email: ${user.email}`);
        console.log(`  ID:    ${user.id}\n`);
        console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
        console.log('🔑 Auth Token (expires in ~5 minutes):');
        console.log(`  ${authToken}\n`);
        console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
        console.log('🔄 Refresh Token (use this in .env.local):');
        console.log(`  ${refreshToken}\n`);
        console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
        console.log('📝 Next Steps:');
        console.log('  1. Copy the Refresh Token above');
        console.log('  2. Add it to your .env.local file:');
        console.log('     WORDPRESS_AUTH_REFRESH_TOKEN=<paste-refresh-token-here>');
        console.log('  3. Restart your development server (npm run dev)\n');
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
  process.exit(1);
});

req.write(postData);
req.end();
