import React from "react";
import { Link, NavLink, Route } from "react-router-dom";
import './SubNav.css';

const icons = [
    {
        id: '1',
        name: 'Mac',
        img: 'https://www.apple.com/v/mac/home/ab/images/familybrowser/imac_dark_large.svg'
    },
    {
        id: '2',
        name: 'iPad',
    },
    {
        id: '3',
        name: 'iPhone',
    },
    {
        id: '4',
        name: 'Watch',
    },
    {
        id: '5',
        name: 'TV',
    },
    {
        id: '6',
        name: 'Music',
    },
    {
        id: '7',
        name: 'Support',
    }
];


const SubNav = props => {
    return (
        <div>
            <header className="SubNav-header">something
            <img src={icons[0].img} alt="computer"/>
            </header>
            
        </div>
    );
};

export default SubNav;
