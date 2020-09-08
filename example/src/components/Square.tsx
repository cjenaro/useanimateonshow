import React, { FunctionComponent } from 'react'

const Square: FunctionComponent<{ color: string }> = ({ color }) => {
  return <div className='square' style={{ backgroundColor: color }} />
}

export default Square
