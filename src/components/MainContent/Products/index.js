import React from 'react';
import ProductsCount from './ProductsCount';
import ProductsList from './ProductsList';

const Products = () => {
    return <div className="w-full h-full">
        <ProductsCount/>
        <ProductsList/>
    </div>
}

export default Products;