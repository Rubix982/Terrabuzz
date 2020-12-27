import React, { useEffect, useState } from 'react';
import ComponentStyling from '../../style/Search/MainContentInterest.module.css';
import MainHeader from './MainHeader';
import InterestContent from './InterestContent';
import SearchProvider from './SearchTypeContext';
import { getInterestSearchEntries } from '../../services/search';

const MainContentInterest = () => {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [path, setPath] = useState('');

  useEffect(async() => {
    if (path !== window.location.href) {
      setPath(window.location.href);
    }
  });

  useEffect(async () => {
    try {
      const search = window.location.search;
      const params = new URLSearchParams(search);
      const q = params.get('q');
      setLoading(true);
      const users  = await getInterestSearchEntries(q);
      setEntries(users);
      setLoading(false);  
    } catch (error) {
      alert(error.message);
    }
  }, [path]);

  if (loading) {
    return (
      <>
      </>
    )
  } else {
    return (
      <div className={ComponentStyling.content}>
        <SearchProvider>
          <MainHeader query={entries.query} />
          <InterestContent query={entries.query} postedOn={entries.postedOn} interestedIn={entries.interestedIn} />
        </SearchProvider>
      </div>
    );
  }
};

export default MainContentInterest;
