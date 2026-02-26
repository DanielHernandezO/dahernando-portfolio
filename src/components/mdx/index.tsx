import type { MDXComponents } from "mdx/types";
import Image from "next/image";
import Link from "next/link";
import { Callout } from "./callout";
import { CodeBlock } from "./code-block";

export const mdxComponents: MDXComponents = {
  h2: (props) => <h2 className="group" {...props} />,
  h3: (props) => <h3 className="group" {...props} />,
  a: ({ href, children, ...props }) => {
    if (href?.startsWith("/")) {
      return (
        <Link href={href} {...props}>
          {children}
        </Link>
      );
    }
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
      </a>
    );
  },
  img: ({ src, alt, ...props }) => (
    <Image
      src={src ?? ""}
      alt={alt ?? ""}
      width={800}
      height={450}
      className="rounded-xl border border-bg-tertiary"
      {...props}
    />
  ),
  pre: (props) => <CodeBlock>{props.children}</CodeBlock>,
  Callout,
};
