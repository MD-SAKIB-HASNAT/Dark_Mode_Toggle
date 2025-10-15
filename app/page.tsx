'use client'
import './globals.css'
import DarkModeToggle from './DarkModeToggle'
import { useRouter } from 'next/navigation';

export default function Home() {
   const router = useRouter();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 transition-colors duration-300 px-4">
      
      <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6 text-center">
        Welcome to Your App
      </h1>
      
      <p className="text-gray-700 dark:text-gray-300 text-center max-w-md mb-8">
        This is a modern design example with Tailwind CSS. Dark mode is fully supported — try toggling it below!
      </p>

      <DarkModeToggle />

      <button 
      onClick={() => router.push('/home')}
      className="mt-8 px-8 py-3 rounded-lg  bg-red-300 text-white font-semibold hover:bg-red-500 dark:bg-red-300 dark:hover:bg-red-500 transition-colors duration-200">
        Get Started
      </button>
    </div>
  )
}
