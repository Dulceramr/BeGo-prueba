export interface OrderType {
    _id: string;
    status: number;
    order_number: string;
    type: string;
    status_string: string;
    status_class: string;
    destinations: {
      address: string;
      nickname: string;
      start_date: number;
      end_date: number;
    }[];
}

export interface OrderProps {
    orderData: OrderType;
}