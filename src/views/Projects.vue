<template>
  <div class="Project">
    <h1 class="sunheading grey--text">Project</h1>

    <v-container class="my-5">
      <v-expansion-panel v-model="panel" expand>
        <v-expansion-panel-content v-for="project in myProject" :key="project.title">
          <template v-slot:header>
            <div>{{ project.title }}</div>
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
export default {
  data() {
    return {
       projects: [
        { title: "test001", person: "person09", due: "2019-06-25", status: "ongoing"},
        { title: "test003", person: "person05", due: "2019-06-26", status: "ongoing"},
        { title: "test007", person: "person03", due: "2019-06-27", status: "complete"},
        { title: "test004", person: "person04", due: "2019-06-28", status: "overdue"},
        { title: "test004", person: "person09", due: "2019-06-28", status: "overdue"}
      ]
    }
  },
  computed:
  {
    myProject(){
      return this.projects.filter(project => {
        return project.person === "person09"
      })
    }
  }
}
</script>
