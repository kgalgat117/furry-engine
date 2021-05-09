import React from 'react'
import { Button as RNButton } from 'react-native-paper';
import { StyleSheet, View, TextInput } from 'react-native';
import { COLORS } from '../constant';

export function Button({ mode, buttonStyle, text, loading, onPress, ...props }) {

    const styles = StyleSheet.create({
        button: {
            margin: 10,
            borderRadius: 20,
            ...buttonStyle,
        },
        container: {

        }
    })

    return (
        <View style={styles.container}>
            <RNButton color={COLORS.PRIMARY} loading={loading} style={styles.button} mode={mode} onPress={onPress}>
                {text}
            </RNButton>
        </View>
    )
}

