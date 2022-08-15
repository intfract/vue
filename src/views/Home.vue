<template>
  <section class="banner">
    <div class="hero">
      <h1>INT FRACT</h1>
      <p>
        A plethora of apps, tools, and libraries that make study, development, and life easier!
      </p>
      <Button>
        Get Started
      </Button>
    </div>
  </section>
  <section v-for="(value, key) in subjects" :id="key" class="subject">
    <div class="cards box">
      <router-link class="card" v-for="topic in value.topics" :to="{ path: ['', title(key), topic.name].join('/') }">
        <div class="icon">
          <img :src="`../src/assets/${topic.image}.svg`">
        </div>
        <div class="text">
          <h2>{{ topic.name }}</h2>
          <p>{{ topic.brief }}</p>
        </div>
      </router-link>
    </div>
  </section>
</template>

<script>
  import Container from '../components/Container.vue'
  import Radios from '../components/Radios.vue'
  import Button from '../components/Button.vue'
  export default {
    components: {
      'Container': Container,
      'Radios': Radios,
      'Button': Button,
    },
    data() {
      return {
        subjects: {
          math: {
            topics: [
              {
                name: 'Foundations', 
                image: 'intfract', 
                brief: 'An introduction to numbers and mathematical thinking', 
              }, 
              {
                name: 'Algebra', 
                image: 'intfract', 
                brief: 'Solving equations methodically', 
              }, 
            ],
          },
          biology: {
            topics: [
              {
                name: 'Organisms', 
                image: 'intfract', 
                brief: 'An introduction to life', 
              }, 
              {
                name: 'Cells', 
                image: 'intfract', 
                brief: 'The smallest unit of life', 
              }, 
            ],
          },
          chemistry: {
            topics: [
              {
                name: 'Matter', 
                image: 'intfract', 
                brief: 'The building blocks of the universe', 
              }, 
              {
                name: 'Reactions', 
                image: 'intfract', 
                brief: 'Distinguishing different types of reactions and understanding chemical equations', 
              },
            ],
          },
          physics: {
            topics: [
              {
                name: 'Motion', 
                image: 'intfract', 
                brief: 'An introduction to the nature of the universe', 
              }, 
              {
                name: 'Energy', 
                image: 'intfract', 
                brief: 'The laws and limits of physics', 
              }, 
            ],
          },
          coding: {
            topics: [
              {
                name: 'Programming', 
                image: 'intfract', 
                brief: 'An introduction to computational thinking and problem solving', 
              }, 
              {
                name: 'JavaScript', 
                image: 'intfract', 
                brief: 'An introduction to websites and the world wide web', 
              }, 
            ],
          },
        },
      }
    },
    mounted() {
      
    },
    methods: {
      title(str) {
        return str.replace(
          /\w\S*/g,
          function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
          }
        )
      }
    }
  }
</script>

<style scoped>
  .banner {
    display: flex;
    width: 100vw;
    height: calc(100vh - 60px);
    justify-content: center;
    align-items: center;
    background: transparent;
    padding: 0;
    margin: 0;
    border: none;
  }

  .hero {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .hero h1 {
    text-align: center;
    margin: 0 80px;
  }

  .hero p {
    text-align: center;
    font-size: 24px;
    margin: 0 80px 10px 80px;
  }

  .subject {
    padding: 20px 0;
  }

  #math {
    background: var(--blue);
  }

  #biology {
    background: var(--green);
  }

  #chemistry {
    background: var(--red);
  }

  #physics {
    background: var(--yellow);
  }

  #coding {
    background: var(--blue);
  }
</style>