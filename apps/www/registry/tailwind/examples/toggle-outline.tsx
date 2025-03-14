import { Italic } from "lucide-react"

import { Toggle } from "@/registry/tailwind/ui/toggle"

export default function ToggleOutline() {
  return (
    <Toggle variant="outline" aria-label="Toggle italic">
      <Italic />
    </Toggle>
  )
}
