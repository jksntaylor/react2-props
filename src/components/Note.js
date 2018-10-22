import React from 'react'

export default function Note(props) {
    console.log(props)
    return (
        <div>
            <h1>{props.title}</h1>
            <p>{props.text}</p>
        </div>
    )
}