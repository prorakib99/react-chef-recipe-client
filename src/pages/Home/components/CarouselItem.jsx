import React from 'react';
import HeroRecipeCard from './HeroRecipeCard';
import { Link } from 'react-router-dom';

const CarouselItem = ({ chef }) => {
    const { id, chefName, yearsOfExperience, picture, recipes } = chef;
    return (
        <div className="hero">
            <div className="flex w-full items-center flex-col lg:flex-row gap-10 justify-around">
                <div className='text-center'>
                    <img className='max-h-80 border rounded-full p-5 mx-auto shadow-2xl' src={picture} alt="" />
                    <h1 className="text-4xl mt-5 font-bold">{chefName}</h1>
                    <p className="py-6 text-2xl">{yearsOfExperience} Of Experience</p>
                    <Link to={`/chef/${id}`}>
                        <button className="btn bg-blue-500 hover:bg-blue-600 text-white text-xl">View Recipe</button>
                    </Link>
                </div>
                <div className='grid grid-cols-3 items-start gap-8'>

                    {
                        recipes.map(recipe => <HeroRecipeCard key={recipe.recipeId} recipe={recipe}></HeroRecipeCard>)
                    }

                </div>
            </div>
        </div>
    );
};

export default CarouselItem;