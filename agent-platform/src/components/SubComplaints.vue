<template>
    <div>
        <h1>{{ parseSubComplaints.title }}</h1>
        <h3>Select one to start</h3>
    </div>
    <div class="container">
        <div class="column">
            <MainCard v-for="complaint in parseSubComplaints.sub_complaints" :key="complaint.key"
                @click="toQuestion(complaint.key)" style="margin-right: 30px;" :msg="complaint.message"
                :disabled="false">
            </MainCard>
        </div>
    </div>
</template>

<script>
import MainCard from './MainCard.vue'


export default {
    name: "SubComplaints",
    props: {
        subComplaintsParam: {
            type: String,
            required: true
        }
    },
    components: {
        MainCard
    },
    computed: {
        parseSubComplaints() {
            const subComplaints = JSON.parse(this.subComplaintsParam);
            return subComplaints;
        }
    },
    methods: {
        toQuestion(questionId) {
            this.$router.push({ path: '/questions/' + questionId });
        }
    },
}
</script>

<style scoped>
.container {
    display: flex;
}

.column {
    display: flex;
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