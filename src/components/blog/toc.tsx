"use client";

import { useRef, useSyncExternalStore } from "react";
import { useActiveHeading } from "@/hooks/use-active-heading";
import { cn } from "@/lib/utils";

interface TocItem {
  id: string;
  text: string;
  level: number;
}

function getHeadings(): TocItem[] {
  if (typeof document === "undefined") return [];
  const elements = document.querySelectorAll("h2[id], h3[id]");
  return Array.from(elements).map((el) => ({
    id: el.id,
    text: el.textContent ?? "",
    level: Number(el.tagName.charAt(1)),
  }));
}

export function TableOfContents() {
  const headingsRef = useRef<TocItem[]>([]);
  const activeId = useActiveHeading();

  const headings = useSyncExternalStore(
    () => () => {},
    () => {
      const current = getHeadings();
      if (
        current.length !== headingsRef.current.length ||
        current.some((h, i) => h.id !== headingsRef.current[i]?.id)
      ) {
        headingsRef.current = current;
      }
      return headingsRef.current;
    },
    () => []
  );

  if (headings.length === 0) return null;

  return (
    <nav className="hidden xl:block">
      <div className="sticky top-24">
        <p className="mb-4 text-xs font-medium tracking-wider text-text-secondary">
          ON THIS PAGE
        </p>
        <ul className="space-y-2 text-sm">
          {headings.map((heading) => (
            <li key={heading.id}>
              <a
                href={`#${heading.id}`}
                className={cn(
                  "block transition-colors hover:text-accent-primary",
                  heading.level === 3 && "pl-4",
                  activeId === heading.id
                    ? "font-medium text-accent-primary"
                    : "text-text-secondary"
                )}
              >
                {heading.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
