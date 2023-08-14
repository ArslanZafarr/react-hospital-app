import { useGetUserQuery } from "../../../features/users/getUsers"

const ListUsers = () => {


    const { data } = useGetUserQuery()
    console.log("🚀 ~ file: ListUsers.jsx:7 ~ ListUsers ~ data:", data)

    return (
        <>
            <h1>Users</h1>


            <table>
                <tbody>
                    <tr>
                        <th>Role Id</th>
                        <th>First Name</th>
                        <th>MiddleName</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Audit Trial Fields</th>
                        <th>Hospital Id</th>
                        <th>Hospital</th>
                        <th>Outhoor Patient</th>
                    </tr>

                    {
                        data?.result?.map((user) => {
                           return (
                            <>
                            <tr>
                                <td>{user.userRoleId}</td>
                                <td>{user.first_name}</td>
                                <td>{user.middle_name}</td>
                                <td>{user.last_name}</td>
                                <td>{user.email}</td>
                                <td>{user.audit_trial_fields}</td>
                                <td>{user.hospital_id}</td>
                                <td>{user.hospital}</td>
                                <td>{user.hospital_outdoor_paitent}</td>
                            </tr>
                        </>
                           )
                        })
                    }

                </tbody>




            </table>
        </>

    )
}

export default ListUsers