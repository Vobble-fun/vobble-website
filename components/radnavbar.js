import Link from 'next/link'
import { useEffect, useState } from 'react'
import VButton from "../components/vButton"

export function useOnScreen() {
    const [currentSection, setCurrentSection] = useState('');
    const [currentSectionHeader, setCurrentSectionHeader] = useState('')

    useEffect(() => {
        function handleScroll() {
            const sections = document.querySelectorAll('section');
            sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                let temp = section.getAttribute('id') ?? '';
                let height = 3
                if (temp == 'our-journey' || temp == 'chapter1' || temp == 'chapter2' || temp == 'chapter3' || temp == 'chapter4' || temp == 'chapter5') {
                    height = 2
                }

                if (scrollY >= (sectionTop - sectionHeight / height)) {
                    if (temp) {
                        setCurrentSection(temp);
                    }
                }
                setTimeout(() => {
                    if (scrollY >= (sectionTop - sectionHeight / 3)) {
                        let temp = section.getAttribute('id') ?? '';
                        if (temp) {
                            setCurrentSectionHeader(temp);
                        }
                    }
                }, 1200);
            })
        }

        window.addEventListener('scroll', handleScroll);

        handleScroll();

        // Remove the listener as soon as the component is unmounted
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return { currentSection, currentSectionHeader };
}

