import React, { useContext, useState, useEffect } from "react";
import '../blogPost/post.css';
import Post from "../blogPost/post";
import './news.css'
import { useLocation } from "react-router-dom";

const NewsDisplay = () => {
    const location = useLocation();
    const { filename } = location.state;
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