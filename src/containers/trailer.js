import React, { Component } from 'react';
import { Trailer } from '../components';
import { connect } from 'react-redux';
import { fetchTrailer } from '../actions';

class Genres extends Component {
    componentWillMount() {
        const { dispatch, id } = this.props;
        dispatch(fetchTrailer(id));
    }



    render() {
        const { trailer } = this.props;
        return (
            <div className='trailer'>
                {trailer.length ?
                    <Trailer youtube={trailer} /> :
                    ''}
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { movieDetail } = state;
    const { trailer, error_movie } = movieDetail;
    return { trailer, error_movie }
}

export default connect(mapStateToProps)(Genres);
