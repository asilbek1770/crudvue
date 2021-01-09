<template>
<div class="m-4 p-2">
  <div>
    <v-btn color="success" @click="handleAdd" >add</v-btn>
    <span>data length: {{ desserts.length }}</span>
    <input type="text" class="bg-dark" v-model="update" style="color: white" placeholder="enter data title"/>
  </div>
  <v-simple-table dark >
    <template v-slot:default>

      <thead>
      <tr>
        <th class="text-center">
          title
        </th>
        <th class="text-center">
          body
        </th>
        <th class="text-center">
          delete
        </th>
        <th class="text-center">
          update
        </th>
      </tr>
      </thead>
      <tbody>
      <tr
          v-for="post in desserts"
          :key="post.id"
      >
        <td>{{post.id}}...{{ post.title }}</td>
        <td>{{ post.body }}</td>
        <td>
          <v-btn color="red" @click="handleDelete(post)">delete</v-btn>
        </td>
        <td>
          <v-btn color="warning" @click="handleUpdate(post)">update</v-btn>
        </td>
      </tr>
      </tbody>
    </template>
  </v-simple-table>
</div>
</template>
<script>

import axios from "axios";
const API = 'https://jsonplaceholder.typicode.com/posts';
const GET = axios.get(API);

export default {
  name: "axios",
  mounted() {
    GET.then(response => this.desserts = response.data)
  },
  data(){
    return{
      desserts: '',
      update: ''
    }
  },
  methods:{
    async handleDelete(post) {
      try {
        await axios.delete( API + `/${post.id}`)
        this.$toast.success("amal bajarildi !!")
      }catch (e) {
        this.$toast.error("bajarilmadi !!")
      }
      this.desserts = this.desserts.filter((p) => p.id !== post.id)
    },
    async handleAdd () {
      const data = {
        userId: 1,
        id:this.desserts.length+1,
        title: this.update,
        body: "new body"
      }
      try {
        await axios.post( API , data)
        this.$toast.success("amal bajarildi !!")
      }catch (e) {
        this.$toast.error("bajarilmadi !!")
      }
      this.desserts = [...this.desserts, data]
    },
    async handleUpdate(post) {
        this.$toast.success("amal bajarildi !!")
        await axios.put( API , post.title=this.update)

    }
  }


}
</script>

<style scoped>

</style>