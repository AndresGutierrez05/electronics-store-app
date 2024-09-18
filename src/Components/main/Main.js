import Products from "../product-list/Products";
import GET_CUSTOMER_BY_ID from '../../Queries/GET_CUSTOMER_BY_ID';
import { Header, MainContent } from "./styles";
import { useQuery } from "@apollo/client";
import ShoppingCart from "../shopping-cart/shopping-cart";

export default function Main(){
    const { data, loading, error } = useQuery(GET_CUSTOMER_BY_ID);
    return(
        <>
            <Header>
                <h1>Electronics Store</h1>
                <h3>Welcome {!loading && error == undefined
                                ? `${data.customerById.firstName}` : ""}</h3>
            </Header>
            <MainContent>
                <Products/>
                <ShoppingCart/>
            </MainContent>
        </>
    );
}