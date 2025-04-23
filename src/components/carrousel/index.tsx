import { useState } from 'react';

export default function Carrousel({ images }: { images: string[] }) {
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <div className="flex flex-col gap-3 w-full h-full">
      <img src={images[currentImage]} className="w-full rounded-lg border-1 shadow-lg border-gray-800" />

    <div className="flex flex-row gap-3">
      {images.map((image, index) => (
        <img 
          src={image} 
          className="w-[20%] rounded-lg border-1 shadow-lg border-gray-800 cursor-pointer hover:scale-103 transition-all duration-300" 
          onClick={() => setCurrentImage(index)}
        />
      ))}
    </div>
  </div>
  )
}
