import React from 'react'

function CartItem(props) {
    return (
            <li className="list-group-item d-flex justify-content-between align-items-start" key={props.data.id}>
            <div className="ms-2 me-auto">
                <div className="fw-bold">{props.data.title}</div>
                    Rs. {props.data.price}
            </div>
            <span style={{cursor:'pointer'}} className="badge bg-primary rounded-pill" onClick={()=>{props.handleRemove(props.data.id)}}>X</span>
            </li>
    )
}

export default CartItem
