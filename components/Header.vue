<template>
  <header>
    <div class="container">
      <h1>Missing Persons Reporting System</h1>
      <nav>
        <nuxt-link to="/">Home</nuxt-link>
        <nuxt-link to="/report">Report</nuxt-link>
        <nuxt-link to="/search">Search</nuxt-link>
      </nav>
    </div>
  </header>
</template>

<style scoped>
header {
  background-color: var(--primary-color);
  color: white;
  padding: 0;
  width: 100%;
}

h1 {
  margin: 0;
}

nav {
  margin-top: 20px;
  width: 100%
}

nav a {
  color: white;
  margin-right: 15px;
  text-decoration: none;
}

nav a:hover {
  text-decoration: underline;
}
</style>