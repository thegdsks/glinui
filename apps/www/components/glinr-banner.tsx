import Link from "next/link"

import { cn } from "@/lib/utils"
import { Button } from "@/registry/tailwind/ui/button"

export function GlinrBanner({ className }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "relative isolate overflow-hidden rounded-2xl border bg-white px-4 py-10 shadow-sm dark:bg-black sm:flex sm:items-center sm:justify-between sm:px-8",
        className
      )}
    >
      {/* Animated Gradient Background */}
      <div className="animate-spin-slow pointer-events-none absolute right-[-3rem] top-[-3rem] h-40 w-40 rounded-full bg-gradient-to-tr from-red-500 via-pink-500 to-orange-500 opacity-30 blur-2xl sm:right-[-4rem] sm:top-[-4rem]" />

      <div className="relative z-10 max-w-xl">
        <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-xl">
          Keep it clean. Keep it safe.{" "}
          <span className="text-primary">Glin Profanity</span>.
        </h3>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
          An open-source profanity filter for modern apps — lightweight,
          extensible, and built for developers who care about content safety.
        </p>
        <div className="mt-4 flex gap-3">
          <Link
            href="https://www.npmjs.com/packa
            ge/glin-profanity"
            target="_blank"
            rel="noreferrer"
          >
            <Button size="sm">Get Started</Button>
          </Link>
          <Link
            href="https://github.com/glincker/glin-profanity"
            target="_blank"
            rel="noreferrer"
          >
            <Button variant="outline" size="sm">
              GitHub Repo
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
