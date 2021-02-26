import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
    state = {
        userName: '',
        userEmail: '',
        userPassword: '',
        userAccept: false,
        message: '',

        errors: {
            userName: false,
            userEmail: false,
            userPassword: false,
            userAccept: false,
        }
    };

    messages = {
        username_incorrect: 'Username must be longer than 10 characters and cannot contain spacebar',
        useremail_incorrect: 'There is no @ char in the email',
        userpassword_incorrect: 'Password must contain 8 characters at least',
        useraccept_incorrect: 'Consent is not confirmed'
    };

    handleChange = (e) => {
        const name = e.target.name;
        const type = e.target.type; 

        if(type === "text" || type === "password" || type === "email") {
            const value = e.target.value;
            this.setState({
                [name]: value
            });
        } else if(type === "checkbox") {
            const checked = e.target.checked;
            this.setState({
                [name]: checked
            });
        };
    };

    handleSubmit = (e) => { 
        e.preventDefault();

        const validation = this.formValidation();

        if(validation.correctForm) {
            this.setState({
                    userName: '',
                    userEmail: '',
                    userPassword: '',
                    userAccept: false,
                    message: 'Form has been sent',
            
                    errors: {
                        userName: false,
                        userEmail: false,
                        userPassword: false,
                        userAccept: false,
                    }
            })
        } else {
            this.setState({
                message: '',

                errors: {
                    userName: !validation.userName,
                    userEmail: !validation.userEmail,
                    userPassword: !validation.userPassword,
                    userAccept: !validation.userAccept,
                }
            })
        };
    };

    formValidation = () => {
        let userName = false;
        let userEmail = false;
        let userPassword = false;
        let userAccept = false;
        let correctForm = false;

        if(this.state.userName.length > 10 && this.state.userName.includes(' ') === false) {
            userName = true;
        }; 

        if(this.state.userEmail.includes('@') === true) {
            userEmail = true;
        }; 

        if(this.state.userPassword.length >= 8) {
            userPassword = true;
        }; 

        if(this.state.userAccept) {
            userAccept = true;
        };

        if(userName && userEmail && userPassword && userAccept === true) {
            correctForm = true;
        };

        return({
            correctForm,
            userName,
            userEmail,
            userPassword,
            userAccept,
        })
    };

    componentDidUpdate() {
        if(this.state.message !== '') {
            setTimeout(() => {
                this.setState({
                    message: ''
                })
            }, 3000)
        };
    };

    render() { 
        return ( 
            <React.Fragment>
                <form onSubmit={this.handleSubmit} noValidate>
                    <label htmlFor="user"> 
                    Your name:
                         <input 
                         type="text" 
                         id="user" 
                         name="userName" 
                         value={this.state.userName} 
                         onChange={this.handleChange}/>
                         {this.state.errors.userName && <span>
                         {this.messages.username_incorrect}</span>}
                    </label>
                    <label htmlFor="email"> 
                    Your e-mail:
                         <input 
                         type="email" 
                         id="email" 
                         name="userEmail" 
                         value={this.state.userEmail} 
                         onChange={this.handleChange}/>
                         {this.state.errors.userEmail && <span>
                         {this.messages.useremail_incorrect}</span>}
                    </label>
                    <label htmlFor="password"> 
                    Your password:
                         <input 
                         type="password" 
                         id="password" 
                         name="userPassword" 
                         value={this.state.userPassword} 
                         onChange={this.handleChange}/>
                         {this.state.errors.userPassword && <span>
                         {this.messages.userpassword_incorrect}</span>}
                    </label>
                    <label htmlFor="accept">
                        <input 
                        type="checkbox" 
                        id="accept"
                        name="userAccept"
                        checked={this.state.userAccept}
                        onChange={this.handleChange}/>
                        I consent to send form
                    </label>
                        {this.state.errors.userAccept && <span>
                        {this.messages.useraccept_incorrect}</span>}
                    <button>Sign up</button>
                </form>
                {this.state.message && <h3>{this.state.message}</h3>}
            </React.Fragment>
        );
    }
}
 
export default Form;
