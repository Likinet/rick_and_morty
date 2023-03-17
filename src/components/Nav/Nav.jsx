import React from "react";
import { Link } from 'react-router-dom';
import SearchBar from "../SearchBar/SearchBar";


class Nav extends React.Component {
    // eslint-disable-next-line
    constructor(props){
        super(props);
    }

    render () {
        return (
            <div>
                <SearchBar onSearch={this.props.onSearch}/>
                <Link to='/about'>About</Link>
                <Link to='/home'>Home</Link>
                <Link to='/favorites'>Favorites</Link>
            </div>
        )
    }
};

export default Nav;