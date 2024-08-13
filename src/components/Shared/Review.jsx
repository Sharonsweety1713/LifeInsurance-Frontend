// import React, { useState } from 'react';
// import people from './data';

// const Review = () => {
//   const [index, setIndex] = useState(0);
//   const { name, job, image, text } = people[index];

//   const checkNumber = (number) => {
//     if (number > people.length - 1) {
//       return 0;
//     } else if (number < 0) {
//       return people.length - 1;
//     }
//     return number;
//   };

//   const nextPerson = () => {
//     setIndex((index) => {
//       let newIndex = index + 1;
//       return checkNumber(newIndex);
//     });
//   };

//   const prevPerson = () => {
//     setIndex((index) => {
//       let newIndex = index - 1;
//       return checkNumber(newIndex);
//     });
//   };

//   const randomPerson = () => {
//     let randomNumber = Math.floor(Math.random() * people.length);
//     if (randomNumber === index) {
//       randomNumber = index + 1;
//     }
//     setIndex(checkNumber(randomNumber));
//   };

//   return (
    
//     <article className="p-6 rounded-lg shadow-md border-customGreen text-center ">
//       <div className="relative w-36 h-36 mx-auto mb-6 rounded-full">
//         <img src={image} alt={name} className="w-full h-full object-cover rounded-full" />
//         <span className="absolute top-0 left-0 w-10 h-10 grid place-items-center rounded-full transform translate-y-1/4 bg-primary-5 text-white">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 24 24"
//             fill="currentColor"
//             className="w-6 h-6"
//           >
//             <path d="M9 11.5a3 3 0 113 3h-3a3 3 0 010-6zm0 2h3a1 1 0 100-2h-3a1 1 0 100 2zM18 8h-3a3 3 0 000 6h3a3 3 0 000-6zm-3 2h3a1 1 0 110 2h-3a1 1 0 110-2z" />
//           </svg>
//         </span>
//         <div className="absolute top-[-0.25rem] right-[-0.5rem] w-full h-full bg-primary-5 rounded-full"></div>
//       </div>
//       <h4 className="text-[2rem] font-semibold mb-1 text-customGreen">{name}</h4>
//       <p className="text-primary-5 uppercase text-sm mb-2">{job}</p>
//       <p className="text-gray-500 mb-3 text-[1.5rem]">{text}</p>
//       <div className="flex justify-center mb-2">
//         <button
//           className="text-primary-7 text-xl bg-transparent border-0 mx-2 transition-colors duration-300 hover:text-primary-5 cursor-pointer"
//           onClick={prevPerson}
//         >
         
//         </button>
//         <button
//           className="text-primary-7 text-xl bg-transparent border-0 mx-2 transition-colors duration-300 hover:text-primary-5 cursor-pointer"
//           onClick={nextPerson}
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 24 24"
//             fill="currentColor"
//             className="w-6 h-6"
//           >
//             <path d="M8.59 16.59L13.17 12 8.59 7.41 7.17 6l6 6z" />
//           </svg>
//         </button>
//       </div>
//       <button
//         className="w-60 h-auto mt-2 bg-gray-600 text-primary-5 py-1 px-2 rounded transition-colors duration-300 hover:bg-customGreen hover:text-primary-1 cursor-pointer"
//         onClick={randomPerson}
//       >
//         Next
//       </button>
//     </article>
//   );
// };

// export default Review;
import React, { useState } from 'react';
import people from './data';

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    } else if (number < 0) {
      return people.length - 1;
    }
    return number;
  };

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  };

  return (
    <article className="relative p-6 rounded-3xl shadow-md transition-shadow duration-300 hover:shadow-lg text-center animate-fadeIn">
      <div className="absolute inset-0 rounded-3xl p-[0.5px] bg-gradient-to-r from-customGreen via-blue-500 to-customGreen"></div>
      <div className="relative z-10 bg-white rounded-3xl p-6">
        <div className="relative w-36 h-36 mx-auto mb-6 rounded-full">
          <img src={image} alt={name} className="w-full h-full object-cover rounded-full" />
          <span className="absolute top-0 left-0 w-10 h-10 grid place-items-center rounded-full transform translate-y-1/4 bg-primary-5 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M9 11.5a3 3 0 113 3h-3a3 3 0 010-6zm0 2h3a1 1 0 100-2h-3a1 1 0 100 2zM18 8h-3a3 3 0 000 6h3a3 3 0 000-6zm-3 2h3a1 1 0 110 2h-3a1 1 0 110-2z" />
            </svg>
          </span>
          <div className="absolute top-[-0.25rem] right-[-0.5rem] w-full h-full bg-primary-5 rounded-full"></div>
        </div>
        <h4 className="text-[1.5rem] font-semibold mb-1 text-customGreen">{name}</h4>
        <p className="text-primary-5 uppercase text-sm mb-2">{job}</p>
        <p className="text-gray-500 mb-3 text-[1.2rem]">{text}</p>
        <div className="flex justify-center mb-2">
          <button
            className="text-primary-7 text-xl bg-transparent border-0 mx-2 transition-colors duration-300 hover:text-primary-5 cursor-pointer"
            onClick={prevPerson}
          >
            {/* SVG for previous button */}
          </button>
          <button
            className="text-primary-7 text-xl bg-transparent border-0 mx-2 transition-colors duration-300 hover:text-primary-5 cursor-pointer"
            onClick={nextPerson}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M8.59 16.59L13.17 12 8.59 7.41 7.17 6l6 6z" />
            </svg>
          </button>
        </div>
        <button
          className="w-60 h-12 mt-2 bg-gray-600 text-primary-5 py-1 px-2 rounded transition-colors duration-300 hover:bg-customGreen hover:text-primary-1 cursor-pointer"
          onClick={randomPerson}
        >
          Next
        </button>
      </div>
    </article>
  );
};

export default Review;

