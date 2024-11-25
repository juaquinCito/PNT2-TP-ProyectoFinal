<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

export default {
  components: { Header, Footer },
};
</script>

<template>
  <div>
    <Header />
    <div class="bg">
      <div class="row-contacto"> 
        <div class="left">
          <p class="title-contact">CONTACTECNOS</p>
          <ol>
            <li>Domicilio: Yatay 240 CABA</li>
            <li>Whatsapp: + 54 9 115 4374062</li>
          </ol>
        </div>

        <div class="right">
          <p class="title-contact">REDES SOCIALES</p>
          <ol>
            <li>Facebook: Centro Los Tilos SRL</li>
            <li>Instagram: @Los_Tilos_DEP</li>
            <li>Twitter: @LosTilosDepi_</li>
          </ol>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<style>
.bg {
  background-image: url("../assets/cu.jpg");
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  /*opacity: 0.5; /* Opacidad de la imagen de fondo */
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: space-between;
}

.row-contacto {
  padding-top: 150px;
  height: 90vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.left {
  align-items: flex-start;
  margin-left: 80px;
  
}

.right {
  margin-right: 270px;
  align-items: flex-end;

  
}

.title-contact {
  font-size: 35px;
  color: rgb(5, 5, 5);
  font-style: bold;
  margin-top: 10px;
}

ol {
  font-size: 18px;
  padding-left: 10px;
  color: rgb(8, 8, 8);
}

ol li {
  margin-top: 5px;
}
</style>