import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { FaStarOfLife } from "react-icons/fa";
import { Link } from 'react-router-dom';

const RecipeCard = ({ recipe, buttonStatus }) => {
    const { recipePhoto, recipeName, chefId, ingredients, instructions } = recipe;
    const [favoriteBtn, setFavoriteBtn] = useState(false)

    const handleFavorite = () => {
        setFavoriteBtn(true);
        toast.success('Successfully Added!')
    }
    return (
        <>
            <div className="card bg-base-100 shadow-xl">
                <figure><img className='lg:h-72 w-full' src={recipePhoto} alt={recipeName} /></figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl mb-3">{recipeName}</h2>
                    <ul className='flex gap-2 flex-wrap'>
                        {
                            ingredients.map((ingredient, index) => <li className='font-bold flex items-center gap-2' key={index}><FaStarOfLife className='text-xs' /> {ingredient}</li>)
                        }
                    </ul>
                    <div className="divider my-3"><p className='text-lg font-bold'>Instructions</p></div>
                    <ul className='grid gap-3'>
                        {
                            instructions.map((instruction, index) => <li className='text-base' key={index}>{instruction}</li>)
                        }
                    </ul>
                    <div className="card-actions justify-end mt-6">
                        {
                            buttonStatus ? <Link className='w-full'>
                                <button onClick={handleFavorite} disabled={favoriteBtn} className="btn bg-blue-500 hover:bg-blue-600 text-base w-full text-white font-bold">Mark Favorite</button>
                            </Link> :
                                <Link to={`/chef/${chefId}`} className='w-full'>
                                    <button className="btn bg-blue-500 hover:bg-blue-600 text-base w-full text-white font-bold">Details View</button>
                                </Link>
                        }
                    </div>
                </div>
            </div>
        </>
    )
};

export default RecipeCard;