<template>
  <div class="Team">
    <h1 class="subheading">This is Team</h1>

  <v-container>
    <v-layout row wrap>
      <v-flex xs12 ms6 md4 lg=3 v-for="person in team" :key="person.name">
        <v-card flat class="text-xs-center ma-3">
          <v-responsive class="pt-4">
            <v-avatar size="100" class="grey lighten-2">
             <img :src="person.avatar" >
            </v-avatar>
          </v-responsive>
          <v-card-text>
            <div class="subheading">{{person.name}}</div>
            <div class="grey--text">{{person.role}}</div>
          </v-card-text>
          <v-card-action>
            <v-btn flat color="grey">
              <v-icon small left>message</v-icon>
              <span>message</span>
            </v-btn>
          </v-card-action>
        </v-card>
      </v-flex>
    </v-layout>

  </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      team: [
        {name: "Andrey", role: "QA", avatar: '/avatar-1.png'},
        {name: "Anton", role: "Developer", avatar: '/avatar-2.png'},
        {name: "Petr", role: "DBA", avatar: '/avatar-3.png'},
        {name: "Valera", role: "Support", avatar: '/avatar-4.png'},
        {name: "Sasha", role: "Administrator", avatar: '/avatar-5.png'}
      ]
    }
  }
}
</script>
