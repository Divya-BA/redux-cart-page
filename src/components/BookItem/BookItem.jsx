import React from 'react'
import styles from './BookItem.module.css'
import { Button } from "react-bootstrap"
import { useDispatch } from "react-redux"
import {addToCart} from '../../CartSlice'
import { BsStar } from 'react-icons/bs';


function BookItem({data}) {
    const dispatch = useDispatch()
    const handleAddToCart = () => {
        dispatch(addToCart({
            ...data,
            quantity: 1
        }))
        alert("Successfully added to the cart !")
    }
  return (
    <div className={styles.bookItem}>
    <div className={styles.bookInfo}>
        <img src={data.images[0]} alt="" />
        <p className={styles.name}>{data.title}</p>
        <p><i>{data.description}</i></p>
        <p className={styles.icon}><span><BsStar className={styles.icons}/></span>{data.rating}</p>
        <div className={styles.price}>Price:₹{data.price}</div>
    </div>
    <div className={styles.footer}>
       
        <Button onClick={handleAddToCart} variant="success">Add to cart</Button>
    </div>
</div>
  )
}

export default BookItem