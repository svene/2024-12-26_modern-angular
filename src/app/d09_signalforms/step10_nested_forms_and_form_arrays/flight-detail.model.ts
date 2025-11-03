export type Aircraft = {
  type: string;
  registration: string;
}

export type Price = {
  flightClass: string;
  amount: number;
}

export type Flight = {
  id: number;
  from: string;
  to: string;
  delay: number;
  delayed: boolean;
  aircraft: Aircraft;
  prices: Price[];
}
