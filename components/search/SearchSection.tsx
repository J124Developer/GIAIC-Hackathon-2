import LocationDateSelector from './LocationDateSelector'
import { ArrowUpDown } from 'lucide-react'

export default function SearchSection() {
  return (
    <section className="flex flex-col gap-4 lg:gap-8 lg:flex-row my-5 mx-4 lg:mx-8 rounded-lg p-5">
      <div className="flex flex-col lg:flex-row w-full gap-5">
        <LocationDateSelector type="pickup" />
        <div className="w-[60px] p-5 lg:p-5 bg-blue-600 hover:bg-blue-900 h-[60px] text-white lg:mt-8 rounded-md mx-auto lg:mx-0 flex items-center justify-center">
          <ArrowUpDown className="h-5 w-5" />
        </div>
        <LocationDateSelector type="dropoff" />
      </div>
    </section>
  )
}