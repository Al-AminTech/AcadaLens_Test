import { depreciationData } from './Data'
import { DepreciationMethod } from './DepreciationMethod'


export function DepreciationMethods() {
  return (
    <div className="space-y-8">
      {depreciationData.map((method, index) => (
        <DepreciationMethod
          key={index}
          number={index + 1}
          title={method.title}
          description={method.description}
          formula={method.formula}
          useCase={method.useCase}
          types={method.types}
        />
      ))}
    </div>
  )
}