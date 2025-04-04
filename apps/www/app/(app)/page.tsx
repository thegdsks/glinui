import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

import { Announcement } from "@/components/announcement"
import { CardsDemo } from "@/components/cards"
import { ExamplesNav } from "@/components/examples-nav"
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header"
import TechStack from "@/components/sections/TechStack"
import CanvasCursor from "@/components/sections/canvas-cursor"
import Hero from "@/components/sections/hero"
import { Button } from "@/registry/tailwind/ui/button"

const title = "Build your component library"
const description =
  "A set of beautifully-designed, accessible components and a code distribution platform. Works with your favorite frameworks. Open Source. Open Code."

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    images: [
      {
        url: `/og?title=${encodeURIComponent(
          title
        )}&description=${encodeURIComponent(description)}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      {
        url: `/og?title=${encodeURIComponent(
          title
        )}&description=${encodeURIComponent(description)}`,
      },
    ],
  },
}

export default function IndexPage() {
  return (
    <>
      <Hero />

      <CanvasCursor />
      {/* <PageHeader>
        <Announcement />
        <PageHeaderHeading>{title}</PageHeaderHeading>
        <PageHeaderDescription>{description}</PageHeaderDescription>
        <PageActions>
          <Button asChild size="sm" className="rounded-md">
            <Link href="/docs/installation">Get Started</Link>
          </Button>
          <Button asChild size="sm" variant="ghost" className="rounded-md">
            <Link href="/blocks">Browse Blocks</Link>
          </Button>
        </PageActions>
      </PageHeader> */}

      {/* Tech Stack */}
      <section className="container">
        <h2 className="mb-12 text-3xl font-bold tracking-tighter sm:text-4xl">
          Technology Stack
        </h2>

        <TechStack />
      </section>
    </>
  )
}
