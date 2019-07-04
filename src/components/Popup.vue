<template>
    <v-dialog max-width="600px" v-model="dialogState">
        <v-btn flat slot="activator" class="success">Add new project</v-btn>
        <v-card>
            <v-card-title>
                <h2>Add a new project</h2>
            </v-card-title>
            <v-card-text >
                <v-form class="px-3" ref="form">
                    <v-text-field label="Title" v-model="title" prepend-icon="folder" :rules="inputRules">
                    </v-text-field>
                    <v-textarea label="Information" v-model="content"  prepend-icon="edit" :rules="inputRules">
                    </v-textarea>

                    <v-menu>
                        <v-text-field :value="formattedDate" slot="activator" label="Due day" prepend-icon="date_range"></v-text-field>
                        <v-date-picker v-model="due" offset-y>
                        </v-date-picker>
                    </v-menu>
                    <v-spacer></v-spacer>

                    <v-btn flat class="success mx-0 mt-3" @click="submit" :loading="loading">Add Project</v-btn>
                </v-form>    
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>
import format from 'date-fns/format'
import db from '@/fb'

export default {
    data(){
        return {
            title: '',
            content: '',
            due: null,
            inputRules: [
                v => v.length >= 3 || 'Minimum lenght is 3 characters',
                v => v.length <= 10 || 'Maximum lenght is 10 characters'
            ],
            loading: false,
            dialogState: false
        }
    },
    methods: {
        submit()
        {
            if (this.$refs.form.validate())
            {
                this.loading = true;
                const project = {
                    title : this.title,
                    content : this.content,
                    due : format(this.due, 'Do MMM YYY'),
                    person: 'The Net Ninja',
                    status: 'ongoing'         
                }

                db.collection('projects').add(project).then(() => {
                    this.loading = false;
                    this.dialogState = false;

                    this.$emit('projectAdded');
                    //console.log('Added to DB');
                });
                
            }
        }
    },
    computed:
    {
        formattedDate(){
            return this.due ? format(this.due, 'Do MMM YYY') : '';
        }
    }
}
</script>
