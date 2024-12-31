import React from 'react';
import { GoArrowUpRight } from "react-icons/go";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='flex items-center px-7 py-5 bg-[#060a21] text-white border-t border-white/50 justify-between'>
            <p>Created by Hamza Oufkir </p>
            <div className='flex gap-4'>
                <a href='https://www.linkedin.com/in/oufkir-hamza-a5920324b/' target='_blank' className='flex items-center gap-3 border-b'><span>LinkdIn</span>  <GoArrowUpRight/> </a>
                <a href='https://github.com/oufkirhamza' target='_blank'  className='flex items-center gap-3 border-b'><span>Github</span>  <GoArrowUpRight/> </a>
            </div>
        </div>
    );
};

export default Footer;