<script>
import AddCustomer from '../components/AddCustomer.vue';
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
    components: { CustomerRow, AddCustomer }
}
</script>

<template>
    <div class="flex justify-evenly">
        <div>
            <h1>Home Page</h1>
            <table class="border border-black">
                <thead class="border border-black">
                    <td class="border border-black">
                        ID
                    </td>
                    <td class="border border-black">
                        Name
                    </td>
                </thead>
                <!-- <tbody v-for="(customer,index) in customers" :customer="customer" :index="index"> -->
                <tbody class="border border-black">
                    <!-- <td>{{ this.customers[0][0].id }}</td>
                        <td>{{ this.customers[0][0].name }}</td> -->
                    <CustomerRow v-for="customer in customers" :customer="customer" />
                </tbody>
            </table>
        </div>
        <div>Add Customer
            <AddCustomer/>

        </div>
    </div>
</template>