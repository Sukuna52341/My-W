// order.model.ts
export interface Order {
  menu_id: number;
  quantity: number;
  orderType?: 'online' | 'onsite' | '';
  location?: string;
  table_number?: number;
  price: number;
  order_date: string;  // Add this line
}
