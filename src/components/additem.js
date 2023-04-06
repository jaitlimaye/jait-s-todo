import React from 'react'
import Check from '../buttons/check'

const Additem = ({SetEditing}) => {
    const submititem = () =>{
        SetEditing(false)
    }
  return (
    <div class="container-fluid border rounded-3" style ={{"background-color": "white"}}>
        <div class="p-3">
            <div class = "row">
            <div class="col pe-auto ps-5"><div class="mb-3">
  <input type="test" class="form-control" id="exampleFormControlInput1" placeholder="Enter Text here" />
</div></div>
            <div class="col-3 ps-2">
                    <select class="form-select" aria-label="Default select example">
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