import React from 'react';

const HeroRecipeCard = ({ recipe }) => {
    const {recipePhoto, recipeName } = recipe;
    return (
        <div className='w-full'>
            <img src={recipePhoto} className="max-w-full mx-auto w-20 h-20 lg:h-60 lg:w-60 rounded-full shadow-2xl" />
            <h4 className='text-lg font-bold text-center mt-6'>{recipeName}</h4>
        </div>
    );
};

export default HeroRecipeCard;