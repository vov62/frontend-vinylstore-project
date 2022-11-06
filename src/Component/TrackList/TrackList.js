import React from 'react';
import Table from 'react-bootstrap/Table';
import './trackList.css';
import ReactPlayer from 'react-player/lazy';

const TrackList = ({ trackList, video }) => {

    return (
        <div className="tracklist-container">
            <div>
                <h2>Track List</h2>
            </div>

            <div className="tracklist-tb-data">
                <Table striped bordered >
                    <thead>
                        <tr>
                            <th></th>
                            <th>Title</th>
                            <th>Type</th>
                        </tr>
                    </thead>
                    {trackList.map((track, i) => {
                        return (
                            <tbody key={i}>
                                <tr>
                                    <td>{track.position}</td>
                                    <td >{track.title}</td>
                                    <td >{track.type_}</td>
                                </tr>
                            </tbody>
                        )
                    })}
                </Table>

                <div>
                    <ReactPlayer
                        url={video}
                        width='400px'
                        height='240px'
                        controls={true}
                        style={{ marginBottom: '20px' }}
                    />

                </div>
            </div>
        </div>

    )
}

export default TrackList