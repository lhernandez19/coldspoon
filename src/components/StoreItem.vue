<template>
  <div class="card m-1" :class="item.isAvailable() ? 'border-success' : 'border-warning'">
    <div class="card-body">
      <component :is="typeOfItem" :item="item"></component>
    </div>
    <div class="card-footer">
      <button class="btn btn-secondary" v-if="item.isAvailable()" @click='addToBag(item)'>Add to Bag</button>
      <button class="btn btn-secondary" v-else @click="item.checkIn()">Check In</button>
      <button class="btn btn-danger" @click="removeFunction(item)">Remove</button>
      <!-- <b-button variant="success" @click='addToBag(item)'>Add to Bag</b-button> -->
    </div>
  </div>
</template>

<script>
import Gelato from "@/components/Gelato";
import Sorbetto from "@/components/Sorbetto";


export default {
  name: "StoreItem",
  components: {
    Gelato,
    Sorbetto,
  },
  props: {
    item: Object, 
    removeFunction: Function,
    addToBag: Function,
  },

  computed: {
    typeOfItem(){
      return this.item.constructor.name;
    }
  },
}
</script>

<style scoped>

</style>