<template>
  <div>
    <h1>Complaints</h1>
    <h3>Select one to start</h3>
  </div>
  <div class="container">
    <div class="column">

      <MainCard @click="toQuestion('damage')" msg="Damage" :disabled=false></MainCard>
      <MainCard @click="toQuestion('delivery-issues')" msg="Delivery Issue" :disabled=false></MainCard>

    </div>
    <div class="column">

      <MainCard @click="toQuestion('deadline-missed')" msg="Deadline Missed" :disabled=false></MainCard>
    </div>
    <div class="column">

      <MainCard @click="toQuestion('delayed')" msg="Delayed" :disabled=false></MainCard>
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
      printQuality: {
        "title": "Print Quality",
        "sub_complaints": [
          {
            key: "low-resolution",
            message: "Low resolution",
          },
          {
            key: "colour-deviation",
            message: "Colour Deviation",
          },
          {
            key: "smudges",
            message: "Smudges",
          },
        ]
      },
      damage: {
        "title": "Damage",
        "sub_complaints": [
          {
            key: 'damage',
            message: 'Damage',
          }
        ]
      },
      deliveryIssue: {
        "title": "Delivery Issue",
        "sub_complaints": [
          {
            key: 'delivery-issues',
            message: 'Delivery Issue',
          }
        ]
      },
      designIssues: {
        "title": "Design Issues",
        "sub_complaints": [
          {
            key: 'incorrect-artwork',
            message: 'Incorrect Artwork/Typo',
          },
          {
            key: 'overprint',
            message: 'Overprint',
          },
          {
            key: 'missing-font',
            message: 'Missing Font/Images',
          },
          {
            key: 'borders',
            message: 'Borders',
          }
        ]
      },
      printMarks: {
        "title": "Print Marks",
        "sub_complaints": [
          {
            key: 'print-marks',
            message: 'Print Marks',
          },
        ]
      },
      finishing: {
        "title": "Finishing",
        "sub_complaints": [
          {
            key: 'cutting-folding',
            message: 'Cutting/Folding',
          },
        ]
      },
      delayed: {
        "title": "Delayed",
        "sub_complaints": [
          {
            key: 'delayed',
            message: 'Delayed',
          },
        ]
      },
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