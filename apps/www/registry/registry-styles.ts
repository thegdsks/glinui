export const styles = [
  {
    name: "tailwind",
    label: "Tailwind",
  },
  {
    name: "default",
    label: "Default",
  },
] as const

export type Style = (typeof styles)[number]
