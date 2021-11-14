import React, {useEffect, useState} from 'react';
import {fetchItems} from '../firebase-api/rest';
import {ShoppingListItemType} from '../models/rest.interface';

const collectionPath = 'elements';
const documentPath = 'week_one';

const HomePage = () => {
  const [listItems, setListItems] = useState<Array<ShoppingListItemType & {name: string}>>([]);

  useEffect(() => {
    fetchItems(collectionPath, documentPath)
      .then(snapshot => snapshot.data() || {})
      .then((data: {[key: string]: ShoppingListItemType}) => {
        const f = Object.keys(data || {}).map((key) => ({...data[key], name: key}));
        console.log(f);
        setListItems(f);
      });
  }, []);
  return (
    <>
      {listItems.map((item, index) => <div key={index}>{item.name}</div>)}
    </>
  )
}

export default HomePage;
