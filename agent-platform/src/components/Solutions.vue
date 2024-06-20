<template>
    <div class="container">
        <div class="column">
            <h1>{{ parseSolution.title }}</h1>
            <h2 v-if="parseSolution.action">
                <span style="font-weight: bold; color: #222222;">Action: </span>
                <span v-html="formattedText(parseSolution.action)"></span>
            </h2>
            <h2 v-if="parseSolution && parseSolution.validComplaint === true" class="valid-complaint-status">Valid complaint</h2>
            <h2 v-else-if="parseSolution && parseSolution.validComplaint === false" class="invalid-complaint-status">Invalid complaint</h2>
        </div>
        <div class="column">
            <h3>Summary of questions</h3>
            <div v-for="(question, index) in parseSolution.questions" :key="index">
                <h4>{{ question.title }} -
                    <span v-if="question.isValid" style="font-weight: bold; color: #73C15A;">Yes</span>
                    <span v-else style="font-weight: bold; color: #F11A1A;">No</span>
                </h4>
            </div>
        </div>
    </div>
    <h3>Solutions and next steps</h3>
    <div>
        <div v-for="(summary, index) in parseSolution.summaries" :key="index" class="solutions">
            <p><span style="font-weight: bold; color: #222222;">{{ summary.title }}</span></p>
            <p v-html="formattedText(summary.description)"></p>
        </div>
    </div>
    <div>
        <div class="button-container">
            <button class="btnprimary" @click="goToHome">Back to homepage</button>
        </div>
    </div>
</template>

<script>
/* eslint-disable */
export default {
    name: "Solutions",
    props: {
        solutionInformation: {
            type: String,
            required: true
        }
    },
    computed: {
        parseSolution() {
            const solution = JSON.parse(this.solutionInformation);
            return solution;
        }
    },
    methods: {
        formattedText(text) {
            return text.replace(/\n/g, '<br>');
        },
        goToHome() {
            this.$router.push({ name: 'ComplaintsSection' });
        }
    }
}
</script>

<style scoped>
h1 {
    color: #222222;
    font-size: 46px;
    font-weight: 500;
    margin: 0;
}

h2 {
    color: #222222;
    font-size: 18px;
    font-weight: 400;
}

h3 {
    color: #222222;
    font-weight: 700;
}

h4 {
    color: #222222;
    font-weight: 500;
    margin: 0 0 20px 0;
    max-width: 400px;
}

.container {
    margin: 80px 0 40px 0;
    color: #222222;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
}

.column {
    flex: 1;
    margin: 0 10px;
}

.solutions {
    flex: 1;
    background-color: #F8F8F8;
    padding: 12px 24px;
    margin: 20px 0 20px 0;
    border-radius: 12px;
}

.valid-complaint-status {
    background-color: #EAF6E6;
    margin-top: 0;
    color: #73C15A;
    font-weight: 700;
    border-radius: 12px;
    border: none;
    padding: 6px 12px;
    text-align: center;
    display: inline-block;
}

.invalid-complaint-status {
    background-color: #FFF1F1;
    margin-top: 0;
    color: #F11A1A;
    font-weight: 700;
    border-radius: 12px;
    border: none;
    padding: 6px 12px;
    text-align: center;
    display: inline-block;
}

.button-container {
    text-align: center;
    margin: 40px 0px;

}

.btnprimary {
    background-color: #E84E1E;
    color: white;
    margin: 0 5px;
    font-weight: 900;
    border-radius: 12px;
    border: none;
    font-size: 16px;
    padding: 16px 24px;
    text-align: center;
    width: auto;
}

.btnprimary:hover {
    background-color: #F25C2D;
    color: #FBFBFB;
}
</style>