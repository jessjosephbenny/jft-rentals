import React from 'react';
import Typography from '../components/Typography';
import ContactUs from './sections/ContactUs';

const Sales = () => {
    return (
        <>
            <div className='w-screen h-96 relative'>
                {/* Full-Screen Image Section */}
                <img src="./carousel-sales.jpg" alt="sales" className="w-full h-full object-cover brightness-50" />
                <h1 className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold text-center drop-shadow-lg">
                    Buy | Build | Thrive
                </h1>
            </div>
            {/* Content Section */}
            <div className='w-screen bg-slate-300'>
                <div className='container mx-auto'>
                    <p className="text-black text-lg text-center py-8 px-10">
                        At JFT Rentals, we are an authorized sales dealership for leading Original Equipment Manufacturers (OEMs) of construction equipment. Our extensive inventory includes both <strong>new and used construction equipment</strong>, and <strong>Attachments</strong> designed to meet the demands of any project. From heavy machinery to essential equipment, we ensure you have the right tools for the job
                    </p>
                </div>
            </div>
            {/* Grid Section */}
            <div className="w-screen bg-white py-10">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 gap-10 text-center">
                    {/* New Equipment */}
                    <div className="flex flex-col items-center">
                        <img src="./new-excavator.png" alt="New Equipment Icon" className="w-16 h-16 mb-4" />
                        <h3 className="text-2xl font-semibold mb-2">New Equipment</h3>
                        <p className="text-gray-600">Discover our range of new construction equipment from leading OEMs, built to handle your toughest projects.</p>
                    </div>

                    {/* Used Equipment */}
                    <div className="flex flex-col items-center">
                        <img src="./old-generator.png" alt="Used Equipment Icon" className="w-16 h-16 mb-4" />
                        <h3 className="text-2xl font-semibold mb-2">Used Equipment</h3>
                        <p className="text-gray-600">Our selection of well-maintained used equipment offers great value without compromising on quality.</p>
                    </div>

                    {/* Attachments */}
                    <div className="flex flex-col items-center lg:col-span-2">
                        <img src="./attachment-hammer.png" alt="Attachments Icon" className="w-16 h-16 mb-4" />
                        <h3 className="text-2xl font-semibold mb-2">Attachments</h3>
                        <p className="text-gray-600">We offer a variety of attachments to enhance the functionality of your equipment for specialized tasks.</p>
                    </div>
                </div>
            </div>
            {/* Contact Us Form */}
            <div className="w-screen bg-yellow-safety py-10">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-semibold text-center mb-6">Send Us a Message</h2>
                    <form action='https://formspree.io/f/xeojwlnj' method='POST' className="max-w-2xl mx-auto p-8">
                        <div className="grid grid-cols-1 gap-6 mb-6">
                            {/* First Name */}
                            <div>
                                <input type="text" name='Name' placeholder="Name" className="w-full p-3 border  rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            {/* Email */}
                            <div>
                                <input type="email" name='Email' placeholder="Email" className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                            </div>
                            {/* Phone */}
                            <div>
                                <input type="tel" name='Phone' placeholder="Phone" className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                            </div>
                        </div>

                        {/* Company Name */}
                        <div className="mb-6">
                            <input type="text" name='Company' placeholder="Company Name" className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                        </div>

                        {/* Message */}
                        <div className="mb-6">
                            <textarea rows="5" name='Message' placeholder="Message" className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required ></textarea>
                        </div>

                        {/* Submit Button */}
                        <div className="text-center">
                            <button type="submit" className="px-6 py-3 bg-blue-600 text-white rounded shadow-lg hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
            <ContactUs />
        </>
    )
}

export default Sales;