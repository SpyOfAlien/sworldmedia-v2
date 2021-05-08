import ParticelsLayout from "../components/layout/particels-layout/particels-layout";
import { motion, animate } from "framer-motion";
import { useState } from "react";

const HomePage = () => {
  const [open, setOpen] = useState(false);

  const variants = {
    hidden: {
      y: -300,
      x: -300,
    },
    visible: {
      y: [20, 10, 20, 10, 20, 10],
      x: [10, 15, 20, 25, 30, 35],
      transition: {
        duration: 10,
        delay: 10,
        y: {
          duration: 5,
          yoyo: Infinity,
        },
        x: {
          duration: 5,
          yoyo: Infinity,
        },
      },
    },
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <ParticelsLayout className="under">
        <div className="relative">
          <motion.div
            className="rounded-full bg-yellow-600 w-32 h-32 flex justify-center items-center"
            variants={variants}
            initial="hidden"
            animate="visible"
            onClick={() => setOpen(!open)}
          >
            hehe
          </motion.div>

          {open ? (
            <motion.div
              className="rounded-full bg-yellow-600 w-32 h-32 flex justify-center items-center absolute top-0 left-0"
              initial={{
                width: 0,
                height: 0,
              }}
              animate={{
                x: 300,
                y: -300,
                width: 200,
                height: 200,
              }}
              transition={{
                y: {
                  duration: 2,
                },
                x: {
                  duration: 1,
                },
              }}
            >
              haha
            </motion.div>
          ) : null}
          {open ? (
            <motion.div
              className="rounded-full bg-yellow-600 w-32 h-32 flex justify-center items-center absolute top-0 left-0"
              animate={{
                x: -300,
                y: -300,
              }}
              transition={{
                y: {
                  duration: 1,
                },
                x: {
                  duration: 1,
                },
              }}
            >
              haha
            </motion.div>
          ) : null}
          {open ? (
            <motion.div
              className="rounded-full bg-yellow-600 w-32 h-32 flex justify-center items-center absolute top-0 left-0"
              animate={{
                y: 300,
                x: 300,
              }}
              transition={{
                y: {
                  duration: 1,
                },
                x: {
                  duration: 1,
                },
              }}
            >
              haha
            </motion.div>
          ) : null}
          {open ? (
            <motion.div
              className="rounded-full bg-yellow-600 w-32 h-32 flex justify-center items-center absolute top-0 left-0"
              animate={{
                y: 300,
                x: -300,
              }}
              transition={{
                y: {
                  duration: 1,
                },
                x: {
                  duration: 1,
                },
              }}
            >
              haha
            </motion.div>
          ) : null}
        </div>
      </ParticelsLayout>
    </div>
  );
};

export default HomePage;
