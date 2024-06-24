import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchData} from '../../../redux/slices/ProductSlice';
import SingleProduct from '../singleProduct/SingleProduct';
import './ProductList.css';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

function ProductList() {

    const dispatach = useDispatch();
    const products = useSelector((state) => state.productReducer.products);
    const status = useSelector(state => state.productReducer.status);
    const error = useSelector(state => state.productReducer.error);
    

    useEffect(() => {
        dispatach(fetchData());
    }, []);

    if(status === 'loading') {
        const antIcon = <LoadingOutlined start={{ fontSize: 24}} spin />
        return <Spin style={{position: 'absolute', top:'40%', left:'50%' }} indicator={antIcon} />
    }

    if(status === 'failed'){
        return <div>
            <h1>Un oh! </h1>
            <h2>Something went to wrong</h2>
            <p>{error}</p>
        </div>
    }

    

  return (
    // <div>{products.map(item => <h3>{item.title}</h3>)}</div>
    <div className='ProductList'>{products.map(item => <SingleProduct key={item.id} product = {item}/> )}</div>
  )
}

export default ProductList