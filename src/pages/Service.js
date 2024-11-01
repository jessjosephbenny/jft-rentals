import React, { useState } from 'react';
import ContactUs from './sections/ContactUs';
import Success from '../components/Success';

const Service = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <>
            <div className='w-screen h-96 relative'>
                {/* Full-Screen Image Section */}
                <img src="./carousel-service.jpg" alt="sales" className="w-full h-full object-cover brightness-50" />
                <h1 className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold text-center drop-shadow-lg">
                    Reliable Maintenance | Expert Repairs | Affordable Solutions
                </h1>
            </div>
            {/* Content Section */}
            <div className='w-screen bg-gray-100'>
                <div className='container mx-auto'>
                    <p className="text-black text-lg text-center py-8 px-10">
                        At JFT Rentals, we are committed to keeping your construction equipment in top condition with our comprehensive service offerings. We provide <strong>field service</strong> and <strong>shop repairs</strong> for all types of construction machinery, ensuring that you can rely on us for both on-site and in-depth repair needs. Our <strong>fleet maintenance</strong> services are designed to offer affordable solutions that help extend the life of your equipment and keep it running smoothly. With our expert team and quality support, we ensure that your machinery performs at its best, project after project.
                    </p>
                </div>
            </div>

            {/* Service Offerings */}
            <div className="w-screen py-10">
                <div className="container mx-auto">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-semibold">Our Services</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
                        {/* Field Service */}
                        <div className="flex flex-col items-center">
                            <img src="./field-service.png" alt="Field Service Icon" className="w-16 h-16 mb-4" />
                            <h3 className="text-2xl font-semibold mb-2">Field Service</h3>
                            <p className="text-gray-600">Our field service team is ready to come to your location for on-site repairs and maintenance, ensuring minimal downtime for your equipment.</p>
                        </div>

                        {/* Shop Repairs */}
                        <div className="flex flex-col items-center">
                            <img src="./repair-shop.png" alt="Shop Repairs Icon" className="w-16 h-16 mb-4" />
                            <h3 className="text-2xl font-semibold mb-2">Shop Repairs</h3>
                            <p className="text-gray-600">Our shop provides thorough repairs and overhauls for all types of construction equipment, with skilled technicians and quality parts.</p>
                        </div>

                        {/* Fleet Maintenance */}
                        <div className="flex flex-col items-center">
                            <img src="./fleet-service.png" alt="Fleet Maintenance Icon" className="w-16 h-16 mb-4" />
                            <h3 className="text-2xl font-semibold mb-2">Fleet Maintenance</h3>
                            <p className="text-gray-600">Keep your entire fleet in top condition with our affordable maintenance plans designed to reduce costs and extend equipment life.</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Call to Action */}
            <div className="w-screen bg-yellow-safety py-10">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-semibold mb-4">Ready to Get Started?</h2>
                    <p className="text-gray-600 mb-6">Contact us today to schedule a service or learn more about our support options.</p>
                    <button onClick={()=> setIsModalOpen(true)} className="px-6 py-3 bg-blue-600 text-white rounded shadow-lg hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500">Get in Touch</button>
                </div>
            </div>
            <ContactUs/>
            <ContactModal isOpen={isModalOpen} onClose={() => {setIsModalOpen(false)}} />  
        </>
    )
}

export default Service;


const ContactModal = ({ isOpen, onClose}) => {

    const [isSuccessOpen, setSuccessOpen] = React.useState(false);
    
    if (!isOpen) return null;

    const submitForm = (e) => {

        e.preventDefault();
        const formData = new FormData(e.target);
        fetch("https://formspree.io/f/xeojwlnj", {
            method: "POST",
            body: formData, // Directly use FormData
            headers: {
                'Accept': 'application/json'
            },
        }).then(response => {
            if (response.ok) {
                // Optionally handle successful submission
                setSuccessOpen(true);
            } else {
                // Optionally handle errors
                alert("Oops! There was a problem submitting your form.");
            }
        }).catch(error => {
            alert("An error occurred. Please try again.");
        })

    }

    const onSuccessModalClose = () => { 
        setSuccessOpen(false);
        onClose();
    }

    return (
        <>
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-lg">
                <div className="flex p-6 bg-yellow-safety justify-between items-center mb-4">
                    <h2 className="text-3xl md:text-4xl font-bold">Get in Touch</h2>
                    <button onClick={onClose} className="text-gray-600 hover:text-gray-800">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>
                <form className='bg-white rounded' action='https://formspree.io/f/xldrkwvk' method='POST' onSubmit={submitForm}>
                    <div className="mb-4 px-6">
                        <input
                            type="text"
                            id="Name"
                            name="Name"
                            placeholder="Your Name"
                            className="w-full p-3 border  rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-4 px-6">
                        <input
                            type="phone"
                            id="phone"
                            name="Phone"
                            placeholder="Your Phone"
                            className="w-full p-3 border  rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-4 px-6">
                        <input
                            type="email"
                            id="email"
                            name="Email"
                            placeholder="Your Email"
                            className="w-full p-3 border  rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-4 px-6">
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Your message"
                            className="w-full p-3 border  rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="flex justify-end p-6 bg-yellow-safety">
                        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Send</button>
                    </div>
                </form>
            </div>
        </div>
        { isSuccessOpen && <Success message="Form Submitted Successfully" onClose={onSuccessModalClose} /> }
        </>
    );
};
