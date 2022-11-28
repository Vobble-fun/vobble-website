import NewFooter from "../components/newfooter"
import Head from "next/head"
import VButton from "../components/vButton"
import Link from "next/link"
import RadNavbar, { useOnScreen } from "../components/radnavbar"
import DahekEmailCollection from "../components/dahekemailcollection"

export default function OurJourney() {
    const {currentSection} = useOnScreen();

    return (
        <>
            {/* <div className="flex flex-col  md:space-y-16 relative"> */}
            <Head>
                <title>Our Journey</title>
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content="Our Journey" />
                <meta property="og:site_name" content="Vobble" />
                <meta property="og:url" content="https://vobble.fun/" />
                <meta property="og:description" content="" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://vobble.fun/og-image.png?v=2" />
            </Head>


            <RadNavbar />
            <section id="our-journey">
                <div className="flex flex-col space-y-8 md:space-y-16 relative">

                    {/* <img className="h-16 sm:h-24 left-[18rem] sm:left-[29rem] top-[10rem] sm:top-[8rem] absolute -z-10 vertmove1" src="/yellowBlob-50.svg" alt="" />
            <img className="sm:h-40 -left-8 sm:-left-12 top-16 sm:top-36 absolute -z-10 vertmove1" src="/yellowBlob-50.svg" alt="" />
            <img className="sm:h-20 left-24 sm:left-32 top-8 sm:top-16 absolute -z-10 vertmove2" src="/purpleBlob-50.svg" alt="" />
            <img className="h-14 left-[14rem] sm:left-[22rem] top-48 sm:top-[22rem] absolute -z-10 vertmove2" src="/tealBlob-50.svg" alt="" /> */}

                    <div className="flex flex-col space-y-0 pt-24 pb-4 md:pt-36 md:pb-8 px-4 sm:px-16 md:px-12">
                        <p className="text-base sm:text-2xl font-normal z-20 text-[#393939] mb-8" style={{ fontFamily: "aeonik" }}>About Us / <span className="text-vGreen">Our Journey </span></p>

                        <p className="text-4xl sm:text-6xl font-bold z-20 text-[#393939]" style={{ fontFamily: "aeonik", fontWeight: 'bold' }}>Our <span className="text-vGreen font-normal font-maloney">journey </span> so far...</p>
                        {/* <p className='text-xl italic font-light '>*so far!</p> */}
                    </div>
                    <section id="chapter1">
                        <div className="px-4 sm:px-16 md:px-12">
                            <div className="bg-white flex flex-col-reverse md:flex-row  space-y-reverse space-y-8 md:space-y-0">
                                <div  className={` fade-in-section ${(currentSection == 'chapter1'|| currentSection == 'our-journey')? 'isVisible' : null} flex flex-col space-y-6 md:space-y-8 w-full md:w-1/2 p-6 md:p-12 md:mr-8 rounded md:rounded-xl bg-vPurpleBG`}>
                                    <div className="flex flex-col">
                                        <p className="text-lg sm:text-2xl mb-3 z-20 text-[#393939]" style={{ fontFamily: "aeonik", fontWeight: 'bolder' }}>Chapter 1</p>
                                        <p className='text-2xl sm:text-4xl font-normal font-aeonik text-[#393939] '>What&apos;s happening to our <span className="text-vPurple font-maloney">children</span>?</p>
                                    </div>
                                    <p className='text-[16px] text-[16px] sm:text-[18px]  font-aeonik text-[#393939]'>We are two working mothers who completely love their kids (especially their chomp-able cheeks)! And over the last few years, we saw our little ones getting addicted to screens and defending it to the point of total breakdown.<br /><br />We wondered what was happening!<br /><br />Every day became a struggle filled with negotiation on screen time and we painstakingly started looking for equally captivating alternatives.<br />Was there something, away from screens, that kids loved AND was good for them AND could give parents a much needed guilt-free break too?</p>
                                </div>

                                <div className="w-full md:w-1/2 space-y-6 md:space-y-8 border-2 border-vPurple rounded md:rounded-xl">
                                    <img className="w-full md:w-[88%] mx-auto object-contain" src="/Chapter1.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="chapter2">
                        <div className="px-4 sm:px-16 md:px-12">
                            <div className="bg-white  flex flex-col md:flex-row space-y-8 md:space-y-0">

                                <div className="w-full md:w-1/2 space-y-6 md:space-y-8 md:mr-8 border-2 border-vYellow rounded md:rounded-xl">
                                    <img className="w-full md:w-[88%] mx-auto object-contain" src="/Chapter2.png" alt="" />
                                </div>

                                <div className={` fade-in-section ${currentSection == 'chapter2' ? 'isVisible' : null} flex flex-col space-y-6 md:space-y-8 w-full md:w-1/2 p-6 md:p-12 rounded md:rounded-xl bg-vYellowBG`}>
                                    <div className="flex flex-col">
                                        <p className="text-lg sm:text-2xl mb-3 z-20  text-[#393939]" style={{ fontFamily: "aeonik", fontWeight: 'bold' }}>Chapter 2</p>
                                        <p className='text-2xl sm:text-4xl font-normal text-[#393939] leading-tight font-aeonik'>Our Escape.. oops…<br /><span className="text-vYellow font-maloney">Escapade</span> begins!</p>
                                    </div>
                                    <p className='text-[16px] sm:text-[18px]   font-aeonik text-[#393939]'>On our quest to find this mystical alternative to screens we started to observe our kids&apos; behaviours more closely. We found that their imagination soared when WE narrated a story to them or read a book to them. And we wondered… Is audio our mystical alternative?<br /><br />Time to explore… but wait…<br />There&apos;s SO much audio already available – So why aren&apos;t more kids LISTENING to audio content? That&apos;s when we started sifting some more and realized that the current content is either too outdated or inappropriate [some of those Panchatantra stories can be violent!], too preachy, too monotonous or just has bad storytelling and production. We tried it with our kids and it just didn&apos;t stick!
                                    </p>
                                </div>

                            </div>
                        </div>
                    </section>


                    <section id="chapter3">
                        <div className="px-4 sm:px-16 md:px-12">
                            <div className="bg-white  flex flex-col-reverse md:flex-row  space-y-reverse space-y-8 md:space-y-0">

                                <div className={` fade-in-section ${currentSection == 'chapter3' ? 'isVisible' : null} flex flex-col space-y-6 md:space-y-8 w-full md:w-1/2 p-6 md:p-12 md:mr-8 rounded md:rounded-xl bg-vGreenBG`}>
                                    <div className="flex flex-col">
                                        <p className="text-lg sm:text-2xl mb-3 z-20  text-[#393939]" style={{ fontFamily: "aeonik", fontWeight: 'bold' }}>Chapter 3</p>
                                        <p className='text-2xl sm:text-4xl font-normal text-[#393939] leading-tight font-aeonik'>The Birth of <span className="text-vTeal font-maloney">Vobble</span></p>
                                    </div>
                                    <p className='text-[16px] sm:text-[18px]   font-aeonik text-[#393939]'>The new task at hand, for us eager mommies, was to put on our superhero capes and build amazing audio content that would re-ignite kids&apos; imagination and keep them away from screens.<br /><br />First order of duty was to understand - what do kids LOVE listening to?<br /><br />And who better to ask than the kids themselves?<br />We dove right in and made a bunch of kids listen to different types of audio - and we sat back and observed, and observed and observed some more. What makes them laugh? What makes them wonder? What drew them in? <i>We watched and learned</i>.<br /><br />Based on all our insights we came up with Vobble&apos;s very own, kids&apos; approved &quot;Secret Sauce&quot; to make the content we create delicious enough to rival the screen!</p>
                                </div>

                                <div className="w-full md:w-1/2 space-y-6 md:space-y-8 border-2 border-vGreen rounded md:rounded-xl">
                                    <img className="w-full md:w-[88%] mx-auto object-contain" src="/Chapter3.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="chapter4">
                        <div className="px-4 sm:px-16 md:px-12">
                            <div className="bg-white flex flex-col md:flex-row space-y-8 md:space-y-0">

                                <div className="w-full md:w-1/2 space-y-6 md:space-y-8 md:mr-8 border-2 border-vPurple rounded md:rounded-xl">
                                    <img className="w-full md:w-[88%] mx-auto object-contain" src="/Chapter4.png" alt="" />
                                </div>

                                <div  className={` fade-in-section ${currentSection == 'chapter4' ? 'isVisible' : null} flex flex-col space-y-6 md:space-y-8 w-full md:w-1/2 p-6 md:p-12 rounded md:rounded-xl bg-vPurpleBG`}>
                                    <div className="flex flex-col">
                                        <p className="text-lg sm:text-2xl mb-3 z-20  text-[#393939]" style={{ fontFamily: "aeonik", fontWeight: 'bold' }}>Chapter 4</p>
                                        <p className='text-2xl sm:text-4xl font-normal text-[#393939] leading-tight font-aeonik'>What are we doing <span className="text-vPurple font-maloney">now</span>?</p>
                                    </div>
                                    <p className='text-[16px] sm:text-[18px]   font-aeonik text-[#393939]'>We are currently beta testing and refining Vobble to make the best possible version for you and your child. We plan to continue our pilots across various cities and get it ready for launch soon!</p>
                                </div>

                            </div>
                        </div>
                    </section>


                    <section id="chapter5">
                        <div className="px-4 sm:px-16 md:px-12">
                            <div className="bg-white flex flex-col-reverse md:flex-row  space-y-reverse space-y-8 md:space-y-0">

                                <div className={` fade-in-section ${currentSection == 'chapter5' ? 'isVisible' : null} flex flex-col space-y-6 md:space-y-8 w-full md:w-1/2 p-6 md:p-12 md:mr-8 rounded md:rounded-xl bg-vGreenBG`}>
                                    <div className="flex flex-col">
                                        <p className="text-lg sm:text-2xl mb-3 z-20  text-[#393939]" style={{ fontFamily: "aeonik", fontWeight: 'bold' }}>Chapter 5</p>
                                        <p className='text-2xl sm:text-4xl font-normal text-[#393939] leading-tight font-aeonik'>Be a Vobbler Parent!<br /> <span className="text-vTeal font-maloney">Join the cause!</span></p>
                                    </div>
                                    <p className='text-[16px] sm:text-[18px]   font-aeonik text-[#393939]'>We are gearing up for our launch, and building a limited early access waitlist. Join today and stay updated on our progress!</p>
                                    <div className=" mt-10 sm:mt-10">
                                        <DahekEmailCollection />
                                    </div>
                                </div>

                                <div className="w-full md:w-1/2 space-y-6 md:space-y-8 border-2 border-vGreen rounded md:rounded-xl">
                                    <img className="w-full md:w-[88%] mx-auto object-contain" src="/Chapter5.png" alt="" />
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
            </section>
        </>
    )
}