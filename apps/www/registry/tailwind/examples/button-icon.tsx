import { ChevronRight } from "lucide-react"

import { Button } from "@/registry/tailwind/ui/button"

export default function ButtonIcon() {
  return (
    <Button variant="outline" size="icon">
      <ChevronRight />
    </Button>
  )
}
