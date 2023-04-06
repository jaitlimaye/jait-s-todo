import React from 'react'
import Plus from '../buttons/plus'
import { Link } from 'react-router-dom'
import Items from './items'
import Additem from './additem'
import { useState } from 'react';

const Longterm = () => {
    const [editing,SetEditing] = useState(false)
  return (
    <div className='container p-3'>
        <div className='col'>
            
            <div className='row p-3'>
            <div className='col'>
                <Items />
                <Items />
                {editing? (<div class="pt-4"><Additem SetEditing = {SetEditing}/></div>):(<div></div>)}
            </div>
            </div>
            {editing? (<div></div>):
            (
            <div className='row justify-content-center'>
            <div className="col-5">
                        <div className="addbutton row justify-content-center">
                            <Link to = "/longterm" onClick={() =>{SetEditing(true)}}> 
                                <Plus/>
                            </Link>
                        </div>
                    </div>
                
            </div>
            )}
        </div>
    </div>
    
  )
}

export default Longterm