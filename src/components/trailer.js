import ModalVideo from 'react-modal-video'
import React, { Component } from 'react';

export default class Trailer extends Component {

    constructor() {
        super()
        this.state = {
            isOpen: false
        }
        this.openModal = this.openModal.bind(this)
    }

    openModal() {
        this.setState({ isOpen: true })
    }

    render() {
        const { youtube } = this.props
        return (
            <div>
                <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId={youtube} onClose={() => this.setState({ isOpen: false })} />
                <button className='btn btn-info' onClick={this.openModal}>Show Trailer</button>
            </div>
        )
    }
}
