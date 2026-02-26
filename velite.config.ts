import { defineConfig, defineCollection, s } from "velite";
import rehypeSlug from "rehype-slug";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import remarkGfm from "remark-gfm";

const posts = defineCollection({
  name: "Post",
  pattern: "posts/**/*.mdx",
  schema: s.object({
    title: s.string().max(120),
    description: s.string().max(300),
    slug: s.slug("posts"),
    date: s.isodate(),
    published: s.boolean().default(true),
    tags: s.array(s.string()).default([]),
    cover: s.string().optional(),
    body: s.mdx(),
    metadata: s.metadata(),
    excerpt: s.excerpt(),
  }),
});

const projects = defineCollection({
  name: "Project",
  pattern: "projects/**/*.mdx",
  schema: s.object({
    title: s.string().max(120),
    description: s.string().max(300),
    slug: s.slug("projects"),
    date: s.isodate(),
    published: s.boolean().default(true),
    featured: s.boolean().default(false),
    tags: s.array(s.string()).default([]),
    cover: s.string().optional(),
    url: s.string().optional(),
    repository: s.string().optional(),
    body: s.mdx(),
  }),
});

export default defineConfig({
  root: "content",
  output: {
    data: ".velite",
    assets: "public/static",
    base: "/static/",
    name: "[name]-[hash:6].[ext]",
    clean: true,
  },
  collections: { posts, projects },
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: {
            dark: "github-dark-dimmed",
            light: "github-light",
          },
        },
      ],
      [
        rehypeAutolinkHeadings,
        {
          behavior: "wrap",
          properties: {
            className: ["subheading-anchor"],
            ariaLabel: "Link to section",
          },
        },
      ],
    ],
  },
});
