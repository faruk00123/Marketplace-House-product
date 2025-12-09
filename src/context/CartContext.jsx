import { createContext, useState } from "react";
import Swal from "sweetalert2";

export const Tamim = createContext();

export const CartProvider = ({children}) => {
    const [isValue, setIsValue] = useState([]);

    const addToCart = (Product) => {
        if(isValue.some((item) => item.id === Product.id)){
            Swal.fire({
              icon: "error",
              title: "Product Already in Cart",
              text: "Cart Add Exgisting!",
          });
        }
        else{
            Swal.fire({
              title: "Add To Cart Product!",
              icon: "success",
              draggable: true
            });
            setIsValue(prevItem => [...prevItem, Product])
        }
    }
    const cartCount = isValue.length;
    return (
        <Tamim.Provider value={{cartCount, addToCart}}>
           {children}
        </Tamim.Provider>
    )

}