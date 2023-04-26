import ReactPlayer from 'react-player/youtube';

const HeroVideo = () => {
  return (
    <section className="relative">
      <div className="absolute inset-0 bg-black/75 sm:bg-transparent sm:from-white/95 sm:to-black/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

      <ReactPlayer
        className="react-player"
        url="https://youtu.be/cTDJNZ9cK1w?t=6"
        width="100%"
        height="100%"
        muted={true}
        playing={true}
        loop={true}
      />

      <div className="relative mx-auto max-w-screen-2xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-2xl text-left ltr:sm:text-left rtl:sm:text-right">
          <h1 className="text-5xl font-extrabold sm:text-5xl">
            A deeper and more immersive
            <strong className="block font-extrabold text-rose-700">
              experience
            </strong>
          </h1>
          <p className="mt-4 max-w-lg sm:text-xl/relaxed">
            This remake brings jaw-dropping visual fidelity, suspenseful
            atmospheric audio, and improvements to gameplay.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <a
              href="#"
              className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
            >
              Buy Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroVideo;
