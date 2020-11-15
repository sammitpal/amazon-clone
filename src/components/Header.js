import React from 'react';
import './Header.css';
import { Link } from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
function Header() {
    const [{ basket, user }, dispatch] = useStateValue();
    const handleAuth = () =>{
        if(user){
            auth.signOut();
        }
    }
    return (
        <div className="header">
            <Link to="/">
                <img className="header_logo" src="https://1079life.com/wp-content/uploads/2018/12/amazon_PNG11.png" alt="" />
            </Link>
            <div className="header_search">
                <input type="text" className="header_input" />
                <SearchIcon className="header_searchIcon" />
            </div>

            <div className="header_nav">
                <Link to={!user && '/login'}>
                    <div onClick={handleAuth} className="header_option">
                        <span className="header_optionone">
                            Hello Guest
                        </span>
                        <span className="header_optiontwo">
                            {user ? 'Sign Out' : 'Sign In'}
                        </span>
                    </div>
                </Link>

                <div className="header_option">
                    <span className="header_optionone">
                        Returns
                    </span>
                    <span className="header_optiontwo">
                        Orders
                    </span>
                </div>

                <div className="header_option">
                    <span className="header_optionone">
                        Your
                    </span>
                    <span className="header_optiontwo">
                        Prime
                    </span>
                </div>
                <Link to="/checkout">
                    <div className="header_optionbasket">
                        <ShoppingCartIcon />
                        <span className="header_optiontwo header_basketCount">{basket?.length}</span>
                    </div>
                </Link>

            </div>
        </div>
    )
}

export default Header
