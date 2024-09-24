import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
    const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;

    const handleDelete = (_id) => {
        console.log(_id);

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/coffees/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your coffee has been deleted.",
                                icon: "success"
                            });
                            const remaining = coffees.filter(cof=> cof._id !== _id);
                            setCoffees(remaining)
                        }
                    })

            }
        });



    }

    return (
        <div>
            <div className="flex items-center gap-3 bg-[#F5F4F1] shadow rounded p-3">
                <figure className='w-2/5 flex items-center '>
                    <img
                        src={photo}
                        alt="Movie"
                        className='rounded '
                    />
                </figure>
                <div className="flex justify-between items-center w-full ">
                    <div>
                        <h2 className="card-title mb-2">Name: {name}</h2>
                        <p className='text-sm font-semibold mb-2'>Supplier: {supplier}</p>
                        <p className='text-sm font-semibold mb-2'>Taste: {taste}</p>
                        <p className='text-sm font-semibold'>Quantity: {quantity}</p>
                    </div>
                    <div className="card-actions justify-end">
                        <div className="join join-vertical space-y-3">
                            <button className="btn bg-[#E3B577] text-white">View</button>
                            <Link to={`/updateCoffee/${_id}`} className='bg-slate-700 btn'>
                                <button className="text-white">Edit</button>
                            </Link>
                            <button onClick={() => handleDelete(_id)} className="btn  bg-red-700 text-white">X</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;