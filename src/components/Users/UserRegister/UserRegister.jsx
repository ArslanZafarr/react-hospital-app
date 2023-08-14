import { useState } from "react"
import { useRegisterUserMutation } from "../../../features/users/getUsers"
import "../UserRegister/UserRegister.css"

const UserRegister = () => {
    const [userRegister, { isLoading }] = useRegisterUserMutation()

    const [first_name, setFirstName] = useState("")
    const [middle_name, setMiddleName] = useState("")
    const [last_name, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phone_number, setPhoneNumber] = useState("")
    const [user_role_id, setUserRoleId] = useState([])
    const [address, setAddress] = useState("")
    const [audit_trial_fields, setAuditTrialFields] = useState("")


    const formData = { first_name, middle_name, last_name, email, password, phone_number, address, audit_trial_fields  , user_role_id}

    const handleSubmit = async (e) => {
        e.preventDefault()

      try {
        const response = await userRegister(formData)
        console.log("🚀 ~ file: UserRegister.jsx:25 ~ handleSubmit ~ response:", response)
    
      } catch (error) {
        console.log(error)
      }
    }

    return (
        <>
            <section className='user-register-section'>
                <form 
                onSubmit={handleSubmit}
                className='user-register-form'
                >
                    <div className='user-form-input-controls'>
                        <label htmlFor="firstName">First Name</label>
                        <input
                            value={first_name}
                            onChange={(e) => setFirstName(e.target.value)}
                            autoComplete="off"
                            type="text"
                            placeholder='First Name'
                        />
                    </div>

                    <div className='user-form-input-controls'>
                        <label htmlFor="firstName">Middle Name</label>
                        <input
                            type="text"
                            placeholder='Middle Name'
                            autoComplete="off"
                            value={middle_name}
                            onChange={(e) => setMiddleName(e.target.value)}

                        />
                    </div>
                    <div className='user-form-input-controls'>
                        <label htmlFor="firstName">Last Name</label>
                        <input
                            type="text"
                            placeholder='Last Name'
                            autoComplete="off"
                            value={last_name}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>
                    <div className='user-form-input-controls'>
                        <label htmlFor="firstName">Email</label>
                        <input
                            type="email"
                            placeholder='Email'
                            autoComplete="off"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className='user-form-input-controls'>
                        <label htmlFor="firstName">Password</label>
                        <input
                            type="password"
                            placeholder='Password'
                            autoComplete="off"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <div className='user-form-input-controls'>
                        <label htmlFor="firstName">Phone Number</label>
                        <input
                            type="number"
                            placeholder='Phone Number'
                            autoComplete="off"
                            value={phone_number}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                    </div>



                    <div className='user-form-input-controls'>
                        <label htmlFor="firstName">User role ID</label>
                        <input
                            type="number"
                            placeholder='User role id'
                            autoComplete="off"
                            value={user_role_id}
                            onChange={(e) => setUserRoleId(e.target.value)}
                        />
                    </div>


                    <div className='user-form-input-controls'>
                        <label htmlFor="firstName">Address</label>
                        <input
                            type="text"
                            placeholder='Address'
                            autoComplete="off"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                    </div>


                    <div className='user-form-input-controls'>
                        <label htmlFor="firstName">Audit Trial Fields</label>
                        <input
                            type="text"
                            placeholder='Audit Trial'
                            autoComplete="off"
                            value={audit_trial_fields}
                            onChange={(e) => setAuditTrialFields(e.target.value)}
                        />
                    </div>

                    <button
                        disabled={isLoading || !first_name || !middle_name || !last_name || !email || !password || !phone_number || !address || !audit_trial_fields}
                        className='register-btn'
                        type='submit'

                    >
                        Register
                    </button>

                </form>
            </section>

        </>

    )
}

export default UserRegister