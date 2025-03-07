<template>
    <div class="social-share">
      <h3>Share on Social Media:</h3>
  
      <!-- Facebook -->
      <a
        :href="`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`"
        target="_blank"
        class="social-btn fb"
      >
        📘 Share on Facebook
      </a>
  
      <!-- Twitter -->
      <a
        :href="`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareText}`"
        target="_blank"
        class="social-btn twitter"
      >
        🐦 Share on Twitter
      </a>
  
      <!-- WhatsApp -->
      <a
        :href="`https://api.whatsapp.com/send?text=${shareText} ${shareUrl}`"
        target="_blank"
        class="social-btn whatsapp"
      >
        📱 Share on WhatsApp
      </a>
  
      <!-- TikTok (Custom Message) -->
      <a
        href="https://www.tiktok.com/"
        target="_blank"
        class="social-btn tiktok"
      >
        🎵 Post on TikTok
      </a>
    </div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  
  const props = defineProps({
    shareUrl: String,
    shareText: String,
  });
  </script>
  
  <style scoped>
  .social-share {
    text-align: center;
    margin-top: 20px;
  }
  
  .social-btn {
    display: inline-block;
    margin: 10px;
    padding: 12px 20px;
    font-size: 18px;
    color: #fff;
    text-decoration: none;
    border-radius: 8px;
    transition: 0.3s;
  }
  
  .fb {
    background-color: #1877f2;
  }
  
  .twitter {
    background-color: #1da1f2;
  }
  
  .whatsapp {
    background-color: #25d366;
  }
  
  .tiktok {
    background-color: #000;
  }
  
  .social-btn:hover {
    opacity: 0.8;
  }
  </style>
  