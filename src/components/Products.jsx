import Product from "./Product";

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
  return (
    <div>
      {products.map((val, index) => (
        <Product key={index} val={val} />
      ))}
    </div>
  );
};

export default Products;
