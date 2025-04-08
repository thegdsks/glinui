"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Globe, Lightbulb, PlayCircle } from "lucide-react"

import { cn } from "@/lib/utils"
import { Badge } from "@/registry/default/ui/badge"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/registry/default/ui/navigation-menu"
import { Separator } from "@/registry/default/ui/separator"

import { Icons } from "./icons"

export function MainNav() {
  const pathname = usePathname()

  return (
    <div className="mr-4 hidden md:flex">
      <div className="flex items-center gap-1">
        <Link href="https://glinui.com/" className="flex items-center gap-2">
          <Icons.logo className="h-6 w-6" />
          <span className="hidden font-bold lg:inline-block">Glin UI</span>
        </Link>
        <Separator
          className="ml-1 h-4 bg-black opacity-50 dark:bg-blue-100"
          orientation="vertical"
        />
        {/* Navigation Menu */}
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="font-bold text-neutral-900 dark:text-neutral-100">
                GLINR
              </NavigationMenuTrigger>
              <NavigationMenuContent className="overflow-hidden rounded-lg bg-popover p-0  text-sm shadow-xl lg:w-[300px]">
                {/* Projects Section */}
                <div className="p-4">
                  <div className="mb-2 px-1 text-xs font-semibold text-muted-foreground">
                    Sites
                  </div>
                  <ul className="grid gap-2">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          href="https://www.glincker.com/"
                          target="_blank"
                          className="flex items-center justify-between rounded px-3 transition hover:bg-muted"
                        >
                          <div className="flex items-center gap-2">
                            <Link
                              href="https://www.glincker.com/"
                              className="flex items-center gap-2"
                            >
                              <Icons.logo className="h-5 w-5" />
                              <span className="font-bold text-neutral-900 dark:text-neutral-100">
                                GLINR
                              </span>
                            </Link>
                            <Separator
                              className=" h-4 bg-border dark:bg-border/100"
                              orientation="vertical"
                            />
                            <span className="hidden font-bold lg:inline-block">
                              Glincker
                            </span>
                          </div>
                          {/* <span className="text-muted-foreground text-xs">
                            Design system
                          </span> */}
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          href="https://www.glincker.com/"
                          target="_blank"
                          className="flex items-center justify-between rounded px-3 transition hover:bg-muted"
                        >
                          <div className="flex items-center gap-2">
                            <Link
                              href="https://typeweaver.com/"
                              className="flex items-center gap-2"
                            >
                              <Icons.logo className="h-5 w-5" />
                              <span className="font-bold text-neutral-900 dark:text-neutral-100">
                                GLINR
                              </span>
                            </Link>
                            <Separator
                              className="h-4 bg-border dark:bg-border/100"
                              orientation="vertical"
                            />
                            <span className="hidden font-bold lg:inline-block">
                              Typeweaver
                            </span>
                          </div>
                          <Badge variant="beta" className="text-[10px]">
                            Beta
                          </Badge>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </div>

                {/* Divider */}
                <div className="h-[1px] w-full bg-border" />

                {/* Others Section with bg-muted */}
                <div className="bg-muted p-4">
                  <div className="mb-2 px-1 text-xs font-semibold text-muted-foreground">
                    Others
                  </div>
                  <ul className="grid gap-2">
                    <li>
                      <NavigationMenuLink asChild>
                        <span className="flex cursor-not-allowed items-center gap-2 rounded px-3 opacity-60">
                          <span className="flex items-center gap-2">
                            <Globe className="h-4 w-4 text-muted-foreground" />
                            Showcase
                          </span>
                          <Badge variant="shine" className="text-[10px]">
                            Coming Soon
                          </Badge>
                        </span>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <span className="flex cursor-not-allowed items-center gap-2 rounded px-3 opacity-60">
                          <span className="flex items-center gap-2">
                            <Lightbulb className="h-4 w-4 text-muted-foreground" />
                            Feature Request
                          </span>
                          <Badge variant="shine" className="text-[10px]">
                            Coming Soon
                          </Badge>
                        </span>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <span className="flex cursor-not-allowed items-center gap-2 rounded px-3 opacity-60">
                          <span className="flex items-center gap-2">
                            <PlayCircle className="h-4 w-4 text-muted-foreground" />
                            Playground
                          </span>
                          <Badge variant="shine" className="text-[10px]">
                            Coming Soon
                          </Badge>
                        </span>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <nav className="flex items-center gap-4 pl-12 text-sm xl:gap-6">
        <Link
          href="/installation"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/docs/installation"
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
            pathname?.startsWith("/docs/components") &&
              !pathname?.startsWith("/docs/component/chart")
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
