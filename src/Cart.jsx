import React from 'react'
import { Container, Row, Table } from "react-bootstrap"
import { useSelector } from "react-redux"
import CartItem from './components/CartItem/CartItem'

function Cart() {
  const cart = useSelector(state => state.cart)
  return (
    <Container>
    <Row>
        {cart?.list && cart?.list?.length > 0 ? (
            <Table hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        
                        <th>Action</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody style={{verticalAlign: 'middle'}}>
                    {
                        cart?.list.map(item => {
                            return (
                                <CartItem 
                                    key={item?.id}
                                    data={item}
                                />
                            )
                        })
                    }
                    
                    <tr style={{fontSize: 20, textAlign: 'right',fontWeight:'bolder'}}>
                        <td colSpan={5}>Total Amount:₹{cart?.total}</td>
                      
                    </tr>
                </tbody>
            </Table>
        ) : <h1 style={{textAlign:'center',marginTop:'20rem'}}>"Empty !"</h1>}
    </Row>
</Container>
  )
}

export default Cart