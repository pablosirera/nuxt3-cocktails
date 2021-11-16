<template>
  <div class="cocktails">
    <h1>Cocktails</h1>
    <hr>
    <section>
      <div v-for="cocktail in cocktails" :key="cocktail.idDrink">
        <img :src="cocktail.strDrinkThumb">
        <h4>{{ cocktail.strDrink }}</h4>
      </div>
      <p></p>
    </section>
  </div>
</template>

<script setup>
const response = await useAsyncData('cocktails', () => $fetch('/api/cocktails'))
const cocktails = response.data.value.cocktails
</script>

<style scoped>
.cocktails {
  padding: 10px;
}
.cocktails h1 {
  text-align: center;
}
.cocktails section {
  display: flex;
  flex-wrap: wrap;
}
.cocktails section div {
  cursor: pointer;
  margin-right: 5px;
  margin-bottom: 10px;
}
.cocktails section div:hover {
  opacity: 0.75;
}
.cocktails section div img {
  width: 100px;
}
.cocktails section div h4 {
  margin: 0;
}
</style>