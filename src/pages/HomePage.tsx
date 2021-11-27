import React, {useEffect, useState} from 'react';
import {FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from '@mui/material';

import {fetchDocuments, fetchItems} from '../firebase-api/rest';
import {ShoppingListItemType} from '../models/rest.interface';
import ListItem from '../components/ListItem/ListItem';

const collectionPath = 'elements';

const HomePage = () => {
  const [listItems, setListItems] = useState<Array<ShoppingListItemType & { name: string }>>([]);
  const [documentId, setDocumentId] = useState<string>('');
  const [documentIds, setDocumentIds] = useState<Array<string>>([]);

  useEffect(() => {
    fetchDocuments(collectionPath)
      .then(documents => documents.docs.map(doc => doc.id))
      .then((documentIds: Array<string>) => setDocumentIds(documentIds));
  }, []);

  const handleWeekSelectChange = (event: SelectChangeEvent) => {
    event.preventDefault();
    setDocumentId(event?.target?.value);
    fetchElementsByDocumentId(event?.target?.value)
      .then((items: Array<ShoppingListItemType & {name: string}>) => setListItems(items));
  };

  function fetchElementsByDocumentId(documentId: string): Promise<Array<ShoppingListItemType & {name: string}>> {
    return fetchItems(documentId)
      .then(snapshot => snapshot.data() || {})
      .then((data: { [key: string]: ShoppingListItemType }) => Object.keys(data || {}).map((key) => ({
        ...data[key],
        name: key
      })));
  }

  return (
    <>
      <FormControl fullWidth>
        <InputLabel id="week-select-input-label">Week</InputLabel>
        <Select
          labelId="week-select-input-label"
          id="week-select-input"
          label="Week"
          value={documentId}
          onChange={handleWeekSelectChange}
        >
          {documentIds.map(id => <MenuItem value={id} key={id}>{id}</MenuItem>)}
        </Select>
      </FormControl>

      {listItems.map((item, index) => <ListItem item={item} key={index}/>)}
    </>
  );
};

export default HomePage;
