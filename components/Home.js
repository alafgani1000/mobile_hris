import React, { Component } from "react";
import { StyleSheet,View, Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Body, Item, Input, Button } from "native-base";
import { Col, Row, Grid } from 'react-native-easy-grid';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';

export function Home({ navigation }) {
    let [fontsLoaded] = useFonts({
        'roboto': require('../assets/fonts/Roboto-Regular.ttf'),
    });

    
    return (          
        <Container style={styles.centerContent}>
            <Grid>
                <Row size={20} style={styles.rowProfileImage}>
                    <Image style={styles.profilImage} source={require('../assets/img/profile.jfif')} />
                </Row>
                <Row size={12} style={styles.rowProfileText}>
                    <Col style={styles.profileDesc1}>
                        <Text style={styles.profileTitle}>
                            88888 | O
                        </Text>
                        <Text style={styles.profileTitle}>
                            Gea Munandar
                        </Text>
                        <Text style={styles.profileTitle}>
                            Information Technology
                        </Text>
                    </Col>
                </Row>
                <Row size={68} style={styles.rowProfileMenu}>     
                    <View style={styles.menuRow}>     
                        <View style={styles.colMenu}>
                            <Image style={styles.menuImage} source={require('../assets/img/ja.png')} />
                        </View>
                        <View style={styles.colMenu}>
                            
                        </View>
                        <View style={styles.colMenu}>
                            
                        </View>
                        <View style={styles.colMenu}>
                            
                        </View>
                    </View>
                </Row>
            </Grid>
        </Container>  
    );
}

const styles = StyleSheet.create({
    centerContent : {
        flex: 1,
        backgroundColor:'#004445',
        fontFamily:'roboto'
    },
    loginButton : {
        marginTop: 10
    },
    profilImage : {
        height: 120,
        width: 120,
        borderWidth: 1,
        borderRadius: 40,
        borderColor: '#f0eded',
        alignItems: 'center',
        marginTop: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    profileDesc1 : {
        marginBottom: 10,
        marginTop: 5,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: '#021C1E',
        padding: 10, 
        borderRadius: 10,
        textAlign: 'center',

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5, 
    },
    profileDesc2 : {
        marginBottom: 10,
        marginTop: 10,
        marginLeft: 1,
        marginRight: 10,
        backgroundColor: '#fff',        
        padding: 10, 
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
    },
    profileTitle : {
        fontWeight: 'bold',
        fontSize: 10,
        color: '#fff',
        textShadowColor: '#000',
        textShadowRadius: 3,
        textShadowOffset: 3,
    },
    rowProfileImage : {
        backgroundColor: '#004445',
        justifyContent: 'center',
       
    },
    rowProfileText : {
        backgroundColor: '#004445',
        justifyContent: 'center',       
        paddingTop: 0,   
        marginTop: 20,
    },
    rowProfileMenu : {
        marginTop: 10,
        backgroundColor: '#e9f7ed',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,   
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5, 
    },
    menuRow : {
        marginTop: 20,
        alignItems: 'stretch',
        flex: 1,
        flexDirection: 'column'
    },
    colMenu : {
        backgroundColor: '#FFF',
        height: 80,
        marginTop: 5,
        marginBottom: 5,
        marginRight: 20,
        marginLeft: 20,
        borderRadius: 20,
        alignItems: 'stretch',
        justifyContent: 'center'
    },
    menuImage : { 
        borderColor: '#f0eded',
        width: 60,
        height: 60,
        marginLeft: 15
    },
    gradient: {
        flex: 1,
    }
});

  