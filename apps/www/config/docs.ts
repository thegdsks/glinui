import { MainNavItem, SidebarNavItem } from "types/nav"

export interface DocsConfig {
  mainNav: MainNavItem[]
  sidebarNav: SidebarNavItem[]
  chartsNav: SidebarNavItem[]
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Documentation",
      href: "/",
    },
    {
      title: "Components",
      href: "/components/accordion",
    },
    {
      title: "Blocks",
      href: "/blocks",
    },
    {
      title: "Charts",
      href: "/charts",
    },
    {
      title: "Themes",
      href: "/themes",
    },
    {
      title: "Colors",
      href: "/colors",
    },
  ],
  sidebarNav: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          href: "/",
          items: [],
        },
        {
          title: "Installation",
          href: "/installation",
          items: [],
        },
        {
          title: "components.json",
          href: "/components-json",
          items: [],
        },
        {
          title: "Theming",
          href: "/theming",
          items: [],
        },
        {
          title: "Dark mode",
          href: "/dark-mode",
          items: [],
        },
        {
          title: "CLI",
          href: "/cli",
          items: [],
        },
        {
          title: "Monorepo",
          href: "/monorepo",
          items: [],
        },
        {
          title: "Tailwind v4",
          href: "/tailwind-v4",
          items: [],
          label: "New",
        },
        {
          title: "Next.js 15 + React 19",
          href: "/react-19",
          items: [],
        },
        {
          title: "Typography",
          href: "/components/typography",
          items: [],
        },
        {
          title: "Open in v0",
          href: "/v0",
          items: [],
        },
        {
          title: "Blocks",
          href: "/blocks",
          items: [],
        },
        {
          title: "Figma",
          href: "/figma",
          items: [],
        },
        {
          title: "Changelog",
          href: "/changelog",
          items: [],
        },
      ],
    },
    {
      title: "Installation",
      items: [
        {
          title: "Next.js",
          href: "/installation/next",
          items: [],
        },
        {
          title: "Vite",
          href: "/installation/vite",
          items: [],
        },
        {
          title: "Laravel",
          href: "/installation/laravel",
          items: [],
        },
        {
          title: "React Router",
          href: "/installation/react-router",
          items: [],
          label: "New",
        },
        {
          title: "Remix",
          href: "/installation/remix",
          items: [],
        },
        {
          title: "Astro",
          href: "/installation/astro",
          items: [],
        },
        {
          title: "Tanstack Start",
          href: "/installation/tanstack",
          items: [],
          label: "New",
        },
        {
          title: "Manual",
          href: "/installation/manual",
          items: [],
        },
      ],
    },
    {
      title: "Components",
      items: [
        {
          title: "Accordion",
          href: "/components/accordion",
          items: [],
        },
        {
          title: "Alert",
          href: "/components/alert",
          items: [],
        },
        {
          title: "Alert Dialog",
          href: "/components/alert-dialog",
          items: [],
        },
        {
          title: "Aspect Ratio",
          href: "/components/aspect-ratio",
          items: [],
        },
        {
          title: "Avatar",
          href: "/components/avatar",
          items: [],
        },
        {
          title: "Badge",
          href: "/components/badge",
          items: [],
        },
        {
          title: "Breadcrumb",
          href: "/components/breadcrumb",
          items: [],
        },
        {
          title: "Button",
          href: "/components/button",
          items: [],
        },
        {
          title: "Calendar",
          href: "/components/calendar",
          items: [],
        },
        {
          title: "Card",
          href: "/components/card",
          items: [],
        },
        {
          title: "Carousel",
          href: "/components/carousel",
          items: [],
        },
        {
          title: "Chart",
          href: "/components/chart",
          items: [],
        },
        {
          title: "Checkbox",
          href: "/components/checkbox",
          items: [],
        },
        {
          title: "Collapsible",
          href: "/components/collapsible",
          items: [],
        },
        {
          title: "Combobox",
          href: "/components/combobox",
          items: [],
        },
        {
          title: "Command",
          href: "/components/command",
          items: [],
        },
        {
          title: "Context Menu",
          href: "/components/context-menu",
          items: [],
        },
        {
          title: "Data Table",
          href: "/components/data-table",
          items: [],
        },
        {
          title: "Date Picker",
          href: "/components/date-picker",
          items: [],
        },
        {
          title: "Dialog",
          href: "/components/dialog",
          items: [],
        },
        {
          title: "Drawer",
          href: "/components/drawer",
          items: [],
        },
        {
          title: "Dropdown Menu",
          href: "/components/dropdown-menu",
          items: [],
        },
        {
          title: "Form",
          href: "/components/form",
          items: [],
        },
        {
          title: "Hover Card",
          href: "/components/hover-card",
          items: [],
        },
        {
          title: "Input",
          href: "/components/input",
          items: [],
        },
        {
          title: "Input OTP",
          href: "/components/input-otp",
          items: [],
        },
        {
          title: "Label",
          href: "/components/label",
          items: [],
        },
        {
          title: "Menubar",
          href: "/components/menubar",
          items: [],
        },
        {
          title: "Navigation Menu",
          href: "/components/navigation-menu",
          items: [],
        },
        {
          title: "Pagination",
          href: "/components/pagination",
          items: [],
        },
        {
          title: "Popover",
          href: "/components/popover",
          items: [],
        },
        {
          title: "Progress",
          href: "/components/progress",
          items: [],
        },
        {
          title: "Radio Group",
          href: "/components/radio-group",
          items: [],
        },
        {
          title: "Resizable",
          href: "/components/resizable",
          items: [],
        },
        {
          title: "Scroll Area",
          href: "/components/scroll-area",
          items: [],
        },
        {
          title: "Select",
          href: "/components/select",
          items: [],
        },
        {
          title: "Separator",
          href: "/components/separator",
          items: [],
        },
        {
          title: "Sheet",
          href: "/components/sheet",
          items: [],
        },
        {
          title: "Sidebar",
          href: "/components/sidebar",
          items: [],
        },
        {
          title: "Skeleton",
          href: "/components/skeleton",
          items: [],
        },
        {
          title: "Slider",
          href: "/components/slider",
          items: [],
        },
        {
          title: "Sonner",
          href: "/components/sonner",
          items: [],
        },
        {
          title: "Switch",
          href: "/components/switch",
          items: [],
        },
        {
          title: "Table",
          href: "/components/table",
          items: [],
        },
        {
          title: "Tabs",
          href: "/components/tabs",
          items: [],
        },
        {
          title: "Textarea",
          href: "/components/textarea",
          items: [],
        },
        {
          title: "Toast",
          href: "/components/toast",
          items: [],
        },
        {
          title: "Toggle",
          href: "/components/toggle",
          items: [],
        },
        {
          title: "Toggle Group",
          href: "/components/toggle-group",
          items: [],
        },
        {
          title: "Tooltip",
          href: "/components/tooltip",
          items: [],
        },
      ],
    },
    {
      title: "Registry",
      label: "New",
      items: [
        {
          title: "Introduction",
          href: "/registry",
          items: [],
        },
        {
          title: "Getting Started",
          href: "/registry/getting-started",
          items: [],
        },
        {
          title: "Open in v0",
          href: "/registry/open-in-v0",
          items: [],
        },
        {
          title: "FAQ",
          href: "/registry/faq",
          items: [],
        },
        {
          title: "registry.json",
          href: "/registry/registry-json",
          items: [],
        },
        {
          title: "registry-item.json",
          href: "/registry/registry-item-json",
          items: [],
        },
      ],
    },
  ],
  chartsNav: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          href: "/charts",
          items: [],
        },
        {
          title: "Installation",
          href: "/charts/installation",
          items: [],
        },
        {
          title: "Theming",
          href: "/charts/theming",
          items: [],
        },
      ],
    },
    {
      title: "Charts",
      items: [
        {
          title: "Area Chart",
          href: "/charts/area",
          items: [],
        },
        {
          title: "Bar Chart",
          href: "/charts/bar",
          items: [],
        },
        {
          title: "Line Chart",
          href: "/charts/line",
          items: [],
        },
        {
          title: "Pie Chart",
          href: "/charts/pie",
          items: [],
        },
        {
          title: "Radar Chart",
          href: "/charts/radar",
          items: [],
        },
        {
          title: "Radial Chart",
          href: "/charts/radial",
          items: [],
        },
      ],
    },
    {
      title: "Components",
      items: [
        {
          title: "Tooltip",
          href: "/charts/tooltip",
          items: [],
        },
        {
          title: "Legend",
          href: "/charts/legend",
          items: [],
        },
      ],
    },
  ],
}
