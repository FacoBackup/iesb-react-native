// Create the UserContext
import {createContext} from "react";
import {MenuItem} from "@/repository/MenuRepository";

interface CartItem {
    item: MenuItem,
    quantity: number
}

interface Account {
    name: string | undefined,
    setName: (v: string) => void,
    setCart: (v: CartItem[]) => void,
    setAccountReady: (v: boolean) => void,
    cart: CartItem[],
}

export type {CartItem, Account}

export default createContext<Account>({
    name: undefined,
    setName: () => null,
    setCart: () => null,
    setAccountReady: () => null,
    cart: []
});