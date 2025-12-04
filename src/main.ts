import './scss/styles.scss';

import {Products} from './components/Models/Products';
import {Basket} from './components/Models/Basket';
import {Buyer} from './components/Models/Buyer';
import {ServerApi} from './components/base/ServerApi';
import {Api} from './components/base/Api';
import {apiProducts} from './utils/data';
import {API_URL} from './utils/constants';


const productsModel = new Products();

productsModel.setItems(apiProducts.items);
console.log('Массив товаров из каталога: ', productsModel.getItems());

const basketModel = new Basket();

basketModel.addItem(apiProducts.items[0]);
console.log('Корзина: ', basketModel.getItems());
console.log('Общая стоимость: ', basketModel.getTotalPrice());

const buyerModel = new Buyer();

buyerModel.setEmail('example@example.com');
buyerModel.setAddress('ул. Пример, 111');
console.log('Данные покупателя: ', buyerModel.getData());
console.log('Ошибки в данных: ', buyerModel.checkValidate());

const api = new Api(API_URL);
const serverApi = new ServerApi(api);

serverApi.getProducts().then(products => {
  console.log('Товары с сервера: ', products);
});
