import React, { useEffect, useState } from 'react';
import { useGlobalContext } from '../../context/Context';
import { Link, useParams, } from 'react-router-dom';
import Loading from '../../Component/Loading';
import axios from 'axios';
import { BsArrowLeft } from 'react-icons/bs';
import Button from 'react-bootstrap/Button';
import './singleVinyl.css';
import { Carousel } from 'react-responsive-carousel';
import TrackList from '../../Component/TrackList/TrackList';

const DISCOGS_URL = process.env.REACT_APP_DISCOGS_URL;
const DISCOGS_KEY = process.env.REACT_APP_DISCOGS_KEY;


const SingleVinyl = () => {
    const { id } = useParams();
    // console.log(id);
    const [trackList, setTrackList] = useState([]);
    const [imgDesc, setImgDesc] = useState([]);
    const [quantity, setQuantity] = useState(0)

    const { singleVinyl, loading, error, dispatch } = useGlobalContext()
    console.log(singleVinyl);

    const fetchSingleVinyl = async () => {
        try {
            const response = await axios(`${DISCOGS_URL}/releases/${id}`, {
                headers: {
                    Authorization: `Discogs token=${DISCOGS_KEY}`
                }
            })
            const data = response.data
            setImgDesc(data.images)
            setTrackList(data.tracklist)
            dispatch({ type: 'FETCH_SINGLE_VINYL', payload: data })

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
        title, country,
        num_for_sale,
        lowest_price,
    } = singleVinyl;

    return (
        <>
            <div className='wrapper'>
                <div className='back-home-link'>
                    <Link to='/'>
                        <BsArrowLeft />
                        Go Back
                    </Link>
                </div>
                <div className="data-container">
                    <div className="vinyl-details">
                        {loading ? (<Loading color='brown' />) :
                            (<div className="vinyl-img">
                                <Carousel className='vinyl-img-carousel' showIndicators={false}>
                                    {imgDesc.map((item, i) => (
                                        <img key={i} src={item.resource_url} alt='' />
                                    ))}
                                </Carousel>
                            </div>
                            )}

                        {error && <h2>{error}</h2>}
                        <div className="vinyl-content">
                            <h1>{title}</h1>
                            <hr />
                            <h4>Artist: {artists_sort}</h4>
                            <h4>For sale: {num_for_sale}</h4>
                            <h4>Released: {released ? released : 'unknown'}</h4>
                            <h4>Country: {country}</h4>
                            <p> Sale from: &euro;{lowest_price ? lowest_price : 'not in stock'}</p>
                            <div className='btns'>
                                <div className='quantity-btn'>
                                    <button className='quantity-btn-operator' onClick={(() => setQuantity(quantity - 1))}>-</button>
                                    {quantity}
                                    <button className='quantity-btn-operator' onClick={(() => setQuantity(quantity + 1))}>+</button>
                                </div>
                                <Button>Add To Cart</Button>
                            </div>
                        </div>
                    </div>
                </div>
                <TrackList trackList={trackList} />
            </div>
        </>
    )
}

export default SingleVinyl