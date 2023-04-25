import {MouseParallaxChild, MouseParallaxContainer} from 'react-parallax-mouse';
import pexelbkgd from '../../public/pexelbkgd.jpeg';

export default function Logo() {
  return (
    <>
      <div
        style={{
          height: '600px',
          width: '100%',
          backgroundImage: `url(${pexelbkgd})`,
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'cover',
          color: '#fff',
          overflow: 'hidden',
        }}
      >
        <h1
          className="text-2xl font-bold text-center my-15"
          style={{
            paddingTop: '5rem',
          }}
        >
          OUR MOST VALUED CUSTOMERS
        </h1>
        <div
          style={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            paddingBottom: 'calc(10% + 2rem)',
          }}
        >
          <MouseParallaxContainer
            className="parallax"
            containerStyle={{
              width: '100%',
              display: 'grid',
              gridTemplateColumns: 'auto auto auto auto auto',
            }}
            globalFactorX={0.5}
            globalFactorY={0.3}
            resetOnLeave
          >
            <MouseParallaxChild
              factorX={0.6}
              factorY={0.1}
              style={{
                backgroundPositionY: '50%',
                transform: 'scale(1.2)',
                position: 'absolute',
                filter: 'blur(4px) brightness(50%)',
                backgroundSize: 'auto',
                backgroundRepeat: 'repeat',
                padding: '20px',
                width: '100%',
                height: '100%',
                backfaceVisibility: 'hidden',
              }}
            />
            <MouseParallaxChild
              factorX={0.5}
              factorY={0.5}
              style={{
                filter: 'invert(1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 'auto',
                height: '100%',
              }}
            >
              <img
                height="50%"
                width="180px"
                src="toyota.svg"
                alt="Toyota Logo"
              />
            </MouseParallaxChild>
            <MouseParallaxChild
              factorX={0.7}
              factorY={0.5}
              style={{
                filter: 'invert(1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 'auto',
                height: '100%',
              }}
            >
              <img height="50%" width="180p" src="apple.svg" alt="Apple" />
            </MouseParallaxChild>
            <MouseParallaxChild
              factorX={0.9}
              factorY={0.5}
              style={{
                filter: 'invert(1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 'auto',
                height: '100%',
              }}
            >
              <img height="50%" width="180px" src="nissan.svg" alt="wix logo" />
            </MouseParallaxChild>
            <MouseParallaxChild
              factorX={0.7}
              factorY={0.5}
              style={{
                filter: 'invert(1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 'auto',
                height: '100%',
              }}
            >
              <img
                height="50%"
                width="130px"
                src="shopify.svg"
                alt="shopify logo"
              />
            </MouseParallaxChild>
            <MouseParallaxChild
              factorX={0.5}
              factorY={0.5}
              style={{
                filter: 'invert(1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 'auto',
                height: '100%',
              }}
            >
              <img
                height="50%"
                width="150px"
                src="blueacorn.svg"
                alt="blue Acorn svg logo"
              />
            </MouseParallaxChild>
          </MouseParallaxContainer>
        </div>
      </div>
    </>
  );
}
