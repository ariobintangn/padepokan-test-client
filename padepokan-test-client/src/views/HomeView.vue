<script>
import CustomerRow from '../components/CustomerRow.vue';
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
        this.fetchCustomers();
    },
    components: { CustomerRow }
}
</script>

<template>
            <RouterLink to="/transaction">Transaction Page</RouterLink>
    <div>
        <h1>Home Page</h1>
        <table>
            <thead>
                <td>
                    ID
                </td>
                <td>
                    Name
                </td>
            </thead>
            <!-- <tbody v-for="(customer,index) in customers" :customer="customer" :index="index"> -->
                <tbody>
                <!-- <td>{{ this.customers[0][0].id }}</td>
                <td>{{ this.customers[0][0].name }}</td> -->
                <CustomerRow v-for="customer in customers" :customer="customer"/>
            </tbody>
        </table>
    </div>
</template>