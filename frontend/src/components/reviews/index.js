import "./reviews.css"
import * as reviewActions from '../../store/reviews';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Reviews() {
  const state = useSelector(state => state.list)

  return (
    <>
      <h2>HI THIS IS REVIEWS</h2>
    </>
  )
}
