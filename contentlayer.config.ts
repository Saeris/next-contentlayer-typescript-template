import {
  defineDocumentType,
  makeSource,
  RawDocumentData
} from "contentlayer/source-files";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeImgSize from "rehype-img-size";
import { rehypeAccessibleEmojis } from "rehype-accessible-emojis";
import type { Options } from "@jsdevtools/rehype-url-inspector";
import rehypeUrlInspector from "@jsdevtools/rehype-url-inspector";
import path from "path";

const Post = defineDocumentType(() => ({
  name: `Post`,
  filePathPattern: `content/blog/**/*.mdx`,
  contentType: `mdx`,
  fields: {
    title: {
      type: `string`,
      description: `The title of the post`,
      required: true
    },
    date: {
      type: `date`,
      description: `The date of the post`,
      required: true
    }
  },
  computedFields: {
    url: {
      type: `string`,
      resolve: (doc): string =>
        `/blog/${doc._raw.sourceFileName.replace(`.mdx`, ``)}`
    },
    contentRoot: {
      type: `string`,
      resolve: (doc): string => doc._raw.sourceFileDir
    }
  }
}));

// eslint-disable-next-line import/no-default-export
export default makeSource({
  contentDirPath: `public`,
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      rehypeAutolinkHeadings,
      rehypeAccessibleEmojis,
      [
        rehypeUrlInspector,
        {
          inspectEach(url) {
            url.node.properties.src = `/${path.join(
              (url.file.data as { rawDocumentData: RawDocumentData })
                .rawDocumentData.sourceFileDir,
              url.url
            )}`.replace(/\\/g, `/`);
          },
          selectors: [`img[src]`]
        } as Options
      ],
      // @ts-ignore
      [rehypeImgSize, { dir: "public" }]
    ]
  }
});
