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
			<v-form ref="form" v-model="valid" lazy-validation @submit.prevent="sendEmail">
			<h2 class="text-center">ENVIANOS UN MENSAJE</h2>
			<v-row class=" pa-5" >
				<v-col class="text-center" cols="12" xs="12" sm="6">
					<!-- <v-form  > -->

						<v-text-field v-model="datos.name" name="user_name" label="Nombre Y Apellidos" single-line solo required ></v-text-field>
						<v-text-field v-model="datos.email" name="user_email" label="Email" single-line solo  required></v-text-field>
						<v-text-field v-model="datos.phone" name="contact_number" label="Numero Tefefonico" single-line solo required></v-text-field>
					<!-- </v-form> -->
				</v-col>
				<v-col class="text-center" cols="12" xs="12" sm="6">
					<v-textarea  v-model="datos.messages" solo name="message" label="Escribe aqui tu mensaje" required></v-textarea>
				<v-btn color="success"  type="submit" class="mr-4" >Enviar Mensaje</v-btn>
				</v-col>
			</v-row>
			</v-form>
			<div>
				<v-alert dismissible :type="type" v-model="alert">{{messages}}</v-alert>

				
			</div>
		</v-container>





	</v-container>

</template>

<script>
	import emailjs from 'emailjs-com';
	// init("user_t9kIGZZuiGZzAW4GEfVqJ");
	export default {
			data () {
				return {
					datos:{
						name:'',
						email:'',
						phone:'',
						messages:'',
					},
					valid: true,
					alert:false,
					messages: '',
					type:'success',
				}
			},
			methods: {
				sendEmail(e){
					if(this.datos.name!='' && this.datos.email!='' && this.datos.phone!=''&& this.datos.messages!=''){
						emailjs.sendForm("service_qjnrg7w", "template_nxv223f", e.target, "user_t9kIGZZuiGZzAW4GEfVqJ" ).then(
							(result) => {
								this.datos.name='';
								this.datos.email='';
								this.datos.phone='';
								this.datos.messages='';
								this.alert=true;
								this.messages='Su Mensaje se Envio Correctamente';
							},
							(error) => {
								this.messages=error;
								this.alert=true;
								this.type='error';
							},
							
						)
					}else{
						this.messages='Todos los campos son requeridos';
						this.alert=true;
						this.type='error';
					}
				}
			}
		}
</script>
