<template>
  <div class="radios">
    <span class="option" v-for="item in data.options">
      <div :ref="item" class="radio" @click="change(item)">
        <span class="ind"></span>
        <span class="touch"></span>
      </div>
      <label>{{ item }}</label>
    </span>
  </div>
</template>

<script>
  export default {
    props: {
      data: Object,
      n: Number,
    }, 
    methods: {
      change(p) {
        for (const [ref, item] of Object.entries(this.$refs)) {
          if (ref !== p) {
            item.classList.remove('active')
          } else {
            item.classList.add('active')
          }
        }
        console.log(p)
      }
    }
  }
</script>

<style scoped>
  .radios {
    align-self: flex-start;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 400px;
    height: 100%;
  }

  .option {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
  }

  .radio {
    font-size: 0;
    position: relative;
    margin: 0;
    padding: 0;
    width: 20px;
    height: 20px;
    margin: 0 1vw 0 0;
    border: solid 2px var(--dark);
    outline: none;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: white;
    box-sizing: border-box;
  }

  .touch {
    border: none;
    outline: none;
    width: 40px;
    height: 40px;
    position: absolute;
    border-radius: 50%;
    opacity: 0;
    background: var(--dark);
    transition: 0.25s;
  }

  .touch:hover {
    opacity: 0.25;
  }

  .ind {
    width: 0;
    height: 0;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: var(--dark);
    background-size: 0 0;
    background-repeat: no-repeat;
    transition: 0.25s;
    border-radius: 50%;
  }

  .active .ind {
    width: 10px;
    height: 10px;
  }
</style>