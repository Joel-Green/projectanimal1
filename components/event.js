import React, { Component } from 'react'
import { Text, View,StyleSheet,TouchableOpacity } from 'react-native'

import { View, Text, Image } from 'react-native'
import { Card, ListItem, Button } from 'react-native-elements'
const users = [
    {
       name: 'brynn',
       avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
    }
   ]
   
export class event extends Component {
    render() {
        return (
            <View>
             <View style={styles.header}>
                    <TouchableOpacity style={styles.hamburger} onPress={() => this.props.navigation.toggleDrawer()}>
                        <View style={styles.hamburgerOdd} ></View>
                        <View style={styles.hamburgerEven} ></View>
                        <View style={styles.hamburgerOdd} ></View>
                        <View style={styles.hamburgerEvenMid} ></View>
                        <View style={styles.hamburgerOdd} ></View>
                        <View style={styles.hamburgerEven} ></View>
                        <View style={styles.hamburgerOdd} ></View>
                    </TouchableOpacity >
                    <View style={styles.logoMain}>
                        <Text style={styles.logoText}>
                            TestAPP
                        </Text>
                    </View>
                </View>
             
                <Text> Event Component </Text>
            </View>
        )
    }
}

   // implemented without image with header
   <Card title="CARD WITH DIVIDER">
     {
       users.map((u, i) => {
         return (
           <View key={i} style={styles.user}>
             <Image
               style={styles.image}
               resizeMode="cover"
               source={{ uri: u.avatar }}
             />
             <Text style={styles.name}>{u.name}</Text>
           </View>
         );
       })
     }
   </Card>
   
   // implemented without image without header, using ListItem component
    <Card containerStyle={{padding: 0}} >
     {
       users.map((u, i) => {
         return (
           <ListItem
             key={i}
             roundAvatar
             title={u.name}
             avatar={{uri:u.avatar}}
           />
         );
       })
     }
   </Card>
   
   
   // implemented with Text and Button as children
   <Card
     title='HELLO WORLD'
     image={require('../images/pic2.jpg')}>
     <Text style={{marginBottom: 10}}>
       The idea with React Native Elements is more about component structure than actual design.
     </Text>
     <Button
       icon={{name: 'code'}}
       backgroundColor='#03A9F4'
       buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
       title='VIEW NOW' />
   </Card>
const styles = StyleSheet.create({
    logo: {
        height: 40,
        width: 60,
        marginRight:-15,
    },
    logoText: {
        marginRight: 10,
        //   width:"75%",
        color: "#FFF",
        textAlign: 'right',
        flex: 10,
        fontFamily: 'Montserrat-Bold',
        fontSize: 18,
    },
    header: {
        height: 40,
        marginBottom: 5,
        marginTop: 10,
        backgroundColor:"lightgrey",
        flexDirection: 'row',
        alignItems: 'center',
    },
    logoMain: {
        flexDirection: 'row',
        flex: 12,
        marginRight: 15,
        // backgroundColor:'#FFF'
    },
    hamburger: {
        // width:"25%",
        flex: 1,
        color: '#FFF',
        margin: 5,
        marginLeft: 15,
        marginRight: 10,
        flexDirection: 'column',
        justifyContent: 'center'
        // right:10
    },
    hamburgerOdd: {
        flex: 3
    },
    hamburgerEven: {
        flex: 2,
        backgroundColor: '#FFF'
    },
    hamburgerEvenMid: {
        flex: 2,
        width: '100%',
        // marginLeft: '',
        backgroundColor: '#FFF'
    },
})

export default event
