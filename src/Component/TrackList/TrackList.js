import React from 'react';
import TrackTableData from '../TrackTableData/TrackTableData';
import Table from 'react-bootstrap/Table';

const TrackList = ({ trackList }) => {

    return (
        <div className="tracklist-container" style={{ textAlign: 'center' }}>
            <div>
                <h1>Track List:</h1>
            </div>
            {trackList.map((track, i) => {
                return (
                    <TrackTableData
                        key={i}
                        side={track.position}
                        title={track.title}
                        type={track.type_}
                    />
                )
            })}
        </div>

    )
}

export default TrackList