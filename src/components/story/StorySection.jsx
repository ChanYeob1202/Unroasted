import React from 'react'
import { SectionDivider } from '../../ui/SectionDivider'

export function StorySection({ title, paragraphs }) {
    return (
        <>
            {title && (
                <>
                    <SectionDivider />
                    <h3 className="text-2xl font-serif text-coffee text-center mb-6">
                        {title}
                    </h3>
                </>
            )}
            {paragraphs.map((paragraph, index) => (
                <p key={index} className="text-lg font-light leading-relaxed">
                    {paragraph}
                </p>
            ))}
        </>
    )
} 