import { DepreciationMethods } from "./_component/DepreciationMethods";
import { PageActions } from "./_component/PageActions";
import { TableOfContents } from "./_component/TableOfContents";


 function page() {
  return (
    <div className="p-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Financial Accounting</h1>
        <h2 className="text-2xl font-semibold text-gray-700">Topic: Depreciation</h2>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-8">
        <div className="lg:sticky lg:top-4">
          <TableOfContents />
        </div>
        <div className="lg:col-span-3">
          <DepreciationMethods />
          <PageActions />
        </div>
      </div>
    </div>
  )
}

export default page