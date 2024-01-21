import React from "react";
import style from "./Intro.module.scss";

export const Intro: React.FC = () => {
    return (
        <div className={style.background}>
            <section className={style.content}>
                <p className={style.author}>
                    BY TOMAS LAURINAVICIUS IN DESIGN PROCESS
                </p>
                <p className={style.title}>
                    How to Create a PayPal Donate Button for Your WordPress Site
                </p>
                <p className={style.text}>
                    User research is the reality check every project needs.
                    Here’s our guide to why you should be doing it — and how to
                    get started.
                </p>
            </section>
        </div>
    );
};
