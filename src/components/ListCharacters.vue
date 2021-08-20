<template>
  <section>
      <div class="characters">
          <div class="characters__item">
              <h2>Characters</h2>
          </div>
      </div>
  </section>
</template>

<script>
import { onMounted } from 'vue'
import { useStore } from 'vuex'
export default {
 setup() {
    const store = useStore()

 onMounted(() => {
     store.dispatch('getCharacters')
 })
}

}
</script>

<style>

</style>