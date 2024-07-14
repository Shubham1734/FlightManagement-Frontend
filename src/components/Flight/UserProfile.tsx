// import React from 'react'
import { useSelector } from 'react-redux';

const UserProfile = () => {

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const user = useSelector((state:any) => state.user);// Note: use 'users' if the state is an array of users

    return (
        <div>
          user
            <h1>{user.email}</h1>
            <h1>{user.password}</h1>
            <h1>{user.username}</h1>
            <h1>{user.phone}</h1>
        </div>
    );
}

export default UserProfile
