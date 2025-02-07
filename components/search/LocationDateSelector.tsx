"use client"

import { Circle } from 'lucide-react'

interface LocationDateSelectorProps {
  type: 'pickup' | 'dropoff'
}

export default function LocationDateSelector({ type }: LocationDateSelectorProps) {
  return (
    <div className="flex-1 bg-white p-5 rounded-md">
      <div className="flex items-center gap-2 mb-3">
        <Circle className="text-blue-700 hover:bg-blue-900" />
        <p className="font-bold">{type === 'pickup' ? 'Pick-Up' : 'Drop-Off'}</p>
      </div>
      <div className="flex items-center justify-between gap-4">
        <div className="flex-1">
          <h2 className="font-bold text-sm">Location</h2>
          <div className="flex items-center justify-between text-gray-500 text-xs mt-1">
            <p>Select your City</p>
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path d="M12 15.0006L7.75732 10.758L9.17154 9.34375L12 12.1722L14.8284 9.34375L16.2426 10.758L12 15.0006Z" />
            </svg>
          </div>
        </div>
        <div className="flex-1">
          <h2 className="font-bold text-sm">Date</h2>
          <div className="flex items-center justify-between text-gray-500 text-xs mt-1">
            <p>Select your date</p>
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path d="M12 15.0006L7.75732 10.758L9.17154 9.34375L12 12.1722L14.8284 9.34375L16.2426 10.758L12 15.0006Z" />
            </svg>
          </div>
        </div>
        <div className="flex-1">
          <h2 className="font-bold text-sm">Time</h2>
          <div className="flex items-center justify-between text-gray-500 text-xs mt-1">
            <p>Select your time</p>
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path d="M12 15.0006L7.75732 10.758L9.17154 9.34375L12 12.1722L14.8284 9.34375L16.2426 10.758L12 15.0006Z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}