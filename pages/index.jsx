"use clinet"
import Head from "next/head";
import React, { useState, useEffect } from 'react';
import Image from "next/image";
import 'bootstrap/dist/css/bootstrap.min.css';


import donaldPolaroid from "public/grammy-winner.png"
import pastorke from "public/pastorke.png"

import "pages/components/marquee/marquee.module.css"

import Marquee from "react-fast-marquee";
import MouseGlow from './components/mouse/mouseglow';
import { useSpring, animated, config } from 'react-spring';
import icon from "../public/icon.png"
import onstage from "../public/onstage.png"
import wallspic from "public/photos/wallspic.JPG"
import tishpic from "public/photos/tishpic.JPG"
import hezpic from "public/photos/hezpic.JPG"
import kelpic from "public/photos/kelpic.JPG"
import police from "public/photos/police.jpg"
import donald from "public/photos/donald.jpg"
import keion from "public/photos/keion.jpeg"
import worship from "public/photos/worship.JPG"
import trackmeet from "public/photos/trackmeet.jpg"


const SplashScreen = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Simulate loading process
    setTimeout(() => {
      setShowSplash(false);
    }, 7000); // Adjust the time as needed
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
    delay: 700,
  });

  const fadeBg = useSpring({
    to: { transform: 'scale(0)', opacity: 1, borderRadius: '50%' },
    from: { transform: 'scale(1)', opacity: 1, borderRadius: '0%' },
    config: { duration: 600 },
    delay: 1800,
  });
  const fadeLogo = useSpring({
    to: { opacity: 0 },
    from: { opacity: 1 },
    config: { duration: 600 },
    delay: 2000, // Delay after the animation sequence starts
  });

  return (
    <animated.main
      className={`${showSplash ? 'flex' : 'hidden'
        } fixed top-0 left-0 w-screen h-screen overflow-x-hidden items-center justify-center bg-white z-50`}
      style={{ ...fadeBg }}
    >
      <animated.div style={{ ...logoZoomProps }}>
        <animated.div style={{ ...fadeLogo }}>
          <animated.h1
            className="text-2xl font-semibold mb-2 w-24 h-auto mx-auto"
            style={{ ...logoSpinProps }}
          >
            <Image src={icon} alt="Logo" className="max-w-full h-auto" />
          </animated.h1>
        </animated.div>
      </animated.div>
    </animated.main>
  );
};

const BannerReel = () => {

  return (
    <a href='#OurConcept'>
      <main className="h-screen w-screen lg:cursor-none">
        <div className="absolute -z-30">
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
          </video> <div className="w-full mix-blend-overlay"><div className="fixed pl-32 w-1/4">
          </div>
          </div>
          <div className="z-50 invisible lg:visible">
            <MouseGlow /></div>
        </div >
      </main >
    </a>
  );
};

