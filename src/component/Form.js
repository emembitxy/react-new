import React, { Component } from 'react'

 class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username:"",
         comments:"",
         topic:"react"
      }
    }
    handleUsernamechange=(event)=>{
       this.setState({
        username:event.target.value
       }) 
    }
    handlecommentschange=(event)=>{
        this.setState({
            comments:event.target.value
        })
    }
    handleTopicchange=(event)=>{
        this.setState({
            topic:event.target.value
        })
    }
    handleSubmit= event =>{
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
        event.preventDefault()
    }

  render() {
    const{username,comments,topic }=this.state
    return (
     <form onSubmit={this.handleSubmit}>
        <div>
            <label>Username</label>
            <input type="text" value={username} 
            onChange={this.handleUsernamechange}/>
        </div>
        <div>
            <label>Comments</label>
            <textarea value={comments} onChange={this.handlecommentschange}></textarea>
        </div>
        <div>
            <label>Topic</label>
            <select value={topic} onChange={this.handleTopicchange}>
              <option value="react">React</option> 
              <option value="angular">Angular</option>  
              <option value="vue">Vue</option>   
            </select>
        </div>
        <button>Submit</button>
     </form>
    )
  }
}

export default Form