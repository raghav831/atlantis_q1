import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AnimationScreen from './src/Animation/Animation.Screen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator headerMode={'none'}>
          <Stack.Screen
            name="AnimationScreen"
            options={{
              title: 'Animation',
              gestureEnabled: true,
              gestureDirection: 'horizontal',
              headerStyle: {
                backgroundColor: '#3b5998',
              },
              headerTintColor: '#fff',
            }}
            component={AnimationScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
