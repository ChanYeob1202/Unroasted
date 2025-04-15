import React from 'react'
import FilterTabs from '../../ui/FilterTabs'

export default function BlogFilter({ categories, selectedFilter, onFilterSelect }) {
  return (
    <FilterTabs
      items={categories}
      selectedItem={selectedFilter}
      onItemSelect={onFilterSelect}
      variant="underline"
    />
  )
}
