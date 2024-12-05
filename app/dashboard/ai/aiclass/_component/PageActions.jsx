import { Download, Eye, ArrowRight } from 'lucide-react'

export function PageActions() {
  return (
    <div className="flex flex-wrap gap-4 justify-center mt-8 pt-8 border-t">
      <button className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-blue-700">
        <Download className="h-4 w-4 mr-2" />
        Download as PDF
      </button>
      
      <button className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200">
        <Eye className="h-4 w-4 mr-2" />
        Preview
      </button>
      
      <button className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200">
        <span>Next</span>
        <ArrowRight className="h-4 w-4 ml-2" />
      </button>
    </div>
  )
}