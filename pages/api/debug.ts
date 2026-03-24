import type { NextApiRequest, NextApiResponse } from 'next';
import { GraphQLClient } from 'graphql-request';
import { GET_PAGE } from '../../lib/pages';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const url = process.env.WP_GRAPHQL_URL || process.env.NEXT_PUBLIC_WP_GRAPHQL_URL || 'https://dev-bright-codeio.pantheonsite.io/graphql';
  const client = new GraphQLClient(url);

  try {
    const data = await client.request(GET_PAGE, { uri: "test" });
    res.status(200).json({ 
      success: true, 
      endpointTested: url, 
      snippet: data ? "Data received successfully" : "Warning: No data"
    });
  } catch (error: any) {
    res.status(200).json({ 
      success: false, 
      endpointTested: url, 
      errorName: error.name,
      errorMessage: error.message,
      errorResponse: error.response?.errors || "No GraphQL errors returned, possibly network issue"
    });
  }
}
