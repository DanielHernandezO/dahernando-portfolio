import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { formatDate } from "@/lib/utils";

interface PostCardProps {
  title: string;
  description: string;
  slug: string;
  date: string;
  tags: string[];
  metadata: { readingTime: number; wordCount: number };
}

export function PostCard({
  title,
  description,
  slug,
  date,
  tags,
  metadata,
}: PostCardProps) {
  return (
    <Link href={`/blog/${slug}`}>
      <Card className="h-full">
        <div className="flex items-center gap-3 text-xs text-text-secondary">
          <time>{formatDate(date)}</time>
          <span>·</span>
          <span>{metadata.readingTime} min read</span>
        </div>
        <h3 className="mt-3 text-xl font-semibold leading-snug">{title}</h3>
        <p className="mt-2 line-clamp-2 text-sm text-text-secondary">
          {description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="accent">
              {tag}
            </Badge>
          ))}
        </div>
      </Card>
    </Link>
  );
}
