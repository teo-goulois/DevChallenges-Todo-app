import React from 'react'


type Props = {
  title: string
  children: React.ReactNode
}




const Tab = ({ children}: Props) => {
  return (
    <div className='w-full mt-2'>{children}</div>
  )
}

export default Tab