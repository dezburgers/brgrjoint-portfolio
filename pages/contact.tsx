import React from 'react';

const ContactPage: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-blue-300 to-blue-600">
            <h1 className="text-4xl font-bold text-white mb-4">Contact Us</h1>
            <div className="bg-white rounded-lg shadow-lg p-6">
                <p className="text-xl mb-2">Have questions or inquiries?</p>
                <p className="text-gray-600 mb-4">Feel free to reach out to us. We'd love to hear from you!</p>
                <div className="flex items-center mb-2">
                    <svg
                        className="w-6 h-6 text-blue-500 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                        />
                    </svg>
                    <p className="text-gray-700">Email: contact@example.com</p>
                </div>
                <div className="flex items-center mb-2">
                    <svg
                        className="w-6 h-6 text-blue-500 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 14.81a5.37 5.37 0 01-2.85 1.59 5.4 5.4 0 01-4.1-.87 5.4 5.4 0 01-2.56-3.36A5.37 5.37 0 015 9.81a5.37 5.37 0 012.85-1.59 5.4 5.4 0 014.1.87 5.4 5.4 0 012.56 3.36 5.37 5.37 0 012.85 1.59zM15 9a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                    </svg>
                    <p className="text-gray-700">Phone: (123) 456-7890</p>
                </div>
                <div className="flex items-center">
                    <svg
                        className="w-6 h-6 text-blue-500 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 22s-8-4.5-8-11.8A8 8 0 0112 2a8 8 0 018 8.2c0 7.3-8 11.8-8 11.8z"
                        />
                    </svg>
                    <p className="text-gray-700">Address: 123 Main St, City, Country</p>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
