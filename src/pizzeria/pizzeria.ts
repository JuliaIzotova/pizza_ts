import { Order } from '../order/order';
import { ERROR_MESSAGES } from '../data/messages';

export class Pizzeria {
  private ordersArray: Order[] = [];
  private orderCounter: number = 0;

  constructor(
    public name: string,
    public address: string,
    public workingHours: string
  ) {}
  createOrder(): Order {
    const newOrder = new Order(this.orderCounter);
    this.ordersArray.push(newOrder);
    this.orderCounter++;
    return newOrder;
  }

  getOrder(orderID: number): Order | null {
    return (
      this.ordersArray.find((order) => order.orderID === orderID) || null
    );
  }

  removeOrder(orderID : number) {
    const orderIndex = this.ordersArray.findIndex(order => orderID === orderID);
    if (orderIndex === -1) {
      console.error(`${ERROR_MESSAGES.ORDER_NOT_FOUND}: ${orderID}`);
      return;
    }
    this.ordersArray.splice(orderIndex, 1);
  }
  getAllOrders(): Order [] {
    return this.ordersArray;
  }
}