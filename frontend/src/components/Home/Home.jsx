import React from 'react';
import Productcard from '../ProductCard/Productcard';
import data from '../ProductCard/data';
const Home = () => {
    return (
        <div>
            <h1 className='text-center mt-3'>All Items</h1>
            <section className='py-4 container'>
                <div className='row justify-content-center'>
                    {data.ProductData.map((item, index) => {
                        return (
                            <Productcard
                                key={index}
                                img={item.img}
                                title={item.title}
                                description={item.description}
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