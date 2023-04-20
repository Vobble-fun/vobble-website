import React from "react";
import Link from "next/link";

class NewFooter extends React.Component {
  render() {
    return (
      <div style={{ WebkitTapHighlightColor: "transparent", fontFamily: "'Karla', sans-serif" }}>
        <div className="w-full px-8 md:px-8 lg:px-24 py-16 mt-auto flex flex-col sm:flex-row bg-[#6667AB] text-sm items-start">
          <div className="w-full sm:w-1/2 flex flex-col space-y-6">
            {/* <Link href="/" passHref> */}
            <img className="w-32 h-auto object-cover" src="/logo1-white.png" />
            {/* </Link> */}
            <div className="text-white">
              vobble — Making audio come alive
              <br />© 2022 Avie-Vinson Entertainment Pvt. Ltd. All rights (and lefts) reserved.
            </div>
            <div className="flex flex-row flex-wrap justify-start items-center">
              <a
                href="mailto:allears@vobble.fun"
                className="group  transition duration-300 pr-2 cursor-pointer"
              >
                <img className="w-6 h-auto object-cover" src="/email.png" />
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-[#FFFFFF]"></span>
              </a>
              <a
                href="https://www.linkedin.com/company/vobble"
                className="group  transition duration-300 pr-2 cursor-pointer"
              >
                <img className="w-6 h-auto object-cover" src="/linkedin.png" />
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-[#FFFFFF]"></span>
              </a>
              <a
                href="https://www.instagram.com/vobble.fun/"
                className="group  transition duration-300 pr-2 cursor-pointer"
              >
                <img className="w-6 h-auto object-cover" src="/insta.png" />
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-[#FFFFFF]"></span>
              </a>
            </div>
          </div>
          <div>
            <div className="">
              <div className="text-white hover:underline transition-all">
                <a href="https://merchant.razorpay.com/policy/LfZxn9DKvFhHFl/privacy">Privacy</a>
              </div>
              <div className="text-white hover:underline transition-all">
                <a href="https://merchant.razorpay.com/policy/LfZxn9DKvFhHFl/terms">
                  Terms & Conditions
                </a>
              </div>
              <div className="text-white hover:underline transition-all">
                <a href="https://merchant.razorpay.com/policy/LfZxn9DKvFhHFl/refund">Refund</a>
              </div>
              <div className="text-white hover:underline transition-all">
                <a href="https://merchant.razorpay.com/policy/LfZxn9DKvFhHFl/shipping">Shipping</a>
              </div>
              <div className="text-white hover:underline transition-all">
                <a href="https://merchant.razorpay.com/policy/LfZxn9DKvFhHFl/contact_us">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewFooter;
