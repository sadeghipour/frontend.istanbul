/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Text,
    View
} from 'react-native';

import {createStackNavigator} from 'react-navigation';
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";


type Props = {};


Routes = {

    Home: {
        screen: HomePage,
    },

    About: {
        screen: AboutPage
    }
};

export default class App extends Component<Props> {

    initialRoute = {
        initialRouteName: null,
    };

    constructor(props){
        super(props);
    }

    componentDidMount(){
        setTimeout(() => {
            this.initialRoute.initialRouteName = "Home";
            this.forceUpdate();
        }, 3000);
    }

    render() {
        return (
            <View style={{flex:1,backgroundColor:'gray'}}>
                {
                    this.initialRoute.initialRouteName === null ?

                        <View style={{top:100}}>
                            <Text>
                                Yükleniyor!!!
                            </Text>

                        </View>
                        :
                        this.createRootStack()
                }

            </View>
        );
    }

    createRootStack = () => {

        return React.createElement(createStackNavigator(Routes, this.initialRoute));
    };


};
