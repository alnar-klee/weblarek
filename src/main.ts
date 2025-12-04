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
console.log('Массив товаров из каталога:', productsModel.getItems());

const firstProduct = productsModel.getItemById(apiProducts.items[0].id);
console.log('Товар по ID:', firstProduct);

productsModel.setSelectedItem(apiProducts.items[1]);
console.log('Выбранный товар:', productsModel.getSelectedItem());


const basketModel = new Basket();
basketModel.addItem(apiProducts.items[0]);
basketModel.addItem(apiProducts.items[1]);
console.log('Корзина после добавления:', basketModel.getItems());

basketModel.deleteItem(apiProducts.items[0].id);
console.log('Корзина после удаления первого товара:', basketModel.getItems());

console.log('Общая стоимость корзины:', basketModel.getTotalPrice());
console.log('Количество товаров в корзине:', basketModel.getItemTotal());
console.log('Проверка наличия товара в корзине (ID второго товара):', basketModel.hasItem(apiProducts.items[1].id));

basketModel.clear();
console.log('Корзина после очистки:', basketModel.getItems());


const buyerModel = new Buyer();
buyerModel.setEmail('example@example.com');
buyerModel.setAddress('ул. Пример, 111');
buyerModel.setPhone('+1111111111');
buyerModel.setPayment('card');

console.log('Данные покупателя:', buyerModel.getData());
console.log('Ошибки в данных:', buyerModel.checkValidate());

buyerModel.clear();
console.log('Данные покупателя после очистки:', buyerModel.getData());


const api = new Api(API_URL);
const serverApi = new ServerApi(api);

serverApi.getProducts()
  .then(products => {
    productsModel.setItems(products);
    console.log('Товары с сервера, сохранённые в модели:', productsModel.getItems());
  })
  .catch(error => {
    console.error('Ошибка сервера:', error);
  });
