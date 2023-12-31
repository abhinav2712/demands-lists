import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Header = () => {
  return (
    <header class="text-gray-600 body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <nav class="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
      <Link href={"/"} class="mr-5 hover:text-black-900">Add Demand</Link>
      <Link href={"/todos"}  class="mr-5 hover:text-black-900">Demand Lists</Link>
      <Link href={"/"}  class="mr-5 hover:text-black-900">Save Me </Link>
      
    </nav>
    <a class="flex order-first lg:order-none lg:w-1/5 title-font font-bold items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
    {/* <Image src="/public/logo.png" alt="Unnati's Demands"  className="rounded-full"/> */}
    <img src="/logo.png" alt="profile" width={50} height={50} className="rounded-full" />
      <span class="ml-3 text-[23px]">Unnati's Demands 🛐 </span>
    </a>
    <div class="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
      {/* <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button> */}
    </div>
  </div>
</header>
  )
}

export default Header