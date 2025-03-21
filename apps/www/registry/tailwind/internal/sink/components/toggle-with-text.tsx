import { Italic } from "lucide-react"

import { Toggle } from "@/registry/tailwind/ui/toggle"

export function ToggleWithText() {
  return (
    <Toggle aria-label="Toggle italic">
      <Italic />
      Italic
    </Toggle>
  )
}
