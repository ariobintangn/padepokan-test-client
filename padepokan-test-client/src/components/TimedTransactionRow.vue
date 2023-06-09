<script>
import { useCustomerStore } from '../stores/customers';
import { mapActions, mapWritableState } from 'pinia';
export default {
    props: [
        "transaction",
        "index"
    ],
    setup() {
        const customerStore = useCustomerStore()

        return { customerStore }
    },
    methods: {
        formatDate(date) {
            const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
            return new Date(date).toLocaleDateString(undefined, options);
        },
    },

}
</script>

<template>
    <tr>
        <td class="border border-black">{{ formatDate(transaction.transactionDate) }}</td>
        <td class="border border-black">{{ transaction.description }}</td>
        <td class="border border-black" v-if="transaction.debitCreditStatus === 'D'">{{ transaction.amount }}</td>
          <td class="border border-black" v-else>-</td>
          <td class="border border-black" v-if="transaction.debitCreditStatus === 'C'">{{ transaction.amount }}</td>
          <td class="border border-black" v-else>-</td>
        <td class="border border-black">{{ transaction.amount }}</td>
    </tr>
</template>

