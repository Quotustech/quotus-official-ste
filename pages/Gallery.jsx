import { motion } from "framer-motion";
import { useState } from "react";
import RollingGallery from "../src/components/ui/RollingGallery";
import IntroImage from "../src/components/common/IntroImage";
import Masonry from 'react-masonry-css';


const EventGallery = () => {
  const [expandedImage, setExpandedImage] = useState(null);

  const events = [
    {
      id: 1,
      title: "Annual Stakeholders Meet 2023",
      location: "Vivanta, BBSR",
      description: "Our annual gathering with stakeholders to discuss progress and future strategies",
      images: [
        { id: 1, url: "https://quotus.co.in/static/media/an1.d2c8a80f904b2c753950.jpg", size: "wide" },
        { id: 2, url: "https://quotus.co.in/static/media/an2.dfc933bac6e943654bac.jpg", size: "tall" },
        { id: 3, url: "https://quotus.co.in/static/media/an3.f1a0309d6206ca740735.jpg", size: "wide" },
        { id: 4, url: "https://quotus.co.in/static/media/an4.ce6e34c06d0b0301d34b.jpg", size: "regular" },
        { id: 5, url: "https://quotus.co.in/static/media/an5.f049d0cb799ec713f39f.jpg", size: "tall" },
        { id: 6, url: "https://quotus.co.in/static/media/an6.ac74e8a11bf9125587e7.jpg", size: "wide" },
        { id: 7, url: "https://quotus.co.in/static/media/an7.6a2c25a45d9f34435a66.jpg", size: "regular" },
        { id: 8, url: "https://quotus.co.in/static/media/an8.8c1049b32bb4364051d0.jpg", size: "tall" },
        { id: 9, url: "https://quotus.co.in/static/media/an9.4f1bddb802ab850c66b4.jpg", size: "wide" },

      ]
    },
    // {
    //   id: 2,
    //   title: "Campus Drive at GITA",
    //   location: "GITA Autonomous College, BBSR",
    //   description: "Recruiting bright young talents from premier institutions",
    //   images: [
    //     { id: 1, url: "https://quotus.co.in/static/media/GITA.7e869011955340eb0e07.jpeg", size: "regular" },
    //     { id: 2, url: "https://quotus.co.in/static/media/GITA.7e869011955340eb0e07.jpeg", size: "tall" },
    //     { id: 3, url: "https://quotus.co.in/static/media/gita3.daf913ae391123efa29a.jpeg", size: "wide" }
    //   ]
    // },
    // {
    //   id: 3,
    //   title: "Ganesh Chaturthi Celebration",
    //   location: "Office, BBSR",
    //   description: "Traditional festival celebration fostering team bonding",
    //   images: [
    //     { id: 1, url: "https://quotus.co.in/static/media/DSC_0016.f2f6cbf50ef01c1f35f0.JPG", size: "big" },
    //     { id: 2, url: "https://quotus.co.in/static/media/DSC_0022.2fde24bafdcfacb99272.JPG", size: "regular" },
    //     { id: 3, url: "https://quotus.co.in/static/media/DSC_0024.bef4e857002fa41cceb0.JPG", size: "regular" }
    //   ]
    // },

  ];

  const getSizeClass = (size) => {
    switch (size) {
      case 'wide': return 'col-span-2';
      case 'tall': return 'row-span-2';
      case 'big': return 'col-span-2 row-span-2';
      default: return '';
    }
  };

  const openImage = (eventId, imageId) => {
    setExpandedImage({ eventId, imageId });
  };

  const closeImage = () => {
    setExpandedImage(null);
  };

  //misonry breakpoint
  const breakpointColumnsObj = {
    default: 3,
    1024: 2,
    640: 1
  };

  return (
    <div className="min-h-screen bg-white  mt-[5%]">
      {/* intro image*/}
      <IntroImage title="Our Gallery" imageUrl="/commonEntroImage.jpg" />

      <RollingGallery images={events[0].images} />

      <div className="py-12 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        {/* Events Gallery */}
        <div className=" space-y-20">
          {events.map((event) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
            >
              {/* Event Header */}
              <div className="p-8 bg-gradient-to-r from-[#1f0079]/5 to-white">
                <motion.h2
                  className="text-3xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-[#1f0079] mb-3 md:mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <motion.span
                    className="bg-clip-text text-transparent bg-gradient-to-r from-[#1f0079] to-[#513897]"
                    initial={{ backgroundPosition: "0% 50%" }}
                    animate={{
                      backgroundPosition: "100% 50%",
                      transition: {
                        duration: 6,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "linear",
                      },
                    }}
                  >
                    {event.title}
                  </motion.span>
                </motion.h2>

                <p className="text-[#513897] font-medium mb-3">
                  {event.location}
                </p>
                <p className="text-gray-600">{event.description}</p>
              </div>

              {/* Images Grid */}
              <Masonry
                breakpointCols={breakpointColumnsObj}
                className="flex gap-4 p-6 my-masonry-grid "
                columnClassName="my-masonry-grid_column"
              >
                {event.images.map((image) => (
                  <motion.div
                    key={image.id}
                    className={`relative overflow-hidden rounded-lg shadow-sm border border-gray-200  ${getSizeClass(
                      image.size
                    )}`}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                    onClick={() => openImage(event.id, image.id)}
                  >
                    <img
                      src={image.url}
                      alt={`${event.title} ${image.id}`}
                      className="w-full h-auto object-cover cursor-pointer"
                    />
                    <div className="absolute inset-0 bg-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end p-4">
                      <span className="text-white font-medium">View</span>
                    </div>
                  </motion.div>
                ))}
              </Masonry>
            </motion.div>
          ))}
        </div>

        {/*  Image Modal */}
        {expandedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-white z-50 flex items-center justify-center p-4"
            onClick={closeImage}
          >
            <div
              className="absolute top-6 right-6 text-[#513897] text-3xl z-10 hover:text-[#b8b2ff] transition-colors"
              onClick={closeImage}
            >
              &times;
            </div>

            <div className="relative max-w-6xl w-full max-h-[90vh]">
              {events.map(
                (event) =>
                  event.id === expandedImage.eventId &&
                  event.images.map(
                    (image) =>
                      image.id === expandedImage.imageId && (
                        <motion.img
                          key={image.id}
                          src={image.url}
                          alt={`Expanded view - ${event.title}`}
                          className="w-full h-full max-h-[80vh] object-contain"
                          initial={{ scale: 0.9 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      )
                  )
              )}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default EventGallery;