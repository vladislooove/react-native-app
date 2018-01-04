import React, { Component } from 'react';
import { connect } from 'react-redux';

import { logIn } from '../actions/';

import { Text, Button } from 'react-native';
import { Container, 
         Header, 
         Content, 
         Form, 
         Item, 
         Input, 
         Label,
         Body } from 'native-base';


class Login extends Component {
    constructor(props) {
        super(props);
        this.formData = {
            email: null,
            password: null
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();

        if(!this.props.isLoginned.token) {
            this.props.logIn(
                this.formData.email,
                this.formData.password
            ); 
        }
    }

    render() {
        return (
            <Container style={{paddingTop: 24}}>
                <Header backgroundColor='#841584'>
                    <Body>
                        <Text style={{ marginLeft: 'auto', marginRight: 'auto', color: '#fff' }}>
                            SIGN UP
                        </Text>
                    </Body>
                </Header>
                <Content style={{ padding: 10 }}>
                    <Item floatingLabel>
                        <Label>Email</Label>
                        <Input onChange={(event, value) => { this.formData.email = value }} 
                               keyboardType='email-address'
                        />
                    </Item>
                    <Item floatingLabel style={{marginBottom: 20}}>
                        <Label>Password</Label>
                        <Input onChange={(event, value) => { this.formData.password = value }} />
                    </Item>
                    <Button
                        onPress={this.handleSubmit}
                        title="Submit"
                        color="#841584"
                    />
                </Content>
            </Container>
            );
    }
}

const mapStateToProps = state => {
    return {
        isLoginned: state.auth,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logIn: (email, password) => {
            dispatch(logIn(email, password))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Login);
