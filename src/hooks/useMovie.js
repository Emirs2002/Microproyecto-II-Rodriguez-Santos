import { useState } from "react"
import { fetchMovies } from "../utils/the-movie-db"

export function useMovie(){
    
    const [movie, setMovie] = useState([])    
    
    const getMovies = async () => {
        const { data } = await fetchMovies()
        console.log(data)
    }
    return {}
}