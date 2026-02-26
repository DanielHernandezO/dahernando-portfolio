import NextImage, { type ImageProps as NextImageProps } from "next/image";
import { cn } from "@/lib/utils";

interface ImageProps extends Omit<NextImageProps, "alt"> {
  alt: string;
  rounded?: boolean;
}

export function Image({ alt, rounded = true, className, ...props }: ImageProps) {
  return (
    <NextImage
      alt={alt}
      className={cn(
        "object-cover",
        rounded && "rounded-xl",
        className
      )}
      {...props}
    />
  );
}
