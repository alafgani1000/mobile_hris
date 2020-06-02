import React, { Component } from "react";
import { StyleSheet,View, Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Body, Item, Input, Button } from "native-base";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export function Home({ navigation }) {
    return (          
        <Container style={styles.centerContent}>
            <Image style={styles.profilImage} source={require('../assets/splash.png')} />
            <Body style={styles.profileDesc}>
                <Text style={styles.profileTitle}>
                    1545-88888-666
                </Text>
                <Text style={styles.profileTitle}>
                    Gea Munandar
                </Text>
            </Body>
        </Container>  
    );
}

const styles = StyleSheet.create({
    centerContent : {
        alignItems: 'center',
        flex: 1,
        backgroundColor:'#f5f5f5'
    },
    loginButton : {
        marginTop: 10
    },
    profilImage : {
        marginTop:30,
        height: 120,
        width: 120,
        borderWidth: 3,
        borderRadius: 40,
    },
    profileDesc : {
        marginTop:10,
    },
    profileTitle : {
        fontWeight: 'bold',

    }
});

  