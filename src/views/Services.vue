<template>

	<v-container fluid pa-0>

		<v-img
				height="340px"
				src="../assets/spa-11.jpg"
			>

			<v-container>
				<v-row style="height: 300px;">
					<v-col class="text-center secondary--text" align-self="end">
						<h1 class="font-weight-light">NUESTROS SERVICIOS</h1>
						<p class="text-caption">descubre lo que hacemos</p>
					</v-col>
				</v-row>				
			</v-container>

				
		</v-img>

		<v-container fluid pa-0>
			<v-row class="pa-0">
				<v-col class="pa-0" cols="12" xs="12" sm="4">
					<v-card :loading="loading" flat class="mx-auto my-12" max-width="374" >
						<v-img height="250" src="http://demo.oceanthemes.net/modis/wp-content/uploads/2016/09/service-big-1.jpg" ></v-img>

						<v-card-title>Cabello</v-card-title>

						<v-card-text>
							<div>Nuestro compromiso con la calidad y los servicios aseguran a nuestros clientes felices. Con años de experiencia, nuestro personal dedicado está listo para satisfacer sus necesidades de belleza.</div>
						</v-card-text>
					</v-card>
					
				</v-col>
				<v-col class="pa-0" cols="12" xs="12" sm="4">
					<v-card :loading="loading" flat class="mx-auto my-12" max-width="374" >
						<v-img height="250" src="http://demo.oceanthemes.net/modis/wp-content/uploads/2016/09/service-big-2.jpg" ></v-img>

						<v-card-title>Maquillaje</v-card-title>

						<v-card-text>
							<div>Nuestro compromiso con la calidad y los servicios aseguran a nuestros clientes felices. Con años de experiencia, nuestro personal dedicado está listo para satisfacer sus necesidades de belleza.</div>
						</v-card-text>
					</v-card>
					
				</v-col>
				<v-col class="pa-0" cols="12" xs="12" sm="4">
					<v-card :loading="loading" flat class="mx-auto my-12" max-width="374" >
						<v-img height="250" src="http://demo.oceanthemes.net/modis/wp-content/uploads/2016/09/service-big-3.jpg" ></v-img>

						<v-card-title>Facial</v-card-title>

						<v-card-text>
							<div>Nuestro compromiso con la calidad y los servicios aseguran a nuestros clientes felices. Con años de experiencia, nuestro personal dedicado está listo para satisfacer sus necesidades de belleza.</div>
						</v-card-text>
					</v-card>
					
				</v-col>
				<v-col class="pa-0" cols="12" xs="12" sm="4">
					<v-card :loading="loading" flat class="mx-auto my-12" max-width="374" >
						<v-img height="250" src="http://demo.oceanthemes.net/modis/wp-content/uploads/2016/09/service-big-4.jpg" ></v-img>

						<v-card-title class="text-center">Masaje</v-card-title>

						<v-card-text>
							<div>Nuestro compromiso con la calidad y los servicios aseguran a nuestros clientes felices. Con años de experiencia, nuestro personal dedicado está listo para satisfacer sus necesidades de belleza.</div>
						</v-card-text>
					</v-card>
					
				</v-col>
				<v-col class="pa-0" cols="12" xs="12" sm="4">
					<v-card :loading="loading" flat class="mx-auto my-12" max-width="374" >
						<v-img height="250" src="http://demo.oceanthemes.net/modis/wp-content/uploads/2016/09/service-big-5.jpg" ></v-img>

						<v-card-title>Uña</v-card-title>

						<v-card-text>
							<div>Nuestro compromiso con la calidad y los servicios aseguran a nuestros clientes felices. Con años de experiencia, nuestro personal dedicado está listo para satisfacer sus necesidades de belleza.</div>
						</v-card-text>
					</v-card>
					
				</v-col>
				<v-col class="pa-0" cols="12" xs="12" sm="4">
					<v-card :loading="loading" flat class="mx-auto my-12" max-width="374" >
						<v-img height="250" src="http://demo.oceanthemes.net/modis/wp-content/uploads/2016/09/service-big-6.jpg" ></v-img>

						<v-card-title>Depilación</v-card-title>

						<v-card-text>
							<div>Nuestro compromiso con la calidad y los servicios aseguran a nuestros clientes felices. Con años de experiencia, nuestro personal dedicado está listo para satisfacer sus necesidades de belleza.</div>
						</v-card-text>
					</v-card>
					
				</v-col>
			</v-row>
		</v-container>

		<v-container fluid pa-0>
			<v-row class="primary pa-5" >
				<v-col class="text-center" cols="12" xs="12" sm="6">
					<h2 class="white--text">
						<v-icon dark>mdi-phone-plus</v-icon>
						¡Contáctenos ahora y obtenga ofertas especiales!
					</h2>
				</v-col>
				<v-col class="text-center" cols="12" xs="12" sm="6">
					<v-btn color="secondary"  outlined dark  class="rounded-0" >Hacer una cita ahora</v-btn>
				</v-col>
			</v-row>
		</v-container>




	</v-container>

</template>

<script>
export default {
    data () {
      return {
        items: [
          {
            src: 'http://demo.oceanthemes.net/modis/wp-content/uploads/2016/09/wide3.jpg',
          },
          {
            src: 'http://demo.oceanthemes.net/modis/wp-content/uploads/2016/09/wide4.jpg',
					},
					
          
				],
				loading: false,
      selection: 1,
      }
		},
		methods: {
      reserve () {
        this.loading = true

        setTimeout(() => (this.loading = false), 2000)
      },
    },
  }
</script>
