import {useState, useEffect} from 'react';
import { URI_API } from './../const/const';

export const useText = (holiday) => {
    const [text, setText] = useState('Займешь косарь до зп?');

    useEffect(() => {
        if (!holiday) return;

        fetch(`${URI_API}text/${holiday}`)
        .then(response => {
            if (response.status !== 200) {
                throw new Error(response.status)
            }   
            return response.json()
        })
        .then(data => {
            if (data.text) {
                setText(data.text);
            }
        })
        .catch(error => console.error(error));
    }, [holiday]);
    
    return [text];
};