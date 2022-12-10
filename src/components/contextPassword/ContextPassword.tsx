import { useState, useContext, createContext, ReactNode } from "react";

// Interface

interface PassProviderProps {
    children: ReactNode;
  }

//create context --> en los parentesis estan los pasos para typescript
export const contextPass = createContext({ pass: "", setPass: (pass: string) => { } });

//costomHook
export const usePassContext = () => useContext(contextPass)

//Component
const ContextPassword = ( {children} : PassProviderProps ) => {

    //States
    const [pass, setPass] = useState("");

    return (
        <contextPass.Provider value ={{
            pass,
            setPass
        }} >
            { children }
        </contextPass.Provider>
    );
}

export { ContextPassword };
