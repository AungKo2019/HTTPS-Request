import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Button} from 'react-native';
import React from 'react'

export default class App extends React.Component {
  state={
    data:{'activity':'Loading...'}
  }

  getJsonData=()=>{
    fetch('https://www.boredapi.com/api/activity/',{method:'GET'})
      .then((response)=>response.json())
      .then((responseJson)=>{
        console.log(responseJson);
        this.setState({
          data:responseJson
        })
      })
      .catch((error)=>{
        console.error(error)
      });
  }

  componentDidMount=()=>{
    this.getJsonData();
  }
  
  render(){
  return (
    <View style={styles.container}>
      <View>
        <Text style={{margin:10,fontSize:16}}>Suggestion</Text>
        <Text style={{margin:10,fontSize:22}} selectable={true}>{this.state.data['activity']}</Text>
        <Text style={{margin:10,fontSize:16}} selectable={true}>{'People: '+this.state.data['participants']}</Text>
        <Text style={{margin:10,fontSize:16}} selectable={true}>{'Price: '+this.state.data['price']}</Text>
      </View>
      <View style={{position:'absolute',bottom:20,width:'100%'}}>
        <Button title='Press Me' onPress={this.getJsonData}/>
      </View>
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    margin:20,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
});
