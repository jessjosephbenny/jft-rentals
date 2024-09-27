import React from "react";
import Typography from "../../components/Typography";

const AboutUs = () => {
    return (
        <div id="about" className="container mx-auto">
            <div className="flex flex-wrap p-4 md:p-8">
                <div className="w-full md:w-1/2">
                    <div className="flex justify-start">
                        <Typography className="text-4xl md:text-6xl" lineposition="left" text="About Us" lineColor="#ffcc00" textColor="black" />
                    </div>
                    {/* Image appears between the Typography and Paragraph on small screens */}
                    <div className="w-full md:hidden my-6 flex justify-center">
                        <img
                            src="./about-us.jpg"
                            alt="About Us"
                            className="w-full h-auto rounded-lg"
                        />
                    </div>
                    <p className="text-left mt-4 ms-0 text-base md:text-lg">
                        At JFT Rentals, we are proud to be a leading name in the equipment rental industry. We’re committed to continually evolving how we serve our customers, communities, and the environment. Based in the Greater Toronto Area, we also extend our services throughout southwest Ontario.

                        We offer a comprehensive range of equipment solutions, including sales, rentals, and repairs. Our rental fleet includes a wide selection of construction equipment, generators, light towers, and air compressors. To ensure minimal downtime, we also provide field service repairs directly at your location.

                        At JFT Rentals, our dedicated team is here to support you every step of the way. Let us help you power your next project with the equipment and expertise you need.
                    </p>
                </div>
                <div className="w-full md:w-1/2 mt-6 md:mt-0 hidden md:flex justify-center items-center">
                    <img src="./about-us.jpg" alt="About Us" className="h-3/4" />
                </div>
            </div>
        </div>
    )
}

export default AboutUs;