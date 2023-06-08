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
                console.log("CUSTOMERS", data)
                this.customers = data 
                
            } catch (error) {
                
            }
        },
        async fetchTransactions(){
            try {
                const {data} = await axios({
                    method: "GET",
                    url: `${baseUrl}/transactions`
                })
                console.log("TRANSACTIONS", data)
                this.transactions = data
                
            } catch (error) {
                
            }
        },
        async addCustomer(value){
            try {
                console.log("MASUK CUSTOMER NIH");
                await axios({
                    method: "POST",
                    url: `${baseUrl}/customers`,
                    body: {
                        name: value
                    }
                })
                console.log("Success add");
                this.fetchCustomers()
            } catch (error) {
                console.log(error);
            }
        }
    }
})