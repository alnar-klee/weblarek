import type {IBuyer, TPayment} from '../../types';

export class Buyer {
    
    private payment: TPayment = '';
    private address: string = '';
    private phone: string = '';
    private email: string = '';

    setPayment(payment: TPayment): void {
        this.payment = payment;
    }

    setEmail(email: string): void {
        this.email = email;
    }

    setPhone(phone: string): void {
        this.phone = phone;
    }

    setAddress(address: string): void {
        this.address = address;
    }

    getData(): IBuyer {
        return {
            payment: this.payment,
            address: this.address,
            phone: this.phone,
            email: this.email,
        }
    }

    clear(): void {
        this.payment = '';
        this.address = '';
        this.phone = '';
        this.email = '';
    }

    checkValidate(): Record<string, string> {
        const errors: Record<string, string> = {};

        if (!this.payment) errors.payment = 'Не выбран способ оплаты';
        if (!this.email) errors.email = 'Укажите e-mail';
        if (!this.phone) errors.phone = 'Укажите номер телефона';
        if (!this.address) errors.address = 'Укажите адрес';
        return errors;
    }
}
