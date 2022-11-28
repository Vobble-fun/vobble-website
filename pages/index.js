import DahekEmailCollection from "../components/dahekemailcollection"
import RadNavbar, { useOnScreen } from '../components/radnavbar'
import VButton from "../components/vButton"
import NewFooter from "../components/newfooter"
import { useEffect, useState } from "react"
import Head from "next/head"
import Link from "next/link"

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Keyboard, Pagination } from "swiper";

const testimBoldArray = ["Kids happily lapped up the content without complaining about the lack of visuals!", "Her eyes lit up when the story came over the speakers!", "Our morning ride to school have become vobble rides and stories!"]
const testimBodyArray = ["Vobble has been a very refreshing addition to my boys’ entertainment options. It has not only improved their attention span but also perked up their curiosity and creativity! My boys were actually sad that the pilot ended and are eagerly waiting for more episodes!", "I'm so thrilled to see something my kid can use by herself to stay engaged! Look forward to more and more interesting story series from Vobble - this is one entertainment I won't have to put a stop time to!", "Vobble brings the best of both the worlds story telling and imaginative thinking for kids. Totally Loving it and waiting for more to come!!"]
const testimNameArray = ["Dr. Rubina Shanawaz", "Akanksha Thakore", "Japnit Kaur"]
const testimDesignationArray = ["Uro-gynaecologist | Mother to 7yr old Namir & 9yr old Arfaan", "Consultant | Mother to 7yr old Zara", "Head SMB Marketing, Amazon | Mother to 3yr old Myra"]
const testimImageArray = ["/test3.png", "/test4.png", "/test2.png"]

