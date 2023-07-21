import React from 'react'
import UserRegister from '../../components/Users/UserRegister/UserRegister'
import "../Users/Users.css"
const Users = () => {
    return (
        <>
            <section>
                <div className='users-container'>
                    <UserRegister />

                </div>
            </section>
        </>
    )
}

export default Users