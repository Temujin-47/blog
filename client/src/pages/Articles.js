import React from 'react'
import "./Articles.css"

function Articles(props) {

    return (
        <div className='product dark light'>
            <img src={props.img} alt="" />
            <div className='product_info'>
                <strong><p> {props.title}</p></strong>
            </div>


        </div>
    );
}

export default Articles;