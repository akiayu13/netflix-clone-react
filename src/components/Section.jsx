// import styles from "./style.scss";
import ReactPlayer from "react-player";

export default function Section({
  contentleft,
  header,
  subheader,
  image,
  videoUrl,
  imageWidth,
  imageHeight,
  videoStyles,
}) {
  return (
    <section className="bg-black flex h-[600px] px-[100px]">
      {contentleft ? (
        <>
          <div className="m-auto w-[30%]">
            <h1 className="text-white font-bold text-[3.125rem]">{header}</h1>
            <h2 className="text-xl text-white xs:text-3xl font-normal mt-5 mb-1 pr-10">
              {subheader}
            </h2>
          </div>
          <div className="w-50">
            {image && (
              <img
                className="z-1"
                src={image}
                width={imageWidth}
                height={imageHeight}
              />
            )}
            {videoUrl && (
              <div
                className="relative w-[50%]"
                style={{ left: videoStyles.left, bottom: videoStyles.bottom }}
              >
                <ReactPlayer
                  url={videoUrl}
                  muted
                  playing
                  autoPlay
                  loop
                  width="470px"
                  height="260px"
                />
              </div>
            )}
          </div>
        </>
      ) : (
        <>
          <div className="w-[50%]">
            {videoUrl && (
              <div
                className="relative w-[50%]"
                style={{ left: videoStyles.left, bottom: videoStyles.bottom }}
              >
                <ReactPlayer
                  url={videoUrl}
                  muted
                  playing
                  autoPlay
                  loop
                  width="470px"
                  height="260px"
                />
              </div>
            )}
            {image && (
              <img
                className="z-1"
                src={image}
                width={imageWidth}
                height={imageHeight}
              />
            )}
          </div>
          <div className="m-auto w-[30%]">
            <h1 className="text-white font-bold text-[3.125rem]">{header}</h1>
            <h2 className="text-white text-xl">{subheader}</h2>
          </div>
        </>
      )}
    </section>
  );
}
