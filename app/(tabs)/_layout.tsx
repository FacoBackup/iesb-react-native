import {Tabs} from 'expo-router';
import React, {useEffect, useState} from 'react';
import {Platform} from 'react-native';

import {HapticTab} from '@/components/HapticTab';
import {IconSymbol} from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import {Colors} from '@/constants/Colors';
import {useColorScheme} from '@/hooks/useColorScheme';
import {CartItem} from "@/hooks/AccountContext";
import MenuRepository from "@/repository/MenuRepository";
import AccountContext from "@/hooks/AccountContext";
import AccountForm from "@/components/AccountForm";

export default function TabLayout() {
    const colorScheme = useColorScheme();
    const [accountName, setAccountName] = useState<string>("")
    const [accountReady, setAccountReady] = useState<boolean>(false)
    const [cart, setCart] = useState<CartItem[]>([])

    useEffect(() => {
        MenuRepository.addItem("Sabão", 10)
        MenuRepository.addItem("Café", 22)
        MenuRepository.addItem("Leite", 31)
        MenuRepository.addItem("Agua 500ml", 53)
        MenuRepository.addItem("Bomba nuclear", 123213)
    }, [])

    return (
        <AccountContext.Provider
            value={{
                cart,
                name: accountName,
                setName: setAccountName,
                setCart,
                setAccountReady
            }}>
            {!accountReady ? <AccountForm/> : (
                <Tabs
                    screenOptions={{
                        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
                        headerShown: false,
                        tabBarButton: HapticTab,
                        tabBarBackground: TabBarBackground,
                        tabBarStyle: Platform.select({
                            ios: {
                                position: 'absolute',
                            },
                            default: {},
                        }),
                    }}>
                    <Tabs.Screen
                        name="index"
                        options={{
                            title: 'Cart',
                            tabBarIcon: ({color}) => <IconSymbol size={28} name="cart.fill" color={color}/>,
                        }}
                    />
                    <Tabs.Screen
                        name="explore"
                        options={{
                            title: 'Explore',
                            tabBarIcon: ({color}) => <IconSymbol size={28} name="paperplane.fill" color={color}/>,
                        }}
                    />
                </Tabs>
            )}
        </AccountContext.Provider>
    );
}
