<template>
  <div class="hero_bg_box">
    <div class="bg_img_box">
      <img src="../assets/images/hero-bg.png" alt="">
    </div>
  </div>

  <!-- header section strats -->
  <header class="header_section">
    <div class="container-fluid">
      <nav class="navbar navbar-expand-lg custom_nav-container ">
        <a class="navbar-brand" href="/">
          <span>
            B tech
          </span>
        </a>

        <button @click="toggleNavbar" :aria-expanded="isNavbarOpen.toString()" class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-label="Toggle navigation">
          <span class=""> </span>
        </button>

        <div class="navbar-collapse" id="navbarSupportedContent" :class="{ 'collapsed': isNavbarOpen, 'collapse': !isNavbarOpen }">
          <ul class="navbar-nav  ">
            <li class="nav-item" :class="{ 'active': $route.path === '/' }">
              <router-link to="/" class="nav-link" @click="handleMenuClick('/')">Главная <span class="sr-only">(current)</span></router-link>
            </li>
            <li class="nav-item" :class="{ 'active': $route.path === '/technologies' }">
              <router-link to="/technologies" class="nav-link" @click="handleMenuClick('/technologies')">Технологии </router-link>
            </li>
          
            <li class="nav-item" :class="{ 'active': $route.path === '/team' }">
              <router-link to="/team" class="nav-link" @click="handleMenuClick('/team')">Наша Команда</router-link>
            </li>
            <li class="nav-item" :class="{ 'active': $route.path === '/aplication' }">
              <router-link to="/aplication" class="nav-link" @click="handleMenuClick('/aplication')">Применение в Транспорте </router-link>
            </li>
            <!-- <li class="nav-item">
              <router-link to="/why" class="nav-link">О Нас</router-link>
            </li> -->
            <li class="nav-item" :class="{ 'active': $route.path === '/chat' }">
              <a href="https://t.me/btech_site_assistant_bot" class="nav-link">Чат</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'NavigationApp',
  data() {
    return {
      isNavbarOpen: false,
    };
  },
  methods: {
    handleMenuClick(path) {
      console.log('Клик на ссылке меню:', path);
    },
    toggleNavbar() {
      this.isNavbarOpen = !this.isNavbarOpen;
    },
  },
};
</script>

