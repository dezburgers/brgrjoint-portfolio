"use clinet"
import Head from "next/head";
import React, { useState, useEffect } from 'react';
import Image from "next/image";
import 'bootstrap/dist/css/bootstrap.min.css';


import {
  MDBContainer,
  MDBAccordion,
  MDBAccordionItem, MDBTypography
} from "mdb-react-ui-kit";
import Marquee from "react-fast-marquee";
import MouseGlow from './components/mouse/mouseglow';
import MouseGlowBio from './components/mouse/biography/mouseglowbio';
import { useSpring, animated, config } from 'react-spring';
import icon from "../public/icon.png"
import onstage from "../public/onstage.png"


const SplashScreen = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Simulate loading process
    setTimeout(() => {
      setShowSplash(false);
    }, 5000); // Adjust the time as needed
  }, []);

  // Define spring animation properties
  const logoZoomProps = useSpring({
    to: [
      { transform: 'scale(3)' },
    ],
    from: { transform: 'scale(1)' },
    config: config.wobbly,
  });

  const logoSpinProps = useSpring({
    to: [
      { transform: 'rotate(360deg)' },
    ],
    from: { transform: 'rotate(0deg)' },
    config: config.default,
    delay: 500,
  });

  const fadeBg = useSpring({
    to: { transform: 'scale(0)', opacity: 1, borderRadius: '50%' },
    from: { transform: 'scale(1)', opacity: 1, borderRadius: '0%' },
    config: { duration: 300 },
    delay: 1100,
  });
  const fadeLogo = useSpring({
    to: { opacity: 0 },
    from: { opacity: 1 },
    config: { duration: 400 },
    delay: 1200, // Delay after the animation sequence starts
  });

  return (
    <animated.main className={`${showSplash ? 'flex' : 'hidden'
      } fixed top-0 left-0 w-screen h-screen overflow-x-hidden items-center justify-center bg-white z-50`}
      style={{ ...fadeBg }}>
      <animated.div style={{ ...logoZoomProps }}>
        <animated.div style={{ ...fadeLogo }}>
          <animated.h1
            className="text-2xl font-semibold mb-2 w-24 h-auto"
            style={{ ...logoSpinProps }}
          >

            <Image src={icon} alt="Logo" />
          </animated.h1>
        </animated.div >
      </animated.div >
    </animated.main>

  );
};

const StickyHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full p-4 bg-opacity-80 backdrop-blur backdrop-filter bg-gray-200">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div
            className={`w-8 h-8 mr-2 md:hidden cursor-pointer ${menuOpen ? 'opacity-100' : 'opacity-50'
              }`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Image src={icon} alt="Icon" layout="fill" />
          </div>
          <div className="hidden md:block">
            <Image src={icon} alt="Icon" className="w-6 h-6 mr-2" />
          </div>
        </div>

        <div className="hidden md:flex">
          <a href="/about" className="mr-4 text-gray-600 hover:text-gray-800">
            About
          </a>
          <a href="/contact" className="text-gray-600 hover:text-gray-800">
            Contact
          </a>
        </div>

        <div className="md:hidden">
          <button
            className="text-gray-600 hover:text-gray-800 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 6H20M4 12H20M4 18H20"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="mt-4 md:hidden">
          <a href="/about" className="block mb-2 text-gray-600 hover:text-gray-800">
            About
          </a>
          <a href="/contact" className="block text-gray-600 hover:text-gray-800">
            Contact
          </a>
        </div>
      )}
    </header>
  );
};


