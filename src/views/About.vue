<template>
	<v-container>
		<v-tabs>
			<v-tab>Login</v-tab>
			<v-tab>Register</v-tab>

			<v-tab-item>
				<div>
					<v-form ref="form" v-model="valid" lazy-validation class="mt-5">
						<p>Login in this form</p>

						<v-text-field
							v-model="email"
							:rules="nameRules"
							label="E-mail"
							required
						></v-text-field>

						<v-text-field
							v-model="password"
							:rules="emailRules"
							label="Password"
							required
						></v-text-field>

						<v-btn color="primary" class="mr-4"> Login </v-btn>
					</v-form>
				</div></v-tab-item
			>
			<v-tab-item>
				<div>
					<v-form ref="form" v-model="valid" lazy-validation class="mt-5">
						<p>This for is for new users</p>

						<v-text-field
							v-model="email"
							:rules="nameRules"
							label="E-mail"
							required
						></v-text-field>

						<v-text-field
							v-model="password"
							:rules="emailRules"
							label="Password"
							required
						></v-text-field>

						<v-text-field
							v-model="password2"
							:rules="emailRules"
							label="Re-type password"
							required
						></v-text-field>

						<v-btn color="primary" class="mr-4"> Register </v-btn>
					</v-form>
				</div></v-tab-item
			>
		</v-tabs>

		<p class="text-center">- or -</p>
		<v-btn color="primary" class="mr-4">
			Login with Apple <v-icon class="ml-2">mdi-apple</v-icon>
		</v-btn>

		<v-btn color="primary" class="mr-4">
			Login with Facebook <v-icon class="ml-2">mdi-facebook</v-icon>
		</v-btn>

		<v-btn color="primary" class="mr-4">
			Login with Google <v-icon class="ml-2">mdi-google</v-icon>
		</v-btn>
	</v-container>
</template>
