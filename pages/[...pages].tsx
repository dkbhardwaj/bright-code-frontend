
import { GraphQLClient } from 'graphql-request';
import { GET_PAGE, GET_PAGE_PREVIEW } from "../lib/pages"
import { GetServerSideProps } from 'next';
import PageBuilder from "../components/PageBuilder"
import { Blade } from "../components/PageBuilder/section.types";
import NotFoundContent from "../components/NotFoundContent";



export default function Page({ pages, data, preview }: Props) {
    
  const sections = data?.pageBy?.pagebuilder?.sections || []

  // Handle case where page data is null
  if (!data?.pageBy) {
    const pagePath = pages?.[0] || '';
    return (
      <>
        <NotFoundContent pagePath={pagePath} isPreview={preview} />
      </>
    );
  }

  return (
    <>
      <PageBuilder blades={sections} />
    </>
  )
}


type Pagebuilder = {
  sections: Blade[];
};

type PageBy = {
  id: string;
  slug: string;
  title: string;
  status?: string;
  modified?: string;
  pagebuilder: Pagebuilder;
};

type PageData = {
  pageBy: PageBy | null;
};

type Props = {
  pages: string[];
  data: PageData;
  preview: boolean;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params, preview = false, previewData } = context;
  const pages = params?.pages as string[];

  const client = new GraphQLClient(
    process.env.WP_GRAPHQL_URL as string,
    {
      headers: preview && process.env.WORDPRESS_AUTH_REFRESH_TOKEN
        ? {
          Authorization: `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`
        }
        : {}
    }
  );

  let data;

  // Check if we're in preview mode and have preview data
  if (preview && previewData && (previewData as any).id) {
    // Fetch preview/draft content using the post ID
    console.log('Preview mode: fetching draft content for ID:', (previewData as any).id);
    data = await client.request(GET_PAGE_PREVIEW, {
      id: (previewData as any).id
    });
    // Wrap the response in pageBy if needed
    if (data.page && !data.pageBy) {
      data = { pageBy: data.page };
    }
  } else {
    // Fetch published content (normal mode)
    data = await client.request(GET_PAGE, { uri: pages[0] });
  }

  console.log("--getServerSideProps data--", data);

  return {
    props: {
      pages,
      data,
      preview: preview || false
    },
  };
};