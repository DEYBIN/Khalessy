<template>

	<v-container fluid pa-0>

		<v-img
				height="340px"
				src="../assets/spa-14.jpg"
			>

			<v-container>
				<v-row style="height: 300px;">
					<v-col class="text-center secondary--text" align-self="end">
						<h1 class="font-weight-light">CONTACTAR</h1>
						<p class="text-caption">Ponerse en contacto</p>
					</v-col>
				</v-row>
			</v-container>

				
		</v-img>

		<v-container fluid pa-0>
			<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d579.9820611329917!2d-75.2108662360904!3d-12.068362268563085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x910e964f0e5ed1a7%3A0xf00ac90113e40918!2sCa.%20Real%20400%2C%20Huancayo%2012001!5e0!3m2!1ses-419!2spe!4v1600883712969!5m2!1ses-419!2spe" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
		</v-container>

		<v-container>
			<h2 class="text-center">ENVIANOS UN MENSAJE</h2>
			<v-row class=" pa-5" >
				<v-col class="text-center">
					<v-form ref="form" v-model="valid" :lazy-validation="lazy" >

						<v-text-field label="Nombre Y Apellidos" single-line solo ></v-text-field>
						<v-text-field label="Email" single-line solo ></v-text-field>
						<v-text-field label="Numero Tefefonico" single-line solo></v-text-field>
					</v-form>
				</v-col>
				<v-col class="text-center">
					<v-textarea solo name="input-7-4" label="Escribe aqui tu mensaje"></v-textarea>
				<v-btn color="success" class="mr-4">Enviar Mensaje</v-btn>
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
