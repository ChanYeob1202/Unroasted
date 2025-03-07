import React from 'react'
import educationSeries from '../data/educationSeries'
import { Link } from 'react-router-dom'
import PaymentButton from '../ui/PaymentButton'

export default function Education() {
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-warmGray-50 via-warmGray-100 to-warmGray-200 py-20 px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Introduction Section */}
        <div className="text-center mb-32 text-coffee space-y-6">
            <h1 className="text-4xl md:text-5xl font-serif font-light tracking-wider mb-6 animate-fade-in">
              The Art of Coffee
            </h1>
            <div className="w-24 h-[1px] bg-coffee/30 mx-auto"></div>
            <h2 className="text-2xl font-light tracking-widest text-coffee/80 italic">
              A Journey of Discovery
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-loose font-light">
                Explore the intricate world of coffee through our curated collection of knowledge. Each lesson brings you closer to mastering the perfect brew.
            </p>
        </div>
      </div>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {educationSeries.map((series) => (
                <div 
                  key={series.id} 
                  className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-10 
                    shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] 
                    hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.2)] 
                    transition-all duration-500 ease-out
                    border border-warmGray-100
                    hover:translate-y-[-4px]
                    h-full flex flex-col"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-coffee/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500"></div>
                    <div className="flex-grow">
                        <h3 className="text-2xl font-light tracking-wide mb-4 group-hover:text-coffee transition-colors duration-300">
                          {series.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed font-light">
                          {series.description}
                        </p>
                        <Link to={`/education/${series.id}`} className="block mb-6">
                          <div className="mt-6 flex items-center text-coffee/60 group-hover:text-coffee transition-colors duration-300">
                            <span className="text-sm tracking-wider">Explore Series</span>
                            <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          </div>
                        </Link>
                    </div>
                    <div className="mt-6 flex justify-between items-center border-t pt-4">
                      <div className="text-md font-light text-coffee">
                        ${series.price}
                      </div>
                      <PaymentButton 
                        courseId={series.id}
                        price={series.price}
                        title={series.title}
                        className="px-6 py-2 bg-coffee text-white font-light text-sm rounded-lg hover:bg-coffee/90 transition-colors duration-300"
                      />
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
}


