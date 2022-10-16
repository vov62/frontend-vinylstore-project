import React from 'react'
import Card from 'react-bootstrap/Card';
import noImage from '../../assets/no image.jpeg';
import { Link } from 'react-router-dom';
import './DataCardStyle.css';

const DataCard = ({ image, title, id }) => {
    return (
        <Card>
            <img
                src={!image ? noImage : image}
                alt={title}
                className='card-img-top'
            />

            <div className='card-body'>
                <Link to={`/vinyl/${id}`}>
                    <h6 className='card-text ' >
                        {title}
                    </h6>
                </Link>
            </div>
        </Card >
    )
}

export default DataCard