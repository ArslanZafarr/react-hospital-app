import React from 'react'
import "../UserRegister/UserRegister.css"
const UserRegister = () => {
    return (
        <>
            <section className='user-register-section'>
                <form className='user-register-form'>
                    <div className='user-form-input-controls'>
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" placeholder='First Name' />
                    </div>

                    <div className='user-form-input-controls'>
                        <label htmlFor="firstName">Middle Name</label>
                        <input type="text" placeholder='Middle Name' />
                    </div>
                    <div className='user-form-input-controls'>
                        <label htmlFor="firstName">Last Name</label>
                        <input type="text" placeholder='Last Name' />
                    </div>
                    <div className='user-form-input-controls'>
                        <label htmlFor="firstName">Email</label>
                        <input type="email" placeholder='Email' />
                    </div>

                    <div className='user-form-input-controls'>
                        <label htmlFor="firstName">Password</label>
                        <input type="password" placeholder='Password' />
                    </div>

                    <div className='user-form-input-controls'>
                        <label htmlFor="firstName">Phone Number</label>
                        <input type="number" placeholder='Phone Number' />
                    </div>


                    <div className='user-form-input-controls'>
                        <label htmlFor="firstName">Address</label>
                        <input type="text" placeholder='Address' />
                    </div>


                    <div className='user-form-input-controls'>
                        <label htmlFor="firstName">Audit Trial Fields</label>
                        <input type="text" placeholder='Audit Trial' />
                    </div>

                    <button className='register-btn' type='submit'>Register</button>

                </form>
            </section>

        </>

    )
}

export default UserRegister