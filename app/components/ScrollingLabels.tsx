"use client";
import React from 'react'
import { useEffect, useRef } from 'react';

interface ScrollingLabelsProps {
  elements: string[];
}

const ScrollingLabels: React.FC<ScrollingLabelsProps> = ({elements}) => {
  const labelsRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (labelsRef.current) {

      const ul = labelsRef.current;

      const clone = ul.cloneNode(true) as HTMLUListElement;;
      ul.insertAdjacentElement('afterend', clone);

      clone.setAttribute('aria-hidden', 'true');
    }
  }, []);
  
  return (
    <div className="w-full flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
          <ul ref={labelsRef} className="flex items-center py-16 animate-infinite-scroll [&_li]:mx-8">
          {elements.map((item, index) => (
          <li key={index} className="text-background bg-foreground py-1 px-4 rounded-lg whitespace-nowrap inline-flex text-sm">
            {item}
          </li>
        ))}
          </ul>
        </div>
  )
}

export default ScrollingLabels