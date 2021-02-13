import React from "react"

export default function Profile(props){
    return <div><button onClick={() => props.history.go(-2)}>-2</button>Profile</div>
}