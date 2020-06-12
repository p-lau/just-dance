import React from "react";
import {NavLink} from "react-router-dom";

export const Menu = () => {
    return(
        <div className={'menu'}>
            <div className={'container'}>
                <NavLink exact to="/" activeClassName="active" className={'tab light'}>Home</NavLink>
                <NavLink exact to="/catalog" activeClassName="active" className={'tab light'}>Catalog</NavLink>
                <NavLink exact to="/connect" activeClassName="active" className={'tab light'}>Play</NavLink>
            </div>
        </div>
    )
}