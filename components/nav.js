import Link from 'next/link'
import { useEffect, useLayoutEffect, useState } from 'react'

const capitalize = (text) =>
    text.charAt(0).toUpperCase() + text.substr(1);

const clamp = (value) => Math.max(0, value);

const isBetween = (value, floor, ceil) =>
    value >= floor && value <= ceil;

// hooks
const useScrollspy = (ids, offset = 0) => {
    const [activeId, setActiveId] = useState("");

    useLayoutEffect(() => {
        const listener = () => {
            const scroll = window.pageYOffset;

            const position = ids
                .map((id) => {
                    const element = document.getElementById(id);

                    if (!element) return { id, top: -1, bottom: -1 };

                    const rect = element.getBoundingClientRect();
                    const top = clamp(rect.top + scroll - offset);
                    const bottom = clamp(rect.bottom + scroll - offset);

                    return { id, top, bottom };
                })
                .find(({ top, bottom }) => isBetween(scroll, top, bottom));
            setTimeout(() => {
                setActiveId(position?.id || "");
            }, 150);
        };

        listener();

        window.addEventListener("resize", listener);
        window.addEventListener("scroll", listener);

        return () => {
            window.removeEventListener("resize", listener);
            window.removeEventListener("scroll", listener);
        };
    }, [ids, offset]);

    return activeId;
};

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
                }, 10);
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

    const [active, setActive] = useState('');
    const ids = ["join-waitlist", "audio", "meet-vobble", "vobble-voice", "aboutus"];
    const activeId = useScrollspy(ids, 54); // 54 is navigation height


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
                        <button  className={`md:px-4 lg:px-6 py-1 md:py-3 w-auto text-base text-[#393939] font-aeonik font-normal bg-transparent rounded-lg ${(activeId == 'section1' || activeId == 'join-waitlist') ? ' transition  bg-[#F0F0F7] font-aeonikbold' : ''} trans hover:font-aeonikbold`}>
                            Join the Waitlist
                        </button>
                    </Link>
                    <Link href="/#audio" className="min-h-[2.6rem]">
                        <button  className={`md:px-4 lg:px-6 py-1 md:py-3 w-auto text-base text-[#393939] font-aeonik font-noraml bg-transparent rounded-lg  ${activeId == 'audio' ? '   bg-[#F0F0F7] font-aeonikbold' : ''} trans hover:font-aeonikbold`}>
                            Why Audio
                        </button>
                    </Link>
                    <Link href="/#meet-vobble" className="min-h-[2.6rem]">
                        <button className={`md:px-4 lg:px-6 py-1 md:py-3 w-auto text-base text-[#393939] font-aeonik font-noraml bg-transparent rounded-lg ${activeId == 'meet-vobble' ? ' transition  bg-[#F0F0F7] font-aeonikbold' : ''} trans hover:font-aeonikbold`}>
                            Meet Vobble
                        </button>
                    </Link>
                    <Link href="/#vobble-voice" className="min-h-[2.6rem]">
                        <button className={`md:px-4 lg:px-6 py-1 md:py-3 w-auto text-base text-[#393939] font-aeonik font-noraml bg-transparent rounded-lg ${activeId == 'vobble-voice' ? ' transition  bg-[#F0F0F7] font-aeonikbold' : ''} trans hover:font-aeonikbold`}>
                            Vobblers&apos; Voice
                        </button>
                    </Link>
                    <Link href="/#aboutus" className="min-h-[2.6rem]">
                        <button className={`md:px-4 lg:px-6 py-1 md:py-3 w-auto text-base text-[#393939] font-aeonik font-noraml bg-transparent rounded-lg ${(activeId == 'aboutus' || activeId == 'our-journey') ? ' transition  bg-[#F0F0F7] font-aeonikbold' : ''} trans hover:font-aeonikbold`}>
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
                        <button onClick={menuBtnClick} className="p-2 rounded-xl bg-transparent " style={{ outline: "none" }}>
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

                        <div onClick={() => menuItemClick('join-waitlist')} className={`${active == 'join-waitlist' ? 'font-aeonikbold' : undefined} text-lg items-center py-4 px-5 sm:px-4`}>Join the Waitlist</div>

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
