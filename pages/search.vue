<template>
  <Header />  
  <div class="search-container">
    <div class="search-box">
      <h1>Search for a Missing Person</h1>
      <p>Enter details below to find a missing person in our database.</p>

      <div class="input-group">
        <label for="name">Full Name</label>
        <input v-model="searchData.name" type="text" id="name" placeholder="Enter full name" />
      </div>

      <div class="input-group">
        <label for="age">Age</label>
        <input v-model="searchData.age" type="number" id="age" placeholder="Enter age" />
      </div>

      <div class="input-group">
        <label for="location">Last Seen Location</label>
        <input v-model="searchData.location" type="text" id="location" placeholder="Enter last seen location" />
      </div>

      <button class="btn search-btn" @click="submitSearch">🔍 Search</button>
    </div>
  </div>
  <Footer />  
</template>

<script setup>
import { ref } from 'vue';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

const searchData = ref({ name: '', age: '', location: '' });

const submitSearch = () => {
  alert(`Searching for: ${searchData.value.name}, Age: ${searchData.value.age}, Location: ${searchData.value.location}`);
};
</script>

<style scoped>
.search-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 40px 20px;
  color: #fff;
  min-height: 100vh;
  font-family: 'Arial', sans-serif;
}

.search-box {
  background: #ffffff;
  color: #333;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
  max-width: 600px;
  text-align: center;
}

.input-group {
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-bottom: 15px;
}

label {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
}

.btn {
  display: inline-block;
  padding: 16px 28px;
  text-decoration: none;
  border-radius: 10px;
  font-weight: bold;
  color: #fff;
  font-size: 18px;
  transition: background 0.3s ease, transform 0.3s;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  position: relative;
  z-index: 10;
  background: #007bff;
}

.btn:hover {
  filter: brightness(1.2);
  transform: scale(1.05);
}
</style>
