import React from 'react';
import { getSearch } from '../../store/search';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, Route, useParams, useHistory } from 'react-router-dom';
import './search.css';

const SearchBar = () => {
  const [keyword, setKeyword] = useState("")
  const history = useHistory()
  const dispatch = useDispatch();

  const submit = (e) => {
    e.preventDefault();
    dispatch(getSearch(keyword));
    history.push("/feed")
  }


  return (
    <div>
      <form
        method="get"
        action="/search/"
        onSubmit={(e) => submit(e)}>

        <input
          value={keyword}
          placeholder="Search By State"
          onChange={(e) => setKeyword(e.target.value)}>

        </input>

        <button onClick={(e) => submit(e)} type="submit">Find!</button>
      </form>
    </div>
  )
}

export default SearchBar
