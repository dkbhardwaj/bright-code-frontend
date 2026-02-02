
import { GraphQLClient } from 'graphql-request';
import {GET_PAGE} from "../lib/pages"
import { GetServerSideProps } from 'next';
import PageBuilder from "../components/PageBuilder"
import { Blade } from "../components/PageBuilder/section.types";



export default function Page({ pages,data }: Props) {
    
  const sections = data?.pageBy?.pagebuilder?.sections || []
  
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
  pagebuilder: Pagebuilder;
};

type PageData = {
  pageBy: PageBy | null;
};

type Props = {
  pages: string[];
  data: PageData;
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const pages = params?.pages as string[];

  const client = new GraphQLClient(
    process.env.WP_GRAPHQL_URL as string
  );

  const data = await client.request(GET_PAGE, { uri: pages[0] });

  return {
    props: {
      pages,
      data
    },
  };
};