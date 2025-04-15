import React from 'react'

export default function FilterTabs({ items, selectedItem, onItemSelect, variant = 'underline' }) {
  const variants = {
    underline: {
      container: "flex flex-wrap justify-center gap-4 mb-12",
      button: (isSelected) => `
        px-4 py-2
        text-sm
        transition-colors
        ${isSelected 
          ? 'text-coffee-dark border-b-2 border-coffee-dark font-medium' 
          : 'text-gray-500 hover:text-coffee-dark border-b-2 border-transparent hover:border-coffee-dark/30'}
      `
    },
    pill: {
      container: "flex flex-wrap justify-center gap-4 mb-12",
      button: (isSelected) => `
        px-4 py-2
        text-sm
        rounded-full
        transition-colors
        ${isSelected 
          ? 'bg-coffee text-white' 
          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}
      `
    },
    tab: {
      container: "flex flex-wrap gap-2 mb-12",
      button: (isSelected) => `
        px-4 py-2
        text-sm
        rounded-t-lg
        transition-colors
        ${isSelected 
          ? 'bg-white text-coffee-dark border-t border-x border-gray-200' 
          : 'bg-gray-50 text-gray-600 hover:bg-gray-100'}
      `
    }
  };

  const style = variants[variant];

  return (
    <div className={style.container}>
      {items.map((item) => (
        <button
          key={item.id || item}
          onClick={() => onItemSelect(item)}
          className={style.button(selectedItem === (item.id || item))}
        >
          {item.label || (typeof item === 'string' 
            ? item.charAt(0).toUpperCase() + item.slice(1)
            : item)}
        </button>
      ))}
    </div>
  )
}