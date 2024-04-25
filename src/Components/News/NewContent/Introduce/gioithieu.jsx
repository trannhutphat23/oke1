import React from 'react'
import image1 from './image1.png'
import image2 from './image2.png'

const GioiThieu = () => {
    return (
        <div className='w-full flex items-center justify-center py-20'>
            <div className='w-11/12 text-left '>
                <h1 className='text-5xl text-justify font-black mb-10'>Shop giày secondhand Blue Ribbon</h1>
                <h2 className='text-4xl my-5'>Đôi nét về Blue Ribbon</h2>
                <p className='font-[300] text-xl'>
                    Được thành lập vào năm 2003 bởi nhóm sinh viên trường đại học Công Nghệ Thông Tin (UIT) có niềm đam mê cháy bỏng với dòng giày Nike. Trải qua hơn 11 năm thành lập và phát triển, shop giày secondhand Blue Ribbon đã chiếm trọn tình cảm của rất nhiều những khách hàng chuyên “săn” những đôi giày “cũ nhưng chất” tại Sài Gòn.
                </p>
                <div className='w-full flex justify-center items-center my-5'>
                    <img
                        src={image1}
                        alt='Shop giày secondhand Blue Ribbon'
                    />
                </div>
                <p className='font-[300] text-xl'>Nơi đây cũng là điểm đến nổi tiếng với những “tín đồ” Nike đam mê thời trang, thể thao và năng động muốn tìm đến một cửa hàng đa dạng các mẫu giày secondhand của Nike với chất lượng cao nhưng đồng thời đó là giá cả vô cùng hợp lí.</p>
                <h2 className='text-4xl my-5'>Nguồn gốc thương hiệu Blue Ribbon</h2>
                <p className='font-[300] text-xl'>Có thể nhiều bạn chưa biết, trước khi trở thành thương hiệu sneaker tỷ đô như hiện nay, Nike từng hoạt động dưới tên Blue Ribbon Sports – công ty chuyên phân phối các sản phẩm của Onitsuka Tiger tại Mỹ. Lấy cảm hứng từ sự hoài cổ, vintage và cội nguồn đấy của thương hiệu Nike, shop giày secondhand Blue Ribbon đã ra đời.</p>
                <h2 className='text-4xl my-5'>  Giày cũ giá cao – nghịch lý nhưng hợp lý: Theo đuổi phương châm “old but gold”</h2>
                <p className='font-[300] text-xl'>Với nhiều người, những đôi giày cũ thì sẽ không còn chất lượng được như mới, sẽ phai màu, sờn chỉ hay mòn đế. Nhưng ở Blue Ribbon, mỗi đôi giày được đem đến tay khách hàng sẽ luôn là những sản phẩm chất lượng nhất, đảm bảo sự hài lòng cho mọi khách hàng.</p>
                <div className='w-full flex justify-center items-center my-5'>
                    <img
                        src={image2}
                        alt='Shop giày secondhand Blue Ribbon với đa dạng các mẫu giày của thương hiệu Nike'
                    />
                </div>
                <p className='font-[300] text-xl'>Cửa hàng đem đến với mọi người đa dạng các mẫu giày từ kinh điển nhất là Air Force 1, Nike Court Royale, Nike Air Max,... Cho đến những mẫu giày mới nhất hoặc “khá hiếm” như Kyrie 4, Kyrie 8 Infinity, Air Jordan 4 Red Cement và đôi khi còn có những đôi phiên bản giới hạn như Nike Love Letter, Air Jordan 4 Retro Eminem Carhatt...</p>
                <p className='font-[300] text-xl'>Hãy đến ngay với Blue Ribbon - Shop giày secondhand hàng đầu tại TP.HCM và khám phá thế giới giày Nike secondhand đa dạng và phong cách. Với Blue Ribbon, bạn đảm bảo sẽ tìm thấy những đôi giày ưng ý nhất tại đây.</p>
                <p className='font-[300] text-xl mt-5'>
                    <b>Thông tin liên hệ: </b><br />
                    <b>Email:</b> blueribbonshop.contact@gmail.com <br />
                    <b>Số điện thoại liên hệ:</b> 0324568446 <br />
                    <b>Địa chỉ:</b> Đường Hàn Thuyên, khu phố 6 P, Thủ Đức, Thành phố Hồ Chí Minh, Việt Nam, Ho Chi Minh City, Vietnam <br />
                    <b>Website:</b> https://blueribbon.name.vn <br />
                    <b>Fanpage:</b> https://www.facebook.com/blue.ribbon.secondhand
                </p>


            </div>
        </div>
    );
}

export default GioiThieu;