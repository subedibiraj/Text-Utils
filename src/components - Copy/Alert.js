import React from 'react'

export default function Alert(props) {
    const Capitalize = (word) => {
        return word.toLowerCase().charAt(0).toUpperCase() + word.slice(1);
    }

  return (
    props.alert && <div class={`alert alert-${props.alert.type}`} role="alert" >
    <storng>{Capitalize(props.alert.type)}</storng>: {props.alert.message}
    </div>
  )
}
