import React from 'react';
import Table from 'react-bootstrap/Table';
import './trackTableData.css';

const TrackTableData = ({ side, title, type }) => {
    return (
        <Table bordered size="sm" variant="dark">

            <tbody>
                <tr>
                    <td>{side}</td>
                    <td >{title}</td>
                    <td >{type}</td>
                </tr>
            </tbody>
        </Table>
    )
}

export default TrackTableData