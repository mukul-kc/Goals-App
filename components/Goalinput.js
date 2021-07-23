import React, { useState } from 'react';

import { TextInput, StyleSheet, View, Button, Modal } from 'react-native';

const Goalinput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const inputHandler = (text) => {
        setEnteredGoal(text);
    }

    const addGoalHandler = () => {
        props.addGoal(enteredGoal);
        setEnteredGoal('');
    }
    
    const cancelHandler = () => {
        setEnteredGoal('');
        props.setModalVis(false);
    }

    return <Modal visible={props.isModalVis} animationType='slide'>
        <View style={styles.inputContainer}>
            <TextInput placeholder="Course Goal"
                style={styles.input}
                value={enteredGoal}
                onChangeText={inputHandler} />
            <View style={styles.buttonContainer}>
            <View style = {styles.button}>
            <Button title="Add" onPress={addGoalHandler} />
            </View>
            <View style = {styles.button}>
            <Button title="Cancel" color="red" onPress = {cancelHandler}/>
            </View>
            </View>
        </View>
    </Modal>
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: { borderBottomColor: 'black', width: '80%', borderBottomWidth: 1, margin: 10 },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '60%'
    },
    button: {
        width: '40%',
    }
});

export default Goalinput;