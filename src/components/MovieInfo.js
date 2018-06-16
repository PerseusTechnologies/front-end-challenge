import React from 'react'
import Title from './Title'
import SubTitleWithIcon from './SubTitleWithIcon'
import Category from './category'
import Description from './Description'
import { Row, Col } from 'react-bootstrap'

export default function MovieInfo(props) {
  const style = {
    paddingLeft: '15px'
  };

  return (
    <div style={style}>
      <Row>
        <Title title={props.movie.title} releaseDate={props.movie.release_date} />
      </Row>
      <Row>
        <Col xs={6}>
          <SubTitleWithIcon icon={'star'} title={props.movie.vote_average} />
        </Col>
        <Col xs={6}>
          <SubTitleWithIcon icon={'heart'} title={props.movie.vote_count} />
        </Col>
        <Col xs={12}>
          <Category adult={props.movie.adult} />
        </Col>
      </Row>
      <Row>
        <Description category={'Overview'} description={props.movie.overview} />
      </Row>
    </div>
  );
}
