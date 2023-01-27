import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import { useState } from "react";
import "./Navbar.scss";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    // to check when we r on top of page navbar remains transparent and when we scroll it becomes black

    // 0 when we are on top and more than 0 when we go down
    // console.log(window.pageYOffset);

    window.onscroll = () => {
        // when go down make isScroll true
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        // clean up function to avoide infinite loop
        return () => (window.onscroll = null);
    };

    return (
        <div className={isScrolled ? "navbar scrolled" : "navbar"}>
            <div className="nav-container">
                <div className="left">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                        alt=""
                    />
                    <span>
                        <Link className="link" to="/">
                            Homepage
                        </Link>
                    </span>
                    <span>
                        <Link className="link" to="/series">
                            Series
                        </Link>
                    </span>
                    <span>
                        <Link className="link" to="/movies">
                            Movies
                        </Link>
                    </span>
                    <span>
                        <Link className="link" to="/">
                            New and Popular
                        </Link>
                    </span>
                    <span>
                        <Link className="link" to="/">
                            My List
                        </Link>
                    </span>
                </div>
                <div className="right">
                    <SearchIcon className="icon" />
                    <span>KID</span>
                    <NotificationsIcon className="icon" />
                    <img
                        src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        alt=""
                    />
                    <div className="profile">
                        <ArrowDropDownIcon className="icon" />
                        <div className="options">
                            <span>Settings</span>
                            <span>Logout</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;