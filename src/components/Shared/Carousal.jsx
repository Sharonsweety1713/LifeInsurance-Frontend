import React from 'react';
import Review from './Review';

function Carousal() {
  return (
    <main className="min-h-screen grid place-items-center">
      <section className="w-11/12 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          
          <div className="h-1 w-20 mx-auto"></div>
        </div>
        <Review />
      </section>
    </main>
  );
}

export default Carousal;
