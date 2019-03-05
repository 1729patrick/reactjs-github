import React from 'react';
import PropTypes from 'prop-types'
import Search from "./search";
import UserInfo from "./user-info";
import Actions from "./actions";
import Repos from "./repos";
import '../App.css';

const AppContainer = ({userInfo, repos, starred, isFetching, handleSearch, handleAction}) => (
    <div className="App">
        <Search handleSearch={handleSearch} isDisabled={isFetching}/>

        { isFetching && <div>Carregando...</div>}
        { !!userInfo && <UserInfo userInfo={userInfo}/> }

        { !!userInfo && <Actions handleClick={handleAction}/> }

        { !!repos.length && <Repos
            className='repositorios'
            title='Repositórios'
            repos={repos}/>
        }

        {!!starred.length && <Repos
            className='favoritos'
            title='Favoritos'
            repos={starred}/>
        }
    </div>
)

AppContainer.propTypes = {
    userInfo: PropTypes.object,
    repos: PropTypes.array.isRequired,
    starred: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    handleSearch: PropTypes.func.isRequired,
    handleAction: PropTypes.func.isRequired
}

export default AppContainer
