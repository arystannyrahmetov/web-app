import React from 'react';

function Users({ users, messageOnClick, currentUser }) {
    return (
        <ul>
            { users.map(user =>
                <li key={user.id} className="user">
                    <picture className="user-picture">
                        <img src={user.photoUrl} alt={`${user.name}`} />
                    </picture>
                    <div className="user-info-container">
                        <div className="user-info">
                            <h4>{user.name}</h4>
                            <p>{user.info}</p>
                        </div>
                        <div className="user-action">
                            <button onClick={()=> messageOnClick(user, currentUser)}>Написать</button>
                        </div>
                    </div>
                </li>
            )}
        </ul>
    );
}

export default Users;