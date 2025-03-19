import React, { useContext } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import AccountContext, { Account, CartItem } from "@/hooks/AccountContext";

export default function Cart() {
    const context = useContext<Account>(AccountContext);

    function updateState(item: CartItem, index: number, quantityToAdd: number) {
        const newObj = { ...item };
        newObj.quantity += quantityToAdd;
        if (newObj.quantity === 0) {
            context.cart.splice(index, 1);
        } else {
            context.cart[index] = newObj;
        }
        context.setCart([...context.cart]);
    }

    return (
        <ScrollView style={styles.container}>
            {/* User Info */}
            <View style={styles.userInfoContainer}>
                <Text style={styles.userName}>{context.name ? `Hello, ${context.name}!` : "Welcome, Guest!"}</Text>
                <Text style={styles.userCartCount}>You have {context.cart.length} items in your cart</Text>
            </View>

            {/* Cart Items */}
            <View style={styles.cardsContainer}>
                {context.cart.map((item, i) => (
                    <View key={i} style={styles.card}>
                        <Image
                            source={{ uri: `https://picsum.photos/seed/${encodeURIComponent(item.item.name)}/200/200` }}
                            style={styles.cardImage}
                        />
                        <Text style={styles.cardTitle}>{item.item.name}</Text>
                        <Text style={styles.cardPrice}>${(item.item.price * item.quantity).toFixed(2)}</Text>
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity onPress={() => updateState(item, i, -1)} style={styles.button}>
                                <Text style={styles.buttonText}>-</Text>
                            </TouchableOpacity>
                            <Text style={styles.quantityText}>{item.quantity}</Text>
                            <TouchableOpacity onPress={() => updateState(item, i, 1)} style={styles.button}>
                                <Text style={styles.buttonText}>+</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                ))}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    userInfoContainer: {
        padding: 20,
        backgroundColor: '#fff',
        alignItems: 'center',
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    userName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    userCartCount: {
        fontSize: 14,
        color: '#555',
    },
    cardsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        padding: 10,
    },
    card: {
        width: 180,
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 15,
        margin: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        alignItems: 'center',
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginVertical: 8,
        textAlign: 'center',
    },
    cardImage: {
        width: 120,
        height: 120,
        borderRadius: 10,
    },
    cardPrice: {
        fontSize: 14,
        fontWeight: '600',
        color: '#2a9d8f',
        marginBottom: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#ff6f61',
        padding: 8,
        borderRadius: 5,
        marginHorizontal: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    quantityText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});