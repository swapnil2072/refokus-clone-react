import Product from "./Product";
import { motion } from "framer-motion";
import { useState } from "react";

const Products = () => {
  var products = [
    {
      title: "Arqitel",
      description:
        " With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate. ",
      live: true,
      caseStudy: false,
    },
    {
      title: "TTR",
      description:
        " We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design. ",
      live: true,
      caseStudy: false,
    },
    {
      title: "Singularity",
      description:
        "A new site for Singularity that supports their growth and showcases their true identity as industry innovators. ",
      live: true,
      caseStudy: false,
    },
    {
      title: "Rainfall",
      description:
        " We crafted a website for Rainfall Ventures, developing prototypes and custom code that ultimately allows their team to update content regularly and with ease. ",
      live: true,
      caseStudy: true,
    },
    {
      title: "Yahoo!",
      description:
        " We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop. ",
      live: true,
      caseStudy: true,
    },
  ];

  const [pos, setPos] = useState(0);

  const mover = (val) => {
    setPos(val * 23);
  };

  return (
    <div className="mt-32 relative">
      {products.map((val, index) => (
        <Product key={index} val={val} mover={mover} count={index} />
      ))}
      <div className="absolute top-0 w-full h-full pointer-events-none">
        <motion.div
          initial={{ y: pos, x: "-50%" }}
          animate={{ y: pos + `rem` }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
          className="window w-[32rem] h-[23rem] absolute left-[44%]  bg-white overflow-hidden"
        >
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full bg-sky-100"
          ></motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full bg-sky-200"
          ></motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full bg-sky-300"
          ></motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full bg-sky-400"
          ></motion.div>
        </motion.div>
      </div>
      {/* pointer-events-none let us able to click on the element which are behind the div  */}
    </div>
  );
};

export default Products;
