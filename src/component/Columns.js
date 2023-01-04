import React from 'react'

function Columns() {
    const items=[]

  return (
    // <React.Fragment>
    //     {
    //         items.map(item =>(
    //             <React.Fragment key={item.id}>
    //                 <h1>Title</h1>
    //                 <p>{item.title}</p>
    //             </React.Fragment>
    //         ))
    //     }
    //     <td>Name</td>
    //     <td>Emem</td>
    // </React.Fragment>
    // this is the same as the one below.....in place of using React.Fragment you could use empty tags as in below, just that you cant add a key attribute
 
    <>
      <td>Name</td>
        <td>Emem</td>
    </>
  )
}

export default Columns