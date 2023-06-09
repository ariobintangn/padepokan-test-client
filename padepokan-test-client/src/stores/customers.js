import { defineStore } from 'pinia'
import axios from 'axios'
import Swal from 'sweetalert2'

const baseUrl = 'http://localhost:4002'

export const useCustomerStore = defineStore({
  id: 'customers',
  state: () => ({
    customers: [],
    transactions: [],
    timedTransaction: []
  }),
  actions: {
    async fetchCustomers() {
      try {
        const { data } = await axios({
          method: 'GET',
          url: `${baseUrl}/customers`
        })
        console.log('CUSTOMERS', data)
        this.customers = data
      } catch (error) {}
    },
    async fetchTransactions() {
      try {
        const { data } = await axios({
          method: 'GET',
          url: `${baseUrl}/transactions`
        })
        console.log('TRANSACTIONS', data)
        this.transactions = data
      } catch (error) {}
    },
    async fetchTimedTransactions(value){
        try {
            console.log(value);
            const {data} = await axios({
                method: 'GET',
                url: `${baseUrl}/customers/time`,
                data: {
                    id: 1,
                    startDate: "05/01/2023",
                    endDate: new Date()
                }
            })
            this.timedTransactions = data
        } catch (error) {
            console.log(error);
        }
    },
    async addCustomer(value) {
      try {
        console.log('MASUK CUSTOMER NIH', value)
        await axios({
          method: 'POST',
          url: `${baseUrl}/customers`,
          data: { name: value }
        })
        console.log('Success add', value)
        Swal.fire('Success Add Customer!', `${value} has been added as a customer!`, 'success')
        this.fetchCustomers()
        this.newCustomer = ''
      } catch (error) {
        console.log(error)
      }
    },
    async addTransaction(value) {
      try {
        console.log('MASUK TRANSACTION NIH', value)
        await axios({
          method: 'POST',
          url: `${baseUrl}/transactions`,
          data: {
            accountId: parseInt(value.accountId, 10),
            description: value.description,
            endDate: value.endDate,
            amount: value.amount,
            debitCreditStatus: value.debitCreditStatus
          }
        })
        console.log('Success add transaction', value)
        this.fetchTransactions()
        Swal.fire('Transaction Success!', `An amount of ${value.amount} was transacted`, 'success')
        this.newTransaction = ''
      } catch (error) {
        console.log(error)
      }
    },
    async timedTransaction(value) {
      try {
        console.log('MASUK FILTER DI STORE', value)
        await axios({
          method: 'GET',
          url: `${baseUrl}/customers/time`,
          data: {
            id: 1,
            startDate: "01/5/2023",
            endDate: "06/6/2023"
          }
        })
        console.log('Success filter transaction', value)
        this.newTransaction = ''
      } catch (error) {
        error.response.data
        console.log(error.response.data)
      }
    }
  }
})
