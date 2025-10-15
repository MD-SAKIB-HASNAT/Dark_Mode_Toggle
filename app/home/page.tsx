"use client";
import DarkModeToggle from "../DarkModeToggle"
import { useRouter } from "next/navigation"


export default function page() {
    const router = useRouter();

  return (
    <div className="dark:bg-black min-h-screen flex flex-col items-center">
     
        <h1 className="text-3xl font-bold underline dark:text-white">
            Home Page
        </h1>
        <button className=" my-5 dark:bg-red-600 px-6 py-2 rounded-lg bg-amber-400" onClick={()=>router.push('/second_home')}>click</button>
    </div>
  )
}
