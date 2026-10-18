import { useEffect, useState } from "react";
import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Renders an image from /public. If the file has not been uploaded yet,
 * shows a labelled placeholder with the expected upload path.
 */
export function SmartImage({
  src,
  alt,
  className,
  imgClassName,
  fallbackSrc,
  loading = "lazy",
  fetchPriority,
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  fallbackSrc?: string;
  loading?: "eager" | "lazy";
  fetchPriority?: "high" | "low" | "auto";
}) {
  const [failed, setFailed] = useState(false);
  const [usingFallback, setUsingFallback] = useState(false);

  useEffect(() => {
    setFailed(false);
    setUsingFallback(false);
  }, [src]);

  return (
    <div className={cn("relative overflow-hidden bg-muted", className)}>
      {failed ? (
        <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-secondary p-4 text-center">
          <ImageIcon className="h-7 w-7 text-muted-foreground" aria-hidden />
          <span className="text-xs font-medium text-muted-foreground">Upload image to</span>
          <code className="rounded bg-background px-2 py-1 text-[11px] text-primary">
            public{src}
          </code>
        </div>
      ) : (
        <img
          src={usingFallback && fallbackSrc ? fallbackSrc : src}
          alt={alt}
          loading={loading}
          fetchPriority={fetchPriority}
          onError={() => {
            if (fallbackSrc && !usingFallback && fallbackSrc !== src) {
              setUsingFallback(true);
            } else {
              setFailed(true);
            }
          }}
          className={cn("h-full w-full object-cover", imgClassName)}
        />
      )}
    </div>
  );
}
