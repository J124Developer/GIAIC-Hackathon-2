import Image from 'next/image';

const AdminCarCard = () => {
  return (
    <div className="w-full lg:w-1/2 bg-white my-4 p-4 lg:ml-4 rounded-md">
      {/* Car Image */}
      <div className="rounded-md">
        <Image 
          alt="Car 1" 
          width={500} 
          height={200} 
          src="/_next/image?url=%2FMaps.png&w=1080&q=75" 
          className="my-5"
        />
      </div>
      
      {/* Car Info */}
      <div className="flex w-full mt-2">
        <div className="w-full lg:w-1/3 relative rounded-md p-2">
          <Image 
            alt="Background Image" 
            width={500} 
            height={300} 
            src="/_next/image?url=%2Fbg2.jpg&w=1080&q=75" 
            className="rounded-md object-cover h-[100px] w-full"
          />
          <Image 
            alt="Overlay Image" 
            width={200} 
            height={200} 
            src="/_next/image?url=%2Fcar2.png&w=640&q=75" 
            className="absolute inset-0 m-auto rounded-full object-cover p-4"
          />
        </div>
        <div className="w-full lg:w-2/3 justify-between items-center p-5">
          <h1 className="font-bold text-2xl">Nissan GT - R</h1>
          <div className="flex mt-1">
            <h2 className="text-gray-500">Sports Car</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminCarCard;
