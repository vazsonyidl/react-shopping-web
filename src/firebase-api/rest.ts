import {doc, getDoc, DocumentSnapshot, getDocs, collection} from '@firebase/firestore';

import {CollectionPathType, ShoppingListItemType} from '../models/rest.interface';
import {database} from './init';

export const fetchItems = (documentPath: string, collectionPath: CollectionPathType = 'elements'): Promise<DocumentSnapshot<{ [key: string]: ShoppingListItemType }>> => {
  // TODO: Convert it as any, hence if doc has a generic type, then the parameter does not match. Need to find a solution
  const docRef = doc<{[key: string]: ShoppingListItemType}>(database as any, collectionPath, documentPath);
  return getDoc<{[key: string]: ShoppingListItemType}>(docRef);
};

export const fetchDocuments = (collectionPath: CollectionPathType) => {
  return getDocs(collection(database, collectionPath));
}
