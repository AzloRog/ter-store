"use client";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React, { useEffect } from "react";

interface Props {
  images: StaticImport[];
}
const Carousel = ({ images }: Props) => {
  const [currentImage, setCurrentImage] = React.useState<StaticImport>(
    images[0]
  );

  return (
    <div className="relative min-h-[360px] p-8 flex justify-center items-center bg-gradient-to-tr from-gray-300 to-gray-100">
      <Image src={currentImage} alt="the image" width={80} height={80} />
      <div className="absolute bottom-4 flex gap-1">
        {images.map((_, index) => (
          <span
            key={index}
            className="carousel-btn"
            onClick={() => setCurrentImage(images[index])}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
