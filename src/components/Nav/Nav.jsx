import React from "react";
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
            </div>
        )
    }
};

export default Nav;