import Script from 'next/script'
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import ReactLoading from 'react-loading'
import VButton from "../components/vButton"

export default function DahekEmailCollection() {
    let [msg, setMsg] = useState("Join the Waitlist!")

    let [isOpen, setIsOpen] = useState(false)
    function closeModal() {
        setIsOpen(false)
    }

    var loaderWhite = <ReactLoading className="align-center" type={'spin'} color={'#FFFFFF'} height={'24px'} width={'24px'} />
    const scriptURL = "https://script.google.com/macros/s/AKfycby-sfaTREj4y2moPdh4M8JGOUJiE8ZXgSLnZVSp87ZPMt_ay0gDaXRDVazB0TGsttWw/exec"
    if (typeof window !== 'undefined') {
        const form = document.forms["google-sheet"]
        if (form) {
            form.addEventListener("submit", (e) => {
                e.preventDefault()
                setMsg(loaderWhite)
                fetch(scriptURL, { method: "POST", body: new FormData(form) })
                    .then((resp) => {
                        setIsOpen(true)
                        setMsg("Join the Waitlist!")
                        document.getElementById("email").value = ""
                    })
                    .catch((error) =>
                        setMsg("Something went wrong :(")
                    );
            })
        }
    }

    return (
        <>
            <form name="google-sheet" className="flex flex-col lg:flex-row lg:space-y-0 lg:space-x-2 space-x-0 space-y-2 text-lg sm:text-base">
                <input type="email" id="email" name="email" className="form-control w-full lg:w-[60%] h-[3.4rem] px-3 font-regular text-[#1E2330] placeholder-[#B0B0B0] border border-[#000000] bg-white rounded-lg focus:shadow-outline" placeholder="Please enter your email" required />
                <VButton id="submitbtn" className="bg-vTeal w-100 lg:w-[30%] font-bold" buttonText={typeof msg == "string" ? msg : <div className="m-auto">{loaderWhite}</div>} buttonBgColor="#00A7B7" buttonTextColor="white" buttonBorderColor="black" />
            </form>

            <Transition appear show={isOpen} as={Fragment} className="z-60">
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900"
                                    >
                                        🤝&nbsp;You&apos;re on the waitlist!
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <p className="text-sm text-gray-500">
                                            Thank you for trusting us with your email. Exciting times ahead; but no spam, we promise!
                                        </p>
                                    </div>

                                    <div className="mt-4">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-[#6667AB]/75 px-4 py-2 text-sm font-medium text-white hover:bg-[#6667AB] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6667AB] focus-visible:ring-offset-2"
                                            onClick={closeModal}
                                        >
                                            Got it, thanks!
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
            <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"></Script>
        </>
    )
}