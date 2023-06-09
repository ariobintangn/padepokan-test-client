<script>
import { useCustomerStore } from '../stores/customers';
import { mapActions, mapWritableState } from 'pinia';
import { ref } from 'vue'

export default {
    setup() {
        const newCustomer = ref('')
        
        const handleSubmit = () => {
            const customerStore = useCustomerStore();
            // if (newCustomer.value.length > 0) {
            //     customerStore.addCustomer({
            //         name: newCustomer.value
            //     })
            // }
            // newCustomer.value = ''
            // customerStore.addCustomer(newCustomer)
            console.log("clicked", newCustomer.value);
            customerStore.addCustomer(newCustomer.value)
            newCustomer.value = ''
            
            

        }
        return { handleSubmit, newCustomer }
    },
    methods:{
        ...mapActions(useCustomerStore, ["addCustomer"])
    },  
}
</script>

<template>
    <div class="border border-black">

        <form @submit.prevent="handleSubmit">
            <input placeholder="Customer Name.." v-model="newCustomer" />
            <button class="border border-black bg-green-400 w-12">+</button>
        </form>
    </div>
</template>
