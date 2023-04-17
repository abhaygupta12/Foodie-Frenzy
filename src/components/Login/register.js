import React, { Component } from 'react'
const register = "http://localhost:5000/register";
export class Register extends Component {
 
    constructor(props)
    {
        super(props)
        this.state ={
            name : "",
            email : "",
            password : "",
            phone : ""
        }
    }

    handleChange = (event) =>{
        this.setState({[event.target.value] : event.target.value })
    }
    handleSubmit = () =>{
        fetch(register,{
            method : "POST",
            headers : {
                "accept" : "application/json",
                 "Content-Type":"application/json"
            },
            body:JSON.stringify(this.state)
        })
        .then(this.props.history.push("/login"))
    }


   render()
   {
    return(
        <>
        <div className='container'>
            <div className='panel panel-primary'>
                <div className='panel-heading'>
                        Register Form
                </div>
                <div className='panel-body'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <label for="name" class="form-label">Name</label>
                            <input type="text" name='name' class="form-control"onChange={this.handleChange} placeholder="Fullname"  id="name"/>
                        </div>
                        <div className='col-lg-6'>
                            <label for="Phone" class="form-label">Phone</label>
                            <input type="text" name='phone' class="form-control"onChange={this.handleChange} placeholder="Phone"  id="Phone"/>
                        </div>
                    </div>
                    <br/>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <label for="email" class="form-label">Email</label>
                            <input type="text" name='email' class="form-control"onChange={this.handleChange} placeholder="Email"  id="email"/>
                        </div>
                        <div className='col-lg-6'>
                            <label for="pass" class="form-label">Password</label>
                            <input type="text" name='password'class="form-control"onChange={this.handleChange} placeholder="Password"  id="pass"/>
                        </div>
                    </div>
                    <br/>
                    <button className='btn btn-success' onClick={this.handleSubmit}>Register</button>
                </div>
            </div>
        </div>
        </>
    )
   }
}

export default Register