import { cn } from "@/lib/utils";
import React from "react";

interface CLinkProps {
  href: string;
  className?: string; // Additional class names to be added to the anchor tag.
  children: React.ReactNode;
  prevent?:boolean
}

const CLink = React.forwardRef<HTMLAnchorElement, CLinkProps>(
  ({ href, className, children, prevent=true }, ref) => {
    return (
      <a
        ref={ref}
        className={cn("flex items-center gap-2", className)}
        onClick={(e) => prevent && e.preventDefault()}
        href={href}
      >
        {children}
      </a>
    );
  }
);

export { CLink };
