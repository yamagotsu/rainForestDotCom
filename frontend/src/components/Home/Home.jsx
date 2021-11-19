import React from 'react';
import Productcard from '../ProductCard/Productcard';

const Home = ({ data, category }) => {
    return (
        <div>
            <h1 className='text-center mt-3'>{category}</h1>
            <section className='py-4 container'>
                <div className='row justify-content-center'>
                    {data.map((item) => {
                        return (
                            <Productcard
                                key={item.id}
                                img={item.image_url}
                                title={item.name}
                                description={item.subcategory}
                                price={item.price}
                                item={item}
                            />
                        )
                    })}
                </div>
            </section>
        </div>
    )
}

export default Home