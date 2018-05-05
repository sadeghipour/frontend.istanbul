import React, {Component} from 'react';
import {
    Text, TouchableOpacity,
    View
} from 'react-native';
type Props = {};
export default class HomePage extends Component<Props> {


    constructor(props){
        super(props);
    }

    // TODO: try to define your functions as ES6 standard! not like below
    _goToAbout() {/*....*/}

    goToAbout = () =>{
        this.props.navigation.navigate('About', { name: 'FrontEnd.İstanbul' })
    }

    render(){
        console.log(this.props);
        return [
            <View key={1} style={{flex:1,backgroundColor:'red'}}>
                <Text>{
                (this.props.navigation && this.props.navigation.state && this.props.navigation.state.params && this.props.navigation.state.params.name)?

                    this.props.navigation.state.params.name
                    :
                    'Welcome Home!'
            } </Text>


                <TouchableOpacity onPress={this.goToAbout}>
                    <Text>
                        Hakkında
                    </Text>
                </TouchableOpacity>

            </View>
        ]
    }
}