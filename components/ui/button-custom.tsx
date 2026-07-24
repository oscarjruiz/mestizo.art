import type { ButtonHTMLAttributes } from "react"
import { cn } from "@/lib/utils"

type ButtonVariant = "primary" | "outline" | "ghost" | "link"
type ButtonSize = "default" | "lg" | "sm"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  asLink?: boolean
  href?: string
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-mestizo-olive text-white hover:bg-mestizo-forest active:bg-mestizo-forest shadow-sm",
  outline:
    "border-2 border-mestizo-olive text-mestizo-olive bg-transparent hover:bg-mestizo-olive hover:text-white active:bg-mestizo-forest active:border-mestizo-forest",
  ghost:
    "text-mestizo-text hover:bg-mestizo-beige/50 active:bg-mestizo-beige",
  link: "text-mestizo-olive underline-offset-4 hover:underline p-0 h-auto",
}

const sizeStyles: Record<ButtonSize, string> = {
  default: "h-11 px-6 text-sm",
  lg: "h-12 px-8 text-base",
  sm: "h-9 px-4 text-xs",
}

export function Button({
  variant = "primary",
  size = "default",
  asLink = false,
  href,
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-lg font-sans font-semibold tracking-[0.03em] uppercase transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mestizo-olive focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
    variantStyles[variant],
    sizeStyles[size],
    className
  )

  if (asLink && href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
