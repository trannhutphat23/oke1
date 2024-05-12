import React from "react";
import { Link, useNavigate } from "react-router-dom";
import news from './news.json'
import NewsBox from "./NewBox";

const News = () => {
    const navigate = useNavigate()
    const navigateToPage = (title) => {
        let filename = "";
        let modifiedLink = "";
        news.map((item) => {
            if (item.title === title) {
                filename = item.filename;
                modifiedLink = item.modifiedLink;
            }
        })
        navigate(`/tin-tuc/${modifiedLink}`, {
            state: {filename: filename}
        })
    }
    return (
        <div className="news-container flex flex-col items-center">
            <h1 className="mt-20 text-5xl font-black">TIN TỨC</h1>
            <div className="grid grid-cols-4 gap-10 w-11/12 mt-10">
                {news.map((value, index) =>
                    <div key={index} className="noo-decoration" onClick={() => navigateToPage(value.title)}>
                        <NewsBox
                            image={value.image}
                            title={value.title}
                            content={value.content}
                        />
                    </div>
                )}
            </div>
        </div>
    );
}

export default News;