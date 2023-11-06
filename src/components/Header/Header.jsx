import React from 'react'
import { Container } from "react-bootstrap";
import { FaCartArrowDown } from "react-icons/fa"
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from './Header.module.css'

function Header() {
  const { list } = useSelector(state => state.cart)
  return (
    <div className={styles.header}>
    <Container>
        <div className={styles.navbar}>
            <Link to="/"><h1>Shopping cart</h1></Link>
            <Link to="/cart" className={styles.cartIcon}>
                <FaCartArrowDown />
                <span>{list?.length}</span>
            </Link>
        </div>
    </Container>
</div>
  )
}

export default Header