export default function RadNavbar() {

    const { currentSectionHeader, currentSection } = useOnScreen();
    const { cHeader, sCHeader } = useState('');
    const [active, setActive] = useState('');

    function menuBtnClick() {
        if (typeof window !== 'undefined') {
            let mOpen = document.getElementById("menuOpen")
            let mClose = document.getElementById("menuClose")
            let mContent = document.getElementById("menuContent")

            if (mOpen.classList.contains('block')) {
                mOpen.classList.remove('block')
                mOpen.classList.add('hidden')
                mClose.classList.remove('hidden')
                mClose.classList.add('block')
                mContent.classList.remove('hidden')
            } else if (mClose.classList.contains('block')) {
                mClose.classList.remove('block')
                mClose.classList.add('hidden')
                mOpen.classList.remove('hidden')
                mOpen.classList.add('block')
                mContent.classList.add('hidden')
            }
        }
    }

    function menuItemClick(id) {
        if (typeof window !== 'undefined') {
            setActive(id)
            let mOpen = document.getElementById("menuOpen")
            let mClose = document.getElementById("menuClose")
            let mContent = document.getElementById("menuContent")

            mClose.classList.remove('block')
            mClose.classList.add('hidden')
            mOpen.classList.remove('hidden')
            mOpen.classList.add('block')
            mContent.classList.add('hidden')
        }
    }

    return (
        <>
            <div id='radnavbar' className="hidden py-4 px-12 bg-white md:flex flex-row justify-between items-center font-normal fixed z-50 top-0 w-full min-h-[6rem]" style={{ fontFamily: "aeonik", boxShadow: "0px 6px 40px rgba(211, 211, 211, 0.25)" }}>
                <Link href="/" passHref >
                    <img id='radlogo' className='cursor-pointer pl-1 h-8 w-auto object-contain' src={'/logo1-base.png'} />
                </Link>
                <div id='radnavcontent' className="flex flex-row">
                    <Link href="/#join-waitlist" className="min-h-[2.6rem]">
                        <button className={`md:px-4 lg:px-6 py-1 md:py-3 w-auto text-base text-[#393939] font-aeonik font-normal bg-transparent rounded-lg ${(currentSectionHeader == 'section1' || currentSectionHeader == 'join-waitlist') ? ' transition  bg-[#F0F0F7] font-aeonikbold' : ''} trans hover:font-aeonikbold`}>
                            Join the Waitlist
                        </button>
                    </Link>
                    <Link href="/#audio" onClick={()=>sCHeader('audio')} className="min-h-[2.6rem]">
                        <button className={`md:px-4 lg:px-6 py-1 md:py-3 w-auto text-base text-[#393939] font-aeonik font-noraml bg-transparent rounded-lg ${ currentSection== 'audio'&&'bg-[#F0F0F7]'} ${currentSectionHeader=='audio' ? '   bg-[#F0F0F7] font-aeonikbold' : ''} trans hover:font-aeonikbold`}>
                            Why Audio
                        </button>
                    </Link>
                    <Link href="/#meet-vobble" className="min-h-[2.6rem]">
                        <button className={`md:px-4 lg:px-6 py-1 md:py-3 w-auto text-base text-[#393939] font-aeonik font-noraml bg-transparent rounded-lg ${currentSectionHeader == 'meet-vobble' ? ' transition  bg-[#F0F0F7] font-aeonikbold' : ''} trans hover:font-aeonikbold`}>
                            Meet Vobble
                        </button>
                    </Link>
                    <Link href="/#vobble-voice" className="min-h-[2.6rem]">
                        <button className={`md:px-4 lg:px-6 py-1 md:py-3 w-auto text-base text-[#393939] font-aeonik font-noraml bg-transparent rounded-lg ${currentSectionHeader == 'vobble-voice' ? ' transition  bg-[#F0F0F7] font-aeonikbold' : ''} trans hover:font-aeonikbold`}>
                            Vobblers&apos; Voice
                        </button>
                    </Link>
                    <Link href="/#aboutus" className="min-h-[2.6rem]">
                        <button className={`md:px-4 lg:px-6 py-1 md:py-3 w-auto text-base text-[#393939] font-aeonik font-noraml bg-transparent rounded-lg ${(currentSectionHeader == 'aboutus' || currentSectionHeader == 'our-journey') ? ' transition  bg-[#F0F0F7] font-aeonikbold' : ''} trans hover:font-aeonikbold`}>
                            About Us
                        </button>
                    </Link>
                </div>
            </div>

            <div className='md:hidden flex flex-col fixed z-50 top-0 w-full' style={{ fontFamily: "aeonik" }}>
                <div id='radnavbar-m' className="py-4 px-4 sm:px-16 bg-white flex flex-row justify-between items-center font-light">
                    <Link href="/" passHref >
                        <img id='radlogo-m' className='cursor-pointer pl-1 h-8 w-auto object-contain' src={'/logo1-base.png'} />
                    </Link>
                    <div className="flex flex-row space-x-2">
                        {/* <VButton id='radnavbutton-m' buttonText="Join the Waitlist" buttonBgColor="#6667AB" buttonTextColor="white" buttonBorderColor="black" /> */}
                        {/* <button
                            id='radnavbutton-m'
                            className='w-auto px-4 py-2 text-sm sm:text-base font-medium bg-[#6667AB] hover:bg-[#00A7B7] text-white border border-transparent hover:border-white rounded-lg transition ease-in-out delay-45 cursor-pointer'
                        >
                            Join the Waitlist
                        </button> */}
                        <button onClick={menuBtnClick} className="p-2 rounded-xl bg-transparent " style={{outline:"none"}}>
                            <svg id='menuOpen' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#00A7B7" className="w-6 h-6 block">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                            </svg>
                            <svg id='menuClose' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#00A7B7" className="w-6 h-6 hidden">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div id='menuContent' className='hidden bg-white h-screen text-center'>
                    <Link href='/#join-waitlist' >
                        {/* <button
                            id='radnavbutton-m'
                            onClick={() => menuItemClick('join-waitlist')} className={`${active == 'section2' ? 'font-aeonikbold' : undefined} my-4 font-aeonikbold border-2 border-vTeal rounded-lg text-lg items-center py-1 px-5 sm:px-4`}
                            // className='w-auto px-4 py-2 text-sm sm:text-base font-medium bg-[#6667AB] hover:bg-[#00A7B7] text-white border border-transparent hover:border-white rounded-lg transition ease-in-out delay-45 cursor-pointer'
                        >
                            Join the Waitlist
                        </button> */}
                        <div onClick={() => menuItemClick('join-waitlist')} className={`${active == 'join-waitlist' ? 'font-aeonikbold' : undefined} text-lg items-center py-4 px-5 sm:px-4`}>Join the Waitlist</div>

                        {/* <div onClick={() => menuItemClick('section2')} className={`${active == 'section2' ? 'font-aeonikbold' : undefined} font-aeonikbold  border-vGreen text-lg items-center py-4 px-5 sm:px-4`}>Join the Waitlist</div> */}
                    </Link>
                    <Link href='/#audio' >
                        <div onClick={() => menuItemClick('section2')} className={`${active == 'section2' ? 'font-aeonikbold' : undefined} text-lg items-center py-4 px-5 sm:px-4`}>Why Audio</div>
                    </Link>
                    <Link href='/#meet-vobble' >
                        <div onClick={() => menuItemClick('section3')} className={`${active == 'section3' ? 'font-aeonikbold' : undefined} text-lg items-center py-4 px-5 sm:px-4`}>Meet Vobble</div>
                    </Link>
                    <Link href='/#vobble-voice'>
                        <div onClick={() => menuItemClick('section4')} className={`${active == 'section4' ? 'font-aeonikbold' : undefined} text-lg items-center py-4 px-5 sm:px-4`}>Vobblers&apos; Voice</div>
                    </Link>
                    <Link href='/#aboutus' >
                        <div onClick={() => menuItemClick('section5')} className={`${active == 'section5' ? 'font-aeonikbold' : undefined} text-lg items-center py-4 px-5 sm:px-4`}>About Us</div>
                    </Link>
                </div>
            </div>
        </>
    )
}
