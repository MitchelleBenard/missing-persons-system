<template>
    <div class="sighting-container">
      <Header />
  
      <div class="sighting-box">
        <h1>Report a Sighting</h1>
        <p>Provide details of the person you have seen to help reunite families.</p>
  
        <div class="input-group">
          <label for="name">Person's Name (if known)</label>
          <input v-model="sightingData.name" type="text" id="name" placeholder="Enter name or leave blank" />
        </div>
  
        <div class="input-group">
          <label for="location">Location of Sighting</label>
          <input v-model="sightingData.location" type="text" id="location" placeholder="Enter sighting location" />
        </div>
  
        <div class="input-group">
          <label for="description">Description</label>
          <textarea v-model="sightingData.description" id="description" placeholder="Describe the person and situation"></textarea>
        </div>
  
        <button class="btn sighting-btn" @click="submitSighting">👀 Submit Sighting</button>
      </div>
  
      <Footer />
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import Header from '@/components/Header.vue';
  import Footer from '@/components/Footer.vue';
  
  const sightingData = ref({ name: '', location: '', description: '' });
  
  const submitSighting = () => {
    alert(`Sighting Reported:
    Name: ${sightingData.value.name || 'Unknown'}
    Location: ${sightingData.value.location}
    Description: ${sightingData.value.description}`);
  };
  </script>
  
  <style scoped>
  .sighting-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 40px 20px;
    background: linear-gradient(to right, #004e92, #000428);
    color: #fff;
    min-height: 100vh;
    font-family: 'Arial', sans-serif;
  }
  
  .sighting-box {
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
  
  input, textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
  }
  
  textarea {
    height: 100px;
    resize: none;
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
    background: #ff5733;
  }
  
  .btn:hover {
    filter: brightness(1.2);
    transform: scale(1.05);
  }
  </style>
  