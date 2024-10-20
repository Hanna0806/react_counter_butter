import React from 'react';
import ListItem from './ListItem';
import './style.css'

const listNavigation = [
    { id: 1, nameNavigation: 'Главная' },
    { id: 2, nameNavigation: 'Пациентам', isArrow: true},
    { id: 3, nameNavigation: 'Отделения службы', isArrow: true},
    { id: 4, nameNavigation: 'Платные услуги' },
    { id: 5, nameNavigation: 'Одно окно' },
    { id: 6, nameNavigation: 'Статьи' },
    { id: 7, nameNavigation: 'Контакты' },
];

const List = () => {

    const listNav = listNavigation.map((item) => {
        return <ListItem key={item.id} nameNavigation={item.nameNavigation} isArrow={item.isArrow}/>
    })



    return (
        <ul className='list'>{listNav}</ul>
    );
};

export default List;