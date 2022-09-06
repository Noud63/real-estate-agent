import React, {useEffect} from 'react'
import { useForm } from "react-hook-form";
import '../sassStyles/pages/register.scss'
import { useSelector, useDispatch } from 'react-redux'
import { registerUser, resetState } from '../features/registerSlice'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const registeredUser = useSelector(state => state.registered)
    const { user, isError, isRegistered, message} = registeredUser

    const submitForm = (data) => {
        dispatch(resetState())
        if (data.password !== data.repeatpassword) {
            toast.error('passwords don\'t match!')
            return
        }
        dispatch(registerUser(data))
        reset()
        console.log(registeredUser)
    }

    useEffect(() => {
        if (isRegistered) {
            toast.success('Successfully registered!')
            const timer = setTimeout(() => {
                navigate('/login')
            }, 4200)
            return () => {
                clearTimeout(timer);
            };
        }
        console.log(user)
    }, [user, isRegistered,navigate])


    useEffect(() => {
        if (isError) {
            toast.error(message);
        }
        dispatch(resetState())
    }, [isError, message, dispatch])


    const onErrors = errors => console.error(errors);

    return (

        <div className="container2">
            <ToastContainer theme='dark' position="top-right"
                autoClose={3000}
                hideProgressBar={true}
                newestOnTop={false}
                closeOnClick
                rtl={false}
            />
            <div className="wrapper2">
                <div className="register">Register</div>
                <form action="" onSubmit={handleSubmit(submitForm, onErrors)} className="form">

                    <div className="name">
                        <div className="textInput"><label htmlFor="firstname" className="pass">Firstname: </label>
                            <input type="text" placeholder="" name="firstname" {...register("firstname", { required: 'firstname required!' })} />
                        </div>
                        <div className="error" style={{ color: 'red', marginBottom: '10px' }}>
                            {errors.firstname && <div>{errors.firstname.message}</div>}
                        </div>
                    </div>

                    <div className="name">
                        <div className="textInput"><label htmlFor="lastname" className="pass">Lastname: </label>
                            <input type="text" placeholder="" name="lastname" {...register("lastname", { required: 'lastname required!' })} />
                        </div>
                        <div className="error" style={{ color: 'red', marginBottom: '10px' }}>
                            {errors.lastname && <div>{errors.lastname.message}</div>}
                        </div>
                    </div>

                    <div className="address2">
                        <div className="textInput"><label htmlFor="address" className="pass">Address: </label>
                            <input type="text" placeholder="" name="address" {...register("address", { required: 'address and number required!' })} />
                            <label htmlFor="number" className="numLabel">Num:</label>
                            <input type="text" placeholder="" className="number" name="number" {...register("number", { required: 'number required!' })} />
                        </div>
                        <div className="error" style={{ color: 'red', marginBottom: '10px' }}>
                            {errors.address && <div>{errors.address.message}</div>}
                        </div>

                    </div>

                    <div className="name">
                        <div className="textInput"><label htmlFor="city" className="pass">City: </label>
                            <input type="text" placeholder="" name="city" {...register("city", { required: 'city required!' })} />
                        </div>
                        <div className="error" style={{ color: 'red', marginBottom: '10px' }}>
                            {errors.city && <div>{errors.city.message}</div>}
                        </div>
                    </div>

                    <div className="name">
                        <div className="textInput"><label htmlFor="zip" className="pass">Zip code: </label>
                            <input type="text" placeholder="" name="zip" {...register("zip", { required: 'zip code required!' })} />
                        </div>
                        <div className="error" style={{ color: 'red', marginBottom: '10px' }}>
                            {errors.zip && <div>{errors.zip.message}</div>}
                        </div>
                    </div>

                    <div className="name">
                        <div className="textInput"><label htmlFor="country" className="pass">Country: </label>
                            <input type="text" placeholder="" name="country" {...register("country", { required: 'country required!' })} />
                        </div>
                        <div className="error" style={{ color: 'red', marginBottom: '10px' }}>
                            {errors.country && <div>{errors.country.message}</div>}
                        </div>
                    </div>

                    <div className="name">
                        <div className="textInput"><label htmlFor="email" className="pass">E-mail: </label>
                            <input type="email" placeholder="" name="email" {...register("email", { required: 'email required!' })} />
                        </div>
                        <div className="error" style={{ color: 'red', marginBottom: '10px' }}>
                            {errors.email && <div>{errors.email.message}</div>}
                        </div>
                    </div>

                    <div className="name">
                        <div className="textInput"><label htmlFor="telephone" className="pass">Tel: </label>
                            <input type="number" placeholder="" name="telephone" {...register("telephone", { required: 'telephone required!' })} />
                        </div>
                        <div className="error" style={{ color: 'red', marginBottom: '10px' }}>
                            {errors.telephone && <div>{errors.telephone.message}</div>}
                        </div>
                    </div>

                    <div className="choose">Choose a username and password</div>

                    <div className="name">
                        <div className="textInput"><label htmlFor="username" className="pass">Username: </label>
                            <input type="text" placeholder="" name="username" {...register("username", { required: 'username required!' })} />
                        </div>
                        <div className="error" style={{ color: 'red', marginBottom: '10px' }}>
                            {errors.username && <div>{errors.username.message}</div>}
                        </div>
                    </div>

                    <div className="name">
                        <div className="textInput"><label htmlFor="password" className="pass">Password: </label>
                            <input type="text" placeholder="" name="password" {...register("password", { required: 'password required!' })} />
                        </div>
                        <div className="error" style={{ color: 'red', marginBottom: '10px' }}>
                            {errors.password && <div>{errors.password.message}</div>}
                        </div>
                    </div>

                    <div className="name">
                        <div className="textInput"><label htmlFor="repeatpassword" className="pass">Repeat password: </label>
                            <input type="text" placeholder="" name="repeatpassword" {...register("repeatpassword", { required: 'repeat password!' })} />
                        </div>
                        <div className="error" style={{ color: 'red', marginBottom: '10px' }}>
                            {errors.repeatpassword && <div>{errors.repeatpassword.message}</div>}
                        </div>
                    </div>

                    <button type="submit" className="submitBtn">Submit</button>

                </form>
            </div>
            <div className="goToLogin">
                <Link to='/login' style={{ textDecoration: 'none' }}>Already registered? Go to Login</Link>
            </div>
        </div>
    )
}

export default Register
