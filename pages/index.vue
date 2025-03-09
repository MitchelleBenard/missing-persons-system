<template>
  <Header />  
  <div class="home-container">


    <div class="hero">
      <div class="hero-text">
        <h1>Welcome to the Missing Persons Reporting System</h1>
        <p>
          Join our mission to reunite families by reporting and searching for missing persons.
          Every report helps bring someone closer to home.
        </p>
        <div class="buttons">
          <NuxtLink to="/search" class="btn search-btn" prefetch>🔍 Search Missing Persons</NuxtLink>
          <NuxtLink to="/report" class="btn report-btn" prefetch>📄 Report a Missing Person</NuxtLink>
          <NuxtLink to="/sighting" class="btn sighting-btn" prefetch>👀 Report a Sighting</NuxtLink>
        </div>
      </div>

      <!-- Added Image -->
      <img src="@/assets/images/missing-person.png" alt="Missing Person" class="hero-image">
    </div>

    <div class="info-section">
      <h2>How It Works</h2>
      <p>Our system allows users to report missing persons and search through the database of reported cases.</p>
      <ul>
        <li>Submit detailed missing person reports.</li>
        <li>Search for missing persons by name, age, or location.</li>
        <li>Get updates on reported cases.</li>
      </ul>
    </div>

    <div class="social-sharing">
      <h3>Share on Social Media</h3>
      <div class="social-buttons">
        <a :href="facebookShare" target="_blank" class="btn fb-btn">📘 Facebook</a>
        <a :href="twitterShare" target="_blank" class="btn twitter-btn">🐦 Twitter</a>
        <a :href="instagramShare" target="_blank" class="btn insta-btn">📸 Instagram</a>
        <a :href="tiktokShare" target="_blank" class="btn tiktok-btn">🎵 TikTok</a>
      </div>
    </div>

    <div class="api-message" v-if="apiMessage">{{ apiMessage }}</div>
    <p v-else>Loading additional data...</p>

    <Footer />
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import { ref, onMounted, computed } from 'vue';

const apiMessage = ref('');
const currentUrl = ref('');

onMounted(() => {
  currentUrl.value = window.location.href;
});

const facebookShare = computed(() => `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl.value)}`);
const twitterShare = computed(() => `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl.value)}&text=Help find missing persons!`);
const instagramShare = computed(() => `https://www.instagram.com/?url=${encodeURIComponent(currentUrl.value)}`);
const tiktokShare = computed(() => `https://www.tiktok.com/share?url=${encodeURIComponent(currentUrl.value)}`);

const fetchData = async () => {
  try {
    const response = await fetch('http://127.0.0.1:8000/api/welcome/');
    const data = await response.json();
    apiMessage.value = data.message;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

onMounted(fetchData);
</script>

<style scoped>
.home-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 0;
  /* background: linear-gradient(to right, #004e92, #000428); */
  /* color: #fff; */
  /* min-height: 100vh; */
  
}

.hero {
  display: flex;
  /* width: 100%; */
  justify-content: space-between;
  padding: 20px;
  height: 100vh;
  /* background-color: #000428; */

}

.hero-text {
  width: 50%;
  padding: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.hero-image {
  padding: 20px; 
  width: 50%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
}

h1 {
  font-size: 42px;
  font-weight: bold;
  margin-bottom: 20px;
  text-transform: uppercase;
}

p {
  font-size: 20px;
  margin-bottom: 20px;
  line-height: 1.6;
}

.info-section {
  margin: 40px 0;
  padding: 30px;
  background: #ffffff;
  color: #333;
  border-radius: 12px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
  max-width: 700px;
  text-align: center;
}

.social-sharing {
  margin: 20px 0;
  text-align: center;
}

.social-buttons {
  display: flex;
  gap: 10px;
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  display: inline-block;
  padding: 12px 20px;
  text-decoration: none;
  border-radius: 8px;
  font-weight: bold;
  color: #fff;
  font-size: 16px;
  transition: background 0.3s ease, transform 0.3s;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.fb-btn { background: #3b5998; }
.twitter-btn { background: #1da1f2; }
.insta-btn { background: #e1306c; }
.tiktok-btn { background: #010101; }

.btn:hover {
  filter: brightness(1.2);
  transform: scale(1.05);
}
</style>
