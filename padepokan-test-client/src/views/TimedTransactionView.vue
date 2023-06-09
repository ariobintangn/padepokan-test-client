<script>
import TimedTransactionRow from '../components/TimedTransactionRow.vue';
import FilterTimedTransaction from '../components/FilterTimedTransaction.vue';
import AddTransaction from '../components/AddTransaction.vue';
import { useCustomerStore } from '../stores/customers';
import { mapActions, mapWritableState } from 'pinia';

export default {
    methods: {
        ...mapActions(useCustomerStore, ["fetchCustomers", "fetchTransactions", "fetchTimedTransactions"])
    },
    computed: {
        ...mapWritableState(useCustomerStore, ["customers", "transactions", "timedTransaction"])
    },
    created() {
        this.fetchTimedTransactions({id: 1, startDate: "1/1/2023", endDate: "9/6/2023"});
    },
    components: { FilterTimedTransaction, TimedTransactionRow, AddTransaction }
}
</script>
<template>
    <div class="flex flex-col">
        <div class="mx-2">
            <h1>Timed Transaction</h1>
            <FilterTimedTransaction />
        </div>
        <div class="mx-2">
            <h1>Transaction Page</h1>
            <table class="border">
                <thead>
                    <td class="border border-black">Transaction Date</td>
                    <td class="border border-black">Description</td>
                    <td class="border border-black">Debit</td>
                    <td class="border border-black">Credit</td>
                    <td class="border border-black">Amount</td>
                </thead>
                <tbody>
                    <TimedTransactionRow v-for="transaction in transactions" :transaction="transaction" />
                </tbody>
            </table>
        </div>

    </div>
</template>
