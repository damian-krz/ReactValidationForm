import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
    state = {
        userName: '',
        userEmail: '',
        userPassword: '',
        userAccept: false
    }

    handleChange = (e) => {
        const name = e.target.name;
        const type = e.traget.type;

        console.log(type);
        const value = e.target.value;
        // const checked = e.target.checked;

        this.setState({
            [name]: value
        });
    };

    handleSubmit = (e) => { 
        e.preventDefault();

    }

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
                    </label>
                    <label htmlFor="email"> 
                    Your e-mail:
                         <input 
                         type="email" 
                         id="email" 
                         name="userEmail" 
                         value={this.state.userEmail} 
                         onChange={this.handleChange}/>
                    </label>
                    <label htmlFor="password"> 
                    Your password:
                         <input 
                         type="password" 
                         id="password" 
                         name="userPassword" 
                         value={this.state.userPassword} 
                         onChange={this.handleChange}/>
                    </label>
                    <label htmlFor="accept">
                        <input 
                        type="checkbox" 
                        id="accept"
                        name="userAccept"
                        checked={this.state.userAccept}
                        />
                        I consent to send form
                    </label>
                    <button>Sign up</button>
                </form>
            </React.Fragment>
        );
    }
}
 
export default Form;
