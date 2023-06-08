<script>
import { useCustomerStore } from '../stores/customers';
    export default {
        props: [
            "transaction",
            "index"
        ],
        setup(){
            const customerStore=useCustomerStore()

            return{customerStore}
        }

        
    }
</script>

<template>
    <tr>
        <td>{{ transaction.accountId }}</td>
        <td>{{ transaction.transactionDate }}</td>
        <td>{{ transaction.description }}</td>
        <td>{{ transaction.debitCreditStatus }}</td>
        <td>{{ transaction.amount }}</td>
    </tr>
</template>

