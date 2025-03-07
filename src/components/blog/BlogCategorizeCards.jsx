export default function BlogCategorizeCards({ link, src, title, description, readTime, className }) {
  return (
    <a href={link} className={`block ${className}`}>
      <div className="relative">
        <img 
          src={src} 
          alt={title} 
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <span className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm">
          {readTime}
        </span>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <span className="text-coffee-dark font-medium">Read More →</span>
      </div>
    </a>
  );
}