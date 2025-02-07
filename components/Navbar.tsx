"use client"

import Link from 'next/link'
import { Heart, Bell, Settings, User, Search, Filter } from 'lucide-react'

export default function Navbar() {
  return (
    <>
      <div className="hidden lg:block">
        <nav className="bg-white py-4 px-5 shadow-md flex flex-wrap items-center justify-between">
          <div className="flex flex-wrap items-center justify-between w-full lg:w-auto space-y-4 lg:space-y-0">
            <div className="text-2xl font-bold text-blue-600">MORENT</div>
            <div className="relative w-full lg:w-[492px] h-[44px] sm:m-3">
              <input
                type="text"
                placeholder="Search something here"
                className="w-full h-full border rounded-full py-2 px-4 pl-12 pr-12 text-sm border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                style={{ borderRadius: '60px' }}
              />
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500">
                <Search />
              </div>
              <div className="absolute text-2xl right-4 top-1/2 transform -translate-y-1/2 text-gray-500">
                <Filter />
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4 mt-4 lg:mt-0">
            <Link href="/favourite">
              <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center">
                <Heart className="text-xl text-gray-600 cursor-pointer" />
              </div>
            </Link>
            <Link href="/notification">
              <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center relative">
                <Bell className="text-xl text-gray-600 cursor-pointer" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </div>
            </Link>
            <Link href="/setting">
              <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center">
                <Settings className="text-xl text-gray-600 cursor-pointer" />
              </div>
            </Link>
            <Link href="/admin">
              <div className="w-10 h-10 rounded-full border overflow-hidden border-gray-300 flex items-center justify-center">
                <User className="text-gray-600" />
              </div>
            </Link>
          </div>
        </nav>
      </div>

      {/* Mobile Navigation */}
      <div className="block lg:hidden">
        <nav className="bg-white py-4 px-5 shadow-mq flex flex-wrap items-center justify-between">
          <div className="flex flex-wrap items-center justify-between w-full lg:w-auto space-y-4 lg:space-y-0">
            <div className="text-2xl font-bold text-blue-600">MORENT</div>
            <Link href="/admin">
              <div className="w-10 h-10 rounded-full border overflow-hidden border-gray-300 flex items-center justify-center">
                <User className="text-gray-600" />
              </div>
            </Link>
            <div className="relative w-full lg:w-[492px] h-[44px] sm:m-3">
              <input
                type="text"
                placeholder="Search something here"
                className="w-full h-full border rounded-full py-2 px-4 pl-12 pr-12 text-sm border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                style={{ borderRadius: '60px' }}
              />
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500">
                <Search />
              </div>
              <div className="absolute text-2xl right-4 top-1/2 transform -translate-y-1/2 text-gray-500">
                <Filter />
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4 mt-4 lg:mt-0"></div>
        </nav>
      </div>
    </>
  )
}