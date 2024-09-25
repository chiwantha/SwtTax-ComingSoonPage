/* eslint-disable react/prop-types */
const CountdownSegment = ({ value, label }) => {
  return (
    <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-blue-500/50 backdrop-blur-sm sm:h-20 sm:w-20">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-white md:mb-1 md:text-4xl">
          {value}
        </h1>
        <div className="border-t-2 border-blue-300 text-center text-sm leading-6 text-blue-300 md:text-[15px]">
          <p className="text-center">{label}</p>
        </div>
      </div>
    </div>
  );
};

export default CountdownSegment;
