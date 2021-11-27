<!--
 * @Descripttion: 
 * @version: 
 * @Author: congsir
 * @Date: 2021-11-26 21:05:15
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-11-27 16:20:59
-->
<template>
  <div >
    <h3>Vuex Counter</h3>
    <h1>{{ Counter }}</h1>
    <button class="counter" @click="minusNumber(value)">-</button>
    <input type="number" class="addNumber" v-model="value" />
    <button class="counter"  @click="addNumber(value)">+</button><br>
    <button class="sync_button" @click="addNumberAsync()">异步++</button>
  </div>
</template>

<script>
import { mapState, mapMutations,mapActions } from "vuex";
export default {
  name: "conuter",
  data() {
    return {
      value: 0,
    };
  },
  computed: {
    ...mapState(["Counter"]),
  },
  methods: {
    ...mapMutations(["addNumber","minusNumber"]),
    ...mapActions(["addNumberAsync"])
  },
};
</script>

<style>
.addNumber {
  text-align: center;
  height: 2rem;
  border: 2px solid gray;
  border-radius: 0.5rem;
}
.counter{
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  font-weight: 800;
  cursor: pointer;
}
.sync_button{
  width: 4%;
  height: 20%;
  margin-top: 1%;
  border: 0;
  font-weight: 800;
  cursor: pointer;
}
</style>