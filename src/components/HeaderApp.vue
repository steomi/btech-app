<template>
    <div class="hero_area">
        <NavigationApp />
        <section class="header_section ">
            <div class="container ">
            <div class="row">
                <div class="col-md-6 ">
                <div class="detail-box">
                    <h1>
                    применение беспроводных  <br>
                    технологий на транспорте
                    </h1>
                    <p>
                    играет ключевую роль в современном транспорте, обеспечивая связь между умными устройствами в автомобилях, поездах и общественном транспорте. Они не только повышают безопасность и эффективность движения, но и открывают новые горизонты для развития автономных транспортных средств и умных городских систем. Благодаря беспроводным технологиям транспорт становится более умным, экологически чистым и удобным для пассажиров.
                    </p>
                    
                </div>
                </div>
                <div class="col-md-6">
                <div class="img-box">
                    <img src="../assets/images/slider-img.png" alt="">
                </div>
                </div>
            </div>
            </div>
        </section>
    </div>
</template>
  
<script>
import NavigationApp from './NavigationApp.vue'

export default {
    name: 'HeaderApp',
    components: {
        NavigationApp
    }
}
</script>
  
<style scoped>
  
</style>
  