import React from 'react'
import PropTypes from 'prop-types'

const UserInfo = ({ userInfo }) => (
    <div className="user-info">
        <img alt="" src={userInfo.image} />


        <div className="info">
            <h1>
                <a href={`https://github.com/${userInfo.login}`} target='_blank' rel="noopener noreferrer">{userInfo.username}</a>
            </h1>

            <ul className="repos-info">
                <li>- Repositórios: {userInfo.repos}</li>
                <li>- Seguidores: {userInfo.followers}</li>
                <li>- Seguindo: {userInfo.following}</li>
            </ul>
        </div>
    </div>
)

UserInfo.propTypes = {
    userInfo: PropTypes.shape({
        image: PropTypes.string,
        username: PropTypes.string,
        login: PropTypes.string.isRequired,
        repos: PropTypes.number.isRequired,
        followers: PropTypes.number.isRequired,
        following: PropTypes.number.isRequired,
    })
}

export default UserInfo
