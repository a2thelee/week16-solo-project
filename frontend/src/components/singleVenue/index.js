import { getOneVenue } from "../../store/venues"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom"

const SingleVenue = () => {
  const dispatch = useDispatch();
  const venue = useSelector(state => state.venues);
  const params = useParams();

  useEffect(() => {
    dispatch(getOneVenue(params.id))
  }, [dispatch]);

  return (
    <h1>{venue.name}</h1>           //(venue.singleItem.name)
  )
}


export default SingleVenue;
