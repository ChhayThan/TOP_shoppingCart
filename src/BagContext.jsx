import { createContext, useContext, useState } from "react";

const BagContext = createContext();

export function useBag() {
  return useContext(BagContext);
}

export function BagProvider({ children }) {
  const [bag, setBag] = useState([
    {
      id: 2,
      title: "Mens Casual Premium Slim Fit T-Shirts ",
      image:
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      category: "men's clothing",
      quantity: 1,
      price: 22.3,
    },
    {
      id: 3,
      title: "Mens Cotton Jacket",
      image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      category: "men's clothing",
      quantity: 3,
      price: 55.99,
    },
    {
      id: 5,
      title:
        "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
      image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
      category: "jewelery",
      quantity: 2,
      price: 695,
    },
    {
      id: 10,
      title: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
      image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
      category: "electronics",
      quantity: 1,
      price: 109,
    },
  ]);
  return (
    <BagContext.Provider value={{ bag, setBag }}>
      {children}
    </BagContext.Provider>
  );
}
