import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {


    const [categories, setCategories] = useState([]);

    return (<>
        <h2 className='app-title'>Buscador de Gifs</h2>
        <AddCategory setCategories={setCategories}></AddCategory>
        <ol className='categories-grid'>
            {
                categories.map( category => (
                    <GifGrid 
                        key={ category } 
                        category={ category }
                    />
                ))
            }
        </ol>
    </>);
}