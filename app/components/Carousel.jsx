import {Splide, SplideSlide} from '@splidejs/react-splide';
import assassin from '../../public/assassin.jpeg';
import callofduty from '../../public/callofduty.jpeg';
import worrior from '../../public/worrior.jpeg';
import gaming1 from '../../public/gaming1.jpeg';
import joystick from '../../public/joystick.jpeg';

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
          <img src={assassin} alt="Image 2" />
        </SplideSlide>
        <SplideSlide>
          <img src={joystick} alt="Image 2" />
        </SplideSlide>
        <SplideSlide>
          <img src={callofduty} alt="Image 2" />
        </SplideSlide>
        <SplideSlide>
          <img src={worrior} alt="Image 3" />
        </SplideSlide>
        <SplideSlide>
          <img src={gaming1} alt="Image 3" />
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
