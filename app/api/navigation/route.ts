import { NextResponse } from 'next/server';
import { GraphQLClient } from 'graphql-request';
import { GET_NAVIGATION } from '@/lib/Navigation';

export async function GET() {
  try {
    const client = new GraphQLClient(
      process.env.WP_GRAPHQL_URL || "https://sun-3-bright-codeio.pantheonsite.io/graphql"
    );

    const data = await client.request(GET_NAVIGATION);
    return NextResponse.json((data as any).menu || null);
  } catch (error) {
    console.error('Failed to fetch navigation data:', error);
    return NextResponse.json(null, { status: 500 });
  }
}
