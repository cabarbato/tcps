


import React from 'react';
import { ReCaptcha } from 'react-recaptcha-google';
import $ from 'jquery';
import { Form } from 'semantic-ui-react';


export default class Contact extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.onLoadRecaptcha = this.onLoadRecaptcha.bind(this);
        this.verifyCallback = this.verifyCallback.bind(this);
        this.state = {
            firstName: 'Colleen',
            lastName: 'Barbato',
            email: 'test@test.com',
            message: 'Hi!',
            isCaptchaValid: true,
            isErrorShown: false,
            isFormValid: false
        }
    }
    componentDidMount() {
        if (this.contactReCaptcha) {
            this.contactReCaptcha.reset();
            this.contactReCaptcha.execute();
        }
    }
    onLoadRecaptcha() {
        if (this.contactReCaptcha) {
            this.contactReCaptcha.reset();
            this.contactReCaptcha.execute();
        }
    }
    verifyCallback() {
        this.setState({
            isCaptchaValid: true,
        })
    }

    handleFormSubmit = e => {
        e.preventDefault()

        if (this.state.email.length > 0 && this.state.firstName.length > 0 && this.state.lastName.length > 0 && this.state.message.length > 0 && this.state.isCaptchaValid) {
            this.setState({
                isErrorShown: false,
                isFormValid: true
            })

            $.ajax({
                data: this.state,
                type: 'POST',
                url: 'apis/contact/index.php',
                success: function (data, status, xhr) {
                    console.info(data, status, xhr)
                },
                error: function (xhr, status, err) {
                    console.log('error during ajax')
                    console.error(xhr, status, err.toString())
                }
            })

            this.setState({
                firstName: '',
                lastName: '',
                email: '',
                message: '',
                isCaptchaValid: false,
                isErrorShown: false,
                isFormValid: false
            })
        } else {
            this.setState({
                isErrorShown: true
            })
            console.log('error during verification')
        }
    }

    render() {
        return (
            <Form size="tiny" key="tiny" action="">
                <Form.Group widths='equal'>
                    <Form.Input fluid label='First Name' name="firstName" id="firstName"
                        onChange={e => this.setState({ firstName: e.target.value })} />
                    <Form.Input fluid label='Last Name' name="lastName" id="lastName"
                        onChange={e => this.setState({ lastName: e.target.value })} />
                </Form.Group>
                <Form.Input fluid label='Email Address' name="email" id="email"
                    onChange={e => this.setState({ email: e.target.value })} />
                <Form.TextArea label='Message' name="message" id="message"
                    onChange={e => this.setState({ message: e.target.value })} />
                <fieldset>
                    <ReCaptcha
                        sitekey="6LcyMLAUAAAAANBdfngb-_Nyr8Re8F40AepC_IrR"
                        ref={(el) => { this.contactReCaptcha = el; }}
                        size="invisible"
                        render="explicit"
                        onloadCallback={this.onLoadRecaptcha}
                        verifyCallback={this.verifyCallback}
                    />
                </fieldset>
                <div id="contactSubmit">
                    <Form.Button onClick={this.handleFormSubmit} className="btn">Submit</Form.Button>
                    {<div id="contactMessage" >
                        {this.state.isFormSubmitted && (
                            <fieldset>
                                <p>Thank you, your message has been submitted.</p>
                            </fieldset>
                        )}

                        {this.state.isErrorShown && (
                            <fieldset>
                                <p>Please fill out all the required fields.</p>
                            </fieldset>
                        )}
                    </div>}
                </div>
            </Form>
        )
    }
}