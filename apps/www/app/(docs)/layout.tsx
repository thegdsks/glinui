import { docsConfig } from "@/config/docs"
import { DocsNav } from "@/components/docs-nav"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div data-wrapper="" className="border-grid flex flex-1 flex-col">
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <div className="container-wrapper">
          <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
            <aside className="border-grid fixed top-14 z-30 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 border-r md:sticky md:block">
              <div className="no-scrollbar h-full overflow-auto py-6 pr-4 lg:py-8">
                <DocsNav config={docsConfig} />
              </div>
            </aside>
            {children}
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
