<script>
import TransactionRow from '../components/TransactionRow.vue';
import AddTransaction from '../components/AddTransaction.vue';
import { useCustomerStore } from '../stores/customers';
import { mapActions, mapWritableState } from 'pinia';

export default {
    // data(){
    //     return{

    //         customers: []
    //     }
    // },
    methods: {
        ...mapActions(useCustomerStore, ["fetchCustomers", "fetchTransactions"])
    },
    computed: {
        ...mapWritableState(useCustomerStore, ["customers", "transactions"])
    },
    created() {
        this.fetchTransactions();
    },
    components: { TransactionRow, AddTransaction }
}
</script>
<template>
    <div class="flex flex-col">
        <div class="mx-2">
            <h1>Add Transaction</h1>
            <AddTransaction />
        </div>
        <div class="mx-2">
            <h1>Transaction Page</h1>
            <table class="border">
                <thead>
                    <td class="border border-black">AccountId</td>
                    <td class="border border-black">Transaction Date</td>
                    <td class="border border-black">Description</td>
                    <td class="border border-black">Debit Credit</td>
                    <td class="border border-black">Amount</td>
                </thead>
                <tbody>
                    <TransactionRow v-for="transaction in transactions" :transaction="transaction" />
                </tbody>
            </table>
        </div>

    </div>
</template>
