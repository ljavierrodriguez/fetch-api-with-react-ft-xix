import React from 'react'

const Lista = ({ className, children }) => {
  return (
    <ul className={className}>
        {children}
    </ul>
  )
}

export default Lista