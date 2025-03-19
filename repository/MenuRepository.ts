interface MenuItem {
    name: string;
    price: number
}

export type {MenuItem};

export default class MenuRepository {
    private static items: MenuItem[] = []

    public static getMenuItems(): MenuItem[] {
        return MenuRepository.items;
    }

    public static addItem(name: string, price: number): void {
        this.items.push({name, price})
    }
}