import React from 'react'

export default function Alert(props) {
    const Capitalize = (word) => {
        return word.toLowerCase().charAt(0).toUpperCase() + word.slice(1);
    }

  return (
    <div style = {{height : '50px'}}>
    {props.alert && <div class={`alert alert-${props.alert.type}`} role="alert" >
    <strong>{Capitalize(props.alert.type)}</strong>: {props.alert.message}
    </div>}
    </div>
  )
}
