/** @jsx jsx */
import jsx from '../jsx';
import React from 'react';
import ReactLoading from 'react-loading';

const Loading = ({ type, color }) => {
  return <ReactLoading height={24} width={24} type={type} color={color} />;
};

export default Loading;
