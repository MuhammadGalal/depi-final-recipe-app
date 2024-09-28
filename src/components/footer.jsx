import { FaFacebook,FaInstagram,FaTiktok } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { FaRegCopyright } from "react-icons/fa6";

const Footer = () => {
    return (
        <>
            <div className="Footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-5 col-12 ft-1">
                            <h3><span>healthy</span> reciepes </h3>
                            <p>food is life ...eat healthy stay healthy<br/>our main aim is to keep your food healthy and delicious as far as possible</p>
                        </div>
                        <div className="col-md-6 col-lg-3 col-12 ft-2">
                            
                            <ul>
                                <li className="nav-item">
                                    <a href="/">about us</a>
                                </li>
                                <li className="nav-item">
                                    <a href="/">News</a>
                                </li>
                                <li className="nav-item">
                                    <a href="/">privacy policy</a>
                                </li>
                                <li className="nav-item">
                                    <a href="/">Services</a>
                                </li>
                                <li className="nav-item">
                                    <a href="/">Resources</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-6 col-lg-4 col-12 ft-3">
                            <h5>follow us</h5>
                            <ul>
                            <li><a href='/'><i><FaFacebook /></i> facebook</a></li>
                            <li><a href='/'><i><FaInstagram /></i> Instagram</a></li>

                            <li><a href='/'><i><RiTwitterXLine /></i> Twitter</a></li>
                            <li><a href='/'><i><FaTiktok /></i> tiktok</a></li>
                            </ul>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className='Last-footer'>
            <p><i><FaRegCopyright /></i>copy right 2024 -All reserved</p>
            </div>
        </>
    )
}

export default Footer