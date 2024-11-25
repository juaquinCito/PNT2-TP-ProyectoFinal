<script>

import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

export default {
  components: { Header, Footer },
}

</script>

<template>
  <div>
      <Header />
      <div class="containerAbout">
          <h4>NOSOTROS</h4>
          <div class="containerText">
              <div class="row">
                  <p>
                      Nuestro Centro se ocupa de tu cuidado personal desde hace casi 2 décadas, atendiendo a cada uno de nuestros pacientes de la manera mas personalizada posbile. Contamos con equipos de ultima generacón, comprometiéndonos con el bienestar de las personas. 
                      <br /><br />
                      Ofrecemos una amplia gama de servicios, incluyendo tratamientos de depilacíon completa o por zonas, consultas generales, y promociones y descuentos.
                  </p>
                  <img class="ml" src="../assets/au1.png" />
              </div>

              <div class="row">
                  <img class="mr" src="../assets/au2.webp" />
                  <p>
                      Nos enorgullece mantener un ambiente acogedor y seguro, donde cada paciente es tratado con respeto y empatía.
                      <br /><br />
                      Nuestra clínica fue fundada en 2005 con la visión de proporcionar atención médica accesible y de alta calidad a nuestra comunidad.
                  </p>
              </div>

              <div class="row">
                  <p>
                      Lo que comenzó como una pequeño emprendimiento del Dr. Mengueche, hoy cuenta con mas de 20 empleados, dividos en diferentes tareas, brindando gran variedad de tratamientos depilatorios, empleando diversas tecnicas, a fin de otorgar los mejores resultados.
                      <br /><br />
                      Desde nuestros inicios, nos hemos esforzado por mantenernos a la vanguardia de la medicina-capilar, incorporando las últimas tecnologías y prácticas innovadoras en nuestro servicio. A lo largo de los años, hemos ampliado nuestras instalaciones y servicios, prestando gran variedad de horarios de tratamiento, ampliando el número de turnos por hora, facilitando la disponibilidad y sesiones a nuestros pacientes.
                  </p>
                  <img class="ml" src="../assets/au3.webp" />
              </div>

              <div class="row">
                  <img class="mr" src="https://images.stockcake.com/public/a/4/2/a42a26f9-28cb-4be0-9b0a-883f9667c806_large/dental-clinic-interior-stockcake.jpg" />
                  <p>
                      Nuestro crecimiento ha sido posible gracias a la confianza y apoyo de nuestros pacientes, quienes nos han elegido para cuidar su estética y su salud. A lo largo de nuestra historia, hemos mantenido nuestro compromiso con la pulcritud, la excelencia y el respeto, valores que siguen guiando nuestra misión de hoy en día.
                      <br /><br />
                      Esperamos poder brindar una atencion correcta y cuidarte. ¡Visítanos!
                  </p>
              </div>
              
          </div>
          
      </div>
      <Footer />
  </div>
</template>

<style>

  .containerAbout h4 {
      color: black;
      font-size: 2em;
  }

  .row {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 40px;
  }

  .mr {
      margin-right: 40px;
  }

  .ml {
      margin-left: 40px;
  }

  .row p, .row img {
      flex: 1;
  }

  .row img {
      width: 200px;
      height: 250px;
      border-radius: 30px;
  }

  .containerAbout {
      padding-top: 120px;
      width: 100%;
      background-color: white;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: relative;
      padding-bottom: 30px;
  }

  .containerText {
      width: 80%;
  }

  .containerText p {
      color: black;
      text-align: justify;
  }

</style>