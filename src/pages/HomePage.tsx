import React, {useEffect, useState} from 'react';
import {fetchItems} from '../firebase-api/rest';
import {ShoppingListItemType} from '../models/rest.interface';
import ListItem from '../components/ListItem/ListItem';

const collectionPath = 'elements';
const documentPath = 'week_one';

const HomePage = () => {
  const [listItems, setListItems] = useState<Array<ShoppingListItemType & {name: string}>>([]);

  useEffect(() => {
    fetchItems(collectionPath, documentPath)
      .then(snapshot => snapshot.data() || {})
      .then((data: {[key: string]: ShoppingListItemType}) => {
        setListItems(Object.keys(data || {}).map((key) => ({...data[key], name: key})));
      });
  }, []);
  return (
    <>
      {listItems.map((item, index) => <ListItem item={item} key={index}/>)}
    </>
  )
}

export default HomePage;
