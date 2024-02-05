export default function Hero() {
  return (
    // Added flex, flex-col for column direction, justify-center to align vertically, and items-center to align horizontally
    <div className="bg-hero-bg bg-cover bg-center h-2/3 text-white py-40 px-6 object-fill flex flex-col justify-center items-center">
      <div className="md:w-2/3 lg:w-1/2 text-center">
        {" "}
        {/* text-center is added to center the text within this div */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Unlock Your Cybersecurity Potential
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Join the leading cybersecurity learning platform and advance your
          career.
        </p>
        <a
          href="#courses"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded"
        >
          Start Learning
        </a>
      </div>
    </div>
  );
}
