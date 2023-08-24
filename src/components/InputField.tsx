import React from 'react'
import "./styles.css"


export function InputField() {
  return (
    <form className="input">
        <input type="input" placeholder="Enter a task" className="input__box"></input>
        <button className="input__submit" type="submit">Go</button>
    </form>
  )
}
