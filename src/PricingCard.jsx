import React from 'react';
import PricingFeatures from './PricingFeatures';

const PricingCard = ({pricing}) => {
    
    console.log(pricing)
    return (
        <div className='border bg-[#d3d3d3] rounded-2xl p-4'>
            {/* card header */}
            <div>
            <h1 className='text-7xl'>{pricing.name}</h1>
            <h4 className='text-3xl'>${pricing.price}</h4>
            </div>
            {/* card Body */}
            <div>
            <p className='bg-amber-600 p-4 rounded-2xl mt-10'>{pricing.description}</p>
            {
                pricing.features.map((feature, index) => <PricingFeatures key={index} feature ={feature}></PricingFeatures>)
            }
            </div>
        </div>
    );
};

export default PricingCard;