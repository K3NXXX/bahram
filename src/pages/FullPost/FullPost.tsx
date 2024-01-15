import React, { useEffect, useState } from 'react'
import style from "./FullPost.module.scss"
import { useParams } from 'react-router-dom'
import axios from "../../utils/axios"
import { postType } from '../../redux/slices/posts/types'
import { IoMdHeartEmpty } from "react-icons/io";
import { IconContext } from 'react-icons'
import { IoMdHeart } from "react-icons/io";
import { MdRemoveRedEye } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { CommentItem } from '../../components/Comment/CommentItem'
import { useForm } from 'react-hook-form'
import { CommentFormData } from '../../redux/slices/comments/types'

export const FullPost:React.FC = () => {
  const {register, handleSubmit, formState:{errors}} = useForm<CommentFormData>({mode: 'onChange'})
  const comments = useSelector((state:RootState) => state.commentsSlice.comments)
  const [post, setPost] = useState<postType | null>(null)
  const [like, setLike] = useState(false)
  const {id} = useParams<{ id: string }>();

  const onSubmit = (data: CommentFormData) => {
    console.log(data, "OK")
  }

  useEffect(() => {
    const fetchPost = async() => {
      const {data} = await axios.get(`/posts/${id}`)
      setPost(data)
    }
    fetchPost()
  }, [id])

  if (!post) {
    return <div>Loading...</div>
  }
  return (
    <div className={style.root}>
        <p className={style.title}>{post.title}</p>
        <p className={style.author}><span>BY</span> {post.username}</p>
        <div className={style.content}>
            <div className={style.image__wrapper}>
                <div className={style.social}>
                  <IconContext.Provider value={{size:'30px', color: 'grey'}}>
                      <FaFacebook />
                      <FaTwitter />
                      <FaInstagramSquare />
                      <FaPinterest />
                  </IconContext.Provider>
                </div>
                <img src={`http://localhost:7777/${post.imageUrl}`} alt="post" />
                <div className={style.statistic}>
                    <div onClick={() => setLike(!like)} className={style.likes}>
                      {like ? (
                         <IconContext.Provider value={{size: '30px', color: 'red'}}>
                            <IoMdHeart />
                         </IconContext.Provider>
                      ): (
                        <IconContext.Provider value={{size: '30px'}}>
                          <IoMdHeartEmpty />
                        </IconContext.Provider>
                      )}
                      <p className={style.count}>12 k</p>
                    </div>
                    <div  className={style.views}>
                      <IconContext.Provider value={{size: '30px'}}>
                        <MdRemoveRedEye />
                      </IconContext.Provider>
                      <p className={style.count}>{post.viewsCount}</p>
                    </div>
                </div>
            </div>
        </div>
        <p className={style.text}>{post.text}</p>
        <div className={style.comments}>
          <div className={style.comments__top}>
           <h4 className={style.comment__title}>Comments</h4>
           <button className={style.addComment}>Leave a Comment</button>
          </div>
          <p className={style.comments__policy}><span>Comment policy:</span> We love comments and appreciate the time that readers spend to share ideas and give feedback. However, all comments are manually moderated and those deemed to be spam or solely promotional will be deleted.
          </p>
          <div className={style.commets__list}>
              {/* {comments.map((comment) => (
                <CommentItem/>
              ))} */}
              <CommentItem/>
              <CommentItem/>
          </div>
          <div className={style.comments__create}>
            <p className={style.leave__reply}>Leave a Reply</p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <textarea
                {...register("comment", {required:true})}
                placeholder='Comment' />
                <input
                {...register("email", 
                {required:true, 
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email"
                }
                })}
                type="text" placeholder='Email' />
                <div className={style.policy}>
                  <input type="checkbox" />
                  <p className={style.copyright}>I agree to the Terms and Conditions and Privacy Policy</p>
                </div>
                <button>Post Comment</button>
            </form>
          </div>
        </div>
    </div>
  )
}
