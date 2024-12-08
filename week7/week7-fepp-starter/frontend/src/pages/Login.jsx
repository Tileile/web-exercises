import useField from '../hooks/useField'
import useLogin from '../hooks/useLogin'
import { useNavigate } from 'react-router-dom'
const Login = ({setIsAuthenticated}) => {
    const email = useField("email")
    const password = useField("password")
    const { login, isLoading, error } = useLogin('/api/users/login')
    const navigate = useNavigate()


    const onSubmitLogin = async (e) => {
        e.preventDefault()

        await login({ email: email.value, password: password.value })
        if (!error){
            setIsAuthenticated(true)
            navigate('/')
        }
    }

    return (
        <div className='create'>
            <h2>Login</h2>
            <form onSubmit={onSubmitLogin} >
                <label>Enter Email</label>
                <input {...email} />
                <label>Enter Password</label>
                <input {...password}></input>
                <button>Login</button>
            </form>
        </div>
    )
}

export default Login
