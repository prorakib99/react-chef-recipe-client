import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import RecipeCard from '../Shared/RecipeCard/RecipeCard';

const Recipe = () => {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);

    const buttonStatus = true;

    const chef = useLoaderData();
    const { id, chefName, likes, numberOfRecipes, picture, yearsOfExperience } = chef;
    
    useEffect(() => {
        fetch(`https://react-chef-recipe-server.vercel.app/recipe/${id}`)
        .then(res => res.json())
        .then(data => {
            setRecipes(data);
            setLoading(false);
        })
        .catch(error => console.error(error))
    }, [])

    if (loading) {
        return (
            <div className='w-screen text-center'>
                <span className="loading my-11 loading-bars loading-lg"></span>
            </div>
        )
    }

    console.log(recipes);
    
    return (
        <div className='container mx-auto px-8'>
            <div className="hero my-10 pt-10">
                <div className="hero-content gap-14 items-center flex-col lg:flex-row">
                    <img src={picture} className="max-w-sm rounded-full p-6 shadow-2xl" />
                    <div>
                        <h1 className="text-5xl text-center font-bold mb-8">{chefName}</h1>
                        <div className="stats flex shadow flex-wrap">

                            <div className="stat shadow">
                                <div className="stat-figure text-primary">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                                </div>
                                <div className="stat-title text-lg">Total Likes</div>
                                <div className="stat-value text-primary">{likes}</div>
                            </div>

                            <div className="stat shadow">
                                <div className="stat-figure text-secondary">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                                </div>
                                <div className="stat-title text-lg">Experience</div>
                                <div className="stat-value text-secondary">{yearsOfExperience} Years</div>
                            </div>

                            <div className="stat shadow">
                                <div className="stat-figure text-secondary">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
                                </div>
                                <div className="stat-title text-lg">Total Recipe</div>
                                <div className="stat-value">{numberOfRecipes} Recipe</div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className='grid lg:grid-cols-3 my-32 gap-16'>
                {
                    recipes.map(recipe => <RecipeCard key={recipe.recipeId} buttonStatus={buttonStatus} recipe={recipe}></RecipeCard>)
                }
            </div>
        </div>
    );
};

export default Recipe;