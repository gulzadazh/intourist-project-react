import React, { useContext } from "react";
import { adminContext } from "../../../context/AdminContext";
import "./BurgerMenu.css";
import { useHistory } from 'react-router-dom'



const HamburgerMenu = (props) => {
    const { getTours } = useContext(adminContext)
    const history = useHistory()
    console.log(history)
    function fetchParams(params, value) {
        console.log(value)
        if (value === 'all') {
            history.push(history.location.pathname.replace(params))
            // history.push('?_limit=3')
            getTours()
            return
        }
        let search = new URLSearchParams(history.location.search)
        search.set(params, value)
        search.set("_limit", 3)
        let url = `${history.location.pathname}?${search.toString()}`
        history.push(url)
        getTours()
    }

    return (
        <div>
            <div className="hamburger-menu">
                <input id="menu__toggle" type="checkbox" />
                <label className="menu__btn" htmlFor="menu__toggle">
                    <span></span>
                </label>
                <ul className="menu__box">
                    <button className="menu__item btn" onClick={(e) => fetchParams('category', e.target.value)} value='all'>Все</button>
                    <button className="menu__item btn" onClick={(e) => fetchParams('category', e.target.value)} value='mountain'>Горы</button>
                    <button className="menu__item btn" onClick={(e) => fetchParams('category', e.target.value)} value="lakes">Озеро</button>
                    <button className="menu__item btn" onClick={(e) => fetchParams('category', e.target.value)} value="waterfall">Водопады</button>
                </ul>
            </div>
        </div>
    );
};

export default HamburgerMenu;
