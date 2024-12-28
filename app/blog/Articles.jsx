import { ArticleCards } from "./Card";


export default function ArticlesPage() {
  return (
    <div className="container px-4 py-8 mx-auto">
      <section className="space-y-8">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold tracking-tight">Feature Articles</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <ArticleCards featured />
            <ArticleCards featured />
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold tracking-tight">Articles curated for you</h2>
            <a href="#" className="text-sm text-blue-600 hover:underline dark:text-blue-400">
              View more
            </a>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 12 }).map((_, i) => (
              <ArticleCards key={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

