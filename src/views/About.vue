<template>

	<v-container fluid pa-0>

		<v-img
				height="340px"
				src="../assets/spa-09.jpg"
			>

			<v-container>
				<v-row style="height: 300px;">
					<v-col class="text-center secondary--text" align-self="end">
						<h1 class="font-weight-light">SOBRE NOSOTROS</h1>
						<p class="text-caption">Nuestro compromiso con la calidad y los servicios.</p>
					</v-col>
				</v-row>				
			</v-container>

				
		</v-img>

		<v-container fluid pa-0>
			<v-row class="pa-0">
				<v-col class="col-6 pa-0">
						<v-img  src="../assets/spa-12.jpg" height="480px"></v-img>
				</v-col>
				<v-col class="col-6 pa-0 white" >
					<v-row class="pa-10" >
						<v-col class="pa-10 col-md-12 ">
							<h2 class="mb-5">Personal profesional</h2>
							<p class="text-body-1">
								Nuestro compromiso con la calidad y los servicios aseguran a nuestros clientes felices. Con años de experiencia y educación continua, nuestro personal dedicado está listo para satisfacer sus necesidades de belleza. Nos complace ayudarlo a decidir el mejor estilo.
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ejercicio ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
						</v-col>
					</v-row>
				</v-col>
			</v-row>
			<v-row class="pa-0">
				<v-col class="col-6 pa-0 white" >
					<v-row class="pa-10" >
						<v-col class="pa-10 col-md-12 ">
							<h2 class="mb-5">Interior acogedor</h2>
							<p class="text-body-1">
								Bienvenido a los salones de belleza de Modis donde nuestro equipo de personas experimentadas y capacitadas profesionalmente para brindarle los mejores servicios. Ofrecemos tratamientos de belleza para damas que incluyen peluquería, maquillaje, faciales, masajes y más. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ejercicio ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
						</v-col>
					</v-row>
				</v-col>
				<v-col class="col-6 pa-0">
						<v-img  src="../assets/spa-13.jpg" height="480px"></v-img>
				</v-col>

			</v-row>
		</v-container>

		<v-container fluid pa-0>
			<v-parallax src="../assets/spa-11.jpg" white>
				<v-container fluid pa-5>

					<v-row >
						<v-col class="text-center " >
							<v-container class="bacg" style="background-color: #51a8b161;">
								<v-avatar size="200">
									<img	src="https://cdn.vuetifyjs.com/images/john.jpg"	alt="John">
								</v-avatar>
								<h2 class="text-center">Nombre Cards</h2>
								<p class="text-subtitle-1 " justify="space-around">El cuidado del cabello es un término general para las partes de la higiene y la cosmetología que involucran el cabello en el ser humano ...</p>
								<v-card-actions>
									<v-btn icon><v-icon>mdi-facebook</v-icon></v-btn>
									<v-btn icon><v-icon>mdi-whatsapp</v-icon></v-btn>
									<v-btn icon><v-icon>mdi-twitter</v-icon></v-btn>
									<v-btn icon><v-icon>mdi-instagram</v-icon></v-btn>
								</v-card-actions>
							</v-container>
						</v-col>
						<v-col class="text-center " >
							<v-container class="bacg" style="background-color: #51a8b161;">
								<v-avatar size="200">
									<img	src="https://cdn.vuetifyjs.com/images/john.jpg"	alt="John">
								</v-avatar>
								<h2 class="text-center">Nombre Cards</h2>
								<p class="text-subtitle-1 " justify="space-around">El cuidado del cabello es un término general para las partes de la higiene y la cosmetología que involucran el cabello en el ser humano ...</p>
								<v-card-actions>
									<v-btn icon><v-icon>mdi-facebook</v-icon></v-btn>
									<v-btn icon><v-icon>mdi-whatsapp</v-icon></v-btn>
									<v-btn icon><v-icon>mdi-twitter</v-icon></v-btn>
									<v-btn icon><v-icon>mdi-instagram</v-icon></v-btn>
								</v-card-actions>
							</v-container>
						</v-col>
						<v-col class="text-center " >
							<v-container class="bacg" style="background-color: #51a8b161;">
								<v-avatar size="200">
									<img	src="https://cdn.vuetifyjs.com/images/john.jpg"	alt="John">
								</v-avatar>
								<h2 class="text-center">Nombre Cards</h2>
								<p class="text-subtitle-1 " justify="space-around">El cuidado del cabello es un término general para las partes de la higiene y la cosmetología que involucran el cabello en el ser humano ...</p>
								<v-card-actions>
									<v-btn icon><v-icon>mdi-facebook</v-icon></v-btn>
									<v-btn icon><v-icon>mdi-whatsapp</v-icon></v-btn>
									<v-btn icon><v-icon>mdi-twitter</v-icon></v-btn>
									<v-btn icon><v-icon>mdi-instagram</v-icon></v-btn>
								</v-card-actions>
							</v-container>
						</v-col>
					</v-row>
				</v-container>
			</v-parallax>
		</v-container>
		<v-container fluid pa-0>
			<v-row >
				<v-col class="text-right primary" >
					<h1 class="white--text font-weight-light">
						Hechos graciosos
						<v-icon x-large dark>mdi-check-box-multiple-outline</v-icon>
						
					</h1>
				</v-col>
				<v-col class="text-center">
					<P>Lavar el cabello elimina el exceso de sudor y grasa, así como los productos no deseados del cabello y el cuero cabelludo. A menudo, el cabello se lava como parte de la ducha o el baño con champú, un tensioactivo especializado. Los champús funcionan aplicando agua y champú al cabello.</P>
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
