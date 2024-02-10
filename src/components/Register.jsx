import axios from 'axios'
import React, { useState } from 'react'

const Register = () => {
    const[input,setInput]=new useState(
        
        {
            "name":"",
            "age":" ",
            "mobile":" ",
            "address":" ",
            "pin":" ",
            "email":" ",
            "password":""
    
        }
        
    )
    const InputHandler=(event)=>{
        setInput({...input,[event.target.name]:event.target.value})

    }
    const readValues=()=>{
        console.log(input)
        axios.post("http://localhost:3001/api/blog/signup",input).then(
            (response)=>{
                console.log(response.data)
                if(response.data.status=="success"){
                    alert("Registered successfully!")
                    setInput(
                        {
                            "name":"",
                            "age":" ",
                            "mobile":" ",
                            "address":" ",
                            "pin":" ",
                            "email":" ",
                            "password":" "
                    
                        }
                        
                        

                    )
                }
                else{
                    alert("something went wrong!try again")
                }

            }

        )
    }
  return (
    <div>
        <div className="container">
            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Name</label>
                            <input type="text" className="form-control" name="name" value={input.name} onChange={InputHandler} />

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Age</label>
                            <input type="text" className="form-control" name="age"  value={input.age} onChange={InputHandler}  />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Mobile</label>
                            <input type="text" className="form-control" name="mobile" value={input.mobile} onChange={InputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Address</label>
                            <input type="text" className="form-control" name="address"  value={input.address} onChange={InputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Pin</label>
                            <input type="text" className="form-control" name="pin"  value={input.pin} onChange={InputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Email</label>
                            <input type="email" className="form-control" name="email"  value={input.email} onChange={InputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Password</label>
                            <input type="password" className="form-control" name="password"  value={input.password} onChange={InputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-primary" onClick={readValues}>Register</button>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <a href="/">Back to LogIn</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Register