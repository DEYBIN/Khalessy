<template>
	<v-app>

		<v-app-bar absolute color="#00000000" dark shrink-on-scroll prominent flat style="align-items: center;" >
			<v-spacer></v-spacer>
			<v-toolbar-items class="float-right" >
				<v-btn href="/" text>Home</v-btn>
				<v-btn href="/services" text>Servicios</v-btn>
				<!-- <v-btn href="/book" text>Book</v-btn>
				<v-btn href="/pages" text>paginas</v-btn> -->
			</v-toolbar-items>

			<v-img contain src="./assets/Kalesi.png" height="100" width="150" ></v-img>

			<v-toolbar-items>
				<v-btn href="/about" text>Sobre nosotros</v-btn>
				<!-- <v-btn href="/shop" text>Tienda</v-btn>
				<v-btn href="/news" text>Noticias</v-btn> -->
				<v-btn href="/contact" text>Contactar</v-btn>
			</v-toolbar-items>
			<v-spacer></v-spacer>
		</v-app-bar>

		<v-main><router-view></router-view></v-main>

		<v-footer dark class="pa-0 ma-0">
			<v-container fluid pa-5 class="tertiary">
				<v-row >
					<v-col cols="12" xs="12" sm="4">
						<h4>Consejos</h4>
						<p class="ma-0 caption font-weight-light">Cómo hacer que tu cabello crezca más rápido</p>
						<v-divider dark></v-divider>
						<p class="ma-0 caption font-weight-light">5 maneras de hacer que el cabello se vea precioso</p>
						<v-divider dark></v-divider>
						<p class="ma-0 caption font-weight-light">14 maneras fáciles de conseguir ojos destacados</p>
						<v-divider dark></v-divider>
						<p class="ma-0 caption font-weight-light">Una guía para el propietario del cabello naturalmente ondulado</p>
						<v-divider dark></v-divider>
					</v-col>
					<v-col cols="12" xs="12" sm="4">
						<div class="">
						<h4>Horario de Atención</h4>
						<p class="ma-0 caption font-weight-light">Lunes - Viernes <span class="float-right primary--text">9 am a 10 pm</span></p>
						<v-divider dark></v-divider>
						<p class="ma-0 caption font-weight-light">Sabados<span class="float-right primary--text">9 am a 12 pm</span></p>
						<v-divider dark></v-divider>
						<p class="ma-0 caption font-weight-light">Domingo y festivos<span class="float-right primary--text">8 am a 12 pm</span></p>
						<v-divider dark></v-divider>
						
						</div>	
					</v-col>
					<v-col cols="12" xs="12" sm="4">
						<h4>Contacta con nosotros</h4>
						<p class="ma-0 caption font-weight-light">Centro Comercial Constitución, Huancayo</p>
						<v-divider dark></v-divider>
						<p class="ma-0 caption font-weight-light">Phone:<span class="ml-2">(208) 333 9296</span></p>
						<v-divider dark></v-divider>
						<p class="ma-0 caption font-weight-light">Celular:<span class="ml-2">(208) 333 9298</span></p>
						<v-divider dark></v-divider>
						<p class="ma-0 caption font-weight-light">Email:<span class="ml-2">Example@hotmail.com</span></p>
						<v-divider dark></v-divider>
						<p class="ma-0 caption font-weight-light">Web:<span class="ml-2">https://example.com</span></p>
						<v-divider dark></v-divider>
					</v-col>
						
				</v-row>
				<v-row>
					<v-card
							
      class="flex tertiary"
      flat
      tile
    >
      <v-card-title  >
        <strong class="subheading">¡Conéctate con nosotros en las redes sociales!</strong>

        <v-spacer></v-spacer>

        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4"
          dark
          icon
        >
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} — <strong>Copyright 2020 - Khalessy Spa</strong>
      </v-card-text>
    </v-card>
				</v-row>
			</v-container>
		</v-footer>
	</v-app>

</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    HelloWorld,
  },

  data: () => ({
icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
  }),
};
</script>
