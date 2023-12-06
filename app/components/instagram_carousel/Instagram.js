import imageFrame from '../../../public/assets/event1_white.png'

const dummyData = [
    {
        "name": "University Event",
        "date": "2024-10-10",
        "url": "",
        "image": "",
    },
    {
        "name": "Another Event",
        "date": "2024-11-10",
        "url": "",
        "image": "",
    }
]

const Events = () => {
    return (
        <section className="text-citrus text-center text-3xl py-2">
            <h1>Image Reel:</h1>
                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 place-content-evenly items-center text-citrus">
                    <div className="bg-[url('/assets/ben.png')] bg-contain bg-center bg-no-repeat w-64 md:w-80 lg:w-96 xl:w-102 h-64 md:h-80 lg:h-96 xl:h-102 flex">
                        <p className="py-2.5 pl-20 bottom-0 inset-x text-5xl text-center leading-4">21/01/2024</p>
                    </div>
                    <div className="bg-[url('/assets/sam.png')] bg-contain bg-center bg-no-repeat w-64 md:w-80 lg:w-96 xl:w-102 h-64 md:h-80 lg:h-96 xl:h-102 flex">
                        <p className="py-2.5 pl-20 bottom-0 inset-x text-5xl text-center leading-4">21/03/2024</p>
                    </div>
                </section>
    </section>
    );
  }
  
  export default Events;