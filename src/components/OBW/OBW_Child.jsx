import React from 'react'
import styles from './OBW_Child.module.css'


const OBW_Child = (props) => {
   const  {img , heading , save_text } = props;

    return (
        <div className={styles.cat_list}>
            <a href="#" >
                <span className={styles.cat_img}>
                    <img src={img} />
                </span>
                <span className={styles.content_txt}>
                    <span className={styles.heading}>{heading}</span>
                    <span className={styles.save_text}> {save_text}</span>
                </span>
            </a>
        </div>
    )

}
export default OBW_Child;