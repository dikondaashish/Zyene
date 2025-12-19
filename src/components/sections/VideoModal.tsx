"use client";

import { useState, useEffect } from "react";

export default function VideoModal() {
  const [mounted, setMounted] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const openVideo = () => {
    setIsVideoOpen(true);
    document.body.classList.add("modal-open");
  };

  const closeVideo = () => {
    setIsVideoOpen(false);
    document.body.classList.remove("modal-open");
  };

  const videoOpenClass = mounted && isVideoOpen ? "tw-scale-100 tw-opacity-100" : "tw-scale-0 tw-opacity-0";
  const videoContainerClass = mounted && isVideoOpen ? "tw-scale-100" : "tw-scale-0";

  return (
    <div 
      className={`tw-fixed tw-bg-[#000000af] dark:tw-bg-[#80808085] tw-top-0 tw-left-1/2 tw--translate-x-1/2 tw-z-20 tw-transition-opacity
        tw-duration-300 tw-p-2 tw-w-full tw-h-full tw-flex tw-place-content-center tw-place-items-center ${videoOpenClass}`}
      onClick={closeVideo}
    >
      <div 
        className={`tw-max-w-[80vw] max-lg:tw-max-w-full max-lg:tw-w-full tw-transition-transform tw-duration-500 tw-p-6 tw-rounded-xl max-lg:tw-px-2 tw-w-full tw-gap-2 tw-shadow-md 
                    tw-h-[90vh] max-lg:tw-h-auto max-lg:tw-min-h-[400px] tw-bg-white dark:tw-bg-[#16171A] tw-max-h-full ${videoContainerClass}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="tw-w-full tw-flex">
          <button type="button" onClick={closeVideo} className="tw-ml-auto tw-text-xl" title="close">
            <i className="bi bi-x-circle-fill"></i>
          </button>
        </div>
        <div className="tw-flex tw-w-full tw-rounded-xl tw-px-[5%] max-md:tw-px-2 tw-min-h-[300px] tw-max-h-[90%] tw-h-full">
          <div className="tw-relative tw-bg-black tw-min-w-full tw-min-h-full tw-overflow-clip tw-rounded-md">
            {isVideoOpen && (
              <iframe 
                className="tw-absolute tw-top-[50%] tw--translate-y-[50%] tw-left-[50%] tw--translate-x-[50%] tw-w-full tw-h-full" 
                src="https://www.youtube.com/embed/6j4fPVkA3EA?si=llcTrXPRM-MRXDZB&controls=0&rel=0&showinfo=0&autoplay=1&loop=1&mute=1" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
              ></iframe>
            )}
          </div>
        </div>
      </div>  
    </div>
  );
}
