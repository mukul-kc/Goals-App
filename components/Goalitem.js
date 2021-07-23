import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
const GoalItem = ({title, idx, onDelete}) => {
    return <TouchableOpacity onPress={() => onDelete(idx)}><View style={styles.listItem}>
        <Text> {title} </Text>
    </View>
</TouchableOpacity>
}

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        margin: 10,
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1
    }
})

export default GoalItem;