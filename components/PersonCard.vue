<template>
    <div class="person-card">
      <h3>{{ person.name }}</h3>
      <p><strong>Age:</strong> {{ person.age }}</p>
      <p><strong>Last Seen:</strong> {{ person.lastSeen }}</p>
      <p><strong>Description:</strong> {{ person.description }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      person: {
        type: Object,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .person-card {
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
  }
  
  h3 {
    margin-top: 0;
  }
  </style>