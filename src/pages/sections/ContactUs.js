import React from "react";
import Typography from "../../components/Typography";


const MapPinIcon = () => {
    return (
        <svg height={32} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="#ff1414" d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" /></svg>
    );
}
const EmailIcon = () => {
    return (<svg height={32} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path fill="#0091ff" d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
    </svg>);
}
const PhoneIcon = () => {
    return (
        <svg height={32} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path fill="#FFD43B" d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
        </svg>
    )
}
const ClckIcon = () => {
    return (
        <svg height={32} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path fill="#ffb902" d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
        </svg>
    )
}
const ContactUs = () => {
    return (
        <div className="bg-black w-full">
            <div className="container bg-black p-4 md:p-8 mx-auto">
                <div className="flex flex-wrap">
                    <div className="w-full md:w-1/2 min-w-fit mb-6 md:mb-0">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d190253.07388451832!2d-79.70139050054135!3d43.70010962191638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b3b78887572cf%3A0xc2bd8fb5ca162f85!2s7855%20Finch%20Ave%20W%2C%20Brampton%2C%20ON%20L6T%200B2!5e0!3m2!1sen!2sca!4v1726008393269!5m2!1sen!2sca"
                            title="Google Maps" loading="lazy" className="rounded w-full h-64 md:h-full " referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className="w-full md:w-1/2 flex flex-col">
                        <Typography className="ms-auto md:text-left text-4xl md:text-6xl" lineposition="right" text="Contact Us" lineColor="#ffcc00" textColor="white" />
                        <div className="flex flex-wrap justify-start items-start md:justify-end mt-14">
                            <div className="flex items-center">
                                <MapPinIcon />
                                <p className="ms-2 text-lg md:text-xl text-white font-bold">Address :</p>
                            </div>
                            <div className="flex flex-col text-right ms-4">
                                <p className="text-lg md:text-xl text-white">Lot D, 7855 Finch Ave W</p>
                                <p className="text-lg md:text-xl text-white">Brampton, Ontario</p>
                                <p className="text-lg md:text-xl text-white">L6T 0B2</p>
                                <p className="text-lg md:text-xl text-white">Canada</p>
                            </div>
                        </div>
                        <div className="flex flex-wrap justify-start items-start md:justify-end mt-4">
                            <div className="flex items-center">
                                <PhoneIcon />
                                <p className="ms-2 text-lg md:text-xl text-white font-bold">Phone :</p>
                            </div>
                            <div className="flex flex-col text-right ms-3">
                                <p className="text-lg md:text-xl text-white">519-437-0979</p>
                            </div>
                        </div>
                        <div className="flex flex-wrap justify-start items-start md:justify-end mt-4">
                            <div className="flex items-center">
                                <EmailIcon />
                                <p className="ms-2 text-lg md:text-xl text-white font-bold">Email :</p>
                            </div>
                            <div className="flex flex-col text-right ms-3">
                                <p className="text-lg md:text-xl text-white">Jadejumo@Jftrentals.com</p>
                            </div>
                        </div>
                        <div className="flex flex-wrap justify-start items-start md:justify-end mt-4">
                            <div className="flex items-center">
                                <ClckIcon />
                                <p className="ms-2 text-lg md:text-xl text-white font-bold">Hours of Operation :</p>
                            </div>
                            <div className="flex flex-col text-right ms-3">
                                <p className="text-lg md:text-xl text-white">Monday to Friday</p>
                                <p className="text-lg md:text-xl text-white">8:00 AM – 5:00 PM</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs;

