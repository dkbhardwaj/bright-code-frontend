import { GraphQLClient } from "graphql-request";
import { GET_POSTS } from "../lib/getAllPost";
import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  Key,
} from "react";
// import Button from "../components/buttons/button";
import { GetServerSideProps } from "next";

const graphqlUrl =
  process.env.WP_GRAPHQL_URL || process.env.NEXT_PUBLIC_WP_GRAPHQL_URL;

if (!graphqlUrl) {
  throw new Error("WP_GRAPHQL_URL / NEXT_PUBLIC_WP_GRAPHQL_URL is not defined");
}

const graphQLClient = new GraphQLClient(graphqlUrl);

type PostEdge = { node: { title: string } };

type Props = {
  posts: PostEdge[];
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const data = await graphQLClient.request(GET_POSTS);
  const posts = data?.posts?.edges || [];
  return { props: { posts } };
};

export default function Home({ posts }: Props) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-black">
      <main className="flex min-h-screen w-full max-w-4xl flex-col items-center justify-between py-32 px-16 bg-gray-200 dark:bg-black sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center w-full">
          <h1 className="text-center text-[50px] font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Bright Code
          </h1>
        </div>

        <div className="w-full">
          <h2 className="text-[40px] mb-7.5 text-center font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            All fetched Posts
          </h2>
          {posts.map((post: PostEdge, indx: Key | null | undefined) => (
            <div key={indx as any} className="p-4 w-[33.33%] shadow-sm">
              <h2>{post.node.title}</h2>
            </div>
          ))}

          <h2 className="text-[40px] my-7.5 text-center font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            All buttons
          </h2>

          {/* <div className="mb-4">
            <Button href="#" variant="gradient-blue">
              Blue Gradient
            </Button>
          </div>

          <div className="mb-4">
            <Button href="#" variant="rounded-blue">
              Rounded Blue
            </Button>
          </div>

          <div className="mb-4">
            <Button href="#" variant="rounded-gray">
              Rounded Gray
            </Button>
          </div>

          <div className="mb-4">
            <Button href="#" variant="rounded-white">
              Rounded White
            </Button>
          </div> */}
        </div>
        <section className="container">
          <h1 className="mb-7.5">Heading Level 1 (H1)</h1>
          <p className="mb-7.5">
            This is a paragraph under H1. It contains 
             <b> bold text</b> and a <a href="#">link example</a> for testing
            styles.
          </p>

          <h2 className="mb-7.5">Heading Level 2 (H2)</h2>

          <h3 className="mb-7.5">Heading Level 3 (H3)</h3>

          <h4 className="mb-7.5">Heading Level 4 (H4)</h4>

          <h5 className="mb-7.5">Heading Level 5 (H5)</h5>

          <h6 className="mb-7.5">Heading Level 6 (H6)</h6>

          <span>Span text example (small UI text)</span>

          <br />
          <br />

          <h3 className="mb-7.5">Unordered List (UL)</h3>
          <ul>
            <li>List item one</li>
            <li>
              List item two with <b>bold text</b>
            </li>
            <li>
              List item three
              <ul>
                <li>Nested item one</li>
                <li>Nested item two</li>
              </ul>
            </li>
          </ul>

          <h3 className="mb-7.5">Ordered List (OL)</h3>
          <ol>
            <li>Step one</li>
            <li>Step two</li>
            <li>
              Step three
              <ol>
                <li>Sub step one</li>
                <li>Sub step two</li>
              </ol>
            </li>
          </ol>
        </section>
      </main>
    </div>
  );
}
