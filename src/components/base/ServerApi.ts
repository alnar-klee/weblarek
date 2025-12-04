import {IApi, IProduct, IOrderRequest, IOrderResponse} from '../../types';

export class ServerApi {
    private api: IApi;

    constructor(api: IApi) {
        this.api = api;
    }

    async getProducts(): Promise<IProduct[]> {
        return await this.api.get<IProduct[]>('/product');
    }

    async order(data: IOrderRequest): Promise<IOrderResponse> {
        return await this.api.post<IOrderResponse>('/order', data);
    }
}
