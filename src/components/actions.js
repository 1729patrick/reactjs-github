import React from 'react'
import PropType from 'prop-types'

const Actions = ({ handleClick }) => (
  <div className='actions'>
    <button className='shadow' onClick={handleClick('repos')}>Ver Repositórios</button>
    <button className='shadow' onClick={handleClick('starred')}>Ver Favoritos</button>
  </div>
)

Actions.propType = {
  handleSearch: PropType.func.isRequired
}
export default Actions
