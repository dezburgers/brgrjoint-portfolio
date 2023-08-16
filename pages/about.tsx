import React from 'react';

const AboutPage: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-4xl font-bold mb-4">About Us</h1>
            <div className="bg-white rounded-lg shadow-lg p-6">
                <p className="text-xl mb-4">
                    We are a creative team dedicated to delivering outstanding digital experiences.
                </p>
                <p className="text-gray-600 mb-4">
                    Our mission is to bring ideas to life through innovative design and technology.
                </p>
                <p className="text-gray-600 mb-4">
                    With a passion for creativity and attention to detail, we collaborate with clients to create
                    visually appealing and user-friendly solutions.
                </p>
                <p className="text-gray-600 mb-4">
                    Our diverse team of designers, developers, and strategists work together to ensure the
                    success of every project we undertake.
                </p>
                <p className="text-gray-600">
                    Join us on our journey to redefine digital experiences and make an impact in the digital world.
                </p>
            </div>
        </div>
    );
};

export default AboutPage;
