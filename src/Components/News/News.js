import React from "react";
import { Link, useNavigate } from "react-router-dom";
import news from './news.json'
import NewsBox from "./NewBox";

const News = () => {
    const navigate = useNavigate()
    const navigateToPage = (title) => {
        let filename = null;
        let modifiedLink = "";
        if (title === "Chinh phục mọi bước chân , tạo nên phong cách riêng của bạn với top 9 mẫu giày Nike độc đáo nhất năm 2024"){
            filename = "newShoes/new-shoes.md";
            modifiedLink = "chinh-phuc-moi-buoc-chan-tao-nen-phong-cach-rieng-cua-ban-voi-top-9-mau-giay-nike-doc-dao-nhat-nam-2024"
        }else if (title === "Top 7 trang cửa hàng 2hand chuyên giày cũ chính hãng"){
            filename = "shop2hand/shop-2-hand.md";
            modifiedLink = "top-7-trang-cua-hang-2hand-chuyen-giay-cu-chinh-hang";
        }else if (title === "Có nên cân nhắc mua giày 2hand không? Những chú ý khi chọn giày cũ hàng hiệu chất lượng"){
            filename = "what2hand/2hand.md";
            modifiedLink = "co-nen-can-nhan-mua-giay-2hand-khong-Nhung-chu-y-khi-chon-giay-cu-hang-hieu-chat-luong";
        }else{
            filename = "nikeRealFake/nike-real-fake.md";
            modifiedLink = "cach-phan-biet-giay-nike-chinh-hang";
        }
        console.log(modifiedLink)
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