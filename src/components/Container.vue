<template>
  <div class="container">
    <section class="content">
      <slot></slot>
    </section>
    <button
        onpointerdown="ripplet(arguments[0], { clearing: false, color: '#fff', opacity: 0.1 })"
        onpointerup="ripplet.clear(this)"
        onpointerleave="ripplet.clear(this)">
        Check
      </button>
  </div>
</template>

<script>
  
</script>

<style scoped>
  .content {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
  }

  .container {
    display: flex;
    flex-direction: column;
    width: 800px;
    height: 400px;
    background: #eee;
    border-radius: 0.5vw;
    box-sizing: border-box;
    padding: 2vw;
  }
</style>