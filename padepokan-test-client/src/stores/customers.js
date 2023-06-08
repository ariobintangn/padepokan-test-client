import { defineStore } from 'pinia'
import axios from 'axios'

const baseUrl = 'http://localhost:4002'

export const useCustomerStore = defineStore({
    id: "customers",
    state: () => ({
        customers: [],
        transactions: []
    }),
    actions: {
        async fetchCustomers(){
            try {
                const {data} = await axios({
                    method: "GET",
                    url: `${baseUrl}/customers`
                })
                console.log("MASUK NIH", data)
                this.customers.push(data)
                
            } catch (error) {
                
            }
        },
        async fetchTransactions(){
            try {
                const {data} = await axios({
                    method: "GET",
                    url: `${baseUrl}/transactions`
                })
                console.log("MASUK NIH", data)
                this.transactions.push(data)
                
            } catch (error) {
                
            }
        }
    }
})