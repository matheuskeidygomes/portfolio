import { useState, useRef, useEffect } from 'react';

export default function Carrousel({ images }: { images: string[] }) {
  const [currentImage, setCurrentImage] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const thumbnailsRef = useRef<HTMLDivElement>(null);

  // Handle thumbnail scrolling when current image changes
  useEffect(() => {
    if (thumbnailsRef.current) {
      const selectedThumb = thumbnailsRef.current.children[currentImage] as HTMLElement;
      if (selectedThumb) {
        selectedThumb.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center'
        });
      }
    }
  }, [currentImage]);

  // For main image swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 100) {
      // Swipe left
      setCurrentImage(prev => (prev === images.length - 1 ? 0 : prev + 1));
    }

    if (touchStart - touchEnd < -100) {
      // Swipe right
      setCurrentImage(prev => (prev === 0 ? images.length - 1 : prev - 1));
    }
  };

  const handleNext = () => {
    setCurrentImage(prev => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentImage(prev => (prev === 0 ? images.length - 1 : prev - 1));
  };

  // Calculate width to prevent jumping during transitions
  const containerStyle = {
    width: '100%',
    position: 'relative' as const,
  };

  return (
    <div className="flex flex-col gap-3 w-full">
      {/* Main image section with navigation controls */}
      <div
        className="relative overflow-hidden rounded-lg shadow-lg border border-gray-800"
        style={containerStyle}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${currentImage * 100}%)` }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full object-cover flex-shrink-0"
            />
          ))}
        </div>

        {/* Navigation arrows */}
        <button
          onClick={handlePrev}
          className="absolute left-2 top-1/2 cursor-pointer -translate-y-1/2 bg-black/30 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
          aria-label="Previous image"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={handleNext}
          className="absolute right-2 top-1/2 cursor-pointer -translate-y-1/2 bg-black/30 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
          aria-label="Next image"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Image counter */}
        <div className="absolute bottom-2 right-2 bg-black/30 text-white px-2 py-1 rounded-lg text-sm">
          {currentImage + 1} / {images.length}
        </div>
      </div>

      {/* Thumbnails section - horizontally scrollable */}
      <div className="relative">
        <div
          ref={thumbnailsRef}
          className="flex overflow-x-auto overflow-y-hidden gap-2 p-1 snap-x scrollbar-thin scrollbar"
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className={`h-16 w-20 flex-shrink-0 rounded-md border-2 cursor-pointer snap-center object-cover transition-all duration-300 hover:opacity-100 shadow-lg ${currentImage === index
                  ? 'border-blue-400 opacity-100 scale-105'
                  : 'border-gray-800 opacity-70 hover:scale-105'
                }`}
              onClick={() => setCurrentImage(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
