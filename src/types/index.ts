export type ApiPostMethods = 'POST' | 'PUT' | 'DELETE';

export interface IApi {
  get<T extends object>(uri: string): Promise<T>;
  post<T extends object>(uri: string, data: object, method?: ApiPostMethods): Promise<T>;
}

export interface IProduct {
  id: string;
  category: string;
  description: string;
  title: string;
  image: string;
  price: number | null;
}

export type TPayment = 'cash' | 'card';

export interface IBuyer {
  payment: TPayment | null;
  email: string;
  phone: string;
  address: string;
}

export interface IOrderRequest {
  items: string[];        
  total: number;          
  buyer: IBuyer;          
}

export interface IOrderResponse {
  id: string;
  total: number;
}
