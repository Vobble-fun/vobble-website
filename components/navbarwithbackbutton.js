import RadNavbar from "./radnavbar";
import VButton from "./vButton";

export default function NavbarWithBackButton() {
    return (
            <div className='hidden md:flex flex-col fixed z-50 top-0 w-full' style={{ fontFamily: "'Karla', sans-serif", boxShadow: "0px 6px 40px rgba(211, 211, 211, 0.25)" }}>
                <div className="py-6 px-4 sm:px-12 bg-white flex flex-row justify-between items-center font-light">
                    <a href="https://vobble.fun#section5" className="min-h-[2.6rem]">
                        <button className={`px-4 py-1 w-auto bg-white hover:bg-[#f8f8f8] rounded-lg border-vGreen border-2 hover:border-b-2 font-bold`}>
                            Back
                        </button>
                    </a>
                    <a href="https://vobble.fun/">
                        <img className='pl-1 h-8 w-auto object-contain' src={'/logo1-base.png'} />
                    </a>
                    <a href="https://vobble.fun#section5" className="min-h-[2.6rem]">
                        {/* <button className={`px-4 py-1 w-auto bg-white hover:bg-[#f8f8f8] text-vPurple rounded-xl border-black border-l-[2px] border-r-[2px] border-t-[2px] border-b-[5px] hover:border-b-2 font-medium`}>
                        Join the waitlist
                    </button> */}
                        <VButton buttonText="Join the waitlist" className="px-12" buttonBgColor="#00A7B7" buttonTextColor="white" buttonBorderColor="black" />
                    </a>
                </div>
            </div>
    )
}