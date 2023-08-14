import { useDispatch } from "react-redux"
import { useUserLogoutMutation } from "../../features/auth/LogoutApi"
import { useGetProfileQuery } from "../../features/auth/getProfileApi"
import { setLogout } from "../../features/auth/LoginSlice"
import { useNavigate } from "react-router"
import ListUsers from "../../components/Users/UserRegister/ListUsers"
import UserRegister from "../../components/Users/UserRegister/UserRegister"


const AdminDashboard = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [userLogout] = useUserLogoutMutation()
    const { data } = useGetProfileQuery()


    const name = data?.result?.me?.first_name
    const email = data?.result?.me?.email


    const logout = async () => {
        try {
            await userLogout().unwrap();
            dispatch(setLogout());
            localStorage.clear();
            navigate('/')

        } catch (error) {
            console.error('Logout error:', error);
        }
    }
    return (
        <>
            <section>
                <h1>{name}</h1>
                <h2>{email}</h2>

                <button onClick={logout} >Logout</button>
            </section>

            <section>
                <ListUsers />
            </section>

            <section>
                <UserRegister />
            </section>

        </>



    )
}

export default AdminDashboard