const BannerReel = () => {
  const handleScrollToWeAre = () => {
    const weAreSection = document.getElementById('WeAre');
    if (weAreSection) {
      window.scrollTo({
        top: weAreSection.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <main className="h-screen w-screen overflow-x-hidden">
      <div className="absolute -z-30">
        <button onClick={handleScrollToWeAre}>
          <video autoPlay loop muted className="object-cover -translate-y-28"
            style={{
              marginBottom: "5em",
              height: "140%",
              position: "fixed",
            }}>
            <source
              rel="preload"
              src="../videos/headliner.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>  </button>
        <div className="z-50">
          <MouseGlow /></div>
      </div>
    </main >
  );
};

const BannerPhoto = () => {
  return (
    <main className="bg-peach w-screen">
      <div className="w-screen h-auto">
        <Image
          src="/photos/long-banner.png"
          alt="Banner Photo"
          width={"4000px"}
          height={"400px"}
        />
      </div>
    </main>
  );
};


const PricingSection = () => {
  const tiers = [
    { name: 'Flex', features: ['Feature 1', 'Feature 2'], audience: 'Small Businesses', price: '$10/month' },
    { name: 'Standard', features: ['Feature 1', 'Feature 2', 'Feature 3'], audience: 'Medium Businesses', price: '$20/month' },
    { name: 'Pro', features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'], audience: 'Enterprise', price: '$50/month' },
  ];

  const [activeTier, setActiveTier] = useState(null);

  const handleBubbleInteraction = (tierName) => {
    if (activeTier === tierName) {
      setActiveTier(null);
    } else {
      setActiveTier(tierName);
    }
  };

  return (
    <div className="bg-gray-100 py-16 font-Montserrat">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-center mb-8 space-x-4">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`flex items-center justify-center px-8 py-6 rounded-full cursor-pointer bg-white text-gray-700 hover:bg-blue-500 hover:text-white transition-colors`}
              onMouseEnter={() => handleBubbleInteraction(tier.name)}
              onMouseLeave={() => handleBubbleInteraction(null)}
            >
              {tier.name}
            </div>
          ))}
        </div>

        {activeTier && (
          <div className="p-4 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">{activeTier} Tier</h2>
            <div className="grid gap-4">
              {tiers.find((tier) => tier.name === activeTier).features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{feature}</span>
                </div>
              ))}
              <p className="text-gray-600">Best for: {tiers.find((tier) => tier.name === activeTier).audience}</p>
              <p className="text-gray-600">Price: {tiers.find((tier) => tier.name === activeTier).price}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};


const WeAre = () => {
  const [showFullText, setShowFullText] = useState(false);
  return (
    <main id="WeAre" className="bg-peach flex-col w-screen pt-12 md:pr-11">

      <div>
        <div
          className="font-bold text-7xl lg:text-8xl font-Monteserrat px-64 md:px-64 pt-24 md:pt-16 mt-4 text-center pb-44"
        >
          We Are <br></br>
          BRGR JOINT
          <span
            onMouseEnter={() => setShowFullText(true)}
            onMouseLeave={() => setShowFullText(false)}
            className={`pt-12 text-xs ease-in-out duration-300 md:text-base lg:text-xl marquee text-center font-normal mb-4 ${showFullText ? 'block' : 'hidden'
              }`}
          >
            {showFullText ? (
              <>
                BRGR JOINT Productions is a dynamic production house headquartered in Las Vegas and San Diego. We amplify the voices of those who empower through compelling visual and auditory storytelling.

                Specializing in capturing the essence of impactful institutions and serving renowned figures and organizations, our portfolio spans photography, videography, sound design, and graphic arts, all rooted in faith, dedication, education, and prosperity.

                From live events to commercials and graphics, our passion shines through. While based in Las Vegas and San Diego, our influence extends globally.

                Guided by faith, influence, servitude, and abundance, we're in a constant journey of evolution.

                Our services cover video, sound, music, and graphic design – transforming dreams into reality.

                At BRGR JOINT Productions, we're storytellers and partners in impactful narratives. Join us in leaving a lasting mark.
              </>
            ) : (
              "A full-service production house that helps those who help others. We specialize in giving a voice to those who specialize in empowering others. With expertise in schools, universities, non-profits, and churches, our lenses were made to capture the essence of your mission, vision, and message."
            )}
          </span>
        </div>
      </div>
    </main>
  );
};


const VideoPortfolio = () => {
  return (
    <div id="VideoPortfolio" className="w-full bg-white flex-col justify-center select-none md:pb-72">
      <div>
        <text className="opacity-0 relative font-mono text-xs italic -right-14 -top-2 md:text-xl xl:text-3xl drop-shadow-sm">World Vision Rwanda | Travel Doc</text>
        <div className="flex h-full items-center select-none px-4 pt-2 md:px-32">
          <video muted autoPlay loop
            className="hover:scale-105 ease-in-out duration-300 w-4/5 md:w-1/2 rounded-3xl z-10 hover:drop-shadow-5xl" preload="auto">
            <source src="./videos/africa-tour.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="text-black opacity-5 font-bold text-5xl xl:text-9xl top-0 left-0 w-full h-full">
            <div className="marquee overflow-hidden ">
              <Marquee autoFill speed={160} pauseOnHover>
                World Vision Rwanda &nbsp;
              </Marquee>
            </div>
            <div className="marquee overflow-hidden">
              <Marquee autoFill direction="right" speed={120} pauseOnHover>
                Travel Documentary &nbsp;
              </Marquee>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-32 sm:pt-8 md:pb-44 lg:pb-2">
        <text className="opacity-0 relative font-mono text-xs italic md:-right-96 top-12 xl:-right-224 md:text-xl xl:text-3xl drop-shadow-sm">Youth Community Center | "Meet Alex"</text>
        <div className="flex h-full items-center select-none px-2 sm:pt-32 lg:pt-44 md:px-32">
          <div className="text-black opacity-5 font-bold text-5xl xl:text-9xl w-full h-full">
            <div className="marquee overflow-hidden ">
              <Marquee autoFill speed={160} pauseOnHover>
                Youth Community Center &nbsp;
              </Marquee>
            </div>
            <div className="marquee overflow-hidden">
              <Marquee autoFill direction="right" speed={120} pauseOnHover>
                "Meet Alex" &nbsp;
              </Marquee>
            </div>
          </div>
          <video muted autoPlay loop
            className="hover:scale-105 ease-in-out duration-300 w-4/5 md:w-1/2 absolute right-8 rounded-3xl z-10 hover:drop-shadow-5xl" preload="auto">
            <source src="./videos/tb-ent.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <div className="pt-32 sm:pt-48 md:pb-44 lg:pb-2">
        <text className="opacity-0 relative font-mono text-xs italic -right-14 -top-2 md:text-xl xl:text-3xl drop-shadow-sm">Bayview San Diego | Social Media </text>
        <div className="flex h-full items-center select-none px-4 pt-2 md:px-32">
          <video muted autoPlay loop
            className="hover:scale-105 ease-in-out duration-300 w-4/5 md:w-1/2 rounded-3xl z-10 hover:drop-shadow-5xl" preload="auto">
            <source src="./videos/bayview-highlight.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="text-black opacity-5 font-bold text-5xl xl:text-9xl top-0 left-0 w-full h-full">
            <div className="marquee overflow-hidden ">
              <Marquee autoFill speed={160} pauseOnHover>
                Bayview San Diego &nbsp;
              </Marquee>
            </div>
            <div className="marquee overflow-hidden">
              <Marquee autoFill direction="right" speed={120} pauseOnHover>
                Social Media &nbsp;
              </Marquee>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-32 sm:pt-48">
        <text className="opacity-0 relative font-mono text-xs italic md:-right-96 top-12 xl:-right-224 md:text-xl xl:text-3xl drop-shadow-sm">Las Vegas Pop Rapper | Music Video</text>
        <div className="flex h-full items-center select-none px-2 sm:pt-32 lg:pt-44 md:px-32">
          <div className="text-black opacity-5 font-bold text-5xl xl:text-9xl w-full h-full">
            <div className="marquee overflow-hidden ">
              <Marquee autoFill speed={160} pauseOnHover>
                Las Vegas Pop Rapper &nbsp;
              </Marquee>
            </div>
            <div className="marquee overflow-hidden">
              <Marquee autoFill direction="right" speed={120} pauseOnHover>
                Music Video &nbsp;
              </Marquee>
            </div>
          </div>
          <video muted autoPlay loop
            className="hover:scale-105 ease-in-out duration-300 w-4/5 md:w-1/2 absolute right-7 rounded-3xl z-10 hover:drop-shadow-5xl" preload="auto">
            <source src="./videos/music-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>


        </div>
      </div>
    </div>
  );
};


const BenefitsGrid = () => {
  const features = [
    {
      icon: <i className="fas fa-users fa-4x"></i>,
      title: 'Specialists',
      text: 'We stick to our niche – non-profits, schools, and churches. Our focused experience within these sectors enables us to deliver exceptional results tailored to your unique needs.',
    },
    {
      icon: <i className="fas fa-rocket fa-4x"></i>,
      title: 'Super Duper Fast',
      text: 'While project timelines vary, we always deliver your content swiftly without compromising quality.',
    },
    {
      icon: <i className="fas fa-medal fa-4x"></i>,
      title: 'Top-Flight Quality',
      text: 'Experience unparalleled excellence available whenever you need it.',
    },
    {
      icon: <i className="fas fa-adjust fa-4x"></i>,
      title: "We're Flexible",
      text: 'Tailor your services to match your demands – increase, decrease, pause, or cancel services at any time.',
    },
    {
      icon: <i className="fas fa-layer-group fa-4x"></i>,
      title: 'Diverse',
      text: 'We excel in projects of all sizes and can support your needs from start to finish.',
    },
    {
      icon: <i className="fas fa-shield-alt fa-4x"></i>,
      title: 'Never Share',
      text: 'Everything we do is for you and you only, and our work never lacks originality.',
    },
  ];

  return (
    <div id="Benefits" className="flex flex-col items-center justify-center w-full px-24 pt-32 pb-32 font-monteserat">
      <h1 className="text-center text-8xl font-bold mb-24">Membership Benefits</h1>
      <div className="grid grid-cols-3 gap-4">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center p-4 bg-white rounded-lg">
            <span className="text-blue-500">{feature.icon}</span> {/* Apply blue color */}
            <h3 className="mt-4 text-xl font-bold">{feature.title}</h3>
            <p className="mt-2 text-gray-700">{feature.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const TiersSection = () => {
  return (
    <div id="services" className="bg-peach py-10">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-6">
          Video Production Pricing - VideoFresh
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white shadow p-8 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Basic Package</h3>
            <p className="text-gray-600 mb-4">
              Our basic package offers essential video production services to get
              you started.
            </p>
            <p className="text-lg font-semibold mb-4">$499</p>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-full">
              Get Started
            </button>
          </div>
          <div className="bg-white shadow p-8 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Standard Package</h3>
            <p className="text-gray-600 mb-4">
              Our standard package includes more features and customization options.
            </p>
            <p className="text-lg font-semibold mb-4">$799</p>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-full">
              Get Started
            </button>
          </div>
          <div className="bg-white shadow p-8 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Premium Package</h3>
            <p className="text-gray-600 mb-4">
              The premium package offers top-tier video production with all the
              bells and whistles.
            </p>
            <p className="text-lg font-semibold mb-4">$1199</p>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-full">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const DopeStuff = () => (
  <section id="DopeStuff" className="flex bg-white sm:pt-64 md:items-start pb-24 ">
    <div className="justify-center pl-12 z-0">
      <video autoPlay loop muted className="md:w-2xl xl:w-4xl md:overflow-y-auto sm:rounded-3xl md:rounded-2xl md:w-auto">
        <source rel="preload" src={"../videos/gallery1.mp4"} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
    < div className="md:z-0 md:pr-12 md:py-10 md:overflow-hidden md:sticky translate-y-24 md:top-0 md:w-full" >
      <h2 className="font-bold md:text-9xl md:py-2 md:w-full md:text-left md:pl-32 md:z-10">
        WE <span className="text-blue-500"> CREATE </span><br></br>REALLY<span className="text-blue-500"> DOPE </span><br></br>STUFF.</h2>
      <a href="/contact" className="block bg-blue-500 hover:bg-gray-500 w-60 text-white text-xl translate-x-44 font-bold py-3 px-1 rounded-2xl text-center">
        Chat With Us
      </a>
    </div >

  </section >
);


const Perfection = () => (
  <section id="Perfection" className="bg-white flex md:items-start w-full pb-96 pt-72 overflow-x-none">
    <div className="z-0 w-full top-0 sticky overflow-hidden">
      <h2 className="font-bold md:text-6xl lg:text-8xl xl:text-9xl md:py-4 md:w-full md:text-left pl-40 z-10 break-all	">
        PERFECTION <br></br><span className="text-blue-500"> IS OUR </span><br></br>LOVE<span className="text-blue-500"><br></br> LANGUAGE </span>
      </h2>
      <a href="/contact" className="block bg-blue-500 hover:bg-gray-500 w-72 text-white text-2xl translate-x-44 font-bold py-4 px-2 rounded-3xl text-center">
        Chat With Us
      </a>
    </div>
    <div className="justify-center pl-8 pr-48 z-0">
      <video autoPlay loop muted className="md:overflow-y-auto md:rounded-3xl md:w-full">
        <source rel="preload" src={"../videos/bts1.mp4"} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  </section>
);


const FaqSection = () => (
  <div id="FaqSection">
    < MDBContainer className="mt-5 font-Montserrat pb-12" style={{ maxWidth: '1000px' }}>
      <MDBTypography
        tag="h3"
        className="text-center mb-4 pb-2 text-9xl text-primary fw-bold"
      >
        FAQs
      </MDBTypography>
      <p className="text-center mb-5">
        Find the answers for the most frequently asked questions below
      </p>
      <MDBAccordion alwaysOpen initialActive={1} flush>
        <style>
          {`
          .accordion-item .accordion-button:not(.collapsed) {
            background-color: transparent;
            box-shadow: none;
          }
          
          .accordion-item .accordion-button:focus {
            box-shadow: none;
          }
          
          .accordion-item .accordion-button {
            padding: 1rem 0;
          }
          
          .accordion-item .accordion-collapse {
            border: none;
            background-color: transparent;
          }
          
          .accordion-item .accordion-body {
            padding: 0;
          }
        `}
        </style>
        <MDBAccordionItem collapseId={1} headerTitle="What's the turnaround time look like?">
          We're on it! You'll get your stuff within just 48 hours.
        </MDBAccordionItem>
        <MDBAccordionItem collapseId={2} headerTitle="How are you completing it so quickly?">
          Short answer, because we're skilled! Our expertise makes things happen in a snap. With over leads having over 10 years experience, you're in good hands.
        </MDBAccordionItem>
        <MDBAccordionItem collapseId={3} headerTitle="Why not hire someone full-time, you know?">
          You've got a point! Hiring a full-timer can come at a hefty cost of over $100,000 a year, plus perks. And finding the perfect fit? That's a journey. Also, why pay for downtime when our monthly plan lets you take a break?
        </MDBAccordionItem>
        <MDBAccordionItem collapseId={4} headerTitle="What if I'm not connecting with the work?">
          No worries at all! We'll fine-tune until you're completely satisfied. Your happiness is our priority.
        </MDBAccordionItem>
        <MDBAccordionItem collapseId={5} headerTitle="Tell me about this 'pause' option.">
          Life can get hectic, right? Feel free to hit pause if things get a bit overwhelming.
        </MDBAccordionItem>
        <MDBAccordionItem collapseId={6} headerTitle="Can I get a refund, though?">
          Unfortunately, due to our commitment to top-quality work, we can't provide refunds.
        </MDBAccordionItem>
        <MDBAccordionItem collapseId={7} headerTitle="So do you need my social media password?">
          Yes, we need the passwords to whatever account you would like managed. If that still doesn't ease your sould, we can create a fresh account.
          You can also take the lead with our standard package and post the content we create on your own terms.
        </MDBAccordionItem>
        <MDBAccordionItem collapseId={8} headerTitle="Is my password safe in your hands?">
          Absolutely secure! Our reliable manager is the only one with access to your login details.
        </MDBAccordionItem>
        <MDBAccordionItem collapseId={9} headerTitle="So, who's part of your video and photo crew?">
          We've got a skilled team for every project – no matter the size. Our network covers all bases.
        </MDBAccordionItem>
        <MDBAccordionItem collapseId={10} headerTitle="Gear check, what equipment do you use?">
          Think Blackmagic Pocket Cinemas, Canon EOS Rs, Canon M50mkii, Canon 24-105mm, Tamron 24-70, and Rokinon Cin-E Lenses and all around top-notch gear ready to roll.
        </MDBAccordionItem>
      </MDBAccordion>
    </MDBContainer >
  </div >
);

const OnStageSection = () => (
  <section id="OnStageSection" className="px-10 py-10 bg-white">
    <div className="flex">
      <h3 className="text-9xl font-bold py-1 dark:text-white pr-20">
        <br />
        HELPING <br />
        <span className="text-blue-500">VISIONARIES</span> <br />
        FIND THEIR<br />
        <span className="text-blue-500">VOICE</span>
        <a href="/contact" className="block bg-blue-500 hover:bg-gray-500 w-60 text-white text-xl font-bold py-3 px-1 rounded-2xl text-center">
          Chat With Us
        </a>
      </h3>

      <div className="flex-1 ease-in-out duration-300 ">
        <Image
          className="object-cover"
          width={'1100vw'}
          height={'1500vh'}
          layout="responsive"
          src={onstage}
        />
      </div>
    </div>
  </section>
);


const FooterNav = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="fixed z-40 bottom-20 left-10 right-10 font-mono font-bold w-1/3 p-2 bg-primary text-white mx-auto rounded-2xl shadow-2xl">
      <div className="flex justify-center text-md ">
        <button style={{ borderRadius: "50%", }} className="hover:bg-white hover:text-black rounded-lg p-1.5 mx-3" onClick={() => scrollToSection('ProductOffering')}>
          Our Concept
        </button>
        <button style={{ borderRadius: "50%", }} className="hover:bg-white hover:text-black rounded-lg p-1.5 mx-3" onClick={() => scrollToSection('VideoPortfolio')}>
          Our Work
        </button>
        <button style={{ borderRadius: "50%", }} className="hover:bg-white hover:text-black rounded-lg p-1.5 mx-3" onClick={() => scrollToSection('Benefits')}>
          Benefits
        </button>
        <button style={{ borderRadius: "50%", }} className="hover:bg-white hover:text-black rounded-lg p-1.5 mx-3" onClick={() => scrollToSection('services')}>
          Services
        </button>

        <button style={{ borderRadius: "50%", }} className="hover:bg-white hover:text-black rounded-lg p-1.5 mx-3" onClick={() => scrollToSection('FaqSection')}>
          FAQs
        </button>
      </div>
    </footer >
  );
};

export default function Home() {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const delay = setTimeout(() => {
      setShowFooter(true);
    }, 3000);

    return () => clearTimeout(delay);
  }, []);
  return (
    <div>
      <Head>
        <title>Creativity Done Right</title>
        <meta name="description" content="Taking Creativity To The Next" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
      </Head>
      <main className="overflow-x-hidden">
        <main className=" cursor-none ">
          <BannerReel />
        </main >
        <main className="select-none">
          <BannerPhoto />
          <WeAre />
          <VideoPortfolio />
        </main>
      </main>
      <main className=" select-none bg-white">
        <BenefitsGrid />
        <DopeStuff />
        <TiersSection />
        <Perfection />
        <FaqSection />
      </main>
      <main>
        <main className=" bg-white select-none overflow-x-hidden">
          <OnStageSection />
        </main>
        <main className="overflow-x-hidden">
        </main >
        <SplashScreen />
        <div style={{ opacity: showFooter ? 1 : 0, transition: 'opacity .5s ease-in-out' }}>

          {showFooter && <FooterNav />} </div>
      </main>
    </div >
  );
}
