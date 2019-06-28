<template>
    <nav>
        <v-toolbar app flat>
            <v-toolbar-side-icon class="grey--text" @click="drawer = !drawer"></v-toolbar-side-icon>
            <v-toolbar-title class="headline text-uppercase">
                <span>Vuetify</span>
                <span class="font-weight-light">MATERIAL DESIGN</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn flat color="gray">
            <v-icon right>exit_to_app</v-icon>
            <span>Sign Out</span>
        </v-btn>
        </v-toolbar>

        <v-navigation-drawer v-model="drawer" app class="grey">
            <v-list>
                <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
                    <v-list-tile-action>
                        <v-icon class="white--text">{{link.icon}}</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title class="white--text">{{link.text}}</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
    </nav>
</template>


<script>
export default {
    data(){
        return {
            drawer : true,
            links : [
                { icon: "dashboard", text: "Dashboard", route: "/"},
                { icon: "folder", text: "My Project", route: "/projects"},
                { icon: "person", text: "Team", route: "/team"},
            ]
        }
    }
}
</script>
