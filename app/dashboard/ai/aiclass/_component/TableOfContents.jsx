export function TableOfContents() {
    const topics = [
      'Introduction',
      'Advantages of depreciation',
      'Disadvantages of depreciation',
      'Types of depreciation',
      'Methods of calculating depreciation'
    ]
  
    return (
      <nav className="bg-gray-50 p-4 rounded-lg">
        <h3 className="font-semibold mb-4">Contents</h3>
        <ol className="space-y-2">
          {topics.map((topic, index) => (
            <li key={index} className="text-sm">
              <a href={`#${topic.toLowerCase().replace(/\s+/g, '-')}`} 
                 className="text-blue-600 hover:underline">
                {index + 1}. {topic}
              </a>
            </li>
          ))}
        </ol>
      </nav>
    )
  }