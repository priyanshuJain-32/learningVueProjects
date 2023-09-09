<script setup>
import { ref } from 'vue'

const header = ref('Shopping List App')
const items = ref([
{id:1, label: "10 party hats"},
{id:2, label: "20 Boing Toys"},
])

const newItem = ref("")
const newItemHighPriority = ref(false)
const saveItem = ()=>{
items.value.push({id: items.value.length+1,label:newItem.value})
}
</script>

<template>
  <h1>{{ header }}</h1>
  <form class="add-item-form" v-on:submit.prevent="saveItem">
  <input v-model.trim="newItem" type="text" placeholder="Add new Item">
  <label>
  <input v-model="newItemHighPriority" type="checkbox"> High Priority
  </label>
  <button class="btn btn-primary">Save Item</button>
  </form>
  <ul>
  <li v-for="item in items"
  
  >{{item.label}}</li>
  </ul>
</template>
