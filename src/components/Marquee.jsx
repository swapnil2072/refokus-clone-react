const Marquee = ({ imagesURLs }) => {
  return (
    <div className="flex py-8 w-full gap-20 whitespace-nowrap overflow-hidden">
      {imagesURLs.map((url, index) => (
        <img
          key={index}
          src={url}
          alt="Marquee"
          className="w-[6vw] flex-shrink-0"
        />
      ))}
      {imagesURLs.map((url, index) => (
        <img
          key={index}
          src={url}
          alt="Marquee"
          className="w-[6vw] flex-shrink-0"
        />
      ))}
    </div>
  );
};

export default Marquee;
