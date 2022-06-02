import Head from "next/head";
import { format, parseISO } from "date-fns";
import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage
} from "next";
import { useMDXComponent } from "next-contentlayer/hooks";
import Image from "next/image";
import { allPosts } from "contentlayer/generated";

export const getStaticPaths: GetStaticPaths = () => ({
  paths: allPosts.map((post) => post.url),
  fallback: false
});

export const getStaticProps: GetStaticProps = ({ params }) => ({
  props: {
    post: allPosts.find(
      (post) => post._raw.sourceFileName.replace(`.mdx`, ``) === params?.slug
    )
  }
});

const Post: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  post
}) => {
  const Component = useMDXComponent(post.body.code);
  const components = {
    img: ({ src, ...props }) => {
      return <Image layout="responsive" {...props} src={src} />;
    }
  };
  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <article>
        <div>
          <time dateTime={post.date}>
            {format(parseISO(post.date), `LLLL d, yyyy`)}
          </time>
          <h1>{post.title}</h1>
        </div>
        <Component components={components} />
      </article>
    </>
  );
};

export default Post;
