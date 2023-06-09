<script>
import PointRow from '../components/PointRow.vue';
import AddTransaction from '../components/AddTransaction.vue';
import { useCustomerStore } from '../stores/customers';
import { mapActions, mapWritableState } from 'pinia';
import axios from 'axios';

export default {
    data() {
        return {
            customers: [],
        };
    },
    computed: {
    customersWithPoints() {
      return this.customers.map((customer) => {
        let totalPoints = 0;

        customer.Transactions.forEach((transaction) => {
          if (transaction.description === 'Beli Pulsa') {
            totalPoints += this.calculateBeliPulsaPoints(transaction.amount);
          } else if (transaction.description === 'Bayar Listrik') {
            totalPoints += this.calculateBayarListrikPoints(transaction.amount);
          }
        });

        return {
          id: customer.id,
          name: customer.name,
          points: totalPoints,
        };
      });
    },
  },
  methods: {
    calculateBeliPulsaPoints(amount) {
      let totalPoints = 0;

      if (amount >= 10000) {
        const range1 = Math.min(amount, 30000) - 10000;
        const range2 = Math.max(amount - 30000, 0);

        const pointsRange1 = Math.floor(range1 / 1000);
        const pointsRange2 = Math.floor(range2 / 1000) * 2;

        totalPoints = pointsRange1 + pointsRange2;
      }

      return totalPoints;
    },
    calculateBayarListrikPoints(amount) {
      let totalPoints = 0;

      if (amount >= 50000) {
        const range1 = Math.min(amount, 100000) - 50000;
        const range2 = Math.max(amount - 100000, 0);

        const pointsRange1 = Math.floor(range1 / 2000);
        const pointsRange2 = Math.floor(range2 / 2000) * 2;

        totalPoints = pointsRange1 + pointsRange2;
      }

      return totalPoints;
    },
  },
    mounted() {
        axios.get("http://localhost:4002/customers").then((response) => {
            this.customers = response.data
        });
    },
    components: { PointRow, AddTransaction }
}
</script>
<template>
    <div class="flex flex-col">
        <div class="mx-2">
            <h1>Point Page</h1>
            <table class="border">
                <thead>
                    <td class="border border-black">ID</td>
                    <td class="border border-black">Name</td>
                    <td class="border border-black">Total Point</td>
                </thead>
                <tbody>
                    <tr v-for="customer in customersWithPoints" :key="customer.id">
                        <td>{{ customer.id }}</td>
                        <td>{{ customer.name }}</td>
                        <td>{{ customer.points }}</td>
                    </tr>
                </tbody>
            </table>
        </div>

    </div>
</template>
