export const dynamic = 'force-dynamic'; 

import { GraphQLClient } from 'graphql-request';
import {GET_POSTS} from '../lib/getAllPost'
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, Key } from "react";

const graphqlUrl = process.env.WP_GRAPHQL_URL;

if (!graphqlUrl) {
  throw new Error('WP_GRAPHQL_URL is not defined');
}

console.log(graphqlUrl)
const graphQLClient = new GraphQLClient(graphqlUrl);



export default async function Home() {
  const data = await graphQLClient.request(GET_POSTS);
  const posts =data.posts.edges

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
       
        <div className="flex flex-col items-center gap-6 text-center w-full">
          <h1 className="max-w-xs text-center text-[50px] font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Bright Code
          </h1>
        </div>

        <div className="w-full">
          <h2 className="text-[40px] mb-[30px] text-center font-semibold leading-10 tracking-tight text-black dark:text-zinc-50 text-center">All Posts</h2>
          {
            posts.map((post: { node: { title: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<unknown>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<unknown>> | Iterable<ReactNode> | null | undefined> | null | undefined; }; }, indx: Key | null | undefined) =>(
              <div key={indx} className="p-4 w-[33.33%] shadow-sm">
                <h2 >{post.node.title}</h2>
              </div>
            ))
          }
        </div>
      </main>
    </div>
  );
}