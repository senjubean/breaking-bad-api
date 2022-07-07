import React from 'react'

const CharacterGrid = (props) => {
  return props.isLoading ? (<h1>Loading</h1>) : (<section className='cards'>
    {props.items.map(item => (
        <h1>{item.name}</h1>
    ))}
  </section>)
}

export default CharacterGrid