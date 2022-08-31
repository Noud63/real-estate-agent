import React from 'react'
import '../sassStyles/pages/login.scss'
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom'

const SigninForm = () => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const [passwordShown, setPasswordShown] = React.useState(false);
    const [password, setPassword] = React.useState('');

    const togglePasswordVisiblity = (e) => {
        if (!password && e.target.checked === true) {
            e.target.checked = false
            return
        }
        setPasswordShown(!passwordShown);
    };

    const onSubmit = (data) => {
        reset()
    };

    const onErrors = errors => console.error(errors);

    return (

        <div className="container3">
                <div className="login">Login</div>
        <form  onSubmit={handleSubmit(onSubmit, onErrors)} className="form">

            <div className="name2">
                <label htmlFor="username">Username: </label>
                <div className="error" style={{ color: 'red', marginBottom: '10px' }}>
                    {errors.username && <div>{errors.username.message}</div>}
                </div>
                <input type="text" placeholder="" name="username3" {...register("username", { required: 'username required!' })} />
            </div>

            <div className="pw">
                <label htmlFor="password" className="pass">Password: </label>
                <div className="error" style={{ color: 'red', marginBottom: '10px' }}>
                    {errors.password && <div>{errors.password.message}</div>}
                </div>

                <input type={passwordShown ? "text" : "password"} placeholder="" name="password3"
                    {...register("password", { required: 'password required!', minLength: { value: 1, message: 'Minimum of 8 characters required!' } })}
                    onChange={(e) => setPassword(e.target.value)} />
                   <div className="showPass"> Show password: </div>
                <input type="checkbox" className="check" onChange={(e) => togglePasswordVisiblity(e)} />
            </div>

            <button type="submit" className="btn">Submit</button>

        </form>
            <div className="goToRegister">
                <Link to='/register' style={{ textDecoration: 'none' }}>Not registered? Go to Register.</Link>
            </div>
        </div>
    )
}

export default SigninForm

