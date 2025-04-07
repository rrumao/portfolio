import { assets, serviceData } from "@/assets/assets";
import Image from "next/image";
import React, {useState, useEffect} from "react";
import { motion, AnimatePresence } from "motion/react";

const Experience = ({ isDarkMode }) => {
  const [selected, setSelected] = useState(null);

  // useEffect(() => {
  //   if (selected) {
  //     document.body.style.overflow = "hidden";
  //   } else {
  //     document.body.style.overflow = "auto";
  //   }

  //   // Cleanup
  //   return () => {
  //     document.body.style.overflow = "auto";
  //   };
  // }, [selected]);

  return (
    <>
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="experience"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        Professional Journey
      </motion.h4>

      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-center text-5xl font-Ovo"
      >
        Experience
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
      >
        I am a software developer and data scientist, experienced in building
        full-stack applications, developing data-driven solutions, and
        performing research across multiple areas.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="grid grid-cols-auto gap-8 my-10"
      >
        {serviceData.map(({ icon, title, position, desc, time, dark }, index) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            key={index}
            className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white"
          >
            <Image src={isDarkMode && dark ? dark : icon} alt="" className="w-10" />
            <h3 className="text-lg my-4 text-gray-700 dark:text-white">
              {title}
            </h3>
            <p className="text-sm text-gray-600 leading-5 dark:text-white/80">
              {position}
            </p>
            <a onClick={() => setSelected({ title, position, desc, time })} className="flex items-center gap-2 text-sm mt-5">
              Read more{" "}
              <Image alt="" src={assets.right_arrow} className="w-4" />
            </a>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
    <div>
    <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg max-w-md w-full p-6 relative"
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-3 right-3 text-gray-600 dark:text-gray-300 text-xl"
              >
                &times;
              </button>
              <h1 className="text-xl font-bold mb-4 dark:text-white">
                {selected.title}
              </h1>
              <span className="absolute right-5 font-bold dark:text-white hidden sm:inline">{selected.time}</span>
              <h3 className="text-gray-700 font-bold italic dark:text-white">
                {selected.position}
              </h3>
              {selected.desc.split('\n').map((line, index) => {
                return (<p key={index} className="text-gray-700 dark:text-gray-300 mb-2">{line}</p>);
              })}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
    </>
  );
};

export default Experience;
