import { DepreciationMethods } from "./_component/DepreciationMethods";
import { PageActions } from "./_component/PageActions";
import { TableOfContents } from "./_component/TableOfContents";


 function page() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8 ml-5">
        <h1 className="text-3xl font-bold mb-2">Financial Accounting</h1>
        <h2 className="text-2xl font-semibold text-gray-700">Topic: Depreciation</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <TableOfContents />
        <div className="md:col-span-3">
          <DepreciationMethods />
          <PageActions />
        </div>
      </div>
    </div>
  )
}

export default page