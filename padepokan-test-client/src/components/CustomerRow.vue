<script>
import { useCustomerStore } from '../stores/customers';
    export default {
        props: [
            "customer",
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
        <td>{{ customer.id }}</td>
        <td>{{ customer.name }}</td>
    </tr>
</template>

