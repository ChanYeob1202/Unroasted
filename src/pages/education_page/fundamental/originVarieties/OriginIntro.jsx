import React from 'react'
import CourseIntroTemplate from '../../shared/CourseIntrotemplate'    
export default function OriginIntro() {
  const sections = [
    {
      title: "Coffee Origins & Varieties",
      description: "Learn about the biology of the coffee plant, from its flowering cycle to fruit development. Discover how different species like Arabica and Robusta create distinctive flavor experiences.",
      to: "/education/coffee-fundamentals/origins&varieties/coffee-plant-biology-cultivation",
      number: 1
    },
    {
      title: "The Processing Journey",
      description: "Follow the transformation of coffee from fruit to exportable bean. Explore the anatomy of coffee cherries and how processing techniques shape coffee's flavor profile.",
      to: "/education/coffee-fundamentals/origins&varieties/coffee-cherry-to-bean",
      number: 2
    },
    {
      title: "Altitude & Climate Impact",
      description: "Understand how environmental factors create coffee's unique regional characteristics and what challenges climate change presents for production.",
      to: "/education/coffee-fundamentals/origins&varieties/the-impact-of-altitude-and-climate",
      number: 3
    }
  ]

  return (
    <CourseIntroTemplate
      title="The Art & Science of Coffee Origins"
      subtitle="Discover the fascinating journey of coffee from seed to cup in our three-part exploration of coffee's origins and growth"
      description="Coffee is more than just a beverage—it's the product of remarkable agricultural artistry, specific environmental conditions, and careful processing. In this foundational section of our Coffee Fundamentals Series, we take you deep into the world of coffee cultivation and how it reaches your cup."
      sections={sections}
      closingText="Whether you're a casual coffee drinker curious about what's in your cup or an aspiring coffee professional looking to deepen your knowledge, these articles provide the essential foundation for understanding coffee."
    />
  )
}
