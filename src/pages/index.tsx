import React from "react";
import Link from "next/link";
import Image from "next/image";
import { compareDesc, format, parseISO } from "date-fns";
import { useMDXComponent } from "next-contentlayer/hooks";
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import { allPosts } from "contentlayer/generated";

export const getStaticProps: GetStaticProps = () => {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );
  return { props: { posts } };
};

const Post: React.FC<InferGetStaticPropsType<typeof getStaticProps>[0]> = ({
  post
}) => {
  const Markdown = useMDXComponent(post.body.code);
  const components = {
    img: ({ src, ...props }) => {
      return <Image layout="responsive" {...props} src={src} />;
    }
  };
  return (
    <div>
      <h2>
        <Link href={post.url}>
          <a>{post.title}</a>
        </Link>
      </h2>
      <time dateTime={post.date}>
        {format(parseISO(post.date), `LLLL d, yyyy`)}
      </time>
      <Markdown components={components} />
    </div>
  );
};

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  posts
}) => (
  <div>
    <h1>Next.js Example</h1>

    {posts.map((post, i) => (
      <Post key={i} post={post} />
    ))}
  </div>
);

export default Home;
