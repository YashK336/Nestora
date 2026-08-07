import { useState } from "react";
import { motion } from "framer-motion";
import GalleryModal from "./GalleryModal";
const ImageGallery = ({ property }) => {
    const [openGallery, setOpenGallery] = useState(false);
const [selectedIndex, setSelectedIndex] = useState(0);
      return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 lg:gap-4">        
            {/* Left */}
            <div className="lg:col-span-8">
                <motion.img
                key={selectedIndex}
                src={property.images[selectedIndex]}
                alt={property.title}
                onClick={()=>setOpenGallery(true)}
                initial={{
                opacity:0,
                scale:.98
                }}
                animate={{
                opacity:1,
                scale:1
                }}
                transition={{
                duration:.3
                }}
                className="h-[250px] sm:h-[350px] md:h-[450px] lg:h-[520px] w-full rounded-2xl lg:rounded-3xl object-cover cursor-pointer"
                />
            </div>
            {/* Right */}
            <div
                className="flex gap-3 overflow-x-auto lg:overflow-visible lg:col-span-4 lg:flex-col">
                    {property.images
                .slice(0, 2)
                .map((image,index)=>
                <button
                    key={index}
                    onClick={()=>setSelectedIndex(index)}
                    className={`
                        relative
                        overflow-hidden
                        rounded-xl
                        lg:rounded-2xl
                        flex-shrink-0
                        border-2
                        transition
                        
                        ${
                          selectedIndex === index 
                            ? "border-blue-600"
                            : "border-transparent"
                        }
                        `}
                >
                    <img
                    src={image}
                    alt=""            
                    className="h-24 w-32 sm:h-28 sm:w-40 lg:h-full lg:w-full object-cover transition duration-500hover:scale-110"
                    />
                    {
                        index===1 &&
                        property.images.length>2 &&
                        (
                    <div
                        className="
                        absolute
                        inset-0    
                        flex
                        items-center
                        justify-center
                        bg-black/60
                        text-3xl
                        font-bold
                        text-white
                        "
                    >
                        +{property.images.length-2}
                    </div>
                        )
                    }
                    </button>
                    )
                }
            </div>
            {
            openGallery && (
                <GalleryModal
                images={property.images}
                selectedIndex={selectedIndex}
                setSelectedIndex={setSelectedIndex}
                onClose={() => setOpenGallery(false)}
                />
            )
            }
        </div>
        );
    };
export default ImageGallery;