const OurConcept = () => {
  const features = [
    {
      icon: <i className="fas fa-video fa-2x lg:fa-4x"></i>,
      title: 'Full Service Production',
      text: 'We do commercials, testimonials, and podcasts, as well as both photo and video for concerts and events.',
    },
    {
      icon: <i className="fas fa-hashtag fa-2x lg:fa-4x"></i>,
      title: 'Social Media Management',
      text: 'We can conceptualize, create, edit, and post your videos, graphics or other content.',
    },
    {
      icon: <i className="fas fa-laptop fa-2x lg:fa-4x"></i>,
      title: 'Video Editing',
      text: 'We can edit videos of all lengths with packages supporting up to 4k RAW.',
    },
  ];
  return (
    <main id="OurConcept" className="bg-white flex-col lg:w-screen pt-2 lg:pt-6 lg:pr-11 lg:px-4">
      <p className="font-bold text-3xl lg:text-6xl font-Montserrat px-12 lg:px-72 pt-4 lg:pt-16 mt-4 lg:pb-6 text-center">CONTENT ON YOUR TERMS</p>
      <p className="font-light text-md lg:text-2xl lg:pb-12 font-Montserrat px-16 lg:px-80 text-center">We take your mission and vision and translate it into pixels to be shared with the world.</p>
      <div className="flex flex-col items-center justify-center w-full -mb-4 lg:px-44 xl:px-44 lg:pb-2 font-Montserrat">
        <div className="grid grid-cols-3 text-center lg:gap-4">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center p-4 bg-white rounded-lg">
              <span className="text-blue-500">{feature.icon}</span>
              <h3 className="mt-4 text-xs lg:text-xl font-bold">{feature.title}</h3>
              <p className="mt-2 text-[.55rem] lg:text-base text-gray-700">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
      <h3 className="font-light text-xs lg:text-2xl text-black font-Montserrat lg:pt-4 lg:pb-12 text-center pb-4">
        <a href="#pricing"> <button className="bg-blue-500 py-4 px-6  lg:p-24 text-center font-bold text-white lg:py-6 rounded-5 hover:-translate-y-4 hover:scale-105 ease-in-out duration-700"
          style={{
            boxShadow: '8px 3px 0px 2px rgba(0, 0, 0, 0.8)',
            hover: 'none',
          }}>
          Find The Right Plan For You
        </button></a>  </h3>
      <Marquee className="bg-peach transition-all duration-1000 hover:bg-bluewash " autoFill speed={30}>
        <div className="grid grid-cols-9 w-screen-150 lg:w-screen gap-4 py-6 px-2 transition-all duration-500">
          <Image src={tishpic} className="rounded-3xl" rel="preload" alt="portfolio image" ></Image>
          <Image src={hezpic} className="rounded-3xl" rel="preload" alt="portfolio image" ></Image>
          <Image src={wallspic} className="rounded-3xl" rel="preload" alt="portfolio image" ></Image>
          <Image src={kelpic} className="rounded-3xl" rel="preload" alt="portfolio image" ></Image>
          <Image src={police} className="rounded-3xl" rel="preload" alt="portfolio image" ></Image>
          <Image src={worship} className="rounded-3xl" rel="preload" alt="portfolio image" ></Image>
          <Image src={keion} className="rounded-3xl" rel="preload" alt="portfolio image" ></Image>
          <Image src={donald} className="rounded-3xl" rel="preload" alt="portfolio image" ></Image>
          <Image src={trackmeet} className="rounded-3xl" rel="preload" alt="portfolio image" ></Image>
        </div>
      </Marquee>
    </main>
  );
};

const Timeline = () => {
  return (
    <main>
      <div className="relative lg:flex justify-center items-center lg:h-fit bg-bluewash px-4 py-14 lg:pt-16 lg:py-32 lg:shadow-3xl lg:shadow-white">
        <div className="lg:w-11/12 text-white">
          <h1 className="justify-center text-center font-Montserrat font-extrabold text-5xl lg:text-7xl">Its Simple.</h1>
          <h2 className="justify-center text-center font-Montserrat font-normal lg:font-semibold text-base lg:text-2xl lg:pb-8">You don&apos;t have to pay a senior level creative&apos;s salary to get senior level creations.</h2>
          <div className="grid lg:grid-cols-2 items-center justify-center pt-8">
            <div className="lg:grid lg:grid-rows-4 gap-6 items-center justify-center font-Montserrat lg:pr-12 lg:text-xl:text-white">
              <div className="lg:pb-0 pb-12 flex flex-col items-center">
                <i className="far fa-comment-dots fa-3x lg:fa-4x  mb-4"></i>
                <div className="text-center text-2xl text-white px-2 lg:px-4 lg:font-normal">Subscribe to a plan & submit as many requests as you want</div>
              </div>
              <div className="lg:pb-0 pb-12 flex flex-col items-center">
                <i className="far fa-clock fa-3x lg:fa-4x mb-4"></i>
                <div className="text-center text-2xl px-2 lg:px-4 lg:font-normal">
                  Receive your files as fast as 48 hours (varies by project)
                </div>
              </div>
              <div className="lg:pb-0 pb-12 flex flex-col items-center">
                <i className="fas fa-paper-plane fa-3x lg:fa-4x  mb-4"></i>
                <div className="text-center text-2xl px-2 lg:px-4 lg:font-normal">
                  We&apos;ll make revisions until you&apos;re 100% satisfied
                </div>
              </div>
              <div className="items-center p-4">
                <a href="#pricing">
                  <button
                    className="bg-darkpeach hover:bg-[#ba4e45] justify-center items-center lg:p-24 text-sm p-3 lg:text-2xl text-center font-bold text-white lg:py-6 rounded-3xl hover:-translate-y-4 hover:scale-105 ease-in-out duration-700"
                    style={{
                      boxShadow: '8px 3px 0px 2px rgba(0, 0, 0, 0.8)',
                      hover: 'none',
                    }}
                  >
                    See Our Affordable Plans
                  </button>
                </a>
              </div>
            </div>

            <Image className="pt-4" alt="Pastor Keion Henderson" src={pastorke} rel="preload" />
          </div>
        </div>
      </div>
    </main >
  );
};

