import { createContext, useEffect, useState } from "react";
import axios from 'axios';

export const AppContext = createContext();



export default function AppContextProvider({children}){
   const [cartData,setCartData] = useState([]);

   function getdata(p){
       axios.get(`https://json-server-manoj-api.herokuapp.com/cart`).then((res)=>{
           setCartData(res.data);
        })
    }
    
    // console.log(cartData)
    useEffect(()=>{
        getdata();
    },[])

    return(
        <AppContext.Provider value={{cartData:[...cartData],getdata}}>
            {children}
        </AppContext.Provider>
    )
}
