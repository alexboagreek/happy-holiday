import { useEffect, useState } from "react";
import { URI_API } from './../const/const';


export const useImg = (holiday) => {
    const [data, setData] = useState({});

    useEffect(() => {
        if (!holiday) return;

        fetch(`${URI_API}img/${holiday}`)
        .then(response => {
            if (response.status !== 200) {
                throw new Error(response.status)
            }   
            return response.json()
        })
        .then(data => {
            if (data.idImg) {
                setData(data);
            }
        })
        .catch(error => console.error(error));
    }, [holiday]);
    
    return data;
};
