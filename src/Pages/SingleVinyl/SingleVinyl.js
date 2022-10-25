import React, { useEffect, useState } from 'react';
import { useGlobalContext } from '../../context/Context';
import { Link, useParams, } from 'react-router-dom';
import Loading from '../../Component/Loading';
import Error from '../../Component/Error';
import axios from 'axios';
import { BsArrowLeft } from 'react-icons/bs';
import Button from 'react-bootstrap/Button';
import './singleVinyl.css';
import { Carousel } from 'react-responsive-carousel';
import TrackList from '../../Component/TrackList/TrackList';
import noImage from '../../assets/no image.jpeg'
import { BsHeart } from 'react-icons/bs';
// import {BsFillHeartFill} from 'react-icons/bs';



const DISCOGS_URL = process.env.REACT_APP_DISCOGS_URL;
const DISCOGS_KEY = process.env.REACT_APP_DISCOGS_KEY;


const SingleVinyl = () => {
    const { id } = useParams();
    // console.log(id);
    const [trackList, setTrackList] = useState([]);
    const [imgDesc, setImgDesc] = useState([]);
    const [quantity, setQuantity] = useState(1)

    const { singleVinyl, loading, error, dispatch } = useGlobalContext()
    // console.log(singleVinyl);

    const fetchSingleVinyl = async () => {
        try {
            const response = await axios(`${DISCOGS_URL}/releases/${id}`, {
                headers: {
                    Authorization: `Discogs token=${DISCOGS_KEY}`
                }
            })
            const data = response.data

            if (data.images) {
                setImgDesc(data.images)
            }
            setTrackList(data.tracklist)
            if (data) {
                dispatch({ type: 'FETCH_SINGLE_VINYL', payload: data })
            }

        } catch (err) {
            const message = err.message
            dispatch({ type: 'FETCH_ERROR', payload: message })
        }
    }

    useEffect(() => {
        fetchSingleVinyl()
    }, [])


    const {
        released,
        artists_sort,
        title,
        country,
        num_for_sale,
        lowest_price,
    } = singleVinyl;


    return (
        <div className="wrapper">
            <div className='back-home-link'>
                <Link to='/'>
                    <BsArrowLeft />
                    Go Back
                </Link>
            </div>
            {error && <Error variant='danger'>{error}</Error>}
            {loading && <Loading />}
            <div className="data-container">
                <div className="vinyl-details">
                    <div className="vinyl-img">
                        <Carousel className='vinyl-img-carousel' showIndicators={false}>
                            {imgDesc.map((item, i) => (
                                <img key={i} src={item.resource_url} alt='vinyl' />
                            ))}
                        </Carousel>
                    </div>

                </div>

                <div className="vinyl-content">
                    <h2>
                        {title}

                    </h2>
                    <hr />
                    <h4> {artists_sort}</h4>
                    <h4> {released ? released : 'unknown'}</h4>
                    <h4> {country}</h4>
                    <h4>{num_for_sale ? `${num_for_sale} for sale` : 'not in stock'}</h4>
                    <h3 style={{ color: 'yellowgreen' }}> from &euro;
                        {lowest_price ? lowest_price : 'not in stock'}
                    </h3>
                    <button className='wishlist-btn'>
                        <BsHeart size={'22px'} fill="#fff" />
                    </button>
                    <hr />

                    <div className='btns'>
                        <div className='quantity-btn'>
                            <button className='quantity-btn-operator' onClick={(() => quantity > 1 && setQuantity(quantity - 1))}>-</button>
                            {quantity}
                            <button className='quantity-btn-operator' onClick={(() => setQuantity(quantity + 1))}>+</button>
                        </div>
                        <Link to='/cart'>
                            <button className='btn-btn'>Add To Cart</button>
                        </Link>
                    </div>
                </div>
            </div>

            <div>
                <TrackList trackList={trackList} />
            </div>

        </div >


    )
}

export default SingleVinyl