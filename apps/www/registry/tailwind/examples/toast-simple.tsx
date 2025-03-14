"use client"

import { useToast } from "@/registry/tailwind/hooks/use-toast"
import { Button } from "@/registry/tailwind/ui/button"

export default function ToastSimple() {
  const { toast } = useToast()

  return (
    <Button
      variant="outline"
      onClick={() => {
        toast({
          description: "Your message has been sent.",
        })
      }}
    >
      Show Toast
    </Button>
  )
}
