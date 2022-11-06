import React from 'react'
import Card from 'react-bootstrap/Card';
import noImage from '../../assets/no image.jpeg';
import { Link } from 'react-router-dom';
import './DataCardStyle.css';
// import { BsHeart } from 'react-icons/bs';
import { FaShoppingCart } from 'react-icons/fa';
import { useGlobalContext } from '../../context/Context';

const DataCard = ({ image, title, id, item, label }) => {
    const { cart, dispatch } = useGlobalContext();
    // console.log(cart);

    return (
        <Card>
            <Link to={`/vinyl/${id}`}>
                <img
                    src={!image ? noImage : image}
                    alt={title}
                    className='card-img-top'
                />
                <div className='card-body'>
                    <h6 className='card-text ' >
                        {title}
                    </h6>
                </div>
            </Link>
            <div >

                {cart.some(v => v.id === item.id) ? (
                    <button
                        className='removeCard-btn'
                        onClick={() => {
                            dispatch({
                                type: 'REMOVE_FROM_CART',
                                payload: item
                            })
                        }}
                    >
                        <span style={{ marginRight: '3px' }}>
                            <FaShoppingCart fontSize='18px' />
                        </span>
                        Remove from Cart
                    </button>
                ) : (
                    <button
                        className='btn-btn'
                        onClick={() => {
                            dispatch({
                                type: 'ADD_TO_CART',
                                payload: item
                            })
                        }}>
                        <span style={{ marginRight: '3px' }}>
                            <FaShoppingCart fontSize='18px' />
                        </span>
                        Add To Cart
                    </button>
                )}


            </div>




        </Card >
    )
}

export default DataCard