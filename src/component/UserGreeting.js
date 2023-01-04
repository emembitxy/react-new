import React, { Component } from 'react'

 class userGreeting extends Component {
constructor(props) {
  super(props)

  this.state = {
    isloggedIn:true
  }
}

  render() {
//    retutn  this.state.isloggedIn




//  return(
//     this.state.isloggedIn?
//     (<div>Welcome Emem</div>):
//     (<div>Welcome Guest</div>)
//  )   


// let message
// if(this.state.isloggedIn){
//     message = <div>Welcome Emem</div>
// }
// else{
//     message = <div>Welcome Guest</div>
// }
// return<div>{message}</div>



// if(this.state.isloggedIn){
//     return(
//         <div>Welcome Emem</div>
//     )
// } else{
//     return(
//         <div>Welcome Guest</div>
//     )
// }

    // return (
    //   <div>
    //     <div>Welcome Emem</div>
    //     <div>Welcome Guest</div>
    //   </div>
    // )
  }
}

export default userGreeting