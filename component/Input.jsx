import React from 'react'
import { StyleSheet, View, TextInput } from 'react-native';
import { useDispatch } from 'react-redux'
import { ActionStrings } from '../action';

export function Input({ value, fieldName, placeHolder, label, keyboardType, autoCompleteType, ...props }) {

    const dispatch = useDispatch()

    const onChange = (text) => {
        dispatch({ type: ActionStrings.USER_SIGN_UP_DATA_UPDATE, payload: { [fieldName]: text } })
    }

    return (
        <View style={styles.container}>
            <TextInput
                value={value}
                placeholder={placeHolder}
                style={styles.input}
                onChangeText={onChange}
                keyboardType={keyboardType}
                autoCompleteType={autoCompleteType ? autoCompleteType : "off"}
                {...props}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginHorizontal: 10,
        marginVertical: 10,
        borderWidth: 0.2,
        borderRadius: 20,
        padding: 8,
        backgroundColor: 'white'
    },
    container: {

    }
});
