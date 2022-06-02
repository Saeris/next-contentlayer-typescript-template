// contentlayer.config.ts
import {
  defineDocumentType,
  makeSource
} from "contentlayer/source-files";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeImgSize from "rehype-img-size";
import { rehypeAccessibleEmojis } from "rehype-accessible-emojis";
import rehypeUrlInspector from "@jsdevtools/rehype-url-inspector";
import path from "path";
var Post = defineDocumentType(() => ({
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
      resolve: (doc) => `/posts/${doc._raw.sourceFileName.replace(`.mdx`, ``)}`
    },
    contentRoot: {
      type: `string`,
      resolve: (doc) => doc._raw.sourceFileDir
    }
  }
}));
var contentlayer_config_default = makeSource({
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
            const src = `/${path.join(url.file.data.rawDocumentData.sourceFileDir, url.url)}`.replace(/\\/g, `/`);
            console.log(src);
            console.log(url.node.properties.src = src);
          },
          selectors: [`img[src]`]
        }
      ],
      [rehypeImgSize, { dir: "public" }]
    ]
  }
});
export {
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-SEBAQLMG.mjs.map
