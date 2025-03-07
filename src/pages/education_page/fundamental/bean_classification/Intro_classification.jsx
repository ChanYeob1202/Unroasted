import React from 'react';
import CourseIntroTemplate from '../../shared/CourseIntrotemplate';

const IntroClassification = () => {
  const sections = [
    {
      title: "Arabica vs Robusta",
      description: "Explore the key differences between the two main commercial coffee species, including their growing conditions, physical characteristics, and flavor profiles.",
      to: "/education/coffee-fundamentals/bean-classification/arabica-vs-robusta",
      number: 1
    },
    {
      title: "Popular Varietals",
      description: "Discover the diverse world of coffee varietals, from classic Typica and Bourbon to the exotic Gesha and innovative hybrids.",
      to: "/education/coffee-fundamentals/bean-classification/varietals",
      number: 2
    },
    {
      title: "Bean Grades and Classifications",
      description: "Learn about professional grading systems and classification methods used in the coffee industry worldwide.",
      to: "/education/coffee-fundamentals/bean-classification/grades",
      number: 3
    }
  ];

  return (
    <CourseIntroTemplate
      title="Understanding Coffee Bean Classification"
      subtitle="Discover the genetic blueprint that shapes coffee's incredible diversity"
      description="In the vast and complex world of coffee, understanding bean classification serves as an essential compass for both professionals and enthusiasts. Much like how wine connoisseurs recognize the difference between Cabernet Sauvignon and Pinot Noir, coffee aficionados benefit tremendously from knowing the distinction between Arabica and Robusta, or identifying a Gesha varietal from Ethiopia versus a Bourbon from El Salvador."
      sections={sections}
      closingText="Whether you're a coffee professional looking to deepen your expertise, a home enthusiast wanting to understand what's in your cup, or someone beginning their coffee journey, this course will enhance your appreciation of coffee's incredible diversity."
    />
  );
};

export default IntroClassification;
