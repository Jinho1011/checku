import * as React from 'react';
import {View, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import GradeContainer from '../screens/Grade/GradeContainer';
import GraduateContainer from '../screens/Graduate/GraduateContainer';
import CourseContainer from '../screens/Course/CourseContainer';
import {IconContainer, IconText} from './TabIcon';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          let tabName;
          let iconColor = focused ? '#00CA64' : '#F1F6F4';
          let iconSize = 24;

          if (route.name === 'grade') {
            iconName = 'alphabetical-variant'; // MaterialCommunityIcons
            tabName = '성적';
          } else if (route.name === 'graduate') {
            iconName = 'school'; // FontAwesome5
            tabName = '졸업';
          } else if (route.name === 'course') {
            iconName = 'book'; // MaterialCommunityIcons
            tabName = '수강신청';
          }

          return (
            <IconContainer>
              <MaterialCommunityIcons
                name={iconName}
                size={iconSize}
                color={iconColor}
              />
              <IconText>{tabName}</IconText>
            </IconContainer>
          );
        },
      })}
      tabBarOptions={{
        style: {
          height: 80,
        },
        showLabel: false,
      }}>
      <Tab.Screen name="grade" component={GradeContainer} />
      <Tab.Screen name="graduate" component={GraduateContainer} />
      <Tab.Screen name="course" component={CourseContainer} />
    </Tab.Navigator>
  );
}
