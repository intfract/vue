<template>
  <button
    onpointerdown="ripplet(arguments[0], { clearing: false, color: '#fff', opacity: 0.1 })"
    onpointerup="ripplet.clear(this)"
    onpointerleave="ripplet.clear(this)">
    <slot>
      Button
    </slot>
  </button>
</template>

<script>
  
</script>

<style scoped>
  
</style>