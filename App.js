import React, { useState } from 'react';
import {
  FlatList,
  StyleSheet,
  View,
  Button
} from 'react-native';

import GoalItem from './components/Goalitem';
import Goalinput from './components/Goalinput';

const App = () => {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isModalVis, setModalVis] = useState(false);

  
  const addGoal = (enteredGoal) => {
    setCourseGoals(currentGoals => [...currentGoals, {id: Math.random().toString(), value: enteredGoal}]);
    setModalVis(false);
  }

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId)
    });
  }

  return (
    <View style={styles.screen}>
      <Button title="Add a new goal!" onPress={() => setModalVis(true)}/>
      <Goalinput addGoal = {addGoal} isModalVis = {isModalVis} setModalVis = {setModalVis}/>        
      <FlatList 
        keyExtractor = {(item,index) => item.id}
        data = {courseGoals}
        renderItem = {(itemData) => <GoalItem title={itemData.item.value} idx = {itemData.item.id} onDelete = {removeGoalHandler}/>}
      /> 
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 30
  },
  

});

export default App;
