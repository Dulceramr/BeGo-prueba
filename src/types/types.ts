export interface OrderType {
    _id: string;
    status: number;
    order_number: string;
    type: string;
    status_string: string;
    destinations: {
      address: string;
      nickname: string;
    }[];
}

export interface OrderProps {
    orderData: OrderType;
}