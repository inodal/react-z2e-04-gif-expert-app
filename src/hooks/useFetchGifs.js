import { useEffect, useState } from "react"
import { getGifs } from '../helpers/GetGif';

// All hooks start with use prefix: use{hook name} -> useFetchGifs
export const useFetchGifs = (category) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    // Use hook 'useEffect' to render
    useEffect(() => {
        getGifs(category)
          .then(imgs => {
              setState({
                  data: imgs,
                  loading: false
              });
            })
    }, [category]);

    return state; // { data: [], loading: true }
}