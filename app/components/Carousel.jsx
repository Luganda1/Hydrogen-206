import {Splide, SplideSlide} from '@splidejs/react-splide';
import pexels1 from '../../public/pexels1.jpeg';
import pexels2 from '../../public/pexels2.jpeg';
import pexels3 from '../../public/pexels3.jpeg';
import pexels4 from '../../public/pexels4.jpeg';
import pexels5 from '../../public/pexels5.jpeg';

function Carousel() {
  return (
    <>
      <Splide
        options={{
          type: 'loop',
          // rewind: true,
          autoplay: true,
          width: '100vw',
          height: '96vh',
          // rewindByDrag: true,
          interval: 5000,
          speed: 7000,
        }}
        aria-label="Incomparating Slide into Remix"
      >
        <SplideSlide>
          <img src={pexels1} alt="Image 2" />
        </SplideSlide>
        <SplideSlide>
          <img src={pexels5} alt="Image 2" />
        </SplideSlide>
        <SplideSlide>
          <img src={pexels2} alt="Image 2" />
        </SplideSlide>
        <SplideSlide>
          <img src={pexels3} alt="Image 3" />
        </SplideSlide>
        <SplideSlide>
          <img src={pexels4} alt="Image 3" />
        </SplideSlide>

        <div className="custom-wrapper">
          <div className="splide__progress">
            <div className="splide__progress__bar" />
          </div>
          <button className="splide__toggle" type="button">
            <span className="splide__toggle__play">Play</span>
            <span className="splide__toggle__pause">Pause</span>
          </button>
        </div>
      </Splide>
    </>
  );
}

export default Carousel;
