import React from 'react'
import Check from '../buttons/check'
import { useState } from 'react'
import databaselink from '../utils/databaselink'

const Additem = ({SetEditing,setUDbit}) => {
    const submititem = () =>{
        if(title !== "")
        {
        saveReview()
        }
        SetEditing(false)
    }
    const [title, setTitle] = useState("");
    const [sev, setSev] = useState(0);
 
  const handleInputChange = (event) => {
    setTitle(event.target.value);
  };

  const saveReview = () => {
    var data = {
      title: title,
      sev: sev
    };
    databaselink.createdailytodo(data).then(response => {
      setUDbit();
      console.log("YA")
    })
    .catch(e => {
      console.log(e);
    });
    };
  return (
    <div class="container-fluid border rounded-3" style ={{"backgroundColor": "white"}}>
        <button type="button" class="btn btn-link" onClick={(event) =>{SetEditing(false)}} style={{"color": "#989396"}}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
</svg></button>
        <div class="p-3">
            <div class = "row">
            <div class="col pe-auto ps-5"><div class="mb-3">
  <input type="test" class="form-control" id="exampleFormControlInput1" onChange={handleInputChange} placeholder="Enter Text here" />
</div></div>
            <div class="col-3 ps-2">
                    <select class="form-select" aria-label="Default select example" onChange={(event) =>setSev(Number(event.target.value))}>
                    <option value="0" selected>0</option>
                    <option value="1" >1</option>
                    <option value="2" >2</option>
                    <option value="3" >3</option>
                    <option value="4" >4</option>
                    <option value="5" >5</option>
                    
                    </select>
            </div>
            <div class="col-auto checkbutton pe-2 " onClick={submititem}>
           
                <Check/></div>
           
            </div>
        </div>
    </div>
  )
}

export default Additem