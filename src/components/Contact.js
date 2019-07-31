


import React, { Component } from 'react';
import $ from 'jquery';
import Recaptcha from 'react-recaptcha';
import { Form } from 'semantic-ui-react'


export default class Contact extends Component {
    state = {
        inputEmail: '',
        inputMessage: '',
        inputFirstName: '',
        inputLastName: '',
        isCaptchaValid: false,
        isErrorShown: false,
        isFormValid: false
    }

    handleInput = event => {
        if (event.target.value.length > 0 && event.target.name !== 'inputEmail') {
            this.setState({
                [event.target.name]: event.target.value
            })
        }
        if (event.target.name === 'inputEmail') {
            const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            if (reg.test(String(event.target.value).toLowerCase())) {
                this.setState({
                    [event.target.name]: event.target.value
                })
            }
        }
    }

    handleCheckbox = event => {
        this.setState({
            [event.target.name]: event.target.checked
        })
    }

    onCaptchaLoad = () => {
        console.log('Captcha loaded')
    }

    onCaptchaVerify = (response) => {
        this.setState({
            isCaptchaValid: true
        })
    }

    handleFormSubmit = event => {
        event.preventDefault()

        if (this.state.inputEmail.length > 0 && this.state.inputFirstName.length > 0 && this.state.inputMessage.length > 0 && this.state.isCaptchaValid) {
            this.setState({
                isErrorShown: false,
                isFormValid: true
            })

            $.ajax({
                data: this.state,
                type: 'POST',
                url: 'mailer/mail.php',
                success: function (data) {
                    console.info(data)
                },
                error: function (xhr, status, err) {
                    console.error(status, err.toString())
                }
            })

            this.setState({
                inputEmail: '',
                inputMessage: '',
                inputFirstName: '',
                inputLastName: '',
                isCaptchaValid: false,
                isErrorShown: false,
                isFormValid: false
            })
        } else {

            this.setState({
                isErrorShown: true
            })
        }
    }

    render() {
        return (
            <Form action="">
                <Form.Group widths='equal'>
                    <Form.Input fluid label='First Name' name="inputFirstName" id="inputFirstName" onChange={this.handleInput} placeholder='First Name' />
                    <Form.Input fluid label='Last Name' name="inputLastName" id="inputLastName" onChange={this.handleInput} placeholder='Last Name' />
                </Form.Group>
                <Form.Input fluid label='Email Address' name="inputEmail" id="inputEmail" onChange={this.handleInput} placeholder='Email Address' />
                <Form.TextArea label='Message' name="inputMessage" id="inputMessage" onChange={this.handleInput} placeholder='' />
                <fieldset>
                    <Recaptcha
                        onloadCallback={this.onCaptchaLoad}
                        sitekey="6LcyMLAUAAAAANBdfngb-_Nyr8Re8F40AepC_IrR"
                        render="explicit"
                        verifyCallback={this.onCaptchaVerify}
                    />
                </fieldset>

                <div id="contactMessage" >
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
                </div>
                <Form.Button onClick={this.handleFormSubmit} className="btn">Submit</Form.Button>
            </Form>
        )
    }
}