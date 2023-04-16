import ReactPlayer from "react-player";

export default function Section({
  contentleft,
  header,
  subheader,
  image,
  imageWidth,
  imageHeight,
}) {
  return (
    <section className="bg-black flex flex-wrap h-auto md:h-[600px] px-5 md:px-[100px]">
      {contentleft ? (
        <>
          <div className="m-auto w-full md:w-2/5 order-2 md:order-none">
            <div className="md:pl-10 flex flex-col justify-center h-full">
              <h1 className="text-white font-bold text-3xl md:text-[3.125rem]">
                {header}
              </h1>
              <h2 className="text-xl md:text-3xl text-white font-normal mt-5 mb-1">
                {subheader}
              </h2>
            </div>
          </div>
          <div className="w-full md:w-3/5 order-1 md:order-none">
            {image && (
              <img
                className="z-1 h-full object-cover"
                src={image}
                width={imageWidth}
                height={imageHeight}
              />
            )}
          </div>
        </>
      ) : (
        <>
          <div className="w-full md:w-3/5 order-1 md:order-none">
            {image && (
              <img
                className="z-1 h-full object-cover"
                src={image}
                width={imageWidth}
                height={imageHeight}
              />
            )}
          </div>
          <div className="m-auto w-full md:w-2/5 order-2 md:order-none mt-5 md:mt-0">
            <div className="md:pr-10 flex flex-col justify-center h-full">
              <h1 className="text-white font-bold text-3xl md:text-[3.125rem]">
                {header}
              </h1>
              <h2 className="text-white text-xl md:text-3xl">{subheader}</h2>
            </div>
          </div>
        </>
      )}
    </section>
  );
}
