<template>
  <div>
    <nav class="navbar bg-white boarder-bottom navbar-light">
      <router-link class="navbar-brand mr-auto" :to="{ name: 'home' }">LaravelBnB</router-link>
      <router-link class="btn nav-button" :to="{ name: 'sec' }">Second</router-link> 
    </nav>
    <div class="container mt-4 mb-4 pr-4 pl-4">
      <router-view />
    </div>
  </div>
</template>