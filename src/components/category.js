import React from 'react';
import { checkBooleanAndRender } from '../actions/helper'

export default function Category(props) {
  return (
    <div>
      <p className='category'>Age Group : {checkBooleanAndRender(props.adult, '18+', 'All age group')}</p>

    </div>
  );
}
