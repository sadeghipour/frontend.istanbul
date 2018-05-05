import React, {Component} from 'react';
import {
    Text, TouchableOpacity,
    View,

} from 'react-native';




type Props = {};
export default class AboutPage extends Component<Props> {


    goToHome = () =>{
        this.props.navigation.navigate('Home', { name: 'Welcome Back Home! ' + Math.ceil(Math.random()*10000) })
    }

    render(){
        return [
            <View key={1} style={{flex:1,backgroundColor:'blue'}}>

                <Text>{
                    (this.props.navigation && this.props.navigation.state && this.props.navigation.state.params && this.props.navigation.state.params.name)?

                        this.props.navigation.state.params.name
                        :
                        'Welcome About!'
                } </Text>

                <TouchableOpacity onPress={this.goToHome}>
                    <Text>
                        AnaSayfa
                    </Text>
                </TouchableOpacity>
            </View>
        ]
    }
}