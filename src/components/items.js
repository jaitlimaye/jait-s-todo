import React from 'react'
import Check from '../buttons/check'

const Items = ({title}) => {
  return (
    <div class="container-fluid border rounded-3" style ={{"background-color": "white"}}>
        <div class="p-3">
            <div class = "row">
            <div class="col pe-auto ps-5"><h3>{title}</h3></div>
            <div class="col-auto checkbutton pe-2 ">
           
                <Check/></div>
           
            </div>
        </div>
    </div>
  )
}

export default Items