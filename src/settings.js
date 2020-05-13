export const api = {
  url: '//' + window.location.hostname + (window.location.hostname === 'localhost' ? ':3131' : '') + '/api',
  tables: 'tables',
  products: 'products',
  order: 'order',
  booking: 'booking',
  event: 'event',
  dateStartParamKey: 'date_gte',
  dateEndParamKey: 'date_lte',
  notRepeatParam: 'repeat=false',
  repeatParam: 'repeat_ne=false',
};

export const settings = {
  status: {
    free: {
      name: 'Free table', actions: ['thinking'], order: false,
    },
    thinking: {
      name: 'Waiting for order', actions: ['free'], order: true,
    },
    ordered: {
      name: 'Get Order', actions: ['prepared'],
    },
    prepared: {
      name: 'Order Prepared', actions: ['delivered'],
    },
    delivered: {
      name: 'Order delivered', actions: ['paid'],
    },
    paid: {
      name: 'Just paid', actions: ['free'],
    },
  },
};