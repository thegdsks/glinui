"use server"

import { z } from "zod"

import { Style } from "@/registry/registry-styles"

import { registryItemSchema } from "../../../packages/glinui/src/registry/schema"

export async function getAllBlockIds(
  types: z.infer<typeof registryItemSchema>["type"][] = [
    "registry:block",
    "registry:internal",
  ],
  categories: string[] = [],
  style: Style["name"] = "tailwind"
): Promise<string[]> {
  const { Index } = await import("@/__registry__")
  const index = z.record(registryItemSchema).parse(Index[style])

  return Object.values(index)
    .filter(
      (block) =>
        types.includes(block.type) &&
        (categories.length === 0 ||
          block.categories?.some((category) =>
            categories.includes(category)
          )) &&
        !block.name.startsWith("chart-")
    )
    .map((block) => block.name)
}
