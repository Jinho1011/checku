import * as React from 'react';
import {Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import GradeContainer from '../screens/Grade/GradeContainer';
import GraduateContainer from '../screens/Graduate/GraduateContainer';
import CourseContainer from '../screens/Course/CourseContainer';

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

          const Icon = () => {
            if (route.name === 'grade') {
              iconName = 'alphabetical-variant'; // MaterialCommunityIcons
              tabName = '성적';
              return (
                <MaterialCommunityIcons
                  name={iconName}
                  size={iconSize}
                  color={iconColor}
                />
              );
            } else if (route.name === 'graduate') {
              iconName = 'graduation-cap'; // FontAwesome5
              tabName = '졸업';
              return (
                <FontAwesome5
                  name={iconName}
                  size={iconSize}
                  color={iconColor}
                />
              );
            } else if (route.name === 'course') {
              iconName = 'book'; // MaterialCommunityIcons
              tabName = '수강신청';
              return (
                <MaterialCommunityIcons
                  name={iconName}
                  size={iconSize}
                  color={iconColor}
                />
              );
            }
          };

          return (
            <>
              <Icon />
              <Text>{tabName}</Text>
            </>
          );
        },
      })}
      tabBarOptions={{
        showLabel: false,
      }}>
      <Tab.Screen name="grade" component={GradeContainer} />
      <Tab.Screen name="graduate" component={GraduateContainer} />
      <Tab.Screen name="course" component={CourseContainer} />
    </Tab.Navigator>
  );
}
