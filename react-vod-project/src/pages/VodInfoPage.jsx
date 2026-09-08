import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom';


export default function VodInfoPage() {
    const [vodItem, setVodItem] = useState({});
    const [isLoading,setIsLoading] = useState(false);

    const nav = useNavigate(); 
    const params = useParams();


    useEffect(() => {
        doApi();
    }, [])


    const doApi = async() => {
    const imdbID = params.imdbID;
    const url = `https://www.omdbapi.com/?i=${imdbID}&apikey=5a292f28`;
    // https://www.omdbapi.com/?i=tt0325980&apikey=5a292f28
    try {
        setIsLoading(true); //
        const {data} = await axios.get(url);
        console.log(data);
        setVodItem(data); 
        //never forget about set!!!!
        setIsLoading(false);
    }
    catch (error) {
        console.log(error);
    }
  }

  return (
    <div className='container mt-2 text-center'>

        {isLoading ? ( <h2>Loading... </h2> ) : //ternary operator -> if the data is still loading, show loading screen, else (meaning data is ready) then show data
        (
        <>
        <img src={vodItem.Poster}  alt='No image available, has to do with the original link' /> 
        <h2 className='title'>{vodItem.Title}</h2>
        <div>Runtime: {vodItem.Runtime}</div>
        <div>Rating: {vodItem.Ratings?.[0]?.Value}</div>
        <div>Genre: {vodItem.Genre}</div>
        <div>Description: {vodItem.Plot}</div>
        <div>Actors: {vodItem.Actors}</div>
        <div>Country: {vodItem.Country}</div>
        <Link id='go-back' to="#" onClick={() => {
          nav(-1) //go back one page
        }}>Back to movies list</Link>
        </>
        )}
    </div>
  )
}
