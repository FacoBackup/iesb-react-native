import React, { useContext } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import AccountContext, { Account } from "@/hooks/AccountContext";
import { MenuItem } from "@/repository/MenuRepository";

export default function MenuItemComponent({ item }: { item: MenuItem }) {
    const context = useContext<Account>(AccountContext);
    const isAdded = context.cart.some(cartItem => cartItem.item.name === item.name);

    return (
        <View style={[styles.card, isAdded && styles.cardAdded]}>
            <Image
                source={{ uri: `https://picsum.photos/seed/${encodeURIComponent(item.name)}/200/200` }}
                style={styles.cardImage}
            />
            <Text style={styles.cardTitle}>{item.name}</Text>
            <Text style={styles.cardPrice}>${item.price.toFixed(2)}</Text>
            <TouchableOpacity
                style={[styles.button, isAdded && styles.buttonAdded]}
                onPress={() => {
                    if (!isAdded) {
                        context.setCart([...context.cart, { item: item, quantity: 1 }]);
                    }
                }}
            >
                <Text style={styles.buttonText}>{isAdded ? "Added" : "Add to Cart"}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
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
    cardAdded: {
        borderColor: 'green',
        borderWidth: 2,
    },
    cardImage: {
        width: 120,
        height: 120,
        borderRadius: 10,
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginVertical: 8,
        textAlign: 'center',
    },
    cardPrice: {
        fontSize: 14,
        fontWeight: '600',
        color: '#2a9d8f',
        marginBottom: 10,
    },
    button: {
        backgroundColor: '#ff6f61',
        padding: 10,
        borderRadius: 5,
        width: '80%',
        alignItems: 'center',
    },
    buttonAdded: {
        backgroundColor: 'gray',
    },
    buttonText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
    },
});
