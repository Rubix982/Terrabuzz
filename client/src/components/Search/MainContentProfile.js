import React, { useEffect, useState } from 'react';
import ComponentStyling from '../../style/Search/MainContentProfile.module.css';
import ProfileEntries from './ProfileEntries';
import { getProfileSearchEntries } from '../../services/search';


const MainContentProfile = () => {
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
      const users  = await getProfileSearchEntries(q);
      console.log(users);
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
        <ProfileEntries profilesEntries={entries}  />
      </div>
    );
  }
};

export default MainContentProfile;
