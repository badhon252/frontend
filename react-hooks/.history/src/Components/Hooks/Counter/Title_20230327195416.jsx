import React from 'react'

const Title = () => {
  console.log('rendering title...');
  return (
    <>
        <h1>Hello World!</h1>
    </>
  )
}

export default React.memo(Title)