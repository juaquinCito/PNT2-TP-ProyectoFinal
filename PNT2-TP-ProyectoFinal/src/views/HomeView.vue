<script>
import Footer from '../components/Footer.vue';
import Header from '../components/Header.vue';
import { useLoginStore } from '../stores/login';
import { storeToRefs } from 'pinia';

export default {
  components: {
    Header, Footer
  },
  setup() {
    const store = useLoginStore();
    const { isLogin } = storeToRefs(store);
    return { isLogin };
  },
  methods: {
    // Método para navegar a la página de reserva
    goBooking() {
      if (this.isLogin) {
        this.$router.push('/booking');
      } else {
        this.$router.push('/');
      }
    },
  },
  mounted() {
    // Scroll suave al elemento con el id dinámico proporcionado en la ruta
    const dynamicId = this.$route.params.id;
    const element = document.getElementById(dynamicId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  },
};
</script>

<template>
    <div>
        <Header />
        <div class="container">
            <div class="background"></div>
            <h5>RESERVA TU TURNO EN LA CLINICA LOS TILOS</h5>
            <h5>NO TE QUEDES SIN TU SESION DE DEPILACION</h5>
            <button class="reservarBoton" @click="goBooking" >RESERVA YA!</button>
        </div>
    </div>
    <Footer/>
</template>


<style scoped>
    

    .reservarBoton {
        margin-top: 20px;
        padding: 20px 50px;
        border-radius: 25px;
        background-color: rgb(55, 54, 54) ;
        border: none;
        color: white;
        font-size: 25px;
        font-weight: bold;
        box-shadow: 0px 1px 5px 1px rgba(0, 0, 0, 0.9);
    }

    .container h2 {
        color: black;
    }

    .reservarBoton:hover {
        cursor: pointer;
    }

    .background {
        position: absolute;
        top: 0;
        left: 0;
        width: 110%;
        height: 110%;
        background-image: url('../assets/fondo.JPG');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        opacity: 0.8; /* Opacidad de la imagen de fondo */
        z-index: -1;
        background-color: rgba(0, 0, 0, 0.5);
    }

    .container {
        height: calc(100vh - 150px);
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;
    }

    h2, h5, p {
        margin: 0;
        padding: 0;
    }

    h2 {
        margin-bottom: 40px;
        color: white;
        font-size: 4rem;
    }

    h5 {
        font-size: 1.5rem;
        color: white;
        margin-bottom: 40px;
    }

</style>