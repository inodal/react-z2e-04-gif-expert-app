import { useEffect, useState } from "react"
import { getGifs } from '../helpers/GetGif';

// All hooks start with use prefix: use{hook name} -> useFetchGifs
export const useFetchGifs = (category) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    // Use hook 'useEffect' to render only the first time
    useEffect(() => {
        getGifs(category)
          .then(imgs => {

            setTimeout(() => {
                setState({
                    data: imgs,
                    loading: false
                })
            }, 500);

            
            })
    }, [category]);



    return state; // { data: [], loading: true }
}