<template>
  <div class="container add-smoothie">
    <h2 class="indigo-text center-align">Add new smoothie recipe</h2>
    <form @submit.prevent="AddSmoothie">
      <div class="field title">
        <label for="title">Smoothie title</label>
        <input type="text" name="title" v-model="title">
      </div>
    </form>
    <div class="field add-ingredient">
      <label for="add-ingredient">Add an ingredient</label>
      <input type="text" name="add-ingredient" value="">
    </div>
    <div class="field center-align">
      <button class="btn pink" >
        Add smoothie
      </button>
    </div>

  </div>

</template>
<script>
export default {
  data() {
    return {
      title: null
    }
  },
  methods: {
    AddSmoothie() {
      /* eslint-disable no-console */
      console.log(this.title);
    }
  }
}
</script>

<style>
.add-smoothie{
  margin-top: 60px;
  padding: 20px;
  max-width: 500px;
}
.add-smoothie h2{
  font-size: 2em;
  margin: 20px auto;
}

.add-smoothie .field {
  margin: 20px;
}
</style>
