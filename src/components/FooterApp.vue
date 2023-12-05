<template>
  <!-- info section -->
  <section class="info_section layout_padding2">
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-lg-3 info_col">
          <div class="info_contact">
            <h4>
              Адрес
            </h4>
            <div class="contact_link_box">
              <a href="">
                <i class="fa fa-map-marker" aria-hidden="true"></i>
                <span>
                125319, Москва, Ленинградский проспект, 64
                </span>
              </a>
              <a href="">
                <i class="fa fa-phone" aria-hidden="true"></i>
                <span>
                Позвонить +8 (800) 55 35 35
                </span>
              </a>
              <a href="">
                <i class="fa fa-envelope" aria-hidden="true"></i>
                <span>
                220213@student.madi.ru
                </span>
              </a>
            </div>
          </div>
          
        </div>
        <div class="col-md-6 col-lg-3 info_col">
          <div class="info_detail">
            <h4>
              Информация
            </h4>
            <p>
              Наша экспертная команда создает надежные и эффективные технологии, оптимизируя передвижение и обеспечивая бесперебойную связь для современных транспортных систем.
            </p>
          </div>
        </div>
        <div class="col-md-6 col-lg-2 mx-auto info_col">
          <div class="info_link_box">
            <h4>
              Ссылки
            </h4>

            <div class="info_links">
              <router-link to="/" class="nav-link" @click="handleMenuClick">Главная <span class="sr-only">(current)</span></router-link>  
              <router-link to="/technologies" class="nav-link" @click="handleMenuClick">Технологии </router-link>
              <router-link to="/team" class="nav-link" @click="handleMenuClick">Наша Команда</router-link>
              <router-link to="/aplication" class="nav-link" @click="handleMenuClick">Применение в Транспорте </router-link>
              <!-- <router-link to="/why" class="nav-link" @click="handleMenuClick">О Нас</router-link> -->
              <router-link to="/chat" class="nav-link" @click="handleMenuClick">Чат</router-link>
    
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-3 info_col ">
          <h4>
            Рассылка
          </h4>
          <form action="#">
            <input type="text" placeholder="Введите email" />
            <button type="submit">
              Подписаться
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>

  <!-- end info section -->

  <!-- footer section -->
  <section class="footer_section">
    <div class="container">
      <p>
        &copy; <span id="displayYear"></span> Все права соблюдены
      </p>
    </div>
  </section>
  <!-- footer section -->
</template>
      
<script>
export default {
  name: 'FooterApp',
  methods: {
    handleMenuClick() {
      window.scrollTo({top: 0, behavior: 'smooth'});
    }
  }
};
</script>