<template>
  <div>
    <h1>Complaints</h1>
    <h3>Select one to start</h3>
  </div>
  <div class="container">
    <div class="column">
      <MainCard @click="goToSubComplaints(this.printerQuality)" msg="Low resolution" :disabled=false></MainCard>
    </div>
    <div class="column">
      <MainCard @click="goToSubComplaints(this.printerQuality2)" msg="Deadline Missied" :disabled=false></MainCard>
      
    </div>
    <div class="column">
      <MainCard msg="Customer received order from different customer" :disabled=true></MainCard>
      <MainCard msg="There are stains / smudges on my product" :disabled=true></MainCard>
      <MainCard msg="Incomplete order / missing pieces" :disabled=true></MainCard>

    </div>
  </div>
</template>

<script>

import MainCard from './MainCard.vue'

export default {
  name: 'ComplaintsSection',
  components: {
    MainCard
  },
  data() {
    return {
      printerQuality: {
        "title": "Printer Quality",
        "sub_complanints": [
          {
            key: 'low-resolution',
            message: 'Low resolution',
          },
          {
            key: 'colour-deviation',
            message: 'Colour Deviation',
          },
          {
            key: 'smudges',
            message: 'Smudges',
          },
        ]
      },
      printerQuality2: {
        "title": "Printer Quality 3",
        "sub_complanints": [
          {
            key: 'deadline-missied',
            message: 'Deadline Missied',
          },
        ]
      }
    };
  },
  methods: {
    toQuestion(questionId) {
      this.$router.push({ path: '/questions/' + questionId });
    },
    goToSubComplaints(subComplaints) {
      this.$router.push({
        name: "SubComplains",
        query: {
          subComplaintsParam: JSON.stringify(subComplaints)
        }
      });
    }
  }
}

</script>

<style scoped>
.container {
  display: flex;
}

.column {
  flex: 1;
  margin: 10px 20px;
  color: #222222;
  font-weight: 900
}


h1 {
  margin: 40px 0px 10px 20px;
  color: #E84E1E;
}

h3 {
  margin: 0px 0px 40px 20px;
  color: #757575;
  font-weight: 500;
}
</style>