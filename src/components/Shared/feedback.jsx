// import React, { useState } from 'react';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import Rating from './Rating';

// const Feedback = () => {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [review, setReview] = useState('');
//     const [rating, setRating] = useState(0);

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const feedback = { name, email, review, rating };
//         console.log('Feedback submitted:', feedback);
//         toast.success('Thank you!Your feedbacks are valuable to us!', {
//             position: "top-center",
//             autoClose: 5000,
//             hideProgressBar: false,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//             progress: undefined,
//             theme: "colored",
//         });
//         // Handle form submission (e.g., send feedback to the server)
//     };

//     return (
//         <>
//             <div className="max-w-lg mx-auto p-6 shadow-md rounded-md">
//                 <form onSubmit={handleSubmit} className="space-y-6">
//                     <div>
//                         <label className="block text-gray-700 font-bold mb-2">
//                             Name:
//                             <input
//                                 type="text"
//                                 value={name}
//                                 onChange={(e) => setName(e.target.value)}
//                                 required
//                                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
//                             />
//                         </label>
//                     </div>
//                     <div>
//                         <label className="block text-gray-700 font-bold mb-2">
//                             Email:
//                             <input
//                                 type="email"
//                                 value={email}
//                                 onChange={(e) => setEmail(e.target.value)}
//                                 required
//                                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
//                             />
//                         </label>
//                     </div>
//                     <div>
//                         <label className="block text-gray-700 font-bold mb-2">
//                             Review:
//                             <textarea
//                                 value={review}
//                                 onChange={(e) => setReview(e.target.value)}
//                                 required
//                                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
//                             ></textarea>
//                         </label>
//                     </div>
//                     <div>
//                         <label className="block text-gray-700 font-bold mb-2">
//                             Rating:
//                             <Rating rating={rating} setRating={setRating} />
//                         </label>
//                     </div>
//                     <div>
//                         <button
//                             type="submit"
//                             className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-customGreen hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
//                         >
//                             Submit Feedback
//                         </button>
//                     </div>
//                 </form>
//             </div>
//             <ToastContainer
//                 position="top-right"
//                 autoClose={5000}
//                 hideProgressBar={false}
//                 newestOnTop={false}
//                 closeOnClick
//                 rtl={false}
//                 pauseOnFocusLoss
//                 draggable
//                 pauseOnHover
//                 theme="light"
//             />
//         </>
//     );
// };

// export default Feedback;

import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Rating from './Rating';
import { axiosInstance } from '@/services/api';
import axios from 'axios';

const Feedback = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [review, setReview] = useState('');
    const [rating, setRating] = useState(0);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const feedback = { name, email, review };

        try {
            // await axios.post('http://localhost:8080/contact', feedback);
            await axiosInstance.post('http://localhost:8080/contact', feedback);
            toast.success('Thank you! Your feedback is valuable to us!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            // Clear the form after successful submission
            setName('');
            setEmail('');
            setReview('');
            setRating(0);
        } catch (error) {
            toast.error('There was an error submitting your feedback. Please try again later.', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }
    };

    return (
        <>
            <div className="max-w-lg mx-auto p-6 shadow-md rounded-md">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-gray-700 font-bold mb-2">
                            Name:
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                            />
                        </label>
                    </div>
                    <div>
                        <label className="block text-gray-700 font-bold mb-2">
                            Email:
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                            />
                        </label>
                    </div>
                    <div>
                        <label className="block text-gray-700 font-bold mb-2">
                            Review:
                            <textarea
                                value={review}
                                onChange={(e) => setReview(e.target.value)}
                                required
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                            ></textarea>
                        </label>
                    </div>
                    <div>
                        <label className="block text-gray-700 font-bold mb-2">
                            Rating:
                            <Rating rating={rating} setRating={setRating} />
                        </label>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-customGreen hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                        >
                            Submit Feedback
                        </button>
                    </div>
                </form>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </>
    );
};

export default Feedback;
