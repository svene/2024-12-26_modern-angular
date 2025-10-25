export type Aircraft = {
  type: string;
  registration: string;
}

export type Price = {
  flightClass: string;
  amount: number;
}

export const InitialPrice: Price = {flightClass: '', amount: 0};

export type Flight = {
  id: number;
  from: string;
  to: string;
  delay: number;
  delayed: boolean;
  aircraft: Aircraft;
  prices: Price[];
}
