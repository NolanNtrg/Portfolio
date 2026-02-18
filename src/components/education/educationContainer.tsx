export function EducationContainer() {
  return (
    <div className="m-[2vw] mr-[55vw] bg-gray-900 border border-gray-700 rounded-lg overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:border-green-400 hover:shadow-xl hover:shadow-green-500/10">
      <div className="p-3 md:p-4">
        <h3 className="text-white text-base md:text-lg mb-1.5 font-semibold">
          BracketBuddy
        </h3>
        <div className="flex flex-wrap gap-1.5 mb-2">
          <span className="inline-block text-xs px-2 py-0.5 bg-gray-700/50 rounded-md text-gray-300">
            Java
          </span>
          <span className="inline-block text-xs px-2 py-0.5 bg-gray-700/50 rounded-md text-gray-300">
            JavaFX
          </span>
          <span className="inline-block text-xs px-2 py-0.5 bg-gray-700/50 rounded-md text-gray-300">
            SQL
          </span>
        </div>
        <p className="text-xs md:text-sm text-gray-400 line-clamp-2 font-ibm ">
          we sdk la team
        </p>
      </div>
    </div>
  );
}
