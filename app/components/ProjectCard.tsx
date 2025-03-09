import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'
import clsx from 'clsx'

interface ProjectCardProps {
  imageSrc?: string;
  title: string;
  description: string;
  buttonText: string;
  link: string
}

const ProjectCard : React.FC<ProjectCardProps> = ({ imageSrc, title, description, buttonText = "Read more", link = "" }) => {
  return (
    <Link href={link} className="relative flex flex-col bg-background2 p-5 lg:p-7 xl:p-10 rounded-3xl w-[300px] h-[330px] lg:h-[440px] lg:w-[400px] xl:w-[500px] xl:h-[550px] overflow-hidden">
      {imageSrc && (
        <Image fill={true} src={imageSrc} alt="Blenheim Palace with flowers in the foreground" objectFit='cover' />
      )}
      <div className="relative max-w-80 flex flex-col start">
        <h2 className={clsx("font-inter text-lg lg:text-2xl tracking-normal leading-6 ", imageSrc ? "text-background" : "text-foreground")}>{title}</h2>
        <p className={clsx("lg:mt-2 mt-1 font-inter text-sm lg:text-lg", imageSrc ? "text-background" : "text-foreground2")}>{description}</p>
        <div className={clsx("w-max bg-transparent border-[1px] mt-2 lg:mt-4 items-center font-inter flex px-3 py-1 rounded-2xl text-xs lg:text-sm tracking-tighter", imageSrc ? "border-background text-background" : "border-foreground2 text-foreground2")}>
          {buttonText}<ArrowRight height={14} />
        </div>
      </div>
    </Link>
  )
}

export default ProjectCard

{/* <div class="border-2 border-foreground px-8 py-2 mt-4">      
          <h3 class="font-noto text-lg font-semibold">Problem Statement</h3>
          <p class="font-sans mt-2 text-base">Staffing was often allocated inefficiently across departments on the Estate. Some departments overstaffed, relative to the number of visitors on a given day, whilst others understaffed. Furthermore, as each of the departments experience different busy periods throughout the day it could often be the case that departments are overstaffed at times when others are understaffed. </p>
        </div>
        <div class="border-2 border-foreground bg-background px-8 py-2 mt-4">      
          <h3 class="font-noto text-lg font-semibold">Aim</h3>
          <p class="font-sans mt-2 text-base">Investigate the relationship between staff allocation at Blenheim Palace and visitor satisfaction, and to develop a model for optimizing staff distribution.</p>
        </div> */}