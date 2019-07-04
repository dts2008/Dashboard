<template>
    <nav>
        <v-snackbar v-model="snackbar" :timeout="2000" top color="success">
            <span>
                Awesome! You added a new project
            </span>
            <v-btn flat color="white" @click="snackbar = false">Close</v-btn>
        </v-snackbar>
        <v-toolbar app flat>
            <v-toolbar-side-icon class="grey--text" @click="drawer = !drawer"></v-toolbar-side-icon>
            <v-toolbar-title class="headline text-uppercase">
                <span>Vuetify</span>
                <span class="font-weight-light">MATERIAL DESIGN</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>

        <v-menu offset-y>
            <template v-slot:activator="{ on }">
                <v-btn flat v-on="on" color="grey">
                    <flag :iso="currentLanguage.flag" v-bind:squared=false />
                    <!-- <v-icon left>
                        expand_more
                    </v-icon> -->
                    <!-- <span>
                        {{ currentLanguage.title }}
                    </span> -->
                </v-btn>
            </template>
            <v-list>
                <v-list-tile v-for="lang in languages" :key="lang.language" @click="changeLocale(lang.language)">
                    <v-list-tile-title>
                        <flag :iso="lang.flag" v-bind:squared=false />
                        <span class="pl-1">{{ lang.title }}</span>
                    </v-list-tile-title>
                </v-list-tile>
            </v-list>
        </v-menu>

        <v-menu offset-y>
            <template v-slot:activator="{ on }">
                <v-btn flat v-on="on" color="grey">
                    <v-icon left>
                        expand_more
                    </v-icon>
                    <span>
                        Menu   {{ $t('message') }}                        
                    </span>
                </v-btn>
            </template>
            <v-list>
                <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
                    <v-list-tile-title>
                        {{ link.text }}
                    </v-list-tile-title>
                </v-list-tile>
            </v-list>
        </v-menu>

        <v-btn flat color="gray">
            <v-icon right>exit_to_app</v-icon>
            <span>Sign Out</span>
        </v-btn>
        </v-toolbar>

        <v-navigation-drawer v-model="drawer" app class="grey">
            <v-layout column align-center>
                <v-flex class="mt-5">
                    <v-avatar size="100">
                        <img src="/avatar-1.png" alt="">
                    </v-avatar>
                    <p class="white--text subheading mt-1">
                            The Net Ninja
                        </p>
                </v-flex>
                <v-flex class="mt-4 mb-3">
                    <Popup @projectAdded="snackbar = true"/>
                </v-flex>
            </v-layout>
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
import Popup from "./Popup"
import { languages, changeLocale } from '@/i18n'
// import { languages } from '@/messages/language'
// import { changeLocale } from '@/plugins/i18n'

export default {
    components: {
        Popup
    },
    data(){
        return {
            drawer : true,
            links : [
                { icon: "dashboard", text: "Dashboard", route: "/"},
                { icon: "folder", text: "My Project", route: "/projects"},
                { icon: "person", text: "Team", route: "/team"},
            ],
            snackbar: false,
            languages,
            //languages: Object.keys(languages),
        }
    },
    computed:
    {
        currentLanguage()
        {
            return this.languages.find(l => this.$i18n.locale === l.language )
        }
    },
    methods: {
        changeLocale,
        setLanguage(lang)
        {
            changeLocale(lang)
            // localStorage.lang = lang;
            // this.$i18n.locale = lang;
            // // window.t = this;
        }
    }
}
</script>
