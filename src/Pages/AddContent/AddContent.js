import React from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const AddContent = () => {

    const handleAddContent = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.title.value;
        const location = form.location.value;
        const img = form.photoURL.value;
        const period = form.period.value;
        const totalCost = form.totalCost.value;
        const details = form.details.value;
        const content = {
            name,
            location,
            img,
            period,
            totalCost,
            details,
        }
        fetch(`https://traveloholic-server.vercel.app/playlists`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(content)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('You have successfully added a content to your playlist')
                    form.reset()
                }
            })
    }

    return (
        <div className='my-20'>
            <div className='my-10'>
                <h1 className='text-3xl font-bold text-center'>Add a New Content to your Website</h1>
            </div>
            <form onSubmit={handleAddContent}>
                <div className='lg:w-1/2 mx-auto border text-black rounded-lg bg-emerald-200 p-12'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Title</span>
                        </label>
                        <input type="text" name='title' placeholder="content title" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Location</span>
                        </label>
                        <input type="text" name='location' placeholder="location" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name='photoURL' placeholder="photo url" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Period</span>
                        </label>
                        <input type="text" name='period' placeholder="day spend" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Total Cost</span>
                        </label>
                        <input type="text" name='totalCost' placeholder="total cost" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Location Details</span>
                        </label>
                        <textarea type="text" name='details' placeholder="details" className="textarea h-20" required />
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn" type="submit" value="Add to Playlist" />
                    </div>
                    <p className='mt-5'>See All Your <Link to={'/playlists'} className="font-semibold">Playlist</Link></p>
                </div>
            </form>

        </div>
    );
};

export default AddContent;