<template>
  <div class="Project">
    <h1 class="sunheading grey--text">Project</h1>

    <v-container class="my-5">
      <v-expansion-panel expand>
        <v-expansion-panel-content v-for="project in myProject" :key="project.title">
          <template v-slot:header>
            <div slot="header">{{ project.title }}</div>
          </template>
          <v-card>
            <v-card-text class="px-4 grey--text">
              <div class="font-weight-bold">due by {{ project.due }}</div> 
              {{ project.content }}    
            </v-card-text>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-container>
  </div>
</template>


<script>
//import db from "@/fb"
import tools from '@/common/tools'

export default {
  data() {
    return {
       projects: [
      ]
    }
  },
  computed:
  {
    myProject(){
      return this.projects.filter(project => {
        return project.person === "The Net Ninja"
      })
    }
  },
  created() {
    tools.FillProjects(this.projects);
    // db.collection('projects').onSnapshot(res =>
    // {
    //     const changes = res.docChanges();

    //     changes.forEach(change => {
    //     if (change.type === 'added') {
    //       this.projects.push(
    //         {
    //         ...change.doc.data(),
    //         id: change.doc.id
    //         }
    //       );
    //     }
    // });
 
    //}); 
  }
}
</script>
