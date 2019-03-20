import React from 'react'
import PropTypes from 'prop-types'

const Search = ({ handleSearch, isDisabled }) => (

  <div className='search'>
    <input className='shadow' type='search'
      placeholder='Nome do usuário'
      autoFocus
      disabled={isDisabled}
      onKeyUp={handleSearch} />
  </div>

)

export default Search
Search.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired
}
