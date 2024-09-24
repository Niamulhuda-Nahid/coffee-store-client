import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom"
import CoffeeCard from "./components/CoffeeCard";


function App() {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);

  return (
    <div className="container mx-auto">
      <h1 className='text-6xl text-purple-600 text-center mt-20'>Coffee Store</h1>

      <div className="flex justify-center mb-10 mt-7">
        <Link to="/addCoffee" className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group border border-purple-700">
          <span className="w-48 h-48 rounded rotate-[-40deg] bg-purple-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
          <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">Add Coffee</span>
        </Link>
      </div>

      <div className="grid md:grid-cols-2 gap-5 mb-20 w-4/5 mx-auto">
        {coffees.map(coffee => <CoffeeCard
          key={coffee._id}
          coffee={coffee}
          coffees={coffees}
          setCoffees={setCoffees}
        ></CoffeeCard>)}
      </div>
    </div>
  )
}

export default App
