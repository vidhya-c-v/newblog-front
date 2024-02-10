import axios from 'axios'
import React, { useState } from 'react'

const Add = () => {
    
    const[input,setInput]=new useState(
        {
            "userId":sessionStorage.getItem("userId"),
            
            "post":""
            
        }


    )
    const InputHandler=(event)=>{
        setInput({...input,[event.target.name]:event.target.value})

    }
    const readValues=()=>{
        console.log(input)
        axios.post("http://localhost:3001/api/post/add",input).then(
            (response)=>{
                console.log(response.data)
                if(response.data.status=="success"){
                   
                   
                    alert("Log-in success!welcome!")
                    setInput(
                        {
                           "userId":"",
                           "post":""
                            
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
                    <label htmlFor="" className="from-label">Add-Post</label>
                    <textarea  cols="30" rows="10" className="form-control" name="post" value={input.post} onChange={InputHandler}></textarea>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button className="btn btn-primary" onClick={readValues}>Submit</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Add