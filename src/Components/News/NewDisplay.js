import React, { useContext, useState, useEffect } from "react";
import '../blogPost/post.css';
import Post from "../blogPost/post";
import './news.css'
import news from './news.json'
import { useLocation } from "react-router-dom";

const NewsDisplay = () => {
    const location = useLocation();
    if (location.state){
        var { filename } = location.state;
    }else{
        var pathName = window.location.pathname;
        var modifiedLink = pathName.split('/').pop();
        news.map((item) => {
            if (item.modifiedLink === modifiedLink){
                filename = item.filename;
            }
        })
    }
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="w-full pl-10 text-left mt-10 pb-20">
            <Post fileName={filename}/>            
        </div>
    );
}

export default NewsDisplay;