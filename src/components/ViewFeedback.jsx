import axios from 'axios'
// import './ViewFeedback.css';
import NavBarAdmin from './NavBarAdmin';
import { useEffect, useState } from 'react';

const ViewFeedback = () => {
    const [todos,changeTodos]=useState([])
    const fetchData=()=>{
        axios.get("http://localhost:8080/viewfeedback").then(
            (response)=>{
                changeTodos(response.data)
            }
        ).catch().finally()
    }
    useEffect(()=>{ fetchData() },[])
  return (
    <div className="view-feedback">
           <center> 
            <div>
              <NavBarAdmin/>
               <br /> <center><h1>VIEW FEEDBACK</h1></center>
                <br></br>
                
                    <div className="container">
                        <div className="row">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">RATING</th>
                                            <th scope="col">COMMENTS</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            todos.map(
                                                (value, index) => {
                                                    return <tr>
                                                        <th scope="row">{value.rating}</th>
                                                        <td>{value.comments}</td>
                                                    </tr>
                                                }
                                            )
                                        }
                                    </tbody>
                                </table>
                            </div>
                           
                        </div>
                    </div>

                
            </div>
           
                            </center>
        </div>
  )
}

export default ViewFeedback