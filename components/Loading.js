import React, { Component } from 'react';
import { View, StyleSheet, Text, Animated } from 'react-native';

export default class Loading extends Component {

    state = {
        animation: new Animated.Value(0)
    }

    componentDidMount(){
        Animated.spring(
            this.state.animation,
            {
                toValue: 1,
                speed: 2000
            }
        ).start();

        setTimeout(() => {
            Animated.spring(
                this.state.animation,
                {
                    toValue: 0,
                    speed: 2000
                }
            ).start();
        }, 2000);
    }

    render(){

        const animationStyle = {
            opacity: this.state.animation
        }

        return (
            <View style={style.container}>
                <Animated.View style={[animationStyle]}>
                    <Text style={{color:"#ff4652", fontSize: 30, fontWeight:"bold"}}>Lotto</Text>
                </Animated.View>
            </View>
        );
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:"#fff"
    }
})
