<template>
  <AppBar></AppBar>
  <router-view></router-view>
</template>

<script>
  import AppBar from './components/AppBar.vue'
  export default {
    components: {
      'AppBar': AppBar,
    },
    data() {
      return {
        
      }
    },
    mounted() {
      
    },
    methods: {
      
    }
  }
</script>

<style>
  @font-face {
    font-family: 'Intfract';
    src: url('./intfract.otf');
  }
  
  :root {
    --accent: #357BF2;
    --blue: #357BF2;
    --red: #E1503C;
    --yellow: #EEA71F;
    --green: #0CC98D;
    --dark: #36393F;
    --darker: #2F3136;
    --darkest: #202225;
  }

  body {
    font-family: 'Intfract';
    width: 100vw;
    margin: 0;
    padding: 0;
    height: 100vh;
    font-size: 16px;
    color: var(--dark);
  }

  #app {
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    overflow-y: scroll;
  }

  h1, h2, h3 {
    margin: 0;
    font-weight: 400;
    transition: 0.25s;
    text-transform: capitalize;
  }

  h1 {
    color: var(--darkest);
    font-size: 48px;
  }

  h2 {
    color: var(--darker);
    font-size: 24px;
  }
  
  h3 {
    color: var(--dark);
    font-size: 20px;
  }

  p {
    margin: 0;
  }

  a, button, input {
    outline: none;
  }

  a {
    color: var(--dark);
    text-decoration: none;
    transition: 0.2s;
  }

  a:hover {
    color: var(--accent);
  }

  button {
    font-weight: 400;
    display: flex;
    flex-direction: row;
    padding: 10px 20px;
    font-size: 16px;
    background: var(--accent);
    border: none;
    outline: none;
    font-family: 'Intfract';
    border-radius: 6px;
    color: white;
    transition: 0.2s;
    user-select: none;
  }

  button:hover {
    transform: scale(0.95);
  }

  .center {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  main {
    width: 1200px;
    margin: 0 auto;
  }

  section {
    width: 100vw;
    box-sizing: border-box;
  }

  .box {
    width: 1200px; 
    margin: 0 auto;
  }

  .cards {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  .card {
    background: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 240px;
    height: 320px;
    border-radius: 6px;
    margin: 20px 20px;
    padding: 20px;
    box-sizing: border-box;
    overflow: hidden;
    box-shadow: 0 0 20px #00000080;
    transition: 0.2s;
  }

  .card:hover {
    transform: scale(0.95);
    box-shadow: 0 0 5px #00000080;
    color: var(--dark);
  }

  .card .text {
    text-align: center;
  }

  .card .icon {
    width: 60px;
  }

  .icon img {
    width: 100%;
  }

  @media screen and (max-width: 1200px) {
    main {
      width: 100%;
    }

    nav {
      width: 80%;
    }

    .box {
      width: 100%;
    }
  }
</style>