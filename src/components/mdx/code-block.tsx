"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

interface CodeBlockProps {
  children: React.ReactNode;
  className?: string;
}

export function CodeBlock({ children, ...props }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const code = (children as React.ReactElement<{ children: string }>)?.props?.children ?? "";
    navigator.clipboard.writeText(typeof code === "string" ? code : "");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="group relative" {...props}>
      <button
        onClick={handleCopy}
        className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-md bg-bg-tertiary text-text-secondary opacity-0 transition-opacity hover:text-text-primary group-hover:opacity-100"
        aria-label="Copy code"
      >
        {copied ? <Check size={14} /> : <Copy size={14} />}
      </button>
      {children}
    </div>
  );
}
