import React, { Component } from "react";
import { StyleSheet } from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Body, Item, Input, Button } from "native-base";
import axios from 'axios';

export default class CardItemBordered extends Component {
  render() {
      return (           
          <Container style={styles.centerContent} >
            <Content padder>
              <Card>
                <CardItem header bordered>
                  <Text>NativeBase</Text>
                </CardItem>
                <CardItem bordered>
                  <Body>
                      <Item>
                        <Input placeholder="Username" />
                      </Item>
                      <Item>
                        <Input placeholder="Password" />
                      </Item>
                      <Button full info style={styles.loginButton}>
                          <Text>Login</Text>
                      </Button>
                  </Body>
                </CardItem>
                <CardItem footer bordered>
                  <Text>GeekyAnts</Text>
                </CardItem>
              </Card>
            </Content>
          </Container>  
    );
  }
}

const styles = StyleSheet.create({
  centerContent : {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  loginButton : {
    marginTop: 10
  }
});