<template>
    <div class="report-form">
      <h2>Report a Missing Person</h2>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="form.name" required />
        </div>
        <div class="form-group">
          <label for="age">Age:</label>
          <input type="number" id="age" v-model="form.age" required />
        </div>
        <div class="form-group">
          <label for="lastSeen">Last Seen:</label>
          <input type="text" id="lastSeen" v-model="form.lastSeen" required />
        </div>
        <div class="form-group">
          <label for="description">Description:</label>
          <textarea id="description" v-model="form.description" required></textarea>
        </div>
        <button type="submit" class="btn">Submit</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        form: {
          name: '',
          age: '',
          lastSeen: '',
          description: '',
        },
      };
    },
    methods: {
      submitForm() {
        // Handle form submission (e.g., API call)
        console.log('Form submitted:', this.form);
        alert('Report submitted successfully!');
      },
    },
  };
  </script>
  
  <style scoped>
  .report-form {
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
  }
  
  input, textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  textarea {
    resize: vertical;
  }
  </style>