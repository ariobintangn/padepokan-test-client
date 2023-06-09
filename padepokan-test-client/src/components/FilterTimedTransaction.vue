<script>
import { useCustomerStore } from '../stores/customers';
import { mapActions, mapWritableState } from 'pinia';

export default {
    data() {
        return {
            transaction: {
                id: 0,
                startDate: '',
                endDate: '',
            }
        };
    },
    methods: {
        ...mapActions(useCustomerStore, ["fetchCustomers", "fetchTransactions", "timedTransaction"]),

        timedTransaction() {
            console.log("MASUK FILTER COMPONENT", this.transaction);
            const transactionStore = useCustomerStore();

            transactionStore.timedTransaction(this.transaction)
                .then(() => {
                    this.transaction = {
                        id: 0,
                        startDate: '',
                        endDate: ''
                    };
                })
                .catch((error) => {
                    console.error(error);
                });
        },

    },
    computed: {
        ...mapWritableState(useCustomerStore, ["customers", "transactions"])
    },
    created() {
        this.fetchCustomers()
    }
}
</script>

<template>
    <div class="border border-black max-w-xs">

        <form @submit.prevent="timedTransaction" class="flex flex-col">
            <label for="id">Customer Name</label>
            <select id="id" v-model="transaction.id" required>
                <option value="">Select a user</option>
                <option v-for="customer in customers" :key="customer.id" :value="customer.id">{{ customer.name }}</option>
            </select>

            <label for="startDate">Start Date</label>
            <input type="date" id="startDate" v-model="startDate" required>

            <label for="endDate">End Date:</label>
            <input type="date" id="endDate" v-model="endDate" required>

            <div class="">
                <button class="bg-green-400  w-12" type="submit">+</button>
            </div>
        </form>
    </div>
</template>
