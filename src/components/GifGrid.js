import React from 'react'
import { GifGridItem } from './GifGridItem'
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({category}) => {

    const {images, loading} = useFetchGifs(category);
    
    return (
        <div className='category'>
            <h2>{ category }</h2>            
            {loading && <p>Loading</p>}
            {   <div className='card-grid'>
                    {
                        images.map( img => <GifGridItem key={img.id} {...img}/> )
                    }
                </div>
            }
        </div>
    )
}
