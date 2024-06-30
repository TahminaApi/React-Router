import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <div className="flex items-center justify-center h-screen bg-gray-100">
                <div className="text-center">
                    <h1 className="text-6xl font-semibold text-gray-700 mb-4">404</h1>
                    <p className="text-2xl text-gray-600 mb-8">Oops! Page not found.</p>
                    <Link to="/" className="text-lg bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg inline-block">Back to Home Page</Link>
                </div>
            </div>

        </div>
    );
};

export default NotFound;