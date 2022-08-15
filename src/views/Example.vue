<template>
  <main>
    <div class="quiz">
      <Container>
        <h3>Title</h3>
        <p>{{ quiz[n].question }}</p>
        <!--MCQ-->
        <Radios :n="n" :data="quiz[n]" v-if="type(quiz[n].answer) === 2"></Radios>
      </Container>
    </div>
  </main>
</template>

<script>
  import Container from '../components/Container.vue'
  import Radios from '../components/Radios.vue'
  export default {
    components: {
      'Container': Container,
      'Radios': Radios,
    },
    data() {
      return {
        quiz: [
          {
            question: 'Choose an answer!',
            options: ['A', 'B', 'C', 'D'],
            answer: 0,
          },
          // {
          //   question: 'Select all the options that apply!',
          //   options: ['A', 'B', 'C', 'D'],
          //   answer: ['B', 'C'],
          // },
        ],
        n: 0,
      }
    },
    mounted() {
      
    },
    methods: {
      type(item) {
        if (Array.isArray(item)) {
          return 0
        } else if (typeof item === 'object') {
          return 1
        } else if (typeof item === 'number') {
          return 2
        } else if (typeof item === 'string') {
          return 3
        }
      }
    }
  }
</script>