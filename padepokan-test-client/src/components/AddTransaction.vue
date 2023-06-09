<script>
import { useCustomerStore } from '../stores/customers';
import { mapActions, mapWritableState } from 'pinia';

export default {
    data() {
        return {
            transaction: {
                description: '',
                amount: 0,
                accountId: '',
                debitCreditStatus: ''
            }
        };
    },
    methods: {
        ...mapActions(useCustomerStore, ["fetchCustomers", "fetchTransactions"]),

        addTransaction() {
            console.log("TESTING");
            const transactionStore = useCustomerStore();

            transactionStore.addTransaction(this.transaction)
                .then(() => {
                    this.transaction = {
                        description: '',
                        amount: 0,
                        accountId: '',
                        debitCreditStatus: ''
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

        <form @submit.prevent="addTransaction" class="flex flex-col">
            <label for="accountId">Customer Name</label>
            <select id="accountId" v-model="transaction.accountId" required>
                <option value="">Select a user</option>
                <option v-for="customer in customers" :key="customer.id" :value="customer.id">{{ customer.name}}</option>
            </select>

            <label for="description">Description:</label>
            <select id="description" v-model="transaction.description" required>
                <option value="" disabled selected>input description..</option>
                <option value="Setor Tunai">Setor Tunai</option>
                <option value="Beli Pulsa">Beli Pulsa</option>
                <option value="Bayar Listrik">Bayar Listrik</option>
                <option value="Lainnya">Lainnya</option>
            </select>

            <label for="debitCreditStatus">Debit/Credit:</label>
            <select id="debitCreditStatus" v-model="transaction.debitCreditStatus" required>
                <option value="" disabled selected>Debit/Credit</option>
                <option value="D">Debit</option>
                <option value="C">Credit</option>
            </select>

            <label for="amount">Amount:</label>
            <input type="number" id="amount" class="border border-black" v-model="transaction.amount" required>


            <div class="">
                <button class="bg-green-400  w-12" type="submit">+</button>
            </div>
        </form>
    </div>
</template>
