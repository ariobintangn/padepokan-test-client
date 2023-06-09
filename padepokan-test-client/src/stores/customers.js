import { defineStore } from 'pinia'
import axios from 'axios'

const baseUrl = 'http://localhost:4002'

export const useCustomerStore = defineStore({
  id: 'customers',
  state: () => ({
    customers: [],
    transactions: []
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
    async addCustomer(value) {
      try {
        console.log('MASUK CUSTOMER NIH', value)
        await axios({
          method: 'POST',
          url: `${baseUrl}/customers`,
          data: { name: value }
        })
        console.log('Success add', value)
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
            debitCreditStatus: value.debitCreditStatus,
            amount: value.amount,
          }
        })
        console.log('Success add transaction', value)
        this.fetchTransactions()
        this.newTransaction = ''
      } catch (error) {
        console.log(error)
      }
    }
  }
})
