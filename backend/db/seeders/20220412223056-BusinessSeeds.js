'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Businesses', [
      {
        ownerId: 1,
        title: 'Honeycomb Grocer',
        description: 'Hours: Monday - Friday: 9:00 am - 8:00 pm  Saturday - Sunday: Closed',
        address:'706 39th St',
        city: 'Oakland',
        state: 'California',
        zipCode: 94609,
        lat: 0,
        lng: 0,
        category: 'Family-owned',
        imageUrls: ['https://shelf-img-bucket.s3.us-west-1.amazonaws.com/family1a.jpg', 'https://shelf-img-bucket.s3.us-west-1.amazonaws.com/honeycomb-new-2.jpg', 'https://shelf-img-bucket.s3.us-west-1.amazonaws.com/family1c.jpg',],
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        ownerId: 1,
        title: 'Omega Mart',
        description: "Omega Mart is an interactive, mind-bending immersive art experience. Participants explore an extraordinary supermarket that bursts into surreal worlds and unexpected landscapes.",
        address: 'Coming to the Bay Area',
        city: 'San Francisco',
        state:'California',
        zipCode: 94621,
        lat: 0,
        lng: 0,
        category: 'Other',
        imageUrls: ['https://shelf-img-bucket.s3.us-west-1.amazonaws.com/omega1a.jpg', 'https://shelf-img-bucket.s3.us-west-1.amazonaws.com/omega1b.jpg', 'https://shelf-img-bucket.s3.us-west-1.amazonaws.com/omega1c.jpg',],
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        ownerId: 2,
        title: 'Seoul-A-Mart',
        description: 'Hours: Monday - Friday: 8:00 am - 10:00 pm  Saturday - Sunday: 8:00 am - 6:00 pm',
        address: '7126 Weld St',
        city: 'Oakland',
        state: 'California',
        zipCode: 94621,
        lat: 0,
        lng: 0,
        category: 'Family-owned',
        imageUrls: ['https://shelf-img-bucket.s3.us-west-1.amazonaws.com/family4a.jpg', 'https://shelf-img-bucket.s3.us-west-1.amazonaws.com/family4b.jpg', 'https://shelf-img-bucket.s3.us-west-1.amazonaws.com/family4c.jpg'],
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        ownerId: 3,
        title: 'Westside Market',
        description: 'Hours: Monday - Friday: 6:00 am - 5:00 pm  Saturday - Sunday: 9:00 am - 3:00 pm',
        address: '725 Market St #1001',
        city: 'Mill Valley',
        state: 'California',
        zipCode: 94607,
        lat: 0,
        lng: 0,
        category: 'Family-owned',
        imageUrls: ['https://shelf-img-bucket.s3.us-west-1.amazonaws.com/family5a.jpg','https://shelf-img-bucket.s3.us-west-1.amazonaws.com/family5b.png', 'https://shelf-img-bucket.s3.us-west-1.amazonaws.com/new-produce.png'],
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        ownerId: 2,
        title: 'Farm Shop',
        description: 'Hours: Monday - Friday: 11:00 am - 11:00 pm  Saturday - Sunday: 10:00 am - 10:00 pm',
        address: '729 Virginia St',
        city: 'Berkeley',
        state: 'California',
        zipCode: 94710,
        lat: 0,
        lng: 0,
        category: 'Rustic',
        imageUrls: ['https://shelf-img-bucket.s3.us-west-1.amazonaws.com/rustic1a.jpg', 'https://shelf-img-bucket.s3.us-west-1.amazonaws.com/rustic1b.jpg', 'https://shelf-img-bucket.s3.us-west-1.amazonaws.com/rustic1c.png' ],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ownerId: 1,
        title: "From Farm to Jane's",
        description: 'Hours: Monday - Friday: 6:00 am - 5:00 pm  Saturday - Sunday: 5:00 am - 4:00 pm',
        address: '290 Boynton Ave',
        city: 'Mill Valley',
        state: 'California',
        zipCode: 94707,
        lat: 0,
        lng: 0,
        category: 'Rustic',
        imageUrls: ['https://shelf-img-bucket.s3.us-west-1.amazonaws.com/rustic2ajpg.jpg', 'https://shelf-img-bucket.s3.us-west-1.amazonaws.com/rustic2b.jpg', 'https://shelf-img-bucket.s3.us-west-1.amazonaws.com/rustic2cjpg.jpg'],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ownerId: 3,
        title: 'Whole Foods House',
        description: 'Hours: Monday - Friday: 9:00 am - 9:00 pm  Saturday - Sunday: 8:00 am - 9:00 pm',
        address: '956 Indian Rock Ave',
        city: 'Milpitas',
        state: 'California',
        zipCode: 94710,
        lat: 0,
        lng: 0,
        category: 'Traditional',
        imageUrls: ['https://shelf-img-bucket.s3.us-west-1.amazonaws.com/traditional1a.jpg', 'https://shelf-img-bucket.s3.us-west-1.amazonaws.com/traditional1b.jpg', 'https://shelf-img-bucket.s3.us-west-1.amazonaws.com/traditional1c.webp'],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ownerId: 1,
        title: 'Tienda Natural',
        description: 'Hours: Monday - Friday: 10:00 am - 9:00 pm  Saturday - Sunday: 9:00 am - 10:00 pm',
        address: '813 Channing Way',
        city: 'Berkeley',
        state: 'California',
        zipCode: 94710,
        lat: 0,
        lng: 0,
        category: 'Modern',
        imageUrls: ['https://shelf-img-bucket.s3.us-west-1.amazonaws.com/modern1a.jpg', 'https://shelf-img-bucket.s3.us-west-1.amazonaws.com/modern1b.jpg', 'https://shelf-img-bucket.s3.us-west-1.amazonaws.com/modern1c.png'],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ownerId: 2,
        title: 'Nada',
        description: 'Hours: Monday - Friday: 11:00 am - 10:00 pm  Saturday - Sunday: 11:00 am - 9:00 pm',
        address: '771 Hazelwood Dr',
        city: 'Walnut Creek',
        state: 'California',
        zipCode: 94596,
        lat: 0,
        lng: 0,
        category: 'Modern',
        imageUrls: ['https://shelf-img-bucket.s3.us-west-1.amazonaws.com/modern2a.jpg', 'https://shelf-img-bucket.s3.us-west-1.amazonaws.com/modern2b.png', 'https://shelf-img-bucket.s3.us-west-1.amazonaws.com/modern2c.jpg'],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ownerId: 1,
        title: 'Yuji',
        description: 'Hours: Monday - Friday: 11:00 am - 11:00 pm  Saturday - Sunday: 11:00 am - 11:00 pm',
        address: '4065 Arbolado Dr',
        city: 'Walnut Creek',
        state: 'California',
        zipCode:  94598,
        lat: 0,
        lng: 0,
        category: 'Modern',
        imageUrls: ['https://shelf-img-bucket.s3.us-west-1.amazonaws.com/modern3a.jpg', 'https://shelf-img-bucket.s3.us-west-1.amazonaws.com/modern3b.jpg', 'https://shelf-img-bucket.s3.us-west-1.amazonaws.com/modern3c.jpg'],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ownerId: 3,
        title: 'Markthal',
        description: 'Hours: Monday - Friday: 8:00 am - 1:00 am  Saturday - Sunday: 10:00 am - 10:00 pm',
        address: '40 Park Terrace Ct',
        city: 'San Francisco',
        state: 'California',
        zipCode: 95321,
        lat: 0,
        lng: 0,
        category: 'Other',
        imageUrls: ['https://shelf-img-bucket.s3.us-west-1.amazonaws.com/markthal1.jpg', 'https://shelf-img-bucket.s3.us-west-1.amazonaws.com/markthal2.jpg', 'https://shelf-img-bucket.s3.us-west-1.amazonaws.com/markthal3.jpg'],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ownerId: 2,
        title: 'Ice Cream and Museum',
        description: 'Hours: Monday - Friday: 5:00 pm - 10:00 pm  Saturday - Sunday: Closed',
        address: '1 Grant Ave',
        city: 'San Francisco',
        state: 'California',
        zipCode: 94108,
        lat: 0,
        lng: 0,
        category: 'Other',
        imageUrls: ['https://shelf-img-bucket.s3.us-west-1.amazonaws.com/ice-cream1.jpg', 'https://shelf-img-bucket.s3.us-west-1.amazonaws.com/ice-cream2.jpg', 'https://shelf-img-bucket.s3.us-west-1.amazonaws.com/ice-cream3.jpg'],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ownerId: 2,
        title: 'DEVO',
        description: 'Hours: Monday - Friday: 5:00 pm - 10:00 pm  Saturday - Sunday: Closed',
        address: '2983 Marietta Street',
        city: 'Daly City',
        state: 'California',
        zipCode: 94108,
        lat: 0,
        lng: 0,
        category: 'Modern',
        imageUrls: ['https://shelf-img-bucket.s3.us-west-1.amazonaws.com/devo1.png', 'https://shelf-img-bucket.s3.us-west-1.amazonaws.com/devo2.jpg', 'https://shelf-img-bucket.s3.us-west-1.amazonaws.com/devo3.jpg'],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ownerId: 2,
        title: 'The Goods Mart',
        description: 'Hours: Monday - Friday: 10:00 am - 8:00 pm  Saturday - Sunday: 10:00 am - 10:00 pm',
        address: '211 Magnolia Ave',
        city: 'Palo Alto',
        state: 'California',
        zipCode: 94584,
        lat: 0,
        lng: 0,
        category: 'Modern',
        imageUrls: ['https://shelf-img-bucket.s3.us-west-1.amazonaws.com/goods-mart1.jpg', 'https://shelf-img-bucket.s3.us-west-1.amazonaws.com/goods-mart2.jpg', 'https://shelf-img-bucket.s3.us-west-1.amazonaws.com/good-mart3.jpg'],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ownerId: 6,
        title: "Mark & Spencer's",
        description: 'Hours: Monday - Friday: 10:00 am - 10:00 pm  Saturday - Sunday: 10:00 am - 10:00 pm',
        address: '9902 Edgemont Rd.',
        city: 'San Jose',
        state: 'California',
        zipCode: 95116,
        lat: 0,
        lng: 0,
        category: 'Rustic',
        imageUrls: ['https://shelf-img-bucket.s3.us-west-1.amazonaws.com/ms-food1.jpg', 'https://shelf-img-bucket.s3.us-west-1.amazonaws.com/ms-food2.jpg','https://shelf-img-bucket.s3.us-west-1.amazonaws.com/ms-food3.jpg' ],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ownerId: 4,
        title: 'Eataly',
        description: 'Eataly is about eating Italian food, living the Italian way. Open Sunday - Saturday: 10:00 am - 10:00 pm',
        address: '58 Orange Street',
        city: 'Santa Rosa',
        state: 'California',
        zipCode: 92751,
        lat: 0,
        lng: 0,
        category: 'Other',
        imageUrls: ['https://shelf-img-bucket.s3.us-west-1.amazonaws.com/eataly1.jpg', 'https://shelf-img-bucket.s3.us-west-1.amazonaws.com/eataly2.png', 'https://shelf-img-bucket.s3.us-west-1.amazonaws.com/eataly3.jpg'],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ownerId: 5,
        title: 'Choice Market',
        description: 'Hours: Monday - Friday: 11:00 am - 10:00 pm  Saturday - Sunday: 11:00 am - 9:00 pm',
        address: '3641 Parrish Avenue',
        city: 'Santa Rosa',
        state: 'California',
        zipCode: 92371,
        lat: 0,
        lng: 0,
        category: 'Modern',
        imageUrls: ['https://shelf-img-bucket.s3.us-west-1.amazonaws.com/choice1.jpg', 'https://shelf-img-bucket.s3.us-west-1.amazonaws.com/choice2.jpg', 'https://shelf-img-bucket.s3.us-west-1.amazonaws.com/choice3.jpg'],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ownerId: 7,
        title: "Trader Joe's",
        description: 'Hours: Monday - Friday: 6:00 am - 9:00 pm  Saturday - Sunday: 6:00 am - 9:00 pm',
        address: '42 Cleveland Drive',
        city: 'Milpitas',
        state: 'California',
        zipCode: 95321,
        lat: 0,
        lng: 0,
        category: 'Traditional',
        imageUrls: ['https://shelf-img-bucket.s3.us-west-1.amazonaws.com/trader-1.jpg', 'https://shelf-img-bucket.s3.us-west-1.amazonaws.com/trader-2.jpg', 'https://shelf-img-bucket.s3.us-west-1.amazonaws.com/trader-3.jpg'],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ownerId: 4,
        title: 'DIA',
        description: 'Hours: Monday - Friday: 6:00 am - 9:00 pm  Saturday - Sunday: 6:00 am - 9:00 pm',
        address: '200 Westview',
        city: 'Concord',
        state: 'California',
        zipCode: 94080,
        lat: 0,
        lng: 0,
        category: 'Rustic',
        imageUrls: ['https://shelf-img-bucket.s3.us-west-1.amazonaws.com/rustic3ajpg.jpg', 'https://shelf-img-bucket.s3.us-west-1.amazonaws.com/rustic3b.jpg', 'https://shelf-img-bucket.s3.us-west-1.amazonaws.com/rustic3c.jpg'],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ownerId: 7,
        title: 'H-Mart',
        description: 'Hours: Monday - Friday: 9:00 am - 9:00 pm  Saturday - Sunday: 9:00 am - 9:00 pm',
        address: '1179 S De Anza Blvd',
        city: 'San Jose',
        state: 'California',
        zipCode: 95129,
        lat: 0,
        lng: 0,
        category: 'Traditional',
        imageUrls: ['https://shelf-img-bucket.s3.us-west-1.amazonaws.com/hmart-1.jpg', 'https://shelf-img-bucket.s3.us-west-1.amazonaws.com/hmart-2.jpg', 'https://shelf-img-bucket.s3.us-west-1.amazonaws.com/hmart-3.jpg'],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ownerId: 5,
        title: 'Daiso',
        description: 'Hours: Monday - Friday: 10:00 am - 8:00 pm  Saturday - Sunday: 10:00 am - 8:00 pm',
        address: '1710 Old Oakland Rd',
        city: 'San Francisco',
        state: 'California',
        zipCode: 94016,
        lat: 0,
        lng: 0,
        category: 'Traditional',
        imageUrls: ['https://shelf-img-bucket.s3.us-west-1.amazonaws.com/daiso1.jpg', 'https://shelf-img-bucket.s3.us-west-1.amazonaws.com/daiso2.jpg', 'https://shelf-img-bucket.s3.us-west-1.amazonaws.com/daiso3.jpg'],
        createdAt: new Date(),
        updatedAt: new Date(),
      }

    ], {});
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Businesses', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
