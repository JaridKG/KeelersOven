<script setup>
const products = [
  {
    name: 'Classic Chocolate Chip Cookies',
    price: '$6 / half dozen',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semi-sweet chips and brown butter, sed do eiusmod tempor.',
  },
  {
    name: 'Oatmeal Raisin Cookies',
    price: '$6 / half dozen',
    description: 'Ut enim ad minim veniam, chewy rolled oats and plump raisins, quis nostrud exercitation ullamco.',
  },
  {
    name: 'Snickerdoodles',
    price: '$6 / half dozen',
    description: 'Duis aute irure dolor in reprehenderit, rolled in cinnamon sugar, in voluptate velit esse cillum.',
  },
  {
    name: 'Country Sourdough Loaf',
    price: '$8',
    description: 'Excepteur sint occaecat cupidatat non proident, naturally leavened with a crackly crust, sunt in culpa qui officia.',
  },
  {
    name: 'Honey Wheat Bread',
    price: '$7',
    description: 'Lorem ipsum dolor sit amet, whole wheat flour and local honey, consectetur adipiscing elit sed do eiusmod.',
  },
  {
    name: 'Cinnamon Rolls',
    price: '$5 each',
    description: 'Tempor incididunt ut labore et dolore, cream cheese frosting on a soft brioche swirl, magna aliqua ut enim.',
  },
  {
    name: 'Blueberry Muffins',
    price: '$4 each',
    description: 'Ad minim veniam quis nostrud, bursting with wild blueberries and a sugared top, exercitation ullamco laboris.',
  },
  {
    name: 'Buttermilk Scones',
    price: '$4 each',
    description: 'Nisi ut aliquip ex ea commodo consequat, flaky layers with seasonal fruit, duis aute irure dolor.',
  },
  {
    name: 'Seasonal Fruit Pie',
    price: '$18 (whole)',
    description: 'In reprehenderit in voluptate, all-butter crust filled with whatever the market grows best, velit esse cillum dolore.',
  },
]
</script>

<template>
  <section>
    <h2>Our Products</h2>
    <p>Everything is baked in small batches the morning of each market. Lorem ipsum dolor sit amet, consectetur adipiscing elit — availability varies by season, so arrive early for the best selection.</p>
    <div class="card-grid">
      <div v-for="product in products" :key="product.name" class="card">
        <h3>{{ product.name }}</h3>
        <p class="price">{{ product.price }}</p>
        <p>{{ product.description }}</p>
      </div>
    </div>
  </section>

  <section>
    <h2>Custom Orders</h2>
    <p>
      Planning a party or need a bigger batch? Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.
      <RouterLink to="/contact">Contact us</RouterLink> at least one week ahead and we'll bake it fresh for you.
    </p>
  </section>
</template>
