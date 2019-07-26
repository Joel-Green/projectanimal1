import React, { Component } from 'react'
import { Text, View ,StyleSheet,TouchableOpacity , ScrollView,Image} from 'react-native'

export class adoptUs extends Component {
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
                    </View>
                    <ScrollView>
                    <View style={styles.Tile}>
             
             
             
             <View>
           <Image source={require('../assets/bulldog.jpg')} style={styles.TileImg}/>
           </View>
           <Text h2style={styles.TileHead}>Bulldog:Richie</Text>
           <Text style={{color: '#000' , fontSize:25, alignSelf:"center", marginTop:20}}
           Breed:American Bulldog Mix
           Gender:Male
           Color:White
           Age:6 years old Adult
           Size :(when grown)Large 61-100 lbs (28-45 kg)
           </Text>
           </View>
           <View style={styles.Tile}>
             
             
             
             <View>
           <Image source={require('../assets/d.jpg')} style={styles.TileImg}/>
           </View>
           <Text style={styles.TileHead}>Hello There Im The Google Earth</Text>
           </View>

           <View style={styles.Tile}>
             
             
             
             <View>
           <Image source={require('../assets/d.jpg')} style={styles.TileImg}/>
           </View>
           <Text style={styles.TileHead}>Hello There Im The Google Earth</Text>
           </View>
           <View style={styles.Tile}>
             
             
             
             <View>
           <Image source={require('../assets/d.jpg')} style={styles.TileImg}/>
           </View>
           <Text style={styles.TileHead}>Hello There Im The Google Earth</Text>
           </View>
            

                    </ScrollView>

                <Text>Adopt Component </Text>
            </View>
        )
    }
}


const styles = StyleSheet.create({
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
    width:"8%",
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
logo: {
    height: 40,
    width: 60,
    marginRight:-15,
},    
Tile: {
height:400,
width:'90%',
backgroundColor:'black',
alignSelf:'center',
marginTop:'5%',
borderRadius:20,
backgroundColor:'#0d162e',
elevation:15
},

TileImg: {
height:'90%',
width:'100%',
resizeMode:'cover',
borderRadius:20,

},
TileHead: {
color:'white',
fontFamily:'Montserrat-Bold',
fontSize:20,
textAlign:'center',
position:'relative',
top:'-2%'
},
TileText: {
color:'white',
fontFamily:'Montserrat-Regular',
textAlign:'center',
top:'-1%'
},
inner:{
    height:50,
},
img:{
    height:80,
},
container:{
    height:100,
    borderRadius:20,
    borderColor:"#fff",
    borderWidth:1,
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
})
export default adoptUs
