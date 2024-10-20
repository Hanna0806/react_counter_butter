import React from 'react';
import arrow from './arrow_down_icon.svg';

const ListItem = (props) => {
    return (
        <li>
            {props.nameNavigation} {props.isArrow ? <img style={{width:'24px'}} src={arrow}/> : null}
        </li>
    );
};

export default ListItem;