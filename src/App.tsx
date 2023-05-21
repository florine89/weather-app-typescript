// My main container

const App = () => {
  return (
    <main className="flex justify-center items-center bg-gradient-to-br from-green-400 via-rose-400
     to-yellow-300 h-[100vh] w-full">
      <section className=" w-full md:max-w-[500px] p-4 flex flex-col text-center
      items-center justify-center md:px-10 lg:p-24 h-full lg:h-[500px]
      bg-white bg-opacity-25 backdrop-blur-lg drop-shadow-lg shadow-2xl rounded text-gray-900">
        <h1 className="text-4xl ">Weather Forecast</h1>
        <p className="text-sm mt-2">
          Enter below a place you want to know the weather of and select an option from dropdown
        </p>
        <div className="flex mt-10 md:mt-4">
        <input type="text" value={''} className=" border-2 rounded-l-md mt-3 border-white"/>
        <button className="rounder-r-md border-2 border-white cursor-pointer
         hover:border-gray-700 text-gray-900 py-1 px-4 mt-3">
Search
        </button>
        </div>
      </section>

    </main>
  )
}

export default App;
