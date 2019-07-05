<template>
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-form @submit.prevent="authenticate()">
                <v-card class="elevation-12">
                <v-toolbar dark color="primary">
                    <v-toolbar-title>Login form</v-toolbar-title>
                    <v-spacer></v-spacer>
                </v-toolbar>
                <v-card-text>        
                    <v-text-field prepend-icon="person" name="login" label="Login" type="text" v-model="auth.login"></v-text-field>
                    <v-text-field prepend-icon="lock" name="password" label="Password" id="password" type="password" v-model="auth.password"></v-text-field>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" type="submit">Login</v-btn>
                </v-card-actions>
                </v-card>
            </v-form>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
</template>

<script>
import app from '@/main'

export default {
    data () {
        return {
            auth: { login: '', password: '' },
            user: {},
        }
    },
     methods: {
        authenticate () {
            app.login();
            
            //console.log('test log');
            //window.localStorage.setItem('user', 'ok');
            //this.$router.push({name: 'dashboard'});
            //this.$route.router.go({name: 'dashboard'})
        }
    }
}

</script>