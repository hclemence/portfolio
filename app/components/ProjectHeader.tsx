
import React from 'react'

const ProjectHeader = ({ title, skills }: { title: string; skills: string[] }) => {
  return (
    <div className="relative container mt-36 lg:mt-56 py-4 mx-auto px-6 lg:px-20 xl:px-36">
      <h1 className="font-editorial_new text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-foreground">
        {title}
      </h1>
      <ul className="flex flex-wrap gap-2 md:gap-5 mt-8 px-1 md:px-4">
        {skills.map((item, index) => (
          <li
            key={index}
            className="text-background bg-foreground py-[2px] px-3 rounded-sm whitespace-nowrap inline-flex text-xs md:text-sm tracking-tighter"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProjectHeader
