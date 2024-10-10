<template>
  <div>
    <h1>Complaints</h1>
    <h3>Select one to start</h3>
  </div>
  <div class="container">
    <div class="column">

      <h4>Logistic Issue:</h4>
      <MainCard @click="toQuestion('delivery-issues')" msg="Delivery Issues" :disabled=false></MainCard>

    </div>

    <div class="column">
      <h4>Artwork Issue:</h4>
      <MainCard @click="toQuestion('deadline-missed')" msg="Deadline Missed" :disabled=false></MainCard>
      <MainCard @click="goToSubComplaints(this.designIssues)" msg="Design Issues" :disabled=false></MainCard>
      <MainCard @click="goToSubComplaints(this.printMarks)" msg="Print Marks" :disabled=false></MainCard>
      <MainCard @click="toQuestion('PAC')" msg="Premium Artwork Check" :disabled=false></MainCard>



    </div>

    <div class="column">
      <h4>Quality Issue:</h4>
      <MainCard @click="toQuestion('damage')" msg="Damaged" :disabled=false></MainCard>
      <MainCard @click="goToSubComplaints(this.printQuality)" msg="Print Quality" :disabled=false></MainCard>
      <MainCard @click="goToSubComplaints(this.finishing)" msg="Finishing" :disabled=false></MainCard>



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

      designIssues: {
        "title": "Design Issues",
        "sub_complaints": [
          {
            key: 'incorrect-artwork',
            message: 'Incorrect Artwork/Typo',
          },
          {
            key: 'images-disappearing',
            message: 'Text/Images disappearing',
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
          {
            key: 'template',
            message: 'Template',
          },
          {
            key: 'cutcontour',
            message: 'Cutcontour',
          }, {
            key: 'fold-lines',
            message: 'Fold Lines',
          },
        ]
      },
      finishing: {
        "title": "Finishing",
        "sub_complaints": [
          {
            key: 'Folding',
            message: 'Folding',
          },
          {
            key: 'Coating',
            message: 'Coating',
          },
          {
            key: 'Binding',
            message: 'Binding',
          },
          {
            key: 'Cutting',
            message: 'Cutting',
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

h4 {
  margin: 0px 0px 40px 0px;
  color: #000000;
  font-weight: 600;
}
</style>