<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { latinizado } from './latinizado'

const visivel = ref(false)
onMounted(() => latinizado.registrar(visivel))
onUnmounted(() => latinizado.remover(visivel))
</script>

<template>
  <button
    type="button"
    class="lat"
    :aria-expanded="String(visivel)"
    :aria-label="visivel ? undefined : 'Show pronunciation'"
    @click="visivel = !visivel"
  >
    <span class="lat-texto"><slot /></span>
  </button>
</template>
