import React from 'react';
import ReactDOM from 'react-dom';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom';

const searchClient = algoliasearch(
  'RVROS748RZ',
  '42dcf192405bd4e9684c871486718be8'
);

export default () => (
  <InstantSearch
    indexName="goshare"
    searchClient={searchClient}
  >
    <SearchBox />
    <Hits />
    
  </InstantSearch>
);