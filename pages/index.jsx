"use clinet"
import Head from "next/head";
import React, { useState, useEffect } from 'react';
import Image from "next/image";
import 'bootstrap/dist/css/bootstrap.min.css';

import "pages/components/marquee/marquee.module.css"

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
    <main className="h-screen w-screen">

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
          </video> </button>
        <div className="z-50">
          <MouseGlow /></div>
      </div>
    </main >
  );
};

const OurConcept = () => {
  const features = [
    {
      icon: <i className="fas fa-video fa-4x"></i>,
      title: 'Full Service Production',
      text: 'We do commercials, testimonials, and podcasts, as well as both photo and video for concerts and events.',
    },
    {
      icon: <i className="fas fa-hashtag fa-4x"></i>,
      title: 'Social Media Management',
      text: 'We can conceptualize, create, edit, and post your videos, graphics or other content.',
    },
    {
      icon: <i className="fas fa-laptop fa-4x"></i>,
      title: 'Video Editing',
      text: 'We can edit videos of all lengths with packages supporting up to 4k RAW.',
    },
  ];
  return (
    <main id="OurConcept" className="bg-white flex-col w-screen pt-6 md:pr-11 pb-24">
      <p className="font-bold text-4xl lg:text-6xl font-Montserrat md:px-72 pt-24 md:pt-16 mt-4 text-center">CONTENT ON YOUR TERMS</p>
      <p className="font-light text-xl lg:text-2xl font-Montserrat px-80 text-center ">We take your mission and vision and translate it into pixels to be shared with the world.</p>
      <div className="flex flex-col items-center justify-center w-full lg:px-44 xl:px-44 pt-2 pb-2 font-Montserrat">
        <div className="grid grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center p-4 bg-white rounded-lg">
              <span className="text-blue-500">{feature.icon}</span>
              <h3 className="mt-4 text-xl font-bold">{feature.title}</h3>
              <p className="mt-2 text-gray-700">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};


const VideoPortfolio = () => {
  return (
    <div id="VideoPortfolio" className="bg-peach flex-col justify-center select-none md:pb-96">
      <div className="bg-peach flex-col w-screen md:pr-11 pt-16 pb-8">
        <h1 className="font-bold text-7xl lg:text-8xl text-black font-Montserrat text-center ">OUR WORK</h1>
        <h2 className="font-light text-xl lg:text-3xl text-black font-Montserrat text-center ">Creative. Unique. Fast. Dope.</h2>
        <h3 className="font-light text-xl lg:text-2xl text-black font-Montserrat text-center pt-4  ">
          <button className="bg-blue-500 p-24 text-center font-bold text-white py-6 rounded-5 hover:-translate-y-4 hover:scale-105 ease-in-out duration-700"
            style={{
              boxShadow: '8px 3px 0px 2px rgba(0, 0, 0, 0.8)',
              hover: 'none',
            }}>
            View All Work
          </button></h3>
      </div>

      <div>
        <text className="opacity-0 relative font-mono text-xs italic -right-14 -top-2 md:text-xl xl:text-3xl drop-shadow-sm">World Vision Rwanda | Travel Doc</text>
        <div className="flex h-full items-center select-none px-4 pt-2 md:px-32">
          <video muted autoPlay loop
            className="hover:scale-105 ease-in-out duration-700 w-4/5 md:w-1/2 rounded-3xl z-10 hover:drop-shadow-5xl" preload="auto">
            <source src="./videos/africa-tour.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="text-white hover:opacity-100 opacity-20 font-bold text-5xl xl:text-9xl top-0 left-0 w-full h-full">
            <div className="marquee">
              <Marquee autoFill speed={160}>
                World Vision Rwanda &nbsp;
              </Marquee>
            </div>
            <div className="marquee">
              <Marquee autoFill direction="right" speed={120}>
                Travel Documentary &nbsp;
              </Marquee>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-32 sm:pt-8 md:pb-44 lg:pb-2">
        <text className="opacity-0 relative font-mono text-xs italic md:-right-96 top-12 xl:-right-224 md:text-xl xl:text-3xl drop-shadow-sm">Youth Community Center | "Meet Alex"</text>
        <div className="flex h-full items-center select-none px-2 sm:pt-32 lg:pt-44 md:px-32">
          <div className="text-white opacity-20  hover:opacity-100 font-bold text-5xl xl:text-9xl w-full h-full">
            <div className="marquee overflow-hidden ">
              <Marquee autoFill speed={160} >
                Youth Community Center &nbsp;
              </Marquee>
            </div>
            <div className="marquee overflow-hidden">
              <Marquee autoFill direction="right" speed={120} >
                "Meet Alex" &nbsp;
              </Marquee>
            </div>
          </div>
          <video muted autoPlay loop
            className="hover:scale-105 ease-in-out duration-700 w-4/5 md:w-1/2 absolute right-8 rounded-3xl z-10 hover:drop-shadow-5xl" preload="auto">
            <source src="./videos/tb-ent.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <div className="pt-32 sm:pt-48 md:pb-44 lg:pb-2">
        <text className="opacity-0 relative font-mono text-xs italic -right-14 -top-2 md:text-xl xl:text-3xl drop-shadow-sm">Bayview San Diego | Social Media </text>
        <div className="flex h-full items-center select-none px-4 pt-2 md:px-32">
          <video muted autoPlay loop
            className="hover:scale-105 ease-in-out duration-700 w-4/5 md:w-1/2 rounded-3xl z-10 hover:drop-shadow-5xl" preload="auto">
            <source src="./videos/bayview-highlight.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="text-white opacity-20  hover:opacity-100 font-bold text-5xl xl:text-9xl top-0 left-0 w-full h-full">
            <div className="marquee overflow-hidden ">
              <Marquee autoFill speed={160} >
                Bayview San Diego &nbsp;
              </Marquee>
            </div>
            <div className="marquee overflow-hidden">
              <Marquee autoFill direction="right" speed={120} >
                Social Media &nbsp;
              </Marquee>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-32 sm:pt-48">
        <text className="opacity-0 relative font-mono text-xs italic md:-right-96 top-12 xl:-right-224 md:text-xl xl:text-3xl drop-shadow-sm">Las Vegas Pop Rapper | Music Video</text>
        <div className="flex h-full items-center select-none px-2 sm:pt-32 lg:pt-44 md:px-32">
          <div className="text-white opacity-20  hover:opacity-100 font-bold text-5xl xl:text-9xl w-full h-full">
            <div className="marquee overflow-hidden ">
              <Marquee autoFill speed={160} >
                Las Vegas Pop Rapper &nbsp;
              </Marquee>
            </div>
            <div className="marquee overflow-hidden">
              <Marquee autoFill direction="right" speed={120} >
                Music Video &nbsp;
              </Marquee>
            </div>
          </div>
          <video muted autoPlay loop
            className="hover:scale-105 ease-in-out duration-700 w-4/5 md:w-1/2 absolute right-7 rounded-3xl z-10 hover:drop-shadow-5xl" preload="auto">
            <source src="./videos/music-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>


        </div>
      </div>
    </div >
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
    <div id="Benefits" className="flex flex-col bg-white items-center justify-center w-full px-24 pt-24 pb-2 font-Montserrat">
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

const DopeStuff = () => (
  <section id="DopeStuff" className="flex bg-white sm:pt-24 md:items-start pb-24 ">
    <div className="justify-center pl-12 z-0">
      <video autoPlay loop muted className="md:w-2xl xl:w-4xl md:overflow-y-auto sm:rounded-3xl md:rounded-2xl md:w-auto">
        <source rel="preload" src={"../videos/gallery1.mp4"} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
    < div className="md:z-0 md:pr-12 md:pb-10 md:overflow-hidden md:sticky md:top-0 md:w-full" >
      <h2 className="font-bold text-8xl xl:text-[7rem] md:py-2 md:w-full md:text-left md:pl-32 md:z-10">
        WE <span className="text-blue-500"> CREATE </span><br></br>REALLY<span className="text-blue-500"> DOPE </span><br></br>STUFF.</h2>
      <a href="/contact" className="block bg-blue-500 hover:bg-gray-500 w-60 text-white text-xl translate-x-44 font-bold py-3 px-1 rounded-2xl text-center">
        Chat With Us
      </a>
    </div >

  </section >
);

const ScopeofWork = () => (
  <main className="bg-peach h-screen overflow-hidden p-4 ">
    <main id="ScopeofWork" className="bg-peach flex-col w-screen">
      <p className="font-bold text-blue-500 text-4xl lg:text-6xl font-Montserrat px-96 pt-24 md:pt-6 mt-4 text-center">Scope of Our Work</p></main>
    <div className="w-4/5 h-screen absolute left-52 right-52 ">
      <div className="h-3/5 text-xl xl:text-2xl border-8 border-primary text-white bg-darkpeach rounded-lg grid grid-cols-3 grid-rows-5 gap-4 pt-12 px-14 font-Montserrat shadow-lg font-bold">
        {[
          'Commercials',
          'Event Videography',
          'Event Photography',
          'Social Media Graphics',
          'Sermon Clips',
          'Podcast Editing',
          'LED Wall Graphics',
          'Intro Bumpers',
          'Podcast Clips',
          'Church Service Recap',
          'Event Recap Reel',
          'Digital Ads',
          'Brochures',
          'Event Flyers',
          'Concert Photography',
        ].map(item => (
          <p key={item} style={{ position: 'relative' }}>
            {item}
            <span
              style={{
                position: 'absolute',
                left: 0,
                top: '2em', // Adjust this value to move the underline up
                width: '80%',
                height: '.2em',
                backgroundColor: 'white',
                borderRadius: '30%',
                opacity: 1,
              }}
            ></span>
          </p>
        ))}
      </div>
    </div>
  </main >
);

const Perfection = () => (
  <section id="Perfection" className="bg-blue-500 flex md:items-start w-full pb-24 pt-12">
    <div className="z-0 w-full top-0 sticky overflow-hidden">
      <h2 className="font-bold md:text-6xl lg:text-6xl xl:text-8xl md:py-4 md:w-full md:text-left pl-40 z-10 break-all	text-black ">
        PERFECTION <br></br><span className="text-white"> IS OUR </span><br></br>LOVE<span className="text-white"><br></br> LANGUAGE </span>
      </h2>
      <a href="/contact" className="block bg-white hover:bg-blue-800 hover:scale-105 w-72 text-black hover:text-peach text-2xl translate-x-44 font-bold py-4 px-2 rounded-3xl text-center">
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

const PricingTab = ({ planName, price, planDescription, features, stripeLink }) => (
  <div id="pricing" className="h-full pb-24">
    <div
      className="relative flex flex-col h-full p-6 pt-14 border-4 border-slate-200 rounded-3xl shadow-white shadow-2xl"
      style={{
        background:
          planName === 'Short Form Essentials'
            ? '#FF6F61'
            : planName === 'Long Form Essentials'
              ? '#2196F3'
              : '#333',
        color:
          planName === 'Combo Package' || planName === 'Long Form Essentials'
            ? 'inherit'
            : 'inherit',
      }}
    >
      <div className="mb-5">
        <div className="text-white text-2xl font-extrabold mb-1">{planName}</div>
        <div className="inline-flex items-baseline mb-2">
          <span className="text-white font-bold text-5xl">$</span>
          <span className="text-white font-bold text-8xl">{price.monthly}</span>
          <span className="text-white font-xl">/mo</span>
        </div>
        <div className="text-sm text-white mb-5">{planDescription}</div>
        <div className="xl:px-12">
          <a
            className="w-1/3 inline-flex justify-center font-Montserrat whitespace-nowrap rounded-2xl bg-white border-white 
          border-xl px-32 py-2.5 text-3xl text-blue-500 no-underline font-bold hover:scale-105 hover:text-black transition-all shadow-2xl ease-in-out duration-500"
            href={stripeLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Started
          </a>
        </div>
      </div>
      <div className="rounded-lg bg-white bg-opacity-20 p-4">
        <div className="text-black font-extrabold mb-3">Includes:</div>
        <ul className="text-white text-sm space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <svg
                className="w-3 h-3 fill-blue-500 mr-3"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span className="text-black font-semibold text-md">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

const Pricing = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const totalHeight = document.documentElement.scrollHeight - windowHeight;
      const newScrollPercentage = (scrollTop / totalHeight) * 100;
      setScrollPercentage(newScrollPercentage);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="bg-offblack">
      <p className="text-white font-bold text-4xl lg:text-6xl font-Montserrat px-96 pt-16 md:pt-24 text-center">Our Pricing Options</p>
      <p className="text-white font-light text-xl lg:text-3xl font-Montserrat px-96 md:pt-4 pb-14 text-center">We have affordable packages for every situation</p>
      <div className="text-white font-Montserrat max-w-sm mx-auto grid gap-6 lg:grid-cols-3 items-start lg:max-w-7xl px-6">

        <PricingTab
          planName="Combo Package"
          price={{ monthly: 1999 }}
          planDescription="Ideal for growing content creators, podcasters, and YouTubers that are looking to grow their reach in the quickest way possible."
          features={[
            'Everything in the Short Form Essentials',
            'Everything in the Long Form Essentials',
            'Unlimited Revisions',
          ]}
          stripeLink="STRIPE_LINK_COMBO_PACKAGE"
        />

        <PricingTab
          planName="Short Form Essentials"
          price={{ monthly: 799 }}
          planDescription="Ideal for vertical sermon highlights, talking heads, short podcast clips, real estate tours, and quick updates."
          features={[
            'up to 7 vertical videos a week',
            'Completed in order received.',
            'Final video under 90 seconds',
            'Up to 1080p RAW footage provided by you.',
            'Spell checked captions.',
            'Unlimited Revisions.',
          ]}
          stripeLink="STRIPE_LINK_SHORT_FORM_ESSENTIALS"
        />

        <PricingTab
          planName="Long Form Essentials"
          price={{ monthly: 1499 }}
          planDescription="Ideal for vloggers, short interviews, commentary, live streamers, financial & educational YouTube creators."
          features={[
            '2 weekly videos',
            'You provide up to 1080p quality',
            'Each video up to 10 minutes long',
            'Perfect for diving into details and presentations',
            'Unlimited Revisions',
          ]}
          stripeLink="STRIPE_LINK_LONG_FORM_ESSENTIALS"
        />
      </div>
    </div>
  );
};

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

const OnStageSection = () => {
  const features = [
    {
      icon: <i className="fas fa-wallet fa-4x"></i>,
      title: 'Save Money',
      text: "A full-time senior-level creative can cost $4,000-$12,000/mo on average.",
    },
    {
      icon: <i className="fas fa-clock fa-4x"></i>,
      title: 'Save Time',
      text: "We understand the value of your time, so let us enhance your media while you focus on growing your business."
    },
    {
      icon: <i className="fas fa-paint-brush fa-4x"></i>,
      title: 'Save Effort',
      text: "We know you want what's best for your business, delegate the creating to a dedicated team of creatives.",
    },
    {
      icon: <i className="fas fa-tired fa-4x"></i>,
      title: 'Save Stress',
      text: "Collaborate with professionals who are good, fast, affordable, and never require micromanagement.",
    },
  ];
  return (
    <main id="OurConcept" className="bg-white flex-col w-screen pt-6 md:pr-11 pb-24">
      <p className="font-bold text-2xl lg:text-4xl xl:text-5xl font-Montserrat md:px-72 pt-24 md:pt-16 mt-4 text-center">Helping Visionaries Find Their Voice</p>
      <p className="font-light text-lg lg:text-xl pb-2 font-Montserrat px-80 text-center">We take your mission and vision and translate it into pixels to be shared with the world.</p>
      <div className="grid grid-cols-2 gap-4 md:px-20"> {/* Updated grid class */}
        <div className="flex items-center justify-center w-full lg:px-44 xl:px-44 pt-2 pb-2 font-Montserrat"> {/* Adjusted width */}
          <div className="grid grid-rows-3 xl:gap-2">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-center p-4 bg-white rounded-lg">
                <span className="text-blue-500">{feature.icon}</span>
                <h3 className="mt-1 xl:text-2xl font-bold">{feature.title}</h3>
                <p className="mt-1 xl:text-lg text-black">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center pt-12 justify-center w-full">
          <Image
            className="w-40 h-auto"
            src={onstage}
            alt="Onstage"
          />
        </div>
      </div>
    </main>

  );
};

const FooterNav = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="fixed z-40 bottom-20 left-10 right-10 font-mono font-bold w-full sm:w-1/2 md:w-1/2 p-2 bg-primary text-white mx-auto rounded-2xl shadow-2xl ">
      <div className="flex justify-center text-md px-4">
        <button
          style={{ borderRadius: "50%" }}
          className="hover:bg-white hover:text-black rounded-lg p-1.5 px-3"
          onClick={() => scrollToSection('OurConcept')}
        >
          Our Concept
        </button>
        <button
          style={{ borderRadius: "50%" }}
          className="hover:bg-white hover:text-black rounded-lg p-1.5 px-3"
          onClick={() => scrollToSection('VideoPortfolio')}
        >
          Our Work
        </button>
        <button
          style={{ borderRadius: "50%" }}
          className="hover:bg-white hover:text-black rounded-lg p-1.5 px-3"
          onClick={() => scrollToSection('Benefits')}
        >
          Benefits
        </button>
        <button
          style={{ borderRadius: "50%" }}
          className="hover:bg-white hover:text-black rounded-lg p-1.5 px-3"
          onClick={() => scrollToSection('pricing')}
        >
          Pricing
        </button>
        <button
          style={{ borderRadius: "50%" }}
          className="hover:bg-white hover:text-black rounded-lg p-1.5 mx-3"
          onClick={() => scrollToSection('FaqSection')}
        >
          FAQs
        </button>
      </div>
    </footer>
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
          <OurConcept />
          <VideoPortfolio />
        </main>
      </main>
      <main className=" select-none bg-white">
        <BenefitsGrid />
        <DopeStuff />
        <ScopeofWork />
        <Perfection />
        <Pricing />
      </main>
      <main>
        <main className=" bg-white select-none overflow-x-hidden">
          <OnStageSection />
          <FaqSection />
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
