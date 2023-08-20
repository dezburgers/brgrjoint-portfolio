// allwork.jsx
import React, { useState } from 'react';

const VideoGrid = () => {
    const videos = [
        { id: 1, url: 'https://www.youtube.com/embed/hz6lo27vtDQ', title: 'Video Title 1' },
        { id: 2, url: 'https://www.youtube.com/embed/-gZSQvBPxdE', title: 'Video Title 2' },
        // Add more videos...
    ];

    const [selectedVideo, setSelectedVideo] = useState(null);

    const openModal = (video) => {
        setSelectedVideo(video);
    };

    const closeModal = () => {
        setSelectedVideo(null);
    };

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {videos.map((video) => (
                <div key={video.id} className="cursor-pointer" onClick={() => openModal(video)}>
                    <div className="relative">
                        <iframe
                            src={video.url}
                            title={video.title}
                            frameBorder="0"
                            allowFullScreen
                            className="w-full h-40 md:h-60 lg:h-80"
                        />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300 bg-black bg-opacity-50">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="white"
                                className="w-10 h-10"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15 12l-3 3-3-3"
                                />
                            </svg>
                        </div>
                    </div>
                    <p className="mt-2 text-sm">{video.title}</p>
                </div>
            ))}
            {selectedVideo && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
                    <div className="max-w-md w-full p-4 bg-white rounded-lg shadow-lg">
                        <iframe
                            src={selectedVideo.url}
                            title={selectedVideo.title}
                            frameBorder="0"
                            allowFullScreen
                            className="w-full h-64"
                        />
                        <button
                            onClick={closeModal}
                            className="mt-4 px-4 py-2 text-white bg-red-500 hover:bg-red-600 rounded-lg focus:outline-none"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default VideoGrid;
