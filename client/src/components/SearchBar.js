import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import SearchUsers from '../assets/img/icon/Search-User.svg';
import HashSearch from '../assets/img/icon/Hash-Search.svg';
import { CenterAlign } from './FlexAlignment';
import ComponentStyling from '../style/Navbar.module.css';

const SearchBar = () => {
  const [active, setActive] = useState('interest');
  const [inputData, setInputData] = useState('');
  const history = useHistory();

  return (
    <CenterAlign>
        <div className={ComponentStyling.search}>
          <div onClick={() => {
            setActive('interest');
          }} className={ ( active === 'interest') ? `${ComponentStyling.hashtag} ${ComponentStyling.active}` : ComponentStyling.hashtag }>
            <img src={HashSearch} alt="" />
          </div>
          <div className={ComponentStyling.searchBox}>
            <form onSubmit={async (event)=>{
                event.preventDefault();
                history.push(`/search/${active}?q=${inputData.substr(1)}`);  
            }} >
              <input
                onChange={(event) => {
                  setInputData(event.target.value);
                }}
                value={inputData}                
                type="text"
                name="search"
                placeholder={ (active==='interest') ? 'Search #interest' : 'Search @profile' }
              />
            </form>
          </div>
          <div onClick={() => {
            setActive('users');
          }} className={ (active === 'users') ? `${ComponentStyling.users} ${ComponentStyling.active}`  : ComponentStyling.users }>
            <img src={SearchUsers} alt="" />
          </div>
        </div>
      </CenterAlign>
  );
};

export default SearchBar;