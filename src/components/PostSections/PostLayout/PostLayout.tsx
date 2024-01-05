import React from 'react'
import style from "./PostLayout.module.scss"
import { postSectionsType } from '../../../lists/postsSections'

type PostLayoutPropsType = {
    section: postSectionsType
}

export const PostLayout:React.FC<PostLayoutPropsType> = ({section}) => {
  return (
    <section className={style.root}>
        <div className={style.top}>
            <h3 className={style.title}>{section.title}</h3>
            <button className={style.viewAll}>View All</button>
        </div>
        <div className={style.content}>
            <div className={style.content__left}>
                <p className={style.author}>BY TOMAS LAURINAVICIUS IN DESIGN PROCESS</p>
                <h4 className={style.post__title}>How to Boost Conversions on Your WooCommerce Product Pages</h4>
                <p className={style.post__descr}>User research is the reality check every project needs. Here's our guide to why you should be doing it — and how to get started.</p>

            </div>
            <div className={style.content__right}>
                <div className={style.post__card}>
                    <p className={style.post__card_type}>FREELANCING</p>
                    <h4 className={style.post__card_title}>10 WordPress Lead Generation Plugins</h4>
                </div>
                <div className={style.post__card}>
                    <p className={style.post__card_type}>FREELANCING</p>
                    <h4 className={style.post__card_title}>10 WordPress Lead Generation Plugins</h4>
                </div>
                <div className={style.post__card}>
                    <p className={style.post__card_type}>FREELANCING</p>
                    <h4 className={style.post__card_title}>10 WordPress Lead Generation Plugins</h4>
                </div>
                <div className={style.post__card}>
                    <p className={style.post__card_type}>FREELANCING</p>
                    <h4 className={style.post__card_title}>10 WordPress Lead Generation Plugins</h4>
                </div>
                
            </div>
        </div>
 
    </section>
    
  )
}
