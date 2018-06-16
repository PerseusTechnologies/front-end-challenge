import moment from 'moment'
import _ from 'lodash'
import React from 'react';
export const formatDate = (date, format, toReturn) => !date ? toReturn : moment(date, "YYYY/MM/DD").format(format);
export const EmptyArray = []
export const checkBooleanAndRender = (value, ifTrueValue, ifFalseValue) => value ? ifTrueValue : ifFalseValue
export const renderGenre = (genre) => {
  return (
    <div>
      {genre ? genre.map((item, i) => {
        return (
          <li key={item.id}>
            {item.name}
          </li>
        )
      }) : 'No genre available'}
    </div>
  )
}