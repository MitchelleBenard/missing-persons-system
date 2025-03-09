<template>
  <Header />  
  <div class="report-container">

    <div class="form-wrapper">
      <h1>Report a Missing Person</h1>
      <form @submit.prevent="submitReport">
        <div class="input-group">
          <label>First Name:</label>
          <input type="text" v-model="form.firstName" required />
        </div>
        
        <div class="input-group">
          <label>Middle Name:</label>
          <input type="text" v-model="form.middleName" />
        </div>
        
        <div class="input-group">
          <label>Last Name:</label>
          <input type="text" v-model="form.lastName" required />
        </div>
        
        <div class="input-group">
          <label>Last Seen Location:</label>
          <input type="text" v-model="form.lastSeen" required />
        </div>
        
        <div class="input-group">
          <label>Phone Number:</label>
          <input type="tel" v-model="form.phone" required />
        </div>
        
        <div class="input-group">
          <label>Upload Photo:</label>
          <input type="file" @change="handleFileUpload" required />
        </div>
        
        <div class="input-group">
          <label>911 Emergency Option:</label>
          <select v-model="form.emergencyOption">
            <option value="call">Call 911</option>
            <option value="notify">Notify Authorities</option>
          </select>
        </div>
        
        <div class="input-group">
          <label>Emergency Contact (If Seen):</label>
          <input type="tel" v-model="form.emergencyContact" required />
        </div>
        
        <div class="input-group">
          <label>ID Number:</label>
          <input type="text" v-model="form.idNumber" required />
        </div>
        
        <div class="input-group">
          <label>Additional Details:</label>
          <textarea v-model="form.additionalDetails"></textarea>
        </div>
        
        <button type="submit" class="submit-btn">Submit Report</button>
      </form>
    </div>

  </div>
  <Footer />  
</template>

<script setup>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import { ref } from 'vue';

const form = ref({
  firstName: '',
  middleName: '',
  lastName: '',
  lastSeen: '',
  phone: '',
  photo: null,
  emergencyOption: '',
  emergencyContact: '',
  idNumber: '',
  additionalDetails: ''
});

const handleFileUpload = (event) => {
  form.value.photo = event.target.files[0];
};

const submitReport = () => {
  console.log('Report Submitted:', form.value);
};
</script>

<style scoped>
.report-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 40px 20px;
  background: linear-gradient(to right, #f8f9fa, #e9ecef);
  min-height: 100vh;
  font-family: 'Arial', sans-serif;
}

.form-wrapper {
  background: #fff;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  width: 100%;
}

h1 {
  font-size: 24px;
  margin-bottom: 20px;
}

.input-group {
  margin-bottom: 15px;
  text-align: left;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}

input, select, textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

textarea {
  height: 100px;
}

.submit-btn {
  background: #007bff;
  color: white;
  padding: 12px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  width: 100%;
}

.submit-btn:hover {
  background: #0056b3;
}
</style>
