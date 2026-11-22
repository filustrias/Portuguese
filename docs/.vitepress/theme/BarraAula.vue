<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'
import Tocador from './Tocador.vue'
import LatTodos from './LatTodos.vue'
import { latinizado } from './latinizado'

// Bar pinned to the top of the page: lesson audio player and the pronunciation button.
const { frontmatter, page } = useData()
const unidade = computed(() => Number(frontmatter.value.unidade) || 0)
</script>

<template>
  <div v-if="unidade || latinizado.total.value > 0" class="barra-aula">
    <Tocador v-if="unidade" :key="page.relativePath" :unidade="unidade" />
    <LatTodos />
  </div>
</template>
