import React from 'react'

// function Parent(props) {
//     console.log(props);
//     return (
//         <div>
            
//         </div>
//     )
// }

function Parent ({ children }) {
    // console.log(children)
    return <div>{ children }</div>
}

export default Parent;
