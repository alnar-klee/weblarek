import type {IProduct} from '../../types';

export class Basket {
    private items: IProduct[] = [];

    getItems(): IProduct[] {
        return this.items;
    }

    addItem(item: IProduct): void {
        this.items.push(item);
    }

    deleteItem(itemToDelete: string): void {
    this.items = this.items.filter((item) => item.id !== itemToDelete);
  }

    clear(): void {
        this.items = [];
    }

    getTotalPrice(): number {
        return this.items.reduce((sum, {price}) => {
            if (price) {
                sum += price;
            }
            return sum;
        }, 0);
    }

    getItemTotal(): number {
        return this.items.length;
    }

    hasItem(id: string): boolean {
        return this.items.some(item => item.id === id);
    }
}