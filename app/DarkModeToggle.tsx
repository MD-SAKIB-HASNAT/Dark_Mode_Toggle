'use client'
import { useEffect, useState } from "react";




export default function DarkModeToggle() {
    const [dark, setDarkMode] = useState(()=>
    localStorage.getItem("Theme") === "dark"
    );

    useEffect(() => {
        const root = document.documentElement;
        if(dark){
            root.classList.add('dark');
            localStorage.setItem('Theme', 'dark');
        }
        else{
            root.classList.remove('dark');
            localStorage.setItem('Theme', 'light');
        }
    }, [dark]);
  return (
    <div>
        <div className="gap-4 flex">
            <button
                onClick={() => setDarkMode(true)}
                className="px-6 py-3 rounded-lg bg-gray-800 text-white font-semibold hover:bg-gray-700 transition-colors duration-200 "
            >
                Dark Mode ON
            </button>

            <button
                onClick={() => setDarkMode(false)}
                className="px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors duration-200"
            >
                Dark Mode OFF
            </button>
        </div>

    </div>
  )
}
