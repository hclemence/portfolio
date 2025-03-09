// app/components/ScrollingLabel.tsx
"use client";
import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function ScrollLabel() {
  const [showLabel, setShowLabel] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowLabel(window.scrollY <= 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (

      <AnimatePresence>
        {showLabel &&
        (<motion.label key="label" exit={{ y: -10 }} className="absolute bottom-0 pb-5 text-center font-inter text-lg flex items-center transition-opacity duration-300 opacity-100">
          Scroll to view experience &nbsp; <ChevronDown />
        </motion.label>)
        }
      </AnimatePresence>
  );
}