const VideoPortfolio = () => {
  return (
    <div id="VideoPortfolio" className="bg-peach lg:px-0 lg:flex-col justify-center select-none pb-44 lg:pb-96 overflow-none" >
      <div className="bg-peach flex-col w-screen md:pr-11 pt-8 lg:pt-24 pb-2 lg:pb-8">
        <h1 className="font-bold text-7xl lg:text-8xl text-black font-Montserrat text-center ">OUR WORK</h1>
        <h2 className="font-light text-xl lg:text-3xl text-black font-Montserrat text-center ">Creative. Unique. Fast. Dope.</h2>
      </div>

      <main className="">
        <a href="https://youtube.com/playlist?list=PLECR53T8KBZhYS-yms92MABDpbnYLjgXd&si=vr5vZrZ_4q3sEYsv" target="_blank" rel="noopener noreferrer" className="no-underline ">
          <div className="pt-8 lg:pt-8 pb-0 lg:pb-2">
            <text className="opacity-0 relative font-mono text-xs italic -right-14 -top-2 lg:text-xl xl:text-3xl drop-shadow-sm">Bayview San Diego | Social Media </text>
            <div className="flex h-full items-center select-none px-4 pt-2 lg:px-32">
              <video muted autoPlay loop
                className="hover:scale-105 ease-in-out duration-700 w-full md:w-1/2 rounded-3xl z-10 shadow-blue-500 shadow-2xl hover:shadow-purple-500 hover:shadow-0 0 75px 75px rgba(0, 0, 0, 1);" preload="auto">
                <source src="./videos/bayview-highlight.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="text-white opacity-20  hover:opacity-100 font-bold text-5xl xl:text-9xl top-0 left-0 w-full h-full ">
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
          </div></a>

        <a href="https://youtube.com/playlist?list=PLECR53T8KBZhfN6bPM0V7q1XmBRSba1MR&si=CcR1kWrLidgSEgvF" target="_blank" rel="noopener noreferrer" className="no-underline ">

          <div className="pt-8 lg:pt-4 pb-0 lg:pb-2">
            <text className="opacity-0 relative font-mono text-xs italic md:-right-96 top-12 xl:-right-224 md:text-xl xl:text-3xl drop-shadow-sm">Youth Community Center | &quot;Meet Alex&quot;</text>
            <div className="flex h-full items-center select-none px-2 pt-20 lg:pt-44 md:px-32">
              <div className="text-white opacity-20  hover:opacity-100 font-bold text-5xl xl:text-9xl w-full  h-fit  overflow-hidden -translate-x-24">
                <div className="marquee overflow-hidden py-2">
                  <Marquee autoFill speed={160} >
                    Youth Community Center &nbsp;
                  </Marquee>
                </div>
                <div className="marquee overflow-hidden py-2">
                  <Marquee autoFill direction="right" speed={120} >
                    &quot;Meet Alex&quot; &nbsp;
                  </Marquee>
                </div>
              </div>
              <video muted autoPlay loop
                className="hover:scale-105 ease-in-out duration-700 w-4/5 md:w-1/2 absolute right-8 rounded-3xl z-10 shadow-blue-500 shadow-2xl hover:shadow-purple-500 hover:shadow-0 0 75px 75px rgba(0, 0, 0, 1);" preload="auto">
                <source src="./videos/tb-ent.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </a>

        <a href="https://youtube.com/playlist?list=PLECR53T8KBZhfN6bPM0V7q1XmBRSba1MR&si=CcR1kWrLidgSEgvF" target="_blank" rel="noopener noreferrer" className="no-underline ">

          <div className="pt-20 lg:pt-4 pb-0 lg:pb-2">
            <text className="opacity-0 relative font-mono text-xs italic -right-14 -top-2 md:text-xl xl:text-3xl drop-shadow-sm">World Vision Rwanda | Travel Doc</text>
            <div className="flex h-full items-center select-none px-4 pt-8 lg:pt-32 md:px-32">
              <video muted autoPlay loop
                className="hover:scale-105 ease-in-out duration-700 w-4/5 md:w-1/2 rounded-3xl z-10 shadow-blue-500 shadow-2xl hover:shadow-purple-500 hover:shadow-0 0 75px 75px rgba(0, 0, 0, 1);" preload="auto">
                <source src="./videos/africa-tour.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="text-white hover:opacity-100 opacity-20 font-bold text-5xl xl:text-9xl top-0 left-0 w-full h-fit py-2 ">
                <div className="marquee overflow-hidden">
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
        </a>

        <a href="https://youtube.com/playlist?list=PLECR53T8KBZhfN6bPM0V7q1XmBRSba1MR&si=CcR1kWrLidgSEgvF" target="_blank" rel="noopener noreferrer" className="no-underline ">

          <div className="pt-52 lg:pt-32 pb-20">
            <text className="opacity-0 relative font-mono text-xs italic md:-right-96 top-12 xl:-right-224 md:text-xl xl:text-3xl drop-shadow-sm">Las Vegas Pop Rapper | Music Video</text>
            <div className="flex h-full items-center select-none lg:pt-44 lg:px-32 px-0">
              <div className="text-white opacity-20  hover:opacity-100 font-bold text-5xl xl:text-9xl w-full h-full -translate-x-24">
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
                className="hover:scale-105 ease-in-out duration-700 w-4/5 md:w-1/2 absolute right-7 rounded-3xl z-10 shadow-blue-500 shadow-2xl hover:shadow-purple-500 hover:shadow-0 0 75px 75px rgba(0, 0, 0, 1);" preload="auto">
                <source src="./videos/music-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

            </div>
          </div>
        </a>

      </main>
    </div >
  )
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
    <main className=" w-full md:h-192 ">
      <div id="Benefits" className="flex flex-col bg-[#E85556] items-center justify-center  lg:px-24  lg:pt-24  lg:pb-2 pt-4 px-8 font-Montserrat select-none">
        <h1 className="text-center text-5xl lg:text-8xl font-bold bg-[#E85556] text-white pt-8">Membership Benefits</h1>
        <div className="grid grid-rows-3 lg:grid-cols-3 gap-1 lg:gap-4">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center p-4  rounded-lg">
              <span className="text-blue-800">{feature.icon}</span> {/* Apply blue color */}
              <h3 className="lg:mt-4 text-base  text-white lg:text-xl font-bold">{feature.title}</h3>
              <p className="lg:mt-2 text-xs lg:text-base text-white">{feature.text}</p>
            </div>
          ))}
        </div>
      </div></main>
  );
};

