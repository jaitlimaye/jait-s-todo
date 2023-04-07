import React from 'react'
import Plus from '../buttons/plus'
import { Link } from 'react-router-dom'
import Items from './items'
import { useState, useEffect } from 'react';
import Additem from './additem';
import databaselink from '../utils/databaselink';
const Daily = () => {
    const [editing,SetEditing] = useState(false)
    const [tasks,setTasks] = useState([])

    useEffect(() => {
        retrieveTasks();
      }, []);

    const retrieveTasks = () => {
        databaselink.getdailytodo().then(response => {
            console.log(response.data);
            setTasks(response.data.list);
            
          })
          .catch(e => {
            console.log(e);
          });
    }

  return (
    <div className='container p-3'>
        <div className='col'>
            
            <div className='row p-3'>
                <div className='col'>
                {tasks.map((task) => {
                   return( <Items title = {task.title} />);
                })}
                    <Items title = {"TEMp"}/>
                    <Items title = {"TEMp2"}/>
                    {editing? (<div class="pt-4"><Additem SetEditing = {SetEditing}/></div>):(<div></div>)}
            </div>
            </div>
            {editing? (<div></div>):
            (
            <div className='row justify-content-center'>
            <div className="col-5">
                        <div className="addbutton row justify-content-center">
                            <Link to = "/daily" onClick={() =>{SetEditing(true)}}> 
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

export default Daily