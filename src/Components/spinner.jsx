import React from 'react'

import { ClipLoader } from 'react-spinners/ClipLoader';

const override = {
    display: 'block',
    margin: '100px auto',
};

const Spinner = ({ loading }) => {
  return (
    <ClipLoader 
    color='#900C3F'
    loading={loading}
    cssOveride={override}
    size={150}  // size of the spinner
    />
  )
}

export default Spinner