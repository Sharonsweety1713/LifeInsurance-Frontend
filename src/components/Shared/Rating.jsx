import React, { useState } from 'react';

const Rating = ({ rating, setRating }) => {
    const [hover, setHover] = useState(0);

    return (
        <div className="star-rating flex">
            {[...Array(5)].map((star, index) => {
                const ratingValue = index + 1;

                return (
                    <label key={index} className="cursor-pointer">
                        <input
                            type="radio"
                            name="rating"
                            value={ratingValue}
                            onClick={() => setRating(ratingValue)}
                            className="hidden"
                        />
                        <svg
                            className={`star w-6 h-6 ${ratingValue <= (hover || rating) ? 'text-yellow-400' : 'text-gray-400'}`}
                            onMouseEnter={() => setHover(ratingValue)}
                            onMouseLeave={() => setHover(0)}
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M12 .587l3.668 7.568L24 9.765l-6 5.851L19.335 24 12 19.897 4.665 24 6 15.616 0 9.765l8.332-1.61L12 .587z"
                            />
                        </svg>
                    </label>
                );
            })}
        </div>
    );
};

export default Rating;
