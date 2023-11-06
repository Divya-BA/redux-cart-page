import React, { useEffect, useState } from 'react'
import { Button, Table } from "react-bootstrap"
import { FaTrashAlt } from "react-icons/fa"
import { useDispatch } from "react-redux"
import { removeItem, updateQuantity } from "../../CartSlice"
import styles from './CartItem.module.css'



function CartItem({data}) {
    const dispatch = useDispatch()

    const [quantity, setQuantity] = useState(data?.quantity)
    const [totalPrice, setTotalPrice] = useState(+data?.price * +data?.quantity)

    const handleChange = (e) => {
        const value = parseInt(e.target.value) > 0 ? parseInt(e.target.value) : 1
        setQuantity(value)
    }

    const handleRemove = () => {
        dispatch(removeItem({id: data?.id}))
    }

    useEffect(() => {
        setTotalPrice(data?.price * quantity)
        dispatch(updateQuantity({id: data?.id, quantity}))
    }, [quantity, data?.price, data?.id, dispatch])

  return (
    
    <tr>
           <td style={{maxWidth: 250, textAlign: 'left'}}>
                <div className="d-flex align-items-center">
                    <img src={data.images[0]} alt="" style={{width: 350,height:250}} /> 
                    <p style={{marginLeft: 10}}><h4>{data.title}</h4></p>
                </div>
            </td> 
            <td className={styles.price}>
            ₹{data.price}
            </td>
            <td style={{textAlign: 'center'}}>
                <div className="d-flex" >
                    <button className={styles.changeBtn} onClick={() => {
                        if (quantity > 1) {
                            setQuantity(pre => pre - 1)
                        }
                    }}>-</button>
                    <input type="number" value={quantity} className={styles.input} onChange={handleChange} />
                    <button className={styles.changeBtn} onClick={() => setQuantity(pre => pre + 1)}>+</button>
                </div>
            </td>
            <td>
                <Button variant="danger" onClick={handleRemove}><FaTrashAlt /></Button>
            </td>
            <td className={styles.totalPrice} style={{fontWeight: 'bold'}}>
            ₹{totalPrice}
            </td>
           
        </tr>
       
  )
}

export default CartItem