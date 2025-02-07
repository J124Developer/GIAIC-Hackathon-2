import Link from 'next/link'
import CarCard from './CarCard'

const popularCars = [
  {
    name: 'Koenigsegg',
    type: 'Sport',
    image: '/img/car/koni.png',
    fuel: '90L',
    transmission: 'Manual',
    capacity: '2 People',
    price: 99,
  },
  {
    name: 'Nissan GT - R',
    type: 'Sport',
    image: '/img/car/gtr.png',
    fuel: '80L',
    transmission: 'Manual',
    capacity: '2 People',
    price: 80,
  },
  {
    name: 'Rolls Royce',
    type: 'Sport',
    image: '/img/car/rolls.png',
    fuel: '70L',
    transmission: 'Manual',
    capacity: '4 People',
    price: 96,
  },
  {
    "name": "Nissan GT - R",
    "type": "Sport",
    "image": "/img/car/gtr.png",
    "fuel": "80L",
    "transmission": "Manual",
    "capacity": "2 People",
    "price": 80
  },
  {
    "name": "All New Rush",
    "type": "SUV",
    "image": "/img/car/suvgray.png",
    "fuel": "70L",
    "transmission": "Manual",
    "capacity": "4 People",
    "price": 72
  },
  {
    "name": "CR-V",
    "type": "SUV",
    "image": "/img/car/suvbrown.png",
    "fuel": "80L",
    "transmission": "Manual",
    "capacity": "6 People",
    "price": 80
  },
  {
    "name": "All New Terios",
    "type": "Sport",
    "image": "/img/car/suvblue.png",
    "fuel": "90L",
    "transmission": "Manual",
    "capacity": "6 People",
    "price": 74
  },
  {
    "name": "CR-V",
    "type": "SUV",
    "image": "/img/car/suvblack.png",
    "fuel": "80L",
    "transmission": "Manual",
    "capacity": "6 People",
    "price": 80
  },
  {
    "name": "MG ZX Exclusive",
    "type": "Hatchback",
    "image": "/img/car/suvcyan.png",
    "fuel": "70L",
    "transmission": "Manual",
    "capacity": "4 People",
    "price": 74
  },
  {
    "name": "New MGZS",
    "type": "SUV",
    "image": "/img/car/suvwhite.png",
    "fuel": "90L",
    "transmission": "Manual",
    "capacity": "2 People",
    "price": 72
  },
  {
    "name": "CR-V",
    "type": "SUV",
    "image": "/img/car/suvlightgray.png",
    "fuel": "80L",
    "transmission": "Manual",
    "capacity": "6 People",
    "price": 80
  },
  {
    "name": "MG ZX Exclusive",
    "type": "Hatchback",
    "image": "/img/car/suvblue.png",
    "fuel": "70L",
    "transmission": "Manual",
    "capacity": "4 People",
    "price": 74
  },
]

export default function PopularCars() {
  return (
    <>
      <div className="flex p-3 mx-5 justify-between">
        <div className="text-gray-500">
          <h1>Popular Car</h1>
        </div>
        <div>
          <Link href="/view" className="text-blue-500 hover:text-blue-700">
            View All
          </Link>
        </div>
      </div>
      <div className="w-full">
        <div>
          <div className="flex flex-wrap justify-center gap-6 p-4">
            {popularCars.map((car, index) => (
              <CarCard key={index} {...car} />
            ))}
          </div>
          <div className="relative flex justify-center mt-4 lg:mt-7">
            <Link href="/detail">
              <button className="p-4 bg-blue-700 text-white rounded-md mb-4">
                Show More Cars
              </button>
            </Link>
            <h2 className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-500 text-sm lg:mr-10">
              120 cars
            </h2>
          </div>
        </div>
      </div>
    </>
  )
}