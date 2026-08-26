<script setup>
const products = [
  {
    name: 'Classic Chocolate Chip Cookies',
    price: '$6 / half dozen',
    description: 'Our signature cookie — crisp edges, chewy middle, semi-sweet chips, and a hint of brown butter.',
  },
  {
    name: 'Oatmeal Raisin Cookies',
    price: '$6 / half dozen',
    description: 'Chewy rolled oats, plump raisins, and warm cinnamon. The classic, done right.',
  },
  {
    name: 'Snickerdoodles',
    price: '$6 / half dozen',
    description: 'Soft and pillowy, rolled in cinnamon sugar with that signature tang.',
  },
  {
    name: 'Country Sourdough Loaf',
    price: '$8',
    description: 'Naturally leavened over two days for a crackly crust and an open, tangy crumb.',
  },
  {
    name: 'Honey Wheat Bread',
    price: '$7',
    description: 'A soft sandwich loaf made with stone-ground whole wheat flour and local honey.',
  },
  {
    name: 'Cinnamon Rolls',
    price: '$5 each',
    description: 'Soft brioche swirled with cinnamon butter and finished with cream cheese frosting.',
  },
  {
    name: 'Blueberry Muffins',
    price: '$4 each',
    description: 'Bursting with blueberries under a crunchy sugared top. Best slightly warm.',
  },
  {
    name: 'Buttermilk Scones',
    price: '$4 each',
    description: 'Flaky, buttery layers studded with whatever fruit is in season.',
  },
  {
    name: 'Seasonal Fruit Pie',
    price: '$18 (whole)',
    description: 'An all-butter crust filled with whatever the market grows best — ask what this week’s pie is.',
  },
]
</script>

<template>
  <section>
    <h2>Our Products</h2>
    <p>Everything is baked in small batches the morning of each market. Availability changes with the season, so arrive early for the best selection — when it's gone, it's gone.</p>
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
      Planning a party or need a bigger batch? We take custom orders for cookies by the dozen, whole pies, and bread.
      <RouterLink to="/contact">Contact us</RouterLink> at least one week ahead and we'll bake it fresh for you.
    </p>
  </section>
</template>
