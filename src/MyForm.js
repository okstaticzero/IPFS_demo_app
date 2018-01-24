import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Form, FormGroup, Button, ControlLabel, FormControl, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'

export class MyForm extends Component {

    render() {
        return (
            <div className="my-form">
                <Form horizontal onSubmit={this.props.handleSubmit}>

                    <FormGroup controlId="formHorizontalEmail">
                        <Col smOffset={4} sm={5}><h4>Create Article:</h4><br /></Col>
                        <Col componentClass={ControlLabel} sm={4}>
                            Title:</Col>
                        <Col sm={5}>
                            <FormControl type="text" placeholder="Title"
                                value={this.props.title}
                                onChange={this.props.handleTitle} />
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalPassword">
                        <Col componentClass={ControlLabel} sm={4}>
                            Copy:</Col>
                        <Col sm={5}>
                            <FormControl type="text" placeholder="Copy"
                                value={this.props.message}
                                onChange={this.props.handleMsg} />
                        </Col>
                    </FormGroup>

                    <FormGroup>
                        <Col smOffset={4} sm={9}>
                            <Button type="submit">Save to IPFS</Button>
                        </Col>
                    </FormGroup>
                </Form>

                <Col smOffset={4} sm={5}>
                    <br />
                    {this.props.list.length > 0 &&
                        <div className="list">
                            {
                                this.props.list.map(item => (<NavLink key={item} className="nav-link" to={`ipfs/${item}`}>{item}</NavLink>))
                            }
                        </div>
                    }
                </Col>
            </div >
        )
    }
}

Form.propTypes = {

}

export default MyForm