const DopeStuff = () => (
  <main>
    <section id="DopeStuff" className="flex bg-white py-8 lg:pt-4 lg:items-start lg:pb-8 px-4 lg:px-0 select-none">
      <div className="justify-center lg:pl-12 z-0">
        <video autoPlay loop muted className="w-72 lg:overflow-y-auto sm:rounded-3xl rounded-2xl lg:w-auto">
          <source rel="preload" src={"../videos/gallery1.mp4"} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      < div className=" lg:z-0 lg:pr-12 lg:pb-10 overflow-hidden sticky lg:top-0 lg:w-full pl-2 lg:pl-0 pt-2 lg:pt-12 font-Montserrat" >
        <h2 className="font-bold text-5xl md:text-7xl lg:text-8xl xl:text-[7rem] lg:py-2 lg:w-full lg:text-left lg:pl-32 lg:z-10">
          WE <span className="text-blue-500"> CREATE </span><br></br>REALLY<span className="text-blue-500"> DOPE </span><br></br>STUFF.</h2>
        <div className="lg:pl-52 lg:py-12">
          <a href="#pricing" className=" bg-blue-500 hover:bg-peach no-underline  text-white hover:text-black text-xs px-4 py-1 lg:text-3xl transition-all duration-150 font-bold lg:py-3 lg:px-24 rounded-2xl text-center">
            Choose Your Plan
          </a></div>
      </div >

    </section >
  </main>
);

