import React, { useState } from 'react';
import Typography from '../components/Typography';
import ContactUs from './sections/ContactUs';
import QuoteModal from './sections/Quote';

const Rentals = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState('');

    const items = [
        {
            name: 'Air Compressor',
            description: '185CFM Compressor, 375CFM Compressor',
            image: './air-compressor.png',
        },
        {
            name: 'General Tools Electric',
            description: 'General electric tools for small jobs',
            image: './GeneralTools-Electric-v2.jpg',
        },
        {
            name: 'Fuel Cube',
            description: 'Secure, portable fuel storage solution',
            image: './Fuel-Cube.png',
        },
        {
            name: 'Shipping Container',
            description: '20ft and 40ft containers for transportation',
            image: './shipping-Container.png',
        },
        {
            name: 'Skid Steer Generator',
            description: 'Skid steer mounted generator for power needs',
            image: './skid-steer-generator.png',
        },
        {
            name: 'Excavator',
            description: '38000 lbs Excavator with reduced tail swing',
            image: './excavator.webp',
        },
        {
            name: 'Towable Generator',
            description: 'Portable generator for power at remote sites',
            image: './towable-generator.png',
        },
        {
            name: 'Light Tower',
            description: 'Portable light tower for night operations',
            image: './light-tower.jpg',
        },
    ];

    const openModal = (name) => { 
        setSelectedItem(name);
        setIsModalOpen(true);
    }

    const closeModal = () => setIsModalOpen(false);

    return (
        <>
            <div className="w-screen h-96  relative">
                {/* Full-Screen Image Section */}
                <img src="./tractor-rentals.jpg" alt="rentals" className="w-full h-full object-cover brightness-50" />
                <h1 className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold text-center drop-shadow-lg">
                    Rent | Build | Succeed
                </h1>
            </div>

            {/* Content Section */}
            <div className='w-screen bg-slate-300'>
                <div className='container mx-auto'>
                    <p className="text-black text-lg text-center py-8 px-10">
                        At JFT Rentals, we offer a diverse range of high-quality equipment to meet all your project needs. From construction equipment to generators, light towers, and air compressors, our rental fleet is designed to support your projects efficiently. Whether you're working on a short-term job or need reliable tools for an extended period, we have flexible rental options tailored to your timeline and budget. Let us help you get the right equipment, so you can focus on getting the job done.
                    </p>
                </div>
            </div>
            <div className='bg-yellow-safety'>
                <div className="container mx-auto">
                    {/* Inventory Section */}
                    <div className="flex flex-col bg-yellow-safety py-4">
                        <Typography
                            className="md:text-left text-4xl md:text-6xl"
                            lineposition="left"
                            lineColor="white"
                            text="Quality Equipment, Ready to Rent"
                        >
                            Inventory
                        </Typography>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-12 p-4 justify-items-center">
                            {items.map((item, index) => (
                                <RentalCard key={index} openModal={openModal} closeModal={closeModal} {...item} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <ContactUs />
            <QuoteModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                itemName={selectedItem}
            />
        </>
    );
};

export default Rentals;



const RentalCard = ({ name, description, image, openModal }) => {
    return (
        <div className="max-w-xs border-2 bg-white rounded-lg shadow-md overflow-hidden p-2">
            <div className='bg-slate-200 h-4 mt-4 mb-4'></div>
            <div className="bg-gray-100">
                {/* Image */}
                <img
                    className="w-full h-48 object-cover"
                    src={image}
                    alt="Excavator"
                />
            </div>
            <div className='bg-slate-200 h-4 mt-4 mb-4'></div>

            <div className="p-4 text-center">
                {/* Title */}
                <h3 className="text-lg font-semibold">{name}</h3>

                {/* Price */}
                <button onClick={() => openModal(name)} className="bg-yellow-500 text-black px-4 py-2 mt-2 rounded-md"> Request Quote</button>

                {/* Description */}
                <p className="text-gray-500 mt-1">{description}</p>

            </div>
        </div>
    );
};


