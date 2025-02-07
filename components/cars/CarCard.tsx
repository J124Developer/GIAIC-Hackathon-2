import Image from 'next/image'
import Link from 'next/link'
import { Heart, Users, Circle, Fuel } from 'lucide-react'

interface CarCardProps {
  name: string
  type: string
  image: string
  fuel: string
  transmission: string
  capacity: string
  price: number
}

export default function CarCard({ name, type, image, fuel, transmission, capacity, price }: CarCardProps) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center lg:flex-row lg:m-2 w-full lg:w-[290px] transition-transform transform hover:scale-105">
      <div>
        <div className="flex w-full">
          <div className="w-[230px]">
            <h2 className="ml-2 lg:ml-3 w-full font-bold">{name}</h2>
          </div>
          <div className="ml-5 lg:ml-1">
            <Heart className="text-2xl" />
          </div>
        </div>
        <div>
          <p className="text-[12px] text-gray-600 mx-2 lg:mx-3">{type}</p>
        </div>
        <div className="w-11/12 h-32 my-8">
          <Image
            src={image}
            alt={name}
            width={200}
            height={60}
            className="rounded-md object-cover"
          />
        </div>
        <div className="flex gap-4 text-[7px]">
          <div className="flex gap-1">
            <Fuel className="text-[12px] text-gray-500 mt-1" />
            <div>
              <p className="text-sm text-gray-500">{fuel}</p>
            </div>
          </div>
          <div className="flex gap-2">
            <Circle className="text-[12px] text-gray-500 mt-1" />
            <div>
              <p className="text-sm text-gray-500">{transmission}</p>
            </div>
          </div>
          <div className="flex gap-2">
            <Users className="text-[12px] text-gray-500 mt-1" />
            <div>
              <p className="text-sm text-gray-500">{capacity}</p>
            </div>
          </div>
        </div>
        <div className="flex mt-3">
          <p className="text-[15px] font-bold mt-2">${price}.00 / Day</p>
          <Link href="/billing">
            <button className="lg:ml-12 ml-12 px-2 py-2 bg-blue-700 rounded-md hover:bg-blue-800 text-white">
              Rent Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}