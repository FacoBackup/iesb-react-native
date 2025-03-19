import React, { useContext } from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import MenuRepository from "@/repository/MenuRepository";
import MenuItemComponent from "@/components/MenuItemComponent";
import AccountContext, { Account } from "@/hooks/AccountContext";

export default function Menu() {
    const context = useContext<Account>(AccountContext);

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.header}>Menu</Text>
            <View style={styles.itemsContainer}>
                {MenuRepository.getMenuItems().map((item, index) => (
                    <MenuItemComponent key={index} item={item} />
                ))}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        padding: 10,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    itemsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
});