<script >
import { RouterLink, RouterView } from 'vue-router'
import { useCustomerStore } from './stores/customers';
import { mapActions, mapWritableState } from 'pinia';

export default {
  methods: {
    ...mapActions(useCustomerStore, ["fetchCustomers", "fetchTransactions"]
    )
  },
  computed: {
    ...mapWritableState(useCustomerStore, ["customers", "transactions"])
  },
  created(){
    this.fetchTransactions()
  }
}
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <h1 class=" bg-slate-400">TESTING</h1>
      <h2>{{  }}</h2>
      <nav class="mb-12">
        <RouterLink to="/" class="text-2xl bg-slate-400 mx-2 rounded-md hover:bg-slate-200">Customer</RouterLink>
        <RouterLink to="/transaction" class="text-2xl bg-slate-400 mx-2 rounded-md hover:bg-slate-200">Transaction</RouterLink>
        <RouterLink to="/timed-transaction" class="text-2xl bg-slate-400 mx-2 rounded-md hover:bg-slate-200">Timed Transaction</RouterLink>
        <RouterLink to="/point" class="text-2xl bg-slate-400 mx-2 rounded-md hover:bg-slate-200">Customer's Point</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
