import './footer.css'

const Footer = () => {
    return (
        <div className="Footer-container">
            <ul>
                <li>
                    <h3>About Website</h3>
                    <div className="about-content">
                        <p>News</p>
                        <p>Deliery</p>
                        <p>Payment Options</p>
                        <p>Contact us</p>
                    </div>
                </li>
                <li>
                    <h3>About Us</h3>
                    <div className="about-content">
                        <p>21520419 - Phạm Ngọc Quí</p>
                        <p>21520390 - Trần Nhựt Phát</p>
                        <p>21521129 - Ngô Võ Quang Minh</p>
                        <p>21520905 - Nguyễn Thị Thu Hương</p>
                        <p>21522162 - Nguyễn Võ Hoàng Huy</p>
                        <p>21522346 - Trần Tuấn Minh</p>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default Footer;