const Pastors = () => {
  return (
    <div id="pastors" className="lg:flex lg:flex-col bg-bluewash items-center justify-center lg:w-full py-8 lg:py-52 font-Montserrat">
      <h1 className="px-12 lg:px-0 text-center text-5xl lg:text-6xl font-black text-white">Pastors. Preachers. Ministers.</h1>
      <h2 className="px-12 lg:px-0 text-sm lg:w-1/2 text-center lg:text-xl text-white lg:pb-8">We love Jesus, too! Our social media packages were made with you in mind.</h2>

      <div className="lg:flex lg:pl-52 px-4 lg:px-0">
        <div className="w-full p-4 lg:w-1/3 lg:p-4 lg:pt-14">
          <Image alt="Donald Lawrence" className="lg:rounded-3xl" src={donaldPolaroid} />
        </div>
        <div className="lg:w-1/2 px-3 lg:px-4 lg:pt-32 lg:text-center">
          <div className="pb-4 lg:mb-8 lg:pl-4">
            <h1 className="font-bold lg:mb-2 text-center text-xl text-white lg:text-left lg:text-2xl">Repurpose Your Messages <i class="px-2 fa fa-heart animate-bounce"></i>
            </h1>
            <h2 className="lg:text-base font-mono lg:text-left text-center text-xs text-white">Your sermons and messages deserve to live more than once. With our
              <a className="no-underline text-red-200 lg:italic lg:hover:text-blue-500 lg:transition-all lg:duration-100" href='#pricing'>
                &nbsp;social media essentials </a>
              package, we can post a clip from your sermon every single day of the week, keeping your audience engaged.</h2>
          </div>
          <div className="pb-4 lg:mb-8 lg:pl-4">
            <h1 className="font-bold lg:mb-2 text-center text-xl text-white lg:text-left lg:text-2xl">Promote Your Events <i class="px-2 fa fa-church animate-bounce"></i></h1>
            <h2 className="lg:text-base font-mono lg:text-left text-center text-xs text-white">With our  <a className="no-underline text-red-200 lg:italic lg:hover:text-blue-500 lg:transition-all lg:duration-100" href='#pricing'>
              &nbsp;social media essentials </a>, you can receive an unlimited number of graphics that are social media ready.</h2>
          </div>
          <div className="pb-2 lg:mb-8 lg:pl-4">
            <h1 className="font-bold lg:mb-2 text-center text-xl text-white lg:text-left lg:text-2xl">Grow Your Presence<i class="px-2 fa fa-users animate-bounce"></i></h1>
            <h2 className="lg:text-base font-mono lg:text-left text-center text-xs text-white">If you think you have a message that needs to be heard, then you need a team that commits to building your platform. </h2>
          </div>
        </div>
      </div>
    </div >
  );
};

const ScopeofWork = () => (
  <main className="bg-peach h-screen lg:overflow-hidden px-3 lg:pb-0 lg:p-12 overflow-y-clip">
    <main id="ScopeofWork">
      <p className="md:flex-col md:w-screen font-bold text-blue-600 text-4xl lg:text-6xl font-Montserrat md:px-96 pt-12 md:pt-6 lg:mt-4 text-center">Scope of Our Work</p>
      <div className="md:w-4/5 md:h-screen md:absolute md:left-52 md:right-52 md:pt-6">
        <div className="h-3/5 text-lg py-4 lg:text-xl xl:text-2xl border-8 border-white lg:border-darkpeach text-blue-600 lg:text-white lg:bg-blue-600 shadow-darkpeach shadow-2xl rounded-3xl gap-4 lg:grid lg:grid-cols-3 lg:grid-rows-5 lg:gap-4 lg:pt-12 px-4 lg:px-14 font-Montserrat font-bold">
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
                className="absolute left-0 top-8 w-64 lg:w-80 h-1 bg-white lg:bg-red-500 rounded-full opacity-100"
              ></span>
            </p>
          ))}
        </div>
      </div>
    </main>
  </main>
);

const Perfection = () => (
  <section id="Perfection" className="flex bg-blue-500 py-8 md:pt-4 md:items-start md:pb-8 px-4 md:px-0">
    <div className=" md:flex-cols-2  md:flex md:z-0 md:pr-12 md:pb-10 overflow-hidden sticky md:top-0 md:w-full pl-2 md:pl-0 pt-2 md:pt-12 font-Montserrat" >
      <div>
        <h2 className=" sticky text-white font-bold text-5xl lg:text-8xl xl:text-[7rem] lg:py-2 lg:w-full lg:text-left lg:pl-32 lg:z-10">
          PERFECTION <span className="text-darkpeach"> IS OUR </span><br></br>LOVE<span className="text-darkpeach"> LANGUAGE. </span></h2>
        <div className="py-6 lg:pl-52 lg:py-12">
          <a href="#pricing" className=" bg-darkpeach hover:bg-[#ab4545] no-underline  text-white text-base px-4 py-12 lg:text-3xl transition-all duration-300 font-bold lg:py-3 lg:px-24 rounded-2xl text-center">
            Choose Your Plan
          </a>
        </div>
      </div>
      <div className="justify-center lg:pl-12 z-0">
        <video autoPlay loop muted className="w-72 lg:overflow-y-auto sm:rounded-3xl rounded-2xl lg:w-auto">
          <source rel="preload" src={"../videos/gallery1.mp4"} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

    </div >

  </section >
);

const PricingTab = ({ planName, price, planDescription, features, stripeLink }) => (
  <div className="h-full lg:pb-24 grid grid-cols-1 py-4 lg:grid-cols-1 lg:gap-2 lg:px-3 lg:py-0">
    {/* Styling based on planName */}
    <div
      className="relative flex flex-col lg:h-full p-6 pt-14 border-4 border-slate-200 rounded-3xl hover:shadow-purple-300 duration-300 shadow-purple-500 shadow-2xl hover:shadow-3xl"
      style={{
        background:
          planName === 'Social Media Essentials'
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
        {/* Display planName and price */}
        <div className="text-white text-2xl font-extrabold mb-1">{planName}</div>
        <div className="inline-flex items-baseline mb-2">
          <span className="text-white font-bold text-5xl">$</span>
          <span className="text-white font-bold text-8xl">{price.monthly}</span>
          <span className="text-white font-xl">/mo</span>
        </div>
        {/* Display planDescription and 'Get Started' link */}
        <div className="text-sm text-white mb-5">{planDescription}</div>
        <div className="xl:px-12">
          <a
            className="w-1/3 inline-flex justify-center font-Montserrat whitespace-nowrap rounded-2xl bg-white border-white 
          border-xl px-32 py-2.5 text-3xl text-blue-500 no-underline font-bold hover:scale-105 hover:text-black transition-all shadow-lg hover:shadow-2xl ease-in-out duration-500"
            href={stripeLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Started
          </a>
        </div>
      </div>
      {/* Display features */}
      <div className="rounded-lg bg-white bg-opacity-20 p-4">
        <div className="text-black font-extrabold mb-3">Includes:</div>
        <ul className="text-white text-sm space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              {/* Checkmark icon */}
              <svg
                className="w-3 h-3 fill-blue-500 mr-3"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              {/* Display feature */}
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
    // Scroll percentage calculation
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const totalHeight = document.documentElement.scrollHeight - windowHeight;
      const newScrollPercentage = (scrollTop / totalHeight) * 100;
      setScrollPercentage(newScrollPercentage);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Remove event listener on cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id="pricing" className="py-14 lg:py-8 bg-offblack">
      {/* Title and description */}
      <p className="text-white font-bold text-4xl lg:text-6xl font-Montserrat lg:px-96 lg:pt-16 lg:md:pt-24 text-center">Our Pricing Options</p>
      <p className="text-white font-light text-xl lg:text-3xl font-Montserrat pb-4 lg:px-96 lg:md:pt-4 lg:pb-14 text-center">We have affordable packages for every situation</p>
      {/* Pricing tabs */}
      <div className="text-white font-Montserrat px-4 py-0 lg:mx-auto grid gap-0 lg:gap-6  lg:grid-rows-none items-center lg:grid-cols-3 lg:items-start lg:max-w-7xl lg:px-6">
        {/* PricingTab components for different plans */}
        <PricingTab
          planName="Combo Package"
          price={{ monthly: 2249 }}
          planDescription="Ideal for business owners, event planners, concert promoters, and creatives needing commercials or photo/video work."
          features={[
            'Everything included in social media essentials.',
            'Everything included in long form essentials.',
          ]}
          stripeLink="STRIPE_LINK_COMBO_PACKAGE"
        />

        <PricingTab
          planName="Social Media Essentials"
          price={{ monthly: 899 }}
          planDescription="Ideal for vertical sermon highlights, talking heads, short podcast clips, real estate tours, and quick updates."
          features={[
            'up to 7 vertical videos a week',
            'Completed in order received.',
            'Final video under 90 seconds',
            'Up to 1080p RAW footage provided by you.',
            'Spell checked captions.',
            'We post all content for you, stuff we make and your own (optional).',
            'Unlimited Graphics',
            'Unlimited Revisions.',
          ]}
          stripeLink="https://buy.stripe.com/fZe29258J72s17q288"
        />
        <PricingTab
          planName="Long Form Essentials"
          price={{ monthly: 1699 }}
          planDescription="Ideal for YouTube, vloggers, short interviews, commentary, and live streamers."
          features={[
            '2 weekly videos',
            'You provide up to 1080p quality',
            'Each video up to 10 minutes long',
            'Perfect for diving into details and presentations',
            'Unlimited Graphics',
            'Unlimited Revisions',
          ]}
          stripeLink="https://buy.stripe.com/4gwcNGat35Yo3fy7st"
        />
      </div>
    </div>
  );
};

const Voice = () => {
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
    <main id="OurConcept" className="bg-white flex-col px-4 pt-14 lg:w-screen lg:pt-6 lg:pr-11 lg:pb-24">
      <p className="font-bold text-4xl lg:text-5xl font-Montserrat lg:px-72 lg:pt-24 md:pt-16 lg:mt-4 text-center">Helping Visionaries Find Their Voice</p>
      <p className="font-light text-lg lg:text-xl pb-10 lg:pb-2 font-Montserrat lg:px-80 text-center">We take your mission and vision and translate it into pixels to be shared with the world.</p>
      <div className="lg:grid md:grid-cols-2 md:grid-rows-2 lg:gap-4 lg:md:px-20"> {/* Updated grid class */}
        <div className="flex items-center justify-center w-full px-8 lg:px-44 xl:px-44 lg:pt-2 lg:pb-2 font-Montserrat"> {/* Adjusted width */}
          <div className="md:grid flex flex-col items-center justify-center text-center">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-center bg-white rounded-lg">
                <span className="text-blue-500">{feature.icon}</span>
                <h3 className="lg:mt-1 lg:text-md xl:text-2xl font-bold">{feature.title}</h3>
                <p className="lg:mt-1 lg:text-sm xl:text-lg text-black">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center pt-12 justify-center w-full">
          <Image
            className="lg:w-40 w-1/3 h-auto rounded-3xl"
            src={onstage}
            alt="Onstage"
          />
        </div>
      </div>
    </main>
  );
};

const FooterNav = () => {
  const scrollToSection = (sectionId, duration) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const targetPosition = section.getBoundingClientRect().top + window.pageYOffset;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const startTime = performance.now();

      function scrollStep(timestamp) {
        const currentTime = timestamp || performance.now();
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easedProgress = easeOutSlow(progress); // Custom easing function
        window.scrollTo(0, startPosition + distance * easedProgress);

        if (progress < 1) {
          requestAnimationFrame(scrollStep);
        }
      }

      // Custom easing function: Slow ease-out
      function easeOutSlow(t) {
        return 1 - Math.pow(1 - t, 0.5); // You can adjust the exponent value for different degrees of slowness
      }



      requestAnimationFrame(scrollStep);
    }
  };

  return (
    <footer className="sm:invisible md:invisible lg:visible hover:bg-black hover:shadow-2xl hover:shadow-purple-600 border-blue-500 transition-all duration-700
    fixed z-40 bottom-20 left-10 right-10 font-Montserrat font-bold w-full sm:w-1/2 md:w-1/2 xl:w-[43%] p-[.7rem] bg-blue-500 text-white
    mx-auto rounded-full shadow-black shadow-2xl drop-shadow-lg">
      <div className="flex justify-center text-sm px-4">
        <button
          style={{ borderRadius: "30%", padding: '.05em' }}
          className="hover:bg-white hover:text-black bg-blue-900 rounded-lg p-1.5 px-3 fa fa-arrow-up fa-lg"
          onClick={() => scrollToSection('OurConcept', 500)}
        ></button>
        <button
          style={{ borderRadius: "30%", padding: '.05em' }}
          className="hover:bg-white hover:text-black rounded-lg p-1.5 px-3"
          onClick={() => scrollToSection('VideoPortfolio', 500)}
        >
          Our Work
        </button>
        <button
          style={{ borderRadius: "30%" }}
          className="hover:bg-white hover:text-black rounded-lg p-1.5 px-3"
          onClick={() => scrollToSection('Benefits', 500)}
        >
          Benefits
        </button>
        <button
          style={{ borderRadius: "30%" }}
          className="hover:bg-white hover:text-black rounded-lg p-1.5 px-3"
          onClick={() => scrollToSection('pastors', 500)}
        >
          Pastors
        </button>
        <button
          style={{ borderRadius: "30%" }}
          className="hover:bg-white hover:text-black rounded-lg p-1.5 px-3"
          onClick={() => scrollToSection('ScopeofWork', 500)}
        >
          Scope of Work
        </button>
        <button
          style={{ borderRadius: "30%" }}
          className="hover:bg-white hover:text-black rounded-lg p-1.5 px-3"
          onClick={() => scrollToSection('pricing', 500)}
        >
          Pricing
        </button>
        <button
          style={{ borderRadius: "30%" }}
          className="hover:bg-white hover:text-black rounded-lg p-1.5 mx-3"
          onClick={() => scrollToSection('FaqSection', 500)}
        >
          FAQs
        </button>
      </div>
    </footer>
  );
};

const Footer = () => {
  const scrollToSection = (sectionId, duration) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const targetPosition = section.getBoundingClientRect().top + window.pageYOffset;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const startTime = performance.now();

      function scrollStep(timestamp) {
        const currentTime = timestamp || performance.now();
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easedProgress = easeOutSlow(progress); // Custom easing function
        window.scrollTo(0, startPosition + distance * easedProgress);

        if (progress < 1) {
          requestAnimationFrame(scrollStep);
        }
      }

      // Custom easing function: Slow ease-out
      function easeOutSlow(t) {
        return 1 - Math.pow(1 - t, 0.5); // You can adjust the exponent value for different degrees of slowness
      }



      requestAnimationFrame(scrollStep);
    }
  };

  return (
    <div className="bg-offblack h-full py-44 flex flex-col justify-center items-center ">
      <a href="#pricing" className="pb-12">
        <button className="no-underline text-white border-white border-8 hover:text-blue-500 hover:bg-blue-500 text-3xl lg:text-9xl font-Montserrat font-extrabold p-12 rounded-3xl transition-all duration-300">
          Get Started!
        </button>
      </a>
      <footer className="flex justify-center items-center">

        <div className="text-white text-center font-Montserrat text-2xl transition-all duration-300 lg:text-3xl font-extrabold">
          <p>Connect with us:</p>
          <div className="mt-4">
            <a href="https://www.linkedin.com/company/brgr-joint-productions" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-600 mr-4"><i className="fab fa-3x fa-linkedin"></i></a>
            <a href="https://www.instagram.com/brgrjoint.productions" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-600 mr-4"><i className="fab fa-3x fa-instagram"></i></a>
            <a href="https://www.vimeo.com/your-profile-link" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-600 mr-4"><i className="fab fa-3x fa-vimeo"></i></a>
          </div>
          <div className="mt-8 font-extrabold text-base lg:text-xl px-8" >
            <button
              style={{ borderRadius: "30%", padding: '.05em' }}
              className="hover:bg-white hover:text-black rounded-lg p-1.5 px-3 mr-2"
              onClick={() => scrollToSection('VideoPortfolio', 500)}
            >
              Our Work
            </button>
            <button
              style={{ borderRadius: "30%" }}
              className="hover:bg-white hover:text-black rounded-lg p-1.5 px-3 mr-2"
              onClick={() => scrollToSection('Benefits', 500)}
            >
              Benefits
            </button>
            <button
              style={{ borderRadius: "30%" }}
              className="hover:bg-white hover:text-black rounded-lg p-1.5 px-3 mr-2"
              onClick={() => scrollToSection('pastors', 500)}
            >
              Pastors
            </button>
            <button
              style={{ borderRadius: "30%" }}
              className="hover:bg-white hover:text-black rounded-lg p-1.5 px-3 mr-2"
              onClick={() => scrollToSection('ScopeofWork', 500)}
            >
              Scope of Work
            </button>
            <button
              style={{ borderRadius: "30%" }}
              className="hover:bg-white hover:text-black rounded-lg p-1.5 px-3 mr-2"
              onClick={() => scrollToSection('pricing', 500)}
            >
              Pricing
            </button>
            <button
              style={{ borderRadius: "30%" }}
              className="hover:bg-white hover:text-black rounded-lg p-1.5 mx-3"
              onClick={() => scrollToSection('FaqSection', 500)}
            >
              FAQs
            </button>
          </div>
        </div>
      </footer>
    </div>
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
        <main className=" lg:cursor-none ">
          <BannerReel />
        </main >
        <main className="select-none">
          <OurConcept />
          <Timeline />
          <VideoPortfolio />
        </main>
      </main>
      <main className="bg-white">
        <BenefitsGrid />
        <DopeStuff />
      </main>
      <main className="overflow-x-hidden lg:overflow-x-visible select-none bg-white">
        <Pastors />
        <ScopeofWork />
      </main>
      <Perfection />
      <Pricing />

      <main>
        <main className=" bg-white select-none overflow-x-hidden">
          <Voice />

        </main>
        <main className="overflow-x-hidden">
          <Footer />
        </main >
        <SplashScreen />
        <div style={{ opacity: showFooter ? 1 : 0, transition: 'opacity .5s ease-in-out' }}>

          {showFooter && <FooterNav />} </div>
      </main>
    </div >
  );
}
