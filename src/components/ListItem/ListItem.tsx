import React from 'react';
import {Card, CardContent} from '@mui/material';

import {IListItem} from '../../models/list-item.interface';
import {capitalizeFirst} from '../../utils/capitalize-first.util';
import './ListItem.css';

export default function ListItem({item}: {item: IListItem}) {

  function onCheckChange() {
    console.log('checked');
  }
  return (
    <Card className='item-card'>
      <CardContent className='item-card-content'>
        <span>{capitalizeFirst(item.name)} </span>
        <span>{item.amount} </span>
        <span>{item.unit} </span>
        <input type='checkbox' checked={item.isInBasket} onChange={onCheckChange}/>
      </CardContent>
    </Card>
  )
}

