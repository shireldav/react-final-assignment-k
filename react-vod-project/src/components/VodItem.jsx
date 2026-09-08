import React from 'react'
import {Link} from "react-router-dom"

export default function VodItem({item}) {
  return (
     <div className="col-4 border p-2">
        <img src={item.Poster}  alt='No image available, has to do with the original link'
        className='col-3 float-start me-2'/>
        <h4>{item.Title}</h4> 
        <div>Year: {item.Year}</div>
        {/* go to the movie page, show single one by id */}
        <Link className='btn' to={"/vod/" +item.imdbID}>More Info</Link> 
    </div>
              
  )
}
