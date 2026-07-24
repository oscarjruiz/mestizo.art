import { cn } from "@/lib/utils"
import type { HTMLAttributes } from "react"

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  as?: "div" | "section" | "article" | "header" | "footer"
}

export function Container({
  as: Component = "div",
  className,
  children,
  ...props
}: ContainerProps) {
  return (
    <Component
      className={cn(
        "mx-auto w-full max-w-[1400px] px-6 sm:px-8 lg:px-12 xl:px-16",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  )
}
