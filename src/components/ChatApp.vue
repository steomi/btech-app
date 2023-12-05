<!-- Chat.vue -->
<template>
    <div>
      <div v-for="message in messages" :key="message.id">
        {{ message.text }}
      </div>
      <input v-model="inputMessage" @keyup.enter="sendMessage" />
    </div>
  </template>
  
  <script>

  
export default {
  name: 'ChatApp'
};
</script>
  
