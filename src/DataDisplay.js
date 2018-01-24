import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { getJSON } from './util/IPFS.js'
import axios from 'axios';
import { Col } from 'react-bootstrap';

export class DataDisplay extends Component {
    constructor() {
        super()
        this.state = { data: "" };
    }
    async componentDidMount() {
        const hash = this.props.match.params.id;
        const url = `https://ipfs.io/ipfs/${hash}`;
        const result = await axios.get(url);
        this.setState({ data: result.data })
    }

    render() {
        const hash = this.props.match.params.id;
        return (
            <Col smOffset={3} sm={9}>
                <h2>Article:</h2>
                <h3><span>Title:</span> {this.state.data.title}</h3>
                <h3><span>Copy:</span> {this.state.data.message}</h3>
                <h3><span>TimeStamp:</span> {this.state.data.timeStamp}</h3><br />
                <a href={`https://ipfs.io/ipfs/${hash}`} target="_blank">{`https://ipfs.io/ipfs/${hash}`}</a>
            </Col>
        )
    }
}


DataDisplay.propTypes = {

}

export default DataDisplay
