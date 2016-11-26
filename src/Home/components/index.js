import React, {Component} from 'react'

class Home extends Component{
    render(){
        return(
            <h1>
                {window.INITSTATE.pageTitle}
                {
                    window.INITSTATE.users.map((u, i)=>{
                        return <li key={`user-${i}`}>{u.name}</li>
                    })
                }
            </h1>
        )
    }
}
export default Home
