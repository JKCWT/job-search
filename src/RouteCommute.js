import React from "react";

const RouteCommute = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <input style={{margin: "10px"}} value={props.currentValue} placeholder="what is your home address?" onChange={props.handleChange}/>
      <button>Route</button>
    </form>
    )
}

export default RouteCommute;