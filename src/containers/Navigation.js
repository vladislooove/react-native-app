import React from 'react';
import { connect } from 'react-redux';

import { TabNavigator, StackNavigator } from 'react-navigation';

import { View, ActivityIndicator } from 'react-native';

import Login from './Login';
import Home from './Home';

const StackRoutes = StackNavigator({
    Login: {
        screen: Login,
        path: '/login',
        navigationOptions: {
            header: null,
        }
    },
    Home: {
        screen: Home,
        path: '/',
        navigationOptions: {
            header: null
        }
    }
});

class Navigation extends React.Component {
    render() {
        if(this.props.isLoading) {
            return (
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <ActivityIndicator size="large" color="#841584" />
                </View>
            )
        } else {
            return (
                <StackRoutes />
            )
        }
    }
}

const mapStateToProps = state => {
    return {
        isLoginned: state.auth,
        isLoading: state.loading
    }
}

export default connect(
    mapStateToProps,
    null
)(Navigation);
