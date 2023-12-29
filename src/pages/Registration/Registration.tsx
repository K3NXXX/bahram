import style from "./Registration.module.scss"
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";

type registerData = {
  username: string,
  email: string,
  password: string
}


export const Registration:React.FC = () => {
  const {register, handleSubmit} = useForm<registerData>({mode: "onChange"})
  const navigate = useNavigate()
  


  const registerData: SubmitHandler<registerData> = (data) => {
      toast.success("Registration was successful")
      navigate('/')
  }
  return (
    <div className={style.root}>
      <div className={style.main}>
        <input type="checkbox" id={style.chk}/>
          <div className={style.signup}>
            <form onSubmit={handleSubmit(registerData)}>
              <label htmlFor={style.chk}>Sign up</label>

              <input 
              {
                ...register("username", 
                {
                  minLength: {value:5, message: "Username minimum 5 characters"}, required:true
                })
              }
              type="text" placeholder='Username (min 5 characters)' />

              <input 
              {
                ...register("email", 
                {
                  pattern: {value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email"}, required:true
                })
              }
              type="text" placeholder='Email' />

              <input 
              {
                ...register("password",
                {
                  minLength: {value:5, message: "Password minimum 5 characters"}, required:true
                })
              }
              type="password" placeholder='Password (min 5 characters)'/>
             
              <button type='submit'>Sign up</button>
            </form>
          </div>

          <div className={style.login}>
            <form>
              <label htmlFor={style.chk}>Login</label>
              <input type="email" name="email" placeholder="Email" />
              <input type="password" name="pswd" placeholder="Password" />
              <button>Login</button>
            </form>
          </div>
      </div>
    </div>
  )
}
