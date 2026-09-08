import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className='container-fluid my-header'>
      <div className="container">
        <div className="row align-items-center">
          <div className="logo col-auto">
            <h2 className='title'>My VOD Site</h2>
          </div>
        </div>
      </div>
    </header>
  )
}
