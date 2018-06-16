import React from 'react'
import { formatDate } from '../actions/helper'


export default function Title(props) {
  const style = {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginTop: '11%'
  };
  return (
    <h1 style={style}> {props.title} ({formatDate(props.releaseDate, 'YYYY', '')})</h1>
  );
}
