import { FC, HTMLAttributes } from "react";
import { Navbar } from "./navbar";
import { cn } from "@/lib/utils";

export const Layout: FC<HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
}) => (
  <div className="min-h-screen bg-background text-foreground">
    <Navbar />
    <main className={cn("p-4", className)}>{children}</main>
  </div>
);
