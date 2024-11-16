import React from 'react';
import Success from '../../components/Success';

const QuoteModal = ({ isOpen, onClose, itemName }) => {

    
    const [isSuccessOpen, setSuccessOpen] = React.useState(false);
    
    if (!isOpen) return null;

    const submitForm = (e) => {

        e.preventDefault();
        const formData = new FormData(e.target);
        fetch("https://formspree.io/f/xldrkwvk", {
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
                    <h2 className="text-3xl md:text-4xl font-bold">Request a Quote</h2>
                    <button onClick={onClose} className="text-gray-600 hover:text-gray-800">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>
                <form className='bg-white rounded' action='https://formspree.io/f/xldrkwvk' method='POST' onSubmit={submitForm}>
                    <div className="mb-4 px-6">
                        <label className="block text-base font-medium text-gray-700 mb-2">Selected Item</label>
                        <input
                            type="text"
                            id="selectedItem"
                            name="selectedItem"
                            value={itemName}
                            readOnly
                            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
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
                    <div className='flex flex-row items-center'>
                    <div className="mb-4 px-6">
                        <label className="block text-base font-medium text-gray-700 mb-2">Start Date (Optional)</label>
                        <input
                            type="date"
                            id="startDate"
                            name="startDate"
                            className="w-full p-3 border  rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-base font-medium text-gray-700 mb-2">End Date (optional) </label>
                        <input
                            type="date"
                            id="endDate"
                            name="endDate"
                            className="w-full p-3 border  rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
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
        { isSuccessOpen && <Success message="Quote Request Submitted Successfully" onClose={onSuccessModalClose} /> }
        </>
    );
};

export default QuoteModal;
