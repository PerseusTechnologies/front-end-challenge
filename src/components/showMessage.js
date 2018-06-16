import React from 'react';

export default function NotFound(props) {

  if (!props.hasOwnProperty('message')) {
    return (<div className='message'>Not Found</div>);
  } else {
    return (<div className='message'>{props.message}</div>);
  }
}
