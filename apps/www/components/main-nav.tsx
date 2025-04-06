"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"

export function MainNav() {
  const pathname = usePathname()
  console.log("pathname", pathname)
  return (
    <div className="mr-4 hidden md:flex">
      <Link
        href="https://glinui.com/"
        className="mr-4 flex items-center gap-2 lg:mr-6"
      >
        <Icons.logo className="h-6 w-6" />
        <span className="hidden font-bold lg:inline-block">
          {siteConfig.name}
        </span>
      </Link>
      <nav className="flex items-center gap-4 text-sm xl:gap-6">
        <Link
          href="/installation"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/installation"
              ? "text-foreground"
              : "text-foreground/80"
          )}
        >
          Docs
        </Link>
        <Link
          href="/components"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/components") &&
              !pathname?.startsWith("/component/chart")
              ? "text-foreground"
              : "text-foreground/80"
          )}
        >
          Components
        </Link>
        <Link
          href="https://www.glinui.com/colors"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/colors")
              ? "text-foreground"
              : "text-foreground/80"
          )}
        >
          Colors
        </Link>
      </nav>
    </div>
  )
}
