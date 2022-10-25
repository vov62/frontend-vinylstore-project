import React from 'react';
import Table from 'react-bootstrap/Table';
import './trackList.css';

const TrackList = ({ trackList }) => {

    return (
        <div className="tracklist-container" >
            <div>
                <h2>Track List</h2>
            </div>
            <Table bordered size='sm' variant="dark">
                <tr>
                    <th></th>
                    <th>Title</th>
                    <th>Type</th>
                </tr>
                {trackList.map((track, i) => {
                    return (
                        <tbody>
                            <tr>
                                <td>{track.position}</td>
                                <td >{track.title}</td>
                                <td >{track.type_}</td>
                            </tr>
                        </tbody>
                    )
                })}
            </Table>
        </div>

    )
}

export default TrackList