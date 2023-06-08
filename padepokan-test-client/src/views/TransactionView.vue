<script>
import TransactionRow from '../components/TransactionRow.vue';
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
    components: { TransactionRow }
}
</script>
<template>
    <div>
        <h1>Transaction Page</h1>
        <table>
            <thead>
                <td>AccountId</td>
                <td>Transaction Date</td>
                <td>Description</td>
                <td>Debit Credit</td>
                <td>Amount</td>
            </thead>
            <tbody>
                <TransactionRow  v-for="transaction in transactions" :transaction="transaction"/>
            </tbody>
        </table>
    </div>
</template>
