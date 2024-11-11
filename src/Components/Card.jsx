import React from 'react'

const Card = ({ children ,bg='bg-slate-300'}) => {
  return (
    <div className={`${bg} p-6 rounded-md shadow-md`}>
        {children}
    </div>
  )
}

export default Card