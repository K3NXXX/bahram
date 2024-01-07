import React from 'react'
import style from "./AddPost.module.scss"
import {useForm} from "react-hook-form"
import img1 from "../../assets/images/addPost/img1.jpg"
import img2 from "../../assets/images/addPost/img2.jpg"
import img3 from "../../assets/images/addPost/img3.jpg"
import img4 from "../../assets/images/addPost/img4.jpg"

export const AddPost:React.FC = () => {
    const {register, handleSubmit} = useForm({mode: 'onChange'})
    const onSubmit = () => {
        console.log("OK");
    }

  return (
    <div className={style.bg}>
        <div className={style.root}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <textarea className={style.title} 
                {...register("title",
                {minLength: { value: 5, message: "Minimum 5 characters" },
                maxLength: {value:30, message: "Max 30 characters"}
                }
                )}
                 placeholder='Title (max 30 characters)' />

                <textarea className={style.text}
                {...register("text",
                {minLength: { value: 5, message: "Minimum 5 characters" },
                maxLength: {value:300, message: "Max 300 characters"}
                }
                )}
                 placeholder='Text (max 300 characters)' />
                <button type='submit'>Add post</button>
            </form>
            <div className={style.photos}>
                <img src={img1} alt="add-post photos" />
                <img src={img2} alt="add-post photos" />
                <img src={img3} alt="add-post photos" />
                <img src={img4} alt="add-post photos" />
            </div>
        </div>
    </div>
  )
}
