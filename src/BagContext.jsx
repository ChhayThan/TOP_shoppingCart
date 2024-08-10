import { createContext, useContext, useState } from "react";

const BagContext = createContext();

export function useBag() {
  return useContext(BagContext);
}

export function BagProvider({ children }) {
  const [bag, setBag] = useState([]);
  return (
    <BagContext.Provider value={{ bag, setBag }}>
      {children}
    </BagContext.Provider>
  );
}
