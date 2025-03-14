import { Italic } from "lucide-react"

import { Toggle } from "@/registry/tailwind/ui/toggle"

export default function ToggleSm() {
  return (
    <Toggle size="sm" aria-label="Toggle italic">
      <Italic />
    </Toggle>
  )
}
