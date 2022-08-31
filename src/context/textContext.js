import { createContext, useState } from 'react';


export const textContext = createContext({});

export const TextContextProvider = ({children}) => {
    const [text, setText] = useState('Займешь косарь до зп?')
    return (
        <textContext.Provider value={{ text, setText }}>
            {children}
        </textContext.Provider>
    )
}