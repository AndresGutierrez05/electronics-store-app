import React from 'react';
import { useQuery } from '@apollo/client';
import { connect, useSelector } from 'react-redux';
import { addProduct, changeQuantity, removeProduct } from '../../Actions';
import ALL_PRODUCTS from '../../Queries/ALL_PRODUCTS';
import { Wrapper } from './styles';
import { isNumberKey, validateRange } from '../../utils/utils';

function Products({dispatch}){
    const { data, loading, error } = useQuery(ALL_PRODUCTS);
    const productsStorage = useSelector((state) => state.products);
    const changeProducts = (e, product) => {
        const value = parseInt(e.target.value);
        if(!isNaN(value) && value > 0){
            if(productsStorage.filter(pro => pro.productID == product.productID).length > 0)
                dispatch(changeQuantity(product.productID, value));
            else
                dispatch(addProduct({...product, quantity : value}));
        }
        else
            dispatch(removeProduct(product.productID));
    }

    const validateInput = (e, productID) => {
        if(!validateRange(e)){
            dispatch(changeQuantity(productID, 1));
            alert("Out of stock");
            e.target.value = "1";
        }
    }
    
    if(error) return <span>{error}</span>
    return(loading 
        ? <p>Loading...</p>
        :
        (<>
            <Wrapper>
                <h4>List Of Products</h4>
                {
                    data.products.map(product => 
                        <div key={`card${product.productID}`}>
                            <div key={`cardimage${product.productID}`}><img key={`image${product.productID}`} src={product.imageUrl}/></div>
                            <div key={`cardinfo${product.productID}`}>
                                <p key={`info${product.productName}`} >{product.productName}</p>
                                <p key={`item${product.productID}`} >Item No. {product.productID} {product.categories.map(category => <span key={`span${product.productID}${category.categoryName}`}>{category.categoryName}</span>)}</p>
                                <p key={`descripcion${product.productID}`} >{product.descripcion}</p>
                            </div>
                            <div key={`cardconfig${product.productID}`}>
                                <p key={`price${product.productName}`}>${product.price}</p>
                                <div key={`config${product.productName}`}>
                                    <input key={`textbox${product.productName}`} 
                                        min={0} 
                                        max={product.stockQuantity} 
                                        type='number'
                                        defaultValue={productsStorage.quantity != null ? productsStorage.quantity : 0 }
                                        onKeyDown={(e) => isNumberKey(e)}
                                        onKeyUp={(e) => validateInput(e, product.productID)}
                                        onChange={(e) => changeProducts(e, product)} ></input>
                                </div>
                                <p key={`stock${product.productName}`}>{product.stockQuantity} in stock</p>
                            </div>
                        </div>
                    )
                }
            </Wrapper>
        </>)
    )
} 

Products = connect()(Products)

export default Products;
