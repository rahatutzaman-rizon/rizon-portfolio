import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Masonry from 'react-masonry-css';
import { FiX, FiChevronLeft, FiChevronRight, FiMaximize2, FiMenu } from 'react-icons/fi';
import NavBar from '../components/NavBar';



const Gallery = () => {
  const [selectedId, setSelectedId] = useState(null);
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  const images = [
    { id: 1, url: 'https://i.ibb.co/xGRQwHW/IMG-20200306-214803-494.jpg', title: 'Sunset Silhouette' },
    { id: 2, url: 'https://i.ibb.co/x5wM7xb/IMG-20210118-133418-421.jpg', title: 'Urban Exploration' },
    { id: 3, url: 'https://i.ibb.co/BVdV3wf/IMG-20210118-134305-726.jpg', title: 'Natures Patterns' },
    { id: 4, url: 'https://i.ibb.co/VqvQcD6/IMG-20210130-005030-314.jpg', title: 'City Lights' },
    { id: 5, url: 'https://i.ibb.co/W3NpXnV/IMG-20210130-010014-060.jpg', title: 'Reflections' },
    { id: 6, url: 'https://i.ibb.co/fxGcggT/IMG-20210310-205945-388.jpg', title: 'Abstract Architecture' },
    { id: 7, url: 'https://i.ibb.co/M7PR1QN/IMG-20210331-222352-817.jpg', title: 'Street Scene' },
    { id: 8, url: 'https://i.ibb.co/NV2CkJF/IMG-20210427-045042-856.jpg', title: 'Natural Wonder' },
  ];

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const nextImage = () => {
    const currentIndex = images.findIndex(img => img.id === selectedId);
    const nextIndex = (currentIndex + 1) % images.length;
    setSelectedId(images[nextIndex].id);
  };

  const prevImage = () => {
    const currentIndex = images.findIndex(img => img.id === selectedId);
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setSelectedId(images[prevIndex].id);
  };

  const ImageThumbnail = ({ image, index }) => (
    <motion.div
      layoutId={`container-${image.id}`}
      onClick={() => setSelectedId(image.id)}
      className="relative mb-6 cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="aspect-w-3 aspect-h-4">
        <img
          src={image.url}
          alt={image.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-white text-xl font-semibold">{image.title}</h3>
          <FiMaximize2 className="text-white mt-2 text-lg" />
        </div>
      </div>
    </motion.div>
  );

  const FullScreenImage = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-95 flex items-center justify-center z-50"
    >
      <motion.div className="relative w-full max-w-5xl max-h-[90vh] rounded-lg overflow-hidden">
        <motion.img
          layoutId={`container-${selectedId}`}
          src={images.find((image) => image.id === selectedId).url}
          alt={`Full size image ${selectedId}`}
          className="w-full h-full object-contain"
        />
        <button
          onClick={() => setSelectedId(null)}
          className="absolute top-4 right-4 text-white text-3xl hover:text-gray-300 transition-colors"
        >
          <FiX />
        </button>
        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-5xl hover:text-gray-300 transition-colors"
        >
          <FiChevronLeft />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-5xl hover:text-gray-300 transition-colors"
        >
          <FiChevronRight />
        </button>
      </motion.div>
    </motion.div>
  );
  
    
  return (
    <div>
    
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
     

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 pt-32">
        <motion.section 
          className="mb-20 text-center"
          initial="hidden"
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 50 }
          }}
          transition={{ duration: 0.5 }}
          ref={ref}
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-8">My Photography Portfolio</h1>
          <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
            Explore my collection of captivating moments frozen in time. Each image tells a unique story, 
            showcasing my passion for photography and my perspective on the world around us.
          </p>
        </motion.section>

        <Masonry
          breakpointCols={{
            default: 4,
            1280: 3,
            1024: 3,
            768: 2,
            640: 1
          }}
          className="flex -ml-6 w-auto"
          columnClassName="pl-6 bg-clip-padding"
        >
          {images.map((image, index) => (
            <ImageThumbnail key={image.id} image={image} index={index} />
          ))}
        </Masonry>
      </main>

      <AnimatePresence>
        {selectedId && <FullScreenImage />}
      </AnimatePresence>

      <footer className="bg-black bg-opacity-50 text-white py-8 mt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2024 rizon. All rights reserved.</p>
        </div>
      </footer>
    </div>
    </div>
  );
};

export default Gallery;