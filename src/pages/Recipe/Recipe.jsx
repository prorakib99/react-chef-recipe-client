import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Recipe = () => {
    const recipes = useLoaderData();
    console.log(recipes);
    return (
        <div>
            
        </div>
    );
};

export default Recipe;