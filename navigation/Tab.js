import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import GradeContainer from '../screens/Grade/GradeContainer';
import GraduateContainer from '../screens/Graduate/GraduateContainer';
import CourseContainer from '../screens/Course/CourseContainer';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="grade" component={GradeContainer} />
      <Tab.Screen name="graduate" component={GraduateContainer} />
      <Tab.Screen name="course" component={CourseContainer} />
    </Tab.Navigator>
  );
}
