import axios from 'axios'
import React, { useState } from 'react'

const Login = () => {
    // const[input,setInput]=new useState(
    //     {
            
    //         "email":" ",
    //         "password":" "
            
    //     }


    // )
    // const InputHandler=(event)=>{
    //     setInput({...input,[event.target.name]:event.target.value})

    // }
    // const readValues=()=>{
    //     console.log(input)
    //     axios.post("http://localhost:3001/api/blog/signin",input).then(
    //         (response)=>{
    //             console.log(response.data)
    //             if(response.data.status=="success"){
    //                 alert("Log-in success!welcome!")
    //                 setInput(
    //                     {
                           
    //                         "email":" ",
    //                         "password":" "
                            
    //                     }
                        
                        

    //                 )
    //             }
    //             else{
    //                 alert("something went wrong!try again")
    //             }

    //         }

    //     )
    // }



  return (
    <div>
        <div className="container">
            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">Email-Id</label>
                    <input type="email" name="" id="" className="form-control" />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">Password</label>
                    <input type="password" name="" id="" className="form-control" />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button className="btn btn-success">Log-In</button>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <a href="">New user click here</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login