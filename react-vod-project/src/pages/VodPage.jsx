import axios from 'axios';
import React, { useEffect, useState, useRef } from 'react';
import VodItem from '../components/VodItem';
import { useSearchParams, useNavigate } from 'react-router-dom';


export default function VodPage() {
  const [list,setList] = useState([]);
  const [isLoading,setIsLoading] = useState(false);
  const [query] = useSearchParams()

  const nav = useNavigate();
  const inputRef = useRef();


  useEffect(() => {
    doApi();
  }, [query]) //will load accordingly every time there is a query change

  
  const doApi = async() => {
    const queryS = query.get("s") || "black" //if wont be on black, will try to gather query s
    //backtick for string interpolation
    //instead of what is written after ?s before & -> {queryS}
    
    const url = `https://www.omdbapi.com/?s=${queryS}&apikey=5a292f28`;
    try {
      setIsLoading(true); //
      const {data} = await axios.get(url);
      console.log(data);
      setList(data.Search || []); //important!! notice how the info is inside Search!, also, if doesnt exist so it wont crash i will use empty arr
      setIsLoading(false); //done loading
    }
     catch (error) {
      console.log(error);
    }
  }

  const onSub = (e) => { //on submission
    e.preventDefault(); //prevent launching again and changing the url
    console.log(inputRef.current.value)
    //transfer the user to the page that has the data in the input, query
    nav(`/vod?s=${inputRef.current.value}`) 
  }

 return (
    <div className='container'>
      <h2 id='heading'>VOD Movies List:</h2>
       <form onSubmit={onSub} className='col-lg-6 d-flex my-3'>
        <input ref={inputRef} type="search" className='form-control'  />
        <button className='btn search-btn'>Search</button>
      </form>
      {isLoading && <h2>Loading...</h2>}
      <div className="row">
        {list.map(item => {
          return (
            //child component
           <VodItem key={item.imdbID} item={item}/>
          )
        })}
      </div>
    </div>
  )
  
}