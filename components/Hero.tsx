
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-[70vh] min-h-[500px] md:h-screen md:min-h-[600px] bg-cover bg-center flex items-center justify-center text-white" style={{ backgroundImage: "url('https://picsum.photos/seed/herobg/1920/1080')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      {/* Decorative circle element */}
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 md:left-[calc(25%-50px)] md:top-1/2 md:-translate-y-1/2 w-[300px] h-[300px] md:w-[550px] md:h-[550px] bg-custom-blue-dark opacity-80 rounded-full -z-0 blur-sm"></div>
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 md:left-[calc(25%-50px)] md:top-1/2 md:-translate-y-1/2 w-[280px] h-[280px] md:w-[500px] md:h-[500px] bg-custom-blue-dark opacity-90 rounded-full z-0 flex items-center justify-center">
      </div>

      <div className="relative z-10 text-center md:text-left md:ml-[-20%] lg:ml-[-25%] max-w-3xl px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-tight">
          Desalination
          <br />
          & Resource
          <br />
          Recovery 2025
        </h1>
        <p className="mt-6 text-xl md:text-2xl font-semibold">
          27 - 28 October, 2025 | Dubai, UAE
        </p>
      </div>
    </section>
  );
};
