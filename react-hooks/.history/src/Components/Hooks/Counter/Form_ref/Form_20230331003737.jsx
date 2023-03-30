import React, {useRef, useEffect, useState} from 'react'

export default function Form() {
  return (
        <form action="#">
        <input type="text" placeholder="Enter your name" />
        <input type="text" placeholder="Enter your email" />
        <button type='button'>Log-in</button>
        </form>
  )
}
