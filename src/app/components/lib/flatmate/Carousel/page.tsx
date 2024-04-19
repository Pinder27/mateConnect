"use client"


import { GetImagesUrl } from "@/app/actions/S3";
        import React, { useEffect, useState } from "react";

         function Page({flatmateID}:{flatmateID:number}){ 

            const [imageUrls, setImageUrls] = useState<string[]>(["/Image1.jpg"]);

            useEffect(()=>{
                GetImagesUrl(flatmateID).then((res)=>{
                    setImageUrls(res as string[])
                })
            },[])
           
           
            const [currentSlide, setCurrentSlide] = useState(0);

            const goToSlide = (index:number) => {
                setCurrentSlide(index);
            };
        
            const goToPrevSlide = () => {
                setCurrentSlide((prevSlide) => (prevSlide === 0 ? imageUrls.length - 1 : prevSlide - 1));
            };
        
            const goToNextSlide = () => {
                setCurrentSlide((prevSlide) => (prevSlide === imageUrls.length - 1 ? 0 : prevSlide + 1));
            };
        
            return (
                
                <div className="relative w-full bg-gray-200 h-full">
                    {/* Carousel wrapper */}
                    <div className="relative overflow-hidden rounded-lg p-3 h-full ">
                        {/* Map over the images array and render each image */}
                        <div className={`h-full w-auto ease-in-out duration-700`}>
                                <img src={imageUrls[currentSlide]}  className="mx-auto block object-cover w-auto h-full"  alt={`Slide`} />
                            </div>
                    </div>
                    {/* Slider indicators */}
                    <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2">
                        {imageUrls.map((_, index) => (
                            <button key={index} type="button" className={`me-1 w-1 h-1 rounded-full ${index === currentSlide ? 'bg-gray-700' : 'bg-gray-300'}`} aria-current={index === currentSlide ? 'true' : 'false'} aria-label={`Slide ${index + 1}`} onClick={() => goToSlide(index)}></button>
                        ))}
                    </div>
                    {/* Slider controls */}
                    <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" onClick={goToPrevSlide}>
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
                            </svg>
                            <span className="sr-only">Previous</span>
                        </span>
                    </button>
                    <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" onClick={goToNextSlide}>
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                            </svg>
                            <span className="sr-only">Next</span>
                        </span>
                    </button>
                </div>
                
            );
        }
    
        export default Page;

