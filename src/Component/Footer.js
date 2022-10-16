import React from 'react'
import { Navbar, Container } from 'react-bootstrap';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className="bg-dark text-center text-white mt-5">
            <div className="text-center p-3" style={{ "backgroundColor": 'rgba(0, 0, 0, 0.2' }} >
                &copy; 2022
                <a className="text-white" href='#'> vovstore App</a>
            </div>
        </footer >
    )
}

export default Footer