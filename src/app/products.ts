export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'Dell XPS 13',
    price: 1499,
    description:
      'A compact ultrabook with an agradable screen, high-level performance and heavy work support',
  },
  {
    id: 2,
    name: 'HP Pavlionbook 17',
    price: 2299,
    description:
      'A heavy notebook with one of the best video cards on the market and supreme-high-level performance',
  },
  {
    id: 3,
    name: 'Lenovo Thinkpad 14',
    price: 1099,
    description:
      'A smooth notebook with general great technical specifications - like good screen, top-level processor and high amount of memory',
  },
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
