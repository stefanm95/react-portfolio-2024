import React, {useRef, useEffect} from 'react';
import {Image } from './LazyImage.styles';


const LazyImage = ({ src, alt }) => {
    const imageRef = useRef();
  
    useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.src = src;
            observer.unobserve(entry.target);
          }
        });
      });
      const imgRef = imageRef.current;
  
      observer.observe(imgRef);
  
      return () => {
        if (imgRef) {
          observer.unobserve(imgRef);
        }
      };
    }, [src]);
  
    return <Image ref={imageRef} alt={alt} />;
  };


export default LazyImage;