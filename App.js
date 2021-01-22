import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs'
import WriteRecepieScreen from './screens/WriteRecepieScreen'
import ReadRecepieScreen from './screens/ReadRecepieScreen'

export default class App extends React.Component {
  render(){
    return(
      <AppContainer />
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  WriteRecepie: WriteRecepieScreen,
  ReadRecepie: ReadRecepieScreen
},
{
  defaultNavigationOptions: ({navigation})=>({
    tabBarIcon: ()=>{
      const routeName = navigation.state.routeName;
      if(routeName === "WriteRecepie"){
        return(
          <Image
          source={require("./assets/write.png")}
          style={{width:40, height:40}}
        />
        )

      }
      else if(routeName === "ReadRecepie"){
        return(
          <Image
          source={require("./assets/read.png")}
          style={{width:40, height:40}}
        />)

      }
    }
  })
})

const SwitchNavigator = createSwitchNavigator({
  TabNavigator : TabNavigator
})

const AppContainer = createAppContainer(SwitchNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
