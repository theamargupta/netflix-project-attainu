/* eslint-disable no-sequences */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { firestore } from '../../Firebase';
import AddIcon from '@material-ui/icons/Add';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import PlayIcon from '../../Assets/image/play-button.svg';

const MovieDetails = ({ movie, currentUser, userProfile }) => {
  const [toggle, setToggle] = useState(false);
  const handleAdd = () => (
    setToggle((prevState) => !prevState),
    firestore
      .collection(currentUser.uid)
      .doc(userProfile.profile)
      .collection('list')
      .doc(`${movie.id}`)
      .set(movie)
  );
  const handleRemove = () => (
    setToggle((prevState) => !prevState),
    firestore
      .collection(currentUser.uid)
      .doc(userProfile.profile)
      .collection('list')
      .doc(`${movie.id}`)
      .delete()
  );

  return (
    <div className='modal__container'>
      <h1 className='modal__title'>{movie.title || movie.name}</h1>
      <p className='modal__info'>
        <span className='modal__rating'>
          Rating: {movie.vote_average * 10}%{' '}
        </span>
        Release date: {movie.release_date || movie.first_air_date} Runtime:{' '}
        {movie.runtime || movie.episode_run_time}m
      </p>
      <p className='modal__episode'>
        {movie.number_of_episodes
          ? ' Episodes: ' + movie.number_of_episodes
          : ''}
        {movie.number_of_seasons ? ' Seasons: ' + movie.number_of_seasons : ''}
      </p>
      <p className='modal__overview'>{movie.overview}</p>
      <button className='modal__btn modal__btn--red'>
        <img src={PlayIcon} className='modal__btn--icon' alt='' />
        Play
      </button>
      {!toggle ? (
        <button onClick={handleAdd} className='modal__btn'>
          <AddIcon />
          Add to list
        </button>
      ) : (
        <button onClick={handleRemove} className='modal__btn'>
          <DeleteForeverIcon />
          Added to list
        </button>
      )}
    </div>
  );
};
const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
  userProfile: user.userProfile,
});
export default connect(mapStateToProps)(MovieDetails);
