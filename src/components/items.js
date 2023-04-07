import React from 'react'
import Check from '../buttons/check'
import databaselink from '../utils/databaselink';

const Items = ({data,setUDbit}) => {
  const itemdone = () =>{
    deleteitem();
    setUDbit(true);
  }

  const deleteitem = () =>{
    var req ={
      id : data._id
    }
    databaselink.deletetododaily(req).then(response => {
      setUDbit();
    })
    .catch(e => {
      console.log(e);
    });
  }
  return (
    <div class="container-fluid border rounded-3" style ={{"background-color": "white"}}>
        <div class="p-3">
            <div class = "row">
            <div class="col pe-auto ps-5"><h3>{data.title}</h3></div>
            <div class="col-auto checkbutton pe-2 " onClick={itemdone}>
           
                <Check/></div>
           
            </div>
        </div>
    </div>
  )
}

export default Items