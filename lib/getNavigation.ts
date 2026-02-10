import { GraphQLClient } from 'graphql-request';
import { GET_NAVIGATION } from './Navigation';

interface MenuData {
  menuItems?: {
    nodes?: Array<{
      label: string;
      path: string;
      parentId: string | null;
      menuIcon?: string;
      menuIconAlt?: string;
      description?: string;
      childItems?: {
        nodes?: Array<{
          label: string;
          path: string;
          menuIcon?: string;
          menuIconAlt?: string;
          description?: string;
        }>;
      };
    }>;
  };
}

export async function getNavigationData(): Promise<MenuData | null> {
  try {
    const client = new GraphQLClient(
      "https://dev-bright-codeio.pantheonsite.io/graphql"
    );

    const data = await client.request(GET_NAVIGATION);
    return (data as any).menu || null;
  } catch (error) {
    console.error('Failed to fetch navigation data:', error);
    return null;
  }
}
