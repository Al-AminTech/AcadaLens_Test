export function DepreciationMethod({ number, title, description, formula, useCase, types }) {
    return (
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-xl font-semibold mb-4">
          {number}. {title}
        </h3>
        
        <div className="space-y-4">
          <div>
            <h4 className="font-medium text-gray-700">Description:</h4>
            <p className="text-gray-600">{description}</p>
          </div>
  
          {formula && (
            <div>
              <h4 className="font-medium text-gray-700">Formula:</h4>
              <p className="text-gray-600">{formula}</p>
            </div>
          )}
  
          {useCase && (
            <div>
              <h4 className="font-medium text-gray-700">Use Case:</h4>
              <p className="text-gray-600">{useCase}</p>
            </div>
          )}
  
          {types && (
            <div>
              <h4 className="font-medium text-gray-700">Types:</h4>
              <ul className="list-disc list-inside text-gray-600 ml-4">
                {Object.entries(types).map(([key, value]) => (
                  <li key={key}>{value}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    )
  }