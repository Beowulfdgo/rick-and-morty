<template>
  <div id="app">
 <div>
   <h1>Rick and morty</h1>
   <ListCharacters></ListCharacters>
 </div> 
 </div>
</template>

<script>
import ListCharacters from '@/components/ListCharacters'

export default {
  name: 'App',
  components: ListCharacters
 
}
</script>

<style lang="scss">

</style>
