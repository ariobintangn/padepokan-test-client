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
        <td class="border border-black">{{ customer.id }}</td>
        <td class="border border-black">{{ customer.name }}</td>
    </tr>
</template>

