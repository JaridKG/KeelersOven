<script setup>
const markets = [
  {
    name: 'Downtown Farmers Market',
    location: '100 Main Street, City Square',
    day: 'Saturdays',
    hours: '8:00 AM – 1:00 PM',
    season: 'May – October',
  },
  {
    name: 'Riverside Community Market',
    location: 'Riverside Park Pavilion',
    day: 'Sundays',
    hours: '9:00 AM – 2:00 PM',
    season: 'June – September',
  },
  {
    name: 'Eastside Growers Market',
    location: 'Eastside Church Parking Lot, 42 Elm Ave',
    day: 'Wednesdays',
    hours: '3:00 PM – 7:00 PM',
    season: 'May – October',
  },
  {
    name: 'Winter Indoor Market',
    location: 'Community Center Gymnasium',
    day: 'First Saturday of the month',
    hours: '9:00 AM – 12:00 PM',
    season: 'November – April',
  },
]
</script>

<template>
  <section>
    <h2>Find Us at a Farmers Market</h2>
    <p>We set up our tent rain or shine — look for the Keelers Oven banner and follow the smell of fresh bread. Schedules can shift for holidays and severe weather, so check our social pages before you head out.</p>

    <table>
      <thead>
        <tr>
          <th>Market</th>
          <th>Location</th>
          <th>Day</th>
          <th>Hours</th>
          <th>Season</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="market in markets" :key="market.name">
          <td>{{ market.name }}</td>
          <td>{{ market.location }}</td>
          <td>{{ market.day }}</td>
          <td>{{ market.hours }}</td>
          <td>{{ market.season }}</td>
        </tr>
      </tbody>
    </table>
  </section>

  <section>
    <h2>Pre-Orders for Pickup</h2>
    <p>
      Want to guarantee your loaf? Popular items sell out fast —
      <RouterLink to="/contact">send us a message</RouterLink> by Thursday evening and we'll have your order
      set aside at the market of your choice.
    </p>
  </section>
</template>
