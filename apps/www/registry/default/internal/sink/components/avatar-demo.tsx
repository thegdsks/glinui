import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/default/ui/avatar"

export function AvatarDemo() {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/glinui.png" alt="@glinui" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  )
}
