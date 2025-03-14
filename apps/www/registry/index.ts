import { z } from "zod"

import { blocks } from "@/registry/registry-blocks"
import { charts } from "@/registry/registry-charts"
import { examples } from "@/registry/registry-examples"
import { hooks } from "@/registry/registry-hooks"
import { internal } from "@/registry/registry-internal"
import { lib } from "@/registry/registry-lib"
import { themes } from "@/registry/registry-themes"
import { ui } from "@/registry/registry-ui"

import { type Registry } from "../../../packages/glinui/src/registry/schema"

export const registry = {
  name: "glinui",
  homepage: "https://glinui.com",
  items: [
    ...ui,
    ...blocks,
    ...charts,
    ...lib,
    ...hooks,
    ...themes,

    // Internal use only.
    ...internal,
    ...examples,
  ],
} satisfies Registry
