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

export const FullPost:React.FC = () => {
  const [post, setPost] = useState<postType | null>(null)
  const [like, setLike] = useState(false)
  const {id} = useParams<{ id: string }>();
  console.log(post)

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
    </div>
  )
}
