import React, { Component } from 'react';
import { View, Text, StyleSheet, Animated, TouchableOpacity } from 'react-native';

export default class LottoComponent extends Component {

    state = {
        numbers: false,
        animation: new Animated.Value(0)
    }

    draw = () => {

        Animated.spring(
            this.state.animation,
            {
                toValue: 0,
                speed: 100
            }
        ).start();

        let numbers = new Array();
        
        for(let i=0; i<6; i++){
            let number = Math.floor(Math.random() * 45) + 1;

            if(numbers.indexOf(number) == -1) {
                numbers.push(number);
            } else {
                i--;
            }
        }

        numbers = numbers.sort((a, b) => {
            return a - b;
        });

        setTimeout(() => {

            this.setState({
                numbers
            });

            Animated.spring(
                this.state.animation,
                {
                    toValue: 1,
                    friction: 1,
                    tension: 10
                }
            ).start();

        }, 100);

    }

    backroundSet = (number) => {
        if(number < 10) {
            return "#baed68"
        } else 
        if(number < 20){
            return "#6fdde3"
        } else
        if(number < 30){
            return "#ac7ceb"
        } else 
        if(number < 40){
            return "#eb7cac"
        } else {
            return "#858585"
        }
    }

    render(){
        const animationStyle = {
            transform: [
                {scale: this.state.animation}
            ]
        }
        return (
            <View style={style.container}>
                <View style={style.container}>
                    {
                        this.state.numbers ?
                        <Animated.View style={[{marginBottom: 50}, {transform: animationStyle.transform}]}>
                            <Text style={{color:"#aaa", fontSize:30, fontWeight:"bold", textAlign:"center", lineHeight: 32}}>Wow! This is your Numbers!</Text>
                        </Animated.View>
                        : null
                    }
                    {
                        this.state.numbers ?
                        <View style={{flexDirection:"row"}}>
                            <Animated.View style={[style.number, animationStyle, {backgroundColor: this.backroundSet(this.state.numbers[0])}]}><Text style={{color:"#fff", fontSize:18}}>{this.state.numbers[0]}</Text></Animated.View>
                            <Animated.View style={[style.number, animationStyle, {backgroundColor: this.backroundSet(this.state.numbers[1])}]}><Text style={{color:"#fff", fontSize:18}}>{this.state.numbers[1]}</Text></Animated.View>
                            <Animated.View style={[style.number, animationStyle, {backgroundColor: this.backroundSet(this.state.numbers[2])}]}><Text style={{color:"#fff", fontSize:18}}>{this.state.numbers[2]}</Text></Animated.View>
                            <Animated.View style={[style.number, animationStyle, {backgroundColor: this.backroundSet(this.state.numbers[3])}]}><Text style={{color:"#fff", fontSize:18}}>{this.state.numbers[3]}</Text></Animated.View>
                            <Animated.View style={[style.number, animationStyle, {backgroundColor: this.backroundSet(this.state.numbers[4])}]}><Text style={{color:"#fff", fontSize:18}}>{this.state.numbers[4]}</Text></Animated.View>
                            <Animated.View style={[style.number, animationStyle, {backgroundColor: this.backroundSet(this.state.numbers[5])}]}><Text style={{color:"#fff", fontSize:18}}>{this.state.numbers[5]}</Text></Animated.View>
                        </View>
                        : <Text style={{color:"#aaa", fontSize: 30, fontWeight:"bold", textAlign:"center", lineHeight: 32}}>Please press the button</Text>
                    }
                </View>
                <View style={{height:100, justifyContent: "center", alignItems: "center"}}>
                    <TouchableOpacity onPress={this.draw} style={{width:50, height:50, borderRadius:80, justifyContent:"center", alignItems: "center", backgroundColor:"#ff4652"}}>
                        <Text style={{color:"#fff"}}>PUSH</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    number: {
        flex: 1,
        width:50,
        height:50,
        backgroundColor: "#f5f5f5",
        borderRadius: 50,
        marginHorizontal: 5,
        justifyContent: "center",
        alignItems:"center"
    }
})
