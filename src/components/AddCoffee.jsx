import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'

const AddCoffee = () => {

    const handleAddCoffee = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const newCoffee = { name, quantity, supplier, taste, category, details, photo }
        console.log(newCoffee)

        fetch('http://localhost:5000/coffees', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'success',
                        text: 'Coffee added successfully',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                    form.reset();
                }
            })

    }

    return (
        <div className='container mx-auto'>
            <div className=' w-3/4  mx-auto mt-4'>
                <Link to="/" className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group border border-purple-600">
                    <span className="w-48 h-48 rounded rotate-[-40deg] bg-purple-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                    <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">Back to home</span>
                </Link>
            </div>

            <form onSubmit={handleAddCoffee} className='card bg-[#F4F3F0] w-3/4 shrink-0 shadow-sm mx-auto mt-10 rounded'>
                <h3 className='text-center text-3xl text-purple-600 font-bold mt-4'>Add New Coffee</h3>
                <div className='p-10'>
                    {/* name and quantity raw */}
                    <div className="flex gap-4 justify-center">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Coffee Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Coffee Name" className="input input-bordered rounded-sm" required />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Available Coantity</span>
                            </label>
                            <input type="text" name='quantity' placeholder="Available Coantity" className="input input-bordered rounded-sm" required />
                        </div>
                    </div>
                    {/* Supplier and taste raw */}
                    <div className="flex gap-4 justify-center">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Supplier Name</span>
                            </label>
                            <input type="text" name='supplier' placeholder="Supplier Name" className="input input-bordered rounded-sm" required />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Taste</span>
                            </label>
                            <input type="text" name='taste' placeholder="Taste" className="input input-bordered rounded-sm" required />
                        </div>
                    </div>
                    {/* Category and Details raw */}
                    <div className="flex gap-4 justify-center">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <input type="text" name='category' placeholder="Category" className="input input-bordered rounded-sm" required />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Details</span>
                            </label>
                            <input type="text" name='details' placeholder="Details" className="input input-bordered rounded-sm" required />
                        </div>
                    </div>
                    {/* raw */}
                    <div className="flex justify-center">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name='photo' placeholder="Photo URL" className="input input-bordered rounded-sm" required />
                        </div>
                    </div>
                    <button className=' border border-[#D2B48C] w-full mt-7 py-2 font-medium rounded-sm hover:bg-[#D2B48C] duration-300 hover:text-white'>Add Coffee</button>
                </div>
            </form>
        </div>
    );
};

export default AddCoffee;