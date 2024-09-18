import { useState } from "react";
import { BotonModal, Main, Modal } from "./styles";
import { FaShoppingCart, FaRegWindowClose, FaRegTrashAlt  } from "react-icons/fa";
import { connect, useSelector } from "react-redux";
import { addOrder, addProduct, changeQuantity, removeProduct } from "../../Actions";
import { isNumberKey, roundPrice, validateRange } from "../../utils/utils";
import { useMutation, useQuery } from "@apollo/client";
import GET_CUSTOMER_BY_ID from "../../Queries/GET_CUSTOMER_BY_ID";
import ADD_ORDER from "../../Queries/ADD_ORDER";

function ShoppingCart({dispatch}){
    const { data, loading } = useQuery(GET_CUSTOMER_BY_ID);
    const [ createOrderrr ] = useMutation(ADD_ORDER);
    const [ showModal, setShowModal ] = useState(false);
    const productsStorage = useSelector((state) => state.products);

    const changeProducts = (e, product) => {
        const value = parseInt(e.target.value);
        if(!isNaN(value) && value > 0){
            if(productsStorage.filter(pro => pro.productID == product.productID).length > 0)
                dispatch(changeQuantity(product.productID, value));
            else
                dispatch(addProduct({...product, quantity : value}));
        }
        else if(value == 0)
            dispatch(removeProduct(product.productID));
    }

    const createOrderHandle = () => {
        if(!loading){
            const customerID = data.customerById.customerID;
            const totalAmount = productsStorage.map(x => x.totalAmount).reduce((x, y) => x + y);
            const orderProducts = productsStorage.map(p => ({ productID : p.productID, quantity : p.quantity }));
            dispatch(addOrder({ customerID, totalAmount, orderProducts}));
            createOrderrr({ variables : { customerID, totalAmount, orderProducts : orderProducts}})
                .then(res => {
                    console.log(res.data.createOrder);
                    if(res.data.createOrder){
                        alert("Your order has been generated successfully");
                    }
                    else
                        alert("An error an occurred");
                });
        }
    }

    const validateInput = (e, productID) => {
        if(!validateRange(e)){
            dispatch(changeQuantity(productID, 1));
            alert("Out of stock");
            e.target.value = "1";
        }
    }

    return(
        <>
            <BotonModal onClick={() => setShowModal(true)}>
                <div>
                    <FaShoppingCart /><h3>Shopping Cart</h3>
                </div>
            </BotonModal>
            {showModal &&
                <Modal onAuxClickCapture={() => setShowModal(false)}>
                    <div>
                        <h1 onClick={() => setShowModal(false)}><FaRegWindowClose /></h1>
                        <Main>
                            <div>
                                <h1>My Shopping Cart</h1>
                                {
                                    productsStorage.length > 0 
                                        ?
                                            <table>
                                                <thead>
                                                    <tr>
                                                        <th>Product</th>
                                                        <th>Price</th>
                                                        <th>Quantity</th>
                                                        <th>Total</th>
                                                        <th>Delete</th>
                                                    </tr>
                                                </thead>
                                            <tbody>
                                                {
                                                    productsStorage.map(product => 
                                                        <tr key={`shoptable${product.productID}`}>
                                                            <td><img key={`shopimage${product.productID}`} src={product.imageUrl}/>
                                                                <div>
                                                                    <p key={`shop${product.productID}`}>{product.productName}</p> 
                                                                </div>
                                                            </td>
                                                            <td>$  {product.price}</td>
                                                            <td><input key={`shoptextbox${product.productName}`} 
                                                                min={1} 
                                                                max={product.stockQuantity} 
                                                                defaultValue={product.quantity != null ? product.quantity : 0 }
                                                                type='number' 
                                                                onKeyDown={(e) => isNumberKey(e)} 
                                                                onKeyUp={(e) => validateInput(e, product.productID)}
                                                                onChange={(e) => changeProducts(e, product)} ></input>
                                                            </td>
                                                            <td>$  {roundPrice(product.totalAmount)}</td>
                                                            <td><p onClick={() => dispatch(removeProduct(product.productID))} key={`shopdelete${product.productID}`}><FaRegTrashAlt /></p></td>
                                                        </tr>
                                                    )
                                                }
                                            </tbody>
                                        </table>
                                        : <p>No products added yet...</p>
                                }
                            </div>
                            <div>
                                <h1>Shopping cart details</h1>
                                {
                                    productsStorage.length > 0 &&
                                        <>
                                            <table>
                                                <tbody>
                                                    <tr>
                                                        <td></td>
                                                        <td>Items  ({productsStorage.length > 1 
                                                            ? productsStorage.map(x => x.quantity).reduce((x, y) => x + y)
                                                            : productsStorage.map(pro => pro.quantity)}) units</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Total</td>
                                                        <td>$  { productsStorage.length > 1 
                                                            ? roundPrice(productsStorage.map(x => x.totalAmount).reduce((x, y) => x + y))
                                                            : roundPrice(productsStorage.map(pro => pro.totalAmount))}</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <button onClick={() => createOrderHandle()}>Process Order</button>
                                        </>
                                }
                            </div>
                        </Main>
                    </div>
                </Modal>
            }
        </>
    )
}

ShoppingCart = connect()(ShoppingCart)

export default ShoppingCart;