export default function Dahek() {

    const [current, setCurrent] = useState(0);
    const { currentSection } = useOnScreen();
    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                const square = entry.target.querySelector('.audio-wrapper-1');
                const square1 = entry.target.querySelector('.audio-wrapper-2');

                if (entry.isIntersecting) {
                    square.classList.add('linear-audio');
                    square1.classList.add('linear-audio1');
                    return; // if we added the class, exit the function
                }

                // We're not intersecting, so remove the class!
                square.classList.remove('linear-audio');
                square1.classList.remove('linear-audio1');
            });
        });

        observer?.observe(document.querySelector('.audio-wrapper'));
    }, [])

    function carouselPrev() {
        if (current == 0) {
            setCurrent(2)
        } else if (current > 0) {
            setCurrent(current - 1)
        }
    }

    function carouselNext() {
        if (current == 2) {
            setCurrent(0)
        } else if (current < 2) {
            setCurrent(current + 1)
        }

    }

    return (
        <div className="flex flex-col">
            <Head>
                <title>Vobble Home Page</title>
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content="Vobble | Home Page" />
                <meta property="og:site_name" content="Vobble" />
                <meta property="og:url" content="https://vobble.fun/" />
                <meta property="og:description" content="Tired of negotiating screen time with your child? Introducing Vobble, India's first multi-sensory immersive 3D audio experience that kids will choose over screens!" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://vobble.fun/og-image.png?v=2" />
            </Head>

            <RadNavbar />

            {/* <img className=" hidden md:flex h-16 sm:h-24 left-[18rem] sm:left-[29rem] top-[10rem] sm:top-[8rem] absolute -z-10 vertmove1" src="/b2.png" alt="" />
            <img className="hidden md:flex sm:h-28 md:h-40 -left-8 sm:-left-12 top-16 sm:top-36 absolute -z-10 vertmove2" src="/b3.png" alt="" />
            <img className="hidden md:flex sm:h-20 md:h-20 left-24 sm:left-32 top-8 sm:top-32 absolute -z-10 vertmove1" src="/b1.png" alt="" />
            <img className="h-28 md:h-40 left-[9rem] sm:left-[11rem] top-[18rem] sm:top-[19rem] absolute -z-10 vertmove1" src="/b4.png" alt="" />
            <img className="hidden md:flex h-14  left-[14rem] sm:left-[30rem] top-48 sm:top-[20rem] absolute -z-10 vertmove2" src="/b5.png" alt="" /> */}


            <section id="join-waitlist" className={` px-4 sm:px-16 md:px-12 pt-24 md:pt-44 pb-36 flex flex-col md:flex-row md:justify-between items-center space-y-16 md:space-y-0`}>
                <div className={`fade-in-section ${(currentSection == 'section1' || currentSection == 'join-waitlist') ? 'isVisible' : null} w-full md:w-[60%] pr-0 md:pr-8 flex flex-col space-y-10 justify-between`}>
                    <h1 className="text-5xl sm:text-6xl font-semibold  tracking-normal text-[#4F4F4F]" style={{ fontFamily: "aeonik" }}>Tired of <span className="text-vPurple font-normal font-maloney"> negotiating</span> <br className="md:block hidden" />screen time with your child?</h1>
                    <p className="flex text-2xl sm:text-2xl text-[#4f4f4f] items-center">
                        Introducing &nbsp;
                        {/* <span className="font-maloney text-4xl">Vobble</span> */}
                        {/* Introducing&nbsp;&nbsp; */}

                        <img id='radlogo' className='pl-1 h-20 w-auto object-contain' src={'/vobble.png'} />

                        {/* <span className="relative text-white">Vobble</span> */}
                    </p>

                    <div className="flex flex-col  md:flex-col"  >
                        <p className="text-xl sm:text-2xl font-light lg:w-4/5  md:mt-0">India&apos;s first <span className="font-semibold text-vPurple">multi-sensory</span> <span className="font-semibold text-vTeal">immersive</span> <span className="font-semibold text-vYellow">3D audio experience</span> that kids will choose over screens!</p>

                        <div className=" mt-10 sm:mt-16">
                            <DahekEmailCollection />
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-[40%] relative -mr-8 md:-mr-12 z-40">
                    <img className="w-[70%] object-contain block m-auto vertmove1 z-30" src="/hr1.png" alt="" />
                    <img className="h-32 sm:h-48 md:h-32 lg:h-48 top-[32%] lg:top-[34%] -left-[6%] md:-left-[14%] lg:-left-[9%] absolute vertmove2 z-20" src="/hr2.png" alt="" />
                    <img className="h-14 sm:h-20 md:h-14 lg:h-16 top-[64%] lg:top-[64%] right-[14%] lg:right-[16%] absolute vertmove1 -z-10" src="/hr3.png" alt="" />
                    <img className="h-24 sm:h-32 md:h-20 lg:h-28 -bottom-[16%] sm:-bottom-[14%] md:-bottom-[16%] lg:-bottom-[16%] right-[32%] lg:right-[32%] absolute vertmove1 -z-10" src="/hr4.png" alt="" />
                    <img className="h-28 sm:h-36 md:h-24 lg:h-28 top-[78%] lg:top-[78%] left-[2%] lg:left-[2%] absolute vertmove1 z-20" src="/hr5.png" alt="" />
                    <img className="h-7 sm:h-10 md:h-7 lg:h-10 top-[69%] lg:top-[69%] left-[2%] lg:left-[4%] absolute vertmove1 z-20" src="/hr6.png" alt="" />
                    <img className="h-7 sm:h-10 md:h-7 lg:h-10 top-[52%] lg:top-[52%] right-[12%] lg:right-[12%] absolute vertmove1 -z-10" src="/hr7.png" alt="" />
                    <img className="h-16 sm:h-28 md:h-16 lg:h-28 top-[0%] sm:top-[0%] md:top-[0%] lg:top-[1%] right-[8%] sm:right-[8%] md:right-[8%] lg:right-[8%] absolute vertmove2 -z-10" src="/hr8.png" alt="" />
                    <img className="h-24 sm:h-40 md:h-24 lg:h-28 -top-[10%] sm:-top-[8%] md:-top-[12%] lg:-top-[8%] left-[28%] sm:left-[28%] md:left-[26%] lg:left-[26%] absolute vertmove2 z-30" src="/hr10.png" alt="" />
                    <img className="h-28 sm:h-36 md:h-20 lg:h-28 top-[0%] lg:top-[4%] -left-[10%] sm:-left-[6%] lg:-left-[2%] absolute vertmove2 -z-10" src="/hr11.png" alt="" />
                </div>
            </section>

            <section id="audio" className={`audio-wrapper flex flex-col `}>

                <div className="w-full min-h-[48vw]  bg-gradient-to-r from-[#6667AB] to-[#4E4F8D] flex flex-col-reverse md:flex-row items-center space-y-4 md:space-y-0">
                    <div className="md:w-2/3 flex flex-col md:flex-row ">
                        <div className="w-full md:w-1/2 h-auto flex items-center relative py-10 md:px-10 audio-wrapper-1 linear-audio">
                            <img src="/audio-bg-one.svg" className="md:absolute md:bottom-[-3rem] w-[50%] md:w-[90%] " alt="" />
                            <img className=" object-contain mx-auto absolute md:w-[85%] md:left-16 w-[50%] md:bottom-[-9rem]" src="/whyaudio2.png" alt="" />
                        </div>
                        <div className="w-full  md:w-1/2 h-auto flex items-center relative audio-wrapper-2 linear-audio1 py-20 md:py-10  md:px-10">
                            <img src="/audio-bg-two.svg" className="absolute w-[50%] md:w-[90%] left-[10rem] sm:left-[13rem] top-[-5rem] md:top-[-1rem] md:left-[-4rem]" alt="" />
                            <img className=" object-contain mx-auto absolute w-[50%] md:w-[85%] left-[11rem] sm:left-[13rem] top-[-8rem] md:left-0 md:top-[-8rem]" src="/whyaudio1.png" alt="" />
                        </div>
                    </div>
                    <div className={`fade-in-section ${(currentSection == 'audio') ? 'isVisible' : null} md:w-1/3 px-2`}>
                        <p className="text-6xl text-[#FFFFFF] font-normal font-aeonik py-12 ">The <span className="font-maloney">whys</span></p>
                        <p className="text-[#FFFFFF] font-normal pr-8">Young kids’ imagination soars when they read or when they are being read to. Learning milestones are achieved sooner with audio listening.</p>
                    </div>
                </div>

            </section>

            {/* <div className="relative hidden sm:flex">
                <img className="hidden md:flex h-16 sm:h-24 left-[18rem] sm:left-[29rem] top-[10rem] sm:top-[2rem] absolute z-10 vertmove1" src="/b2.png" alt="" />
                <img className="hidden md:flex sm:h-36 left-0 sm:-left-0 top-40 sm:top-36 absolute z-10 vertmove2" src="/b3.png" alt="" />
                <img className="hidden md:flex sm:h-16 left-0 sm:left-32 top-[-4rem] sm:top-8 absolute z-10 vertmove1" src="/b1.png" alt="" />
                <img className="hidden md:flex h-36 left-[14rem] sm:left-[22rem] top-36 sm:top-[9rem] absolute z-10 vertmove1" src="/b4.png" alt="" />
                <img className="hidden md:flex h-12 left-[14rem] sm:left-[30rem] top-48 sm:top-[10rem] absolute z-10 vertmove2" src="/b5.png" alt="" />
            </div> */}
            <section id="meet-vobble" className={` flex flex-col relative`}>
                <div className="px-4 sm:px-16 md:px-12 py-24 bg-[#FFFFFF] flex flex-col space-y-2 sm:space-y-10 text-center">
                    <div className=" bg-[#FFFFFF] flex flex-col-reverse md:flex-row space-x-0 md:space-x-2 space-y-8 md:space-y-0 items-center">
                        <div className={`fade-in-section ${currentSection == 'meet-vobble' ? 'isVisible' : null} w-full md:w-1/2  md:text-left flex flex-col space-y-2 font-aeonik`}>
                            <p className='text-6xl text-[#393939] font-bold py-12 z-20 '>Making <span className="text-vYellow font-maloney">audio</span> come alive</p>

                            {/* <p className="text-xl sm:text-2xl font-semibold text-vPurple">Immersive 3D Audio Content designed for kids.</p> */}
                            <p className="text-lg sm:text-xl text-[#393939] font-light text-left">Vobble is fostering an <span className="font-aeonikbold text-vPurple">#audiofirst community</span> of young parents and kids.
                                It is <span className="font-aeonikbold text-vPurple">curated with highly captivating audio series and music</span> produced in an immersive format. Think super entertaining audio with sound effects, over-the-top narration, and loveable characters!
                                <br />
                                <span className="font-aeonikbold text-vPurple">Kids absolutely love it.</span>
                                <br />
                                This content is provided on WHO-approved SAFE headphone designed especially for young kids, so they can <span className="font-aeonikbold text-vPurple">experience the true immersive-ness of audio.</span>
                                They can use it indoors and outdoors with complete freedom!

                            </p>
                        </div>
                        <div className="w-full md:w-1/2 h-auto">
                            <video autoPlay muted playsInline loop>
                                <source src="/testVid.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </div>
            </section>

            <section id="vobble-voice" className={` flex flex-col relative`}>

                <div className="px-10 sm:px-16 md:px-16 py-16 md:py-32 bg-vPurpleBG flex flex-col space-y-6 sm:space-y-16 md:text-left">
                    <p className="text-4xl sm:text-6xl font-bold text-[#393939] font-aeonik" >What <span className="font-maloney font-normal text-vPurple">vobblers </span> say...</p>

                    <div className=' hidden lg:flex lg:flex-row flex-col items-center justify-between'>
                        <div className="hidden md:flex flex-row space-x-2 mx-auto md:mx-0 px-4 sm:px-2">

                            <div id="prev" className="cursor-pointer" onClick={carouselPrev}>
                                <VButton
                                    className="py-6 px-6 h-16 bg-vTeal"
                                    buttonText={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" /></svg>}
                                    buttonBgColor="#00A7B7"
                                    buttonTextColor="white"
                                    buttonBorderColor="black"
                                />
                            </div>
                        </div>
                        <img src={testimImageArray[current]} className="object-contain w-full md:w-1/3 pl-0 md:pl-12" alt="" />
                        <div className={`fade-in-section ${currentSection == 'vobble-voice' ? 'isVisible' : null} flex flex-col space-y-4 w-full md:w-1/2 pl-0 md:pl-12 font-aeonik`}>
                            <p className="py-2 px-4 sm:px-2 md:px-2 text-lg sm:text-2xl font-bold text-vPurple">{testimBoldArray[current]}</p>
                            <p className="py-2 px-4 sm:px-2 md:px-2 text-lg sm:text-xl font-light text-[#393939]-800">&quot;{testimBodyArray[current]}&quot;</p>
                            <div className='flex flex-col -space-y-1 px-4 sm:px-2'>
                                <p className='text-lg sm:text-xl text-[#393939]-700 font-bold'>{testimNameArray[current]}</p>
                                <p className='text-[#7A7A7A]'>{testimDesignationArray[current]}</p>
                            </div>

                        </div>
                        <div className="flex flex-row space-x-2 mx-auto mt-12 md:mt-0 md:mx-0 px-4 sm:px-2">

                            {/* <div id="prev" className="md:hidden cursor-pointer" onClick={carouselPrev}>
                                <VButton
                                    className="py-6 px-6 h-16 bg-vTeal"
                                    buttonText={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" /></svg>}
                                    buttonBgColor="#00A7B7"
                                    buttonTextColor="white"
                                    buttonBorderColor="black"
                                />
                            </div> */}

                            <div id="next" className="cursor-pointer ml-0" onClick={carouselNext}>
                                <VButton
                                    className="py-6 px-6 h-16 bg-[#FFB100]"
                                    buttonText={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>}
                                    buttonBgColor="#FFB100"
                                    buttonTextColor="white"
                                    buttonBorderColor="black"
                                />
                            </div>
                        </div>
                    </div>

                    <Swiper
                        cssMode={true}


                        // autoplay={{
                        //     delay: 2500,
                        //     disableOnInteraction: false,
                        //   }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Pagination, Autoplay, Keyboard]}
                        className=" w-full flex lg:hidden"
                        style={{ paddingBottom: "4rem" }}
                    >
                        <SwiperSlide className="flex  flex-col md:flex-row items-center justify-between">
                            <img src={testimImageArray[0]} className="object-contain w-full md:w-1/3" alt="" />
                            <div className={`fade-in-section ${currentSection == 'vobble-voice' ? 'isVisible' : null} flex flex-col space-y-4 w-full md:w-1/2 pl-0 md:pl-12 font-aeonik`}>
                                <p className="py-2 px-4 sm:px-2 md:px-2 text-lg sm:text-2xl font-bold text-vPurple">{testimBoldArray[0]}</p>
                                <p className="py-2 px-4 sm:px-2 md:px-2 text-lg sm:text-xl font-light text-gray-800">&quot;{testimBodyArray[0]}&quot;</p>
                                <div className='flex flex-col -space-y-1 px-4 sm:px-2'>
                                    <p className='text-lg sm:text-xl text-[#393939]-700 font-bold'>{testimNameArray[0]}</p>
                                    <p className='text-[#7A7A7A]'>{testimDesignationArray[0]}</p>
                                </div>

                            </div>

                        </SwiperSlide>
                        <SwiperSlide className="flex  flex-col md:flex-row items-center justify-between">                        <img src={testimImageArray[1]} className="object-contain w-full md:w-1/3" alt="" />
                            <div className={`fade-in-section ${currentSection == 'vobble-voice' ? 'isVisible' : null} flex flex-col space-y-4 w-full md:w-1/2 pl-0 md:pl-12 font-aeonik`}>
                                <p className="py-2 px-4 sm:px-2 md:px-2 text-lg sm:text-2xl font-bold text-vPurple">{testimBoldArray[1]}</p>
                                <p className="py-2 px-4 sm:px-2 md:px-2 text-lg sm:text-xl font-light text-gray-800">&quot;{testimBodyArray[1]}&quot;</p>
                                <div className='flex flex-col -space-y-1 px-4 sm:px-2'>
                                    <p className='text-lg sm:text-xl text-[#393939]-700 font-bold'>{testimNameArray[1]}</p>
                                    <p className='text-[#7A7A7A]'>{testimDesignationArray[1]}</p>
                                </div>

                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="flex  flex-col md:flex-row items-center justify-between">                        <img src={testimImageArray[2]} className="object-contain w-full md:w-1/3" alt="" />
                            <div className={`fade-in-section ${currentSection == 'vobble-voice' ? 'isVisible' : null} flex flex-col space-y-4 w-full md:w-1/2 pl-0 md:pl-12 font-aeonik`}>
                                <p className="py-2 px-4 sm:px-2 md:px-2 text-lg sm:text-2xl font-bold text-vPurple">{testimBoldArray[2]}</p>
                                <p className="py-2 px-4 sm:px-2 md:px-2 text-lg sm:text-xl font-light text-gray-800">&quot;{testimBodyArray[2]}&quot;</p>
                                <div className='flex flex-col -space-y-1 px-4 sm:px-2'>
                                    <p className='text-lg sm:text-xl text-[#393939]-700 font-bold'>{testimNameArray[2]}</p>
                                    <p className='text-[#7A7A7A]'>{testimDesignationArray[2]}</p>
                                </div>

                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
            {/* <div className="relative">
                <img className="hidden md:flex h-16 sm:h-24 left-[18rem] sm:left-[29rem] top-[10rem] sm:top-[2rem] absolute -z-10 vertmove1" src="/b2.png" alt="" />
                <img className="hidden md:flex sm:h-36 left-0 sm:-left-0 top-40 sm:top-36 absolute -z-10 vertmove2" src="/b3.png" alt="" />
                <img className="hidden md:flex sm:h-16 left-0 sm:left-32 top-[-4rem] sm:top-8 absolute -z-10 vertmove1" src="/b1.png" alt="" />
                <img className="hidden md:flex h-36 left-[14rem] sm:left-[22rem] top-36 sm:top-[9rem] absolute -z-10 vertmove1" src="/b4.png" alt="" />
                <img className="hidden md:flex h-12 left-[14rem] sm:left-[30rem] top-48 sm:top-[10rem] absolute -z-10 vertmove2" src="/b5.png" alt="" />
            </div> */}
            <section id="aboutus" className={`  flex flex-col relative`}>

                <div className='px-10 sm:px-16 md:px-16 pt-10 md:pt-32'>
                    <p className="text-5xl sm:text-7xl my-4 text-[#393939] font-bold z-20 font-aeonik">About <span className="font-maloney font-normal text-vTeal">Us</span></p>

                    <div className='w-full  flex flex-col-reverse md:flex-row items-center'>
                        <div className={`fade-in-section ${currentSection == 'aboutus' ? 'isVisible' : null} flex flex-col space-y-6 lg:space-y-8 w-full md:w-1/2 h-full justify-between `}>
                            <p className='text-lg sm:text-xl text-[#393939] text-center font-aeonik ' style={{ "maxWidth": "430px" }}>Two mommies who tried their very best to wean <br />their munchkins away from the addictive screen.<br />
                                <span className="italic">Created Vobble,</span><br /><span className="italic">To end the squabble,</span> <br />And unleashing audio like never before &apos;seen&apos;.</p>
                            <Link href="/ourjourney" passHref>
                                <a className="min-h-[4.4rem] flex items-center mx-auto md:m-0">
                                    <VButton className="bg-vTeal font-semibold md:px-12 md:text-xl" buttonText="Learn more about our journey" buttonBgColor="#00A7B7" buttonTextColor="white" buttonBorderColor="black" />
                                </a>
                            </Link>
                        </div>
                        <div className='w-full md:w-1/2 pt-8 md:pt-0'>
                            <img className='w-[70%] h-full mx-auto rounded-xl object-contain' src='/aboutUs.jpeg' alt="" />
                        </div>
                    </div>
                </div>
            </section>

            <section id="footer" className="flex flex-col relative">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220" className="bg-[#6667AB]">
                    <path fill="#FFFFFF" fillOpacity="1" d="M0,160L40,165.3C80,171,160,181,240,181.3C320,181,400,171,480,160C560,149,640,139,720,149.3C800,160,880,192,960,202.7C1040,213,1120,203,1200,176C1280,149,1360,107,1400,85.3L1440,64L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z">
                    </path>
                </svg>
                <NewFooter />
            </section>
        </div>
    )
}