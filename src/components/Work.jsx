const Work = () => {
  var image = [
    {
      URL: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png",
      top: "50%",
      left: "50%",
      isActive: true,
    },
    {
      URL: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png",
      top: "56%",
      left: "44%",
      isActive: false,
    },
    {
      URL: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png",
      top: "45%",
      left: "56%",
      isActive: false,
    },
    {
      URL: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png",
      top: "58%",
      left: "50%%",
      isActive: false,
    },
    {
      URL: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png",
      top: "40%",
      left: "55%",
      isActive: false,
    },
    {
      URL: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png",
      top: "62%",
      left: "55%",
      isActive: false,
    },
  ];
  return (
    <div className="w-full  bg-zinc-900 mt-8">
      <div className="max-w-screen-xl mx-auto text-center relative">
        <h1 className="select-none text-[30vw] font-medium leading-none tracking-tighter ">
          Work
        </h1>
        <div className="absolute  top-0 w-full h-full ">
          {image.map((img, index) => {
            return (
              img.isActive && (
                <img
                  key={index}
                  src={img.URL}
                  alt="work image"
                  className="absolute w-60 rounded-lg -translate-x-[50%] -translate-y-[50%]"
                  style={{
                    top: img.top,
                    left: img.left,
                  }}
                />
              )
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Work;
