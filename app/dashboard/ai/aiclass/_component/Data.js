export const depreciationData = [
    {
      title: 'Straight-Line Depreciation',
      description: 'The most straightforward and widely used method. It evenly spreads the cost of the asset over its useful life.',
      formula: 'Depreciation Expense = Cost of Asset – Residual Value / Useful Life',
      useCase: 'Suitable for assets with consistent usage over time, such as buildings or furniture.'
    },
    {
      title: 'Declining Balance Depreciation',
      description: 'An accelerated depreciation method that writes off more expense in the earlier years of the asset\'s life.',
      types: {
        ddb: 'Double Declining Balance (DDB): Depreciates at twice the straight-line rate. Depreciation Expense = 2 × Straight-Line Rate × Book Value at Beginning of Year'
      },
      useCase: 'Suitable for assets that lose value quickly, such as technology or vehicles.'
    },
    {
      title: 'Units of Production Depreciation',
      description: 'Depreciation is based on the asset\'s usage, output, or productivity rather than time.',
      formula: 'Depreciation Expense = (Cost of Asset – Residual Value / Total Estimated Output) × Actual Output for the Year',
      useCase: 'Ideal for manufacturing equipment or machinery with varying production levels.'
    },
    {
      title: 'Sum-of-the-Years-Digits (SYD) Depreciation',
      description: 'An accelerated method that applies a decreasing fraction of the asset\'s cost over its useful life.',
      formula: 'Depreciation Expense=Remaining Life/Sum of Years Digits × (Cost of Asset – Residual Value)',
      useCase: 'Used when an asset has higher utility in its earlier years.'
    },
    {
      title: 'Depletion Method',
      description: 'Used for natural resources like oil, minerals, or timber. Depreciation is based on the extraction or consumption of the resource.',
      formula: 'Depreciation Expense=(Cost of Resource – Residual Value Total Estimated Units) × Units Extracted',
      useCase: 'Specifically designed for natural resource accounting.'
    }
  ]