import Image from 'next/image'


function SmallCard({img,location,distance}) {
    return (
        <div className="flex items-center m-2 mt-5 space-x-4 rounded-xl
        cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform
        duration-200 ease-out">
            {/* left */}
            <div className="relative w-16 h-16 "> 
                <Image 
                className="rounded-lg "
                src={img} layout="fill"/>
            </div>
            {/* right */}
            <div className="">
                <h2>{location}</h2>
                <h3>{distance}</h3>
            </div>
        </div>
    )
}

export default SmallCard
