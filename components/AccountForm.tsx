import { useContext } from 'react';
import { Animated, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import AccountContext, { Account } from "@/hooks/AccountContext";

export default function AccountForm() {
    const context = useContext<Account>(AccountContext);

    return (
        <Animated.View style={styles.container}>
            <Text style={styles.title}>Create Account</Text>

            <View style={styles.field}>
                <Text style={styles.label}>Name</Text>
                <TextInput
                    value={context.name}
                    onChangeText={context.setName}
                    style={styles.input}
                    placeholder="Enter your name"
                />
            </View>

            <TouchableOpacity style={styles.button} onPress={() => {context.setAccountReady(true)}}>
                <Text style={styles.buttonText}>Create Account</Text>
            </TouchableOpacity>
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#fff',
        margin: 20,
        borderRadius: 10,
        elevation: 3,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        color: '#333',
    },
    field: {
        marginBottom: 15,
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
        color: '#333',
    },
    input: {
        height: 45,
        borderColor: '#aaa',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        backgroundColor: '#f9f9f9',
    },
    button: {
        backgroundColor: '#007bff',
        paddingVertical: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
