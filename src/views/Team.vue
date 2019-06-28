<template>
  <div class="Team">
    <h1 class="subheading">This is Team</h1>

  <v-container grid-list-md text-xs-center>
        
        <v-layout row wrap>
             <v-flex v-for="i in 7" :key="`1${i}`" xs1>
        <v-card dark color="secondary">
          <v-card-text class="px-0">1</v-card-text>
        </v-card>
      </v-flex>
      
            </v-layout>

  </v-container>
  </div>
</template>
