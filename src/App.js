import React, { Component } from 'react'
import './App.css'

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      name: "",
      department : "",
      rating : "",
      data : []
      }
    }

    handleChange=(e)=>{
      this.setState({[e.target.name ]: e.target.value})
    }

    handleClick=()=>{
      const obj={
        name:this.state.name,
        department : this.state.department,
        rating : this.state.rating,
      }

      this.state.data.push(obj);

      this.setState({
        data : this.state.data,
        name : "",
        department : "",
        rating : "",
      })

      console.log(this.state.data)
    }

  render() {
    return (
      <>

      <h1 className='heading'>EMPLOYEE FEEDBACK FORM</h1>

      <div className='container1'>
        <ul type="none">

        <li><label>Name:</label>
        <input type="text" name="name" placeholder='Enter your name' value={this.state.name} onChange={this.handleChange}/> <br/>
        </li>

        <li><label>Department:</label>
        <input type="text" name="department" placeholder='Enter your department' value={this.state.department} onChange={this.handleChange}/><br/>
        </li>

        <li>
        <label>Rating:</label>
        <input type="text" name="rating" placeholder='Enter your rating' value={this.state.rating} onChange={this.handleChange}/> <br/>
        </li>

        <li>
        <button onClick={this.handleClick} >Submit</button>
        </li>

        </ul>
        </div>

        <div className='container2'>

        {this.state.data.map((item)=>{
          return (
            <div className='container3'>
            <h5>Name : {item.name} |
                Department : {item.department} |
                Rating : {item.rating}
            </h5>
            </div>
          )
        })}
        </div>
      </>
    )
  }
}
