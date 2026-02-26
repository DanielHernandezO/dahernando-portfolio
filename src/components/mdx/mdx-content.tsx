"use client";

import { useMemo } from "react";
import * as runtime from "react/jsx-runtime";
import { mdxComponents } from "./index";

interface MdxContentProps {
  code: string;
}

function getMDXExport(code: string) {
  const fn = new Function(code);
  return fn({ ...runtime });
}

export function MdxContent({ code }: MdxContentProps) {
  const content = useMemo(() => {
    const mdxExport = getMDXExport(code);
    return mdxExport.default({ components: mdxComponents });
  }, [code]);

  return content;
}
