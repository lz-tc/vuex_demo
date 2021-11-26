<template>
  <div>
    <h3>Vuex Counter</h3>
    <h1>{{ Counter }}</h1>
    <button @click="minusNumber(value)">-</button>
    <input type="number" class="addNumber" v-model="value" />
    <button @click="addNumber(value)">+</button>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
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
button {
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  font-weight: 800;
}
</style>