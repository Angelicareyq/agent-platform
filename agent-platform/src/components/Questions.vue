<template>
    <div v-if="!invalidQuestion">
        <div class="header">
            <h1>{{ data.title }}</h1>
            <h4>{{ data.subTitle }}</h4>
            <h3 v-if="action"><span style="font-weight: bold; color: #222222;">Action: </span> {{ action }}</h3>
        </div>
        <div class="question">
            <h1 class="question" v-html="question.text"></h1>
            <div class="btn-container">
                <button :class="option.class" v-for="option in question.options" :key="option.id" @click="answerQuestion(option)">
                    <span v-html="option.text"></span>
                </button>
            </div>
        </div>
    </div>
    <div v-else>
        <h1>Error</h1>
        <h3>The question does not exist, please go back to the main page.</h3>
        <div class="button-container">
            <button class="btnprimary" @click="goToHome"> Back to homepage</button>
        </div>
    </div>
</template>

<script>
import Solutions from './Solutions.vue';

/* eslint-disable */
export default {
    name: "Questions",
    components: {
        Solutions
    },
    data() {
        return {
            invalidQuestion: false,
            questionId: null,
            data: {},
            action: "",
            question: {}
        };
    },
    created() {
        this.loadData(this.$route.params.id)
            .then(data => {
                this.data = data;
                this.action = this.data.action;
                this.question = this.data.question;
            })
            .catch(error => {
                this.invalidQuestion = true;
                console.error('Error loading JSON:', error);
            });
    },
    methods: {
        loadData(fileName) {
            return import(`@/solutions/${fileName}.json`)
                .then(module => {
                    return module.default;
                })
                .catch(error => {
                    console.error(`Error loading ${fileName}:`, error);
                    throw error;
                });
        },
        answerQuestion(option) {
            this.question = option.question || {};
            this.action = option.action !== "" ? option.action : "";

            if (Object.keys(option.question).length === 0) {
                console.info(JSON.stringify(option.solution))
                this.$router.push({
                    name: "Solutions",
                    query: {
                        solutionInformation: JSON.stringify(option.solution)
                    }
                });
            }
        },
        goToHome() {
            this.$router.push({ name: 'ComplaintsSection' });
        }
    }
};
</script>

<style scoped>
.header {
    margin: 80px 0 40px 0;
    color: #222222;
}

h4 {
    color: #757575;
    font-weight: 500;
    margin: 0 0 20px 0;
}

h3 {
    color: #222;
    font-weight: 500;
}

.question {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.btnprimary {
    background-color: #E84E1E;
    color: white;
    margin: 0 5px;
    font-weight: 900;
    border-radius: 12px;
    border: none;
    font-size: 24px;
    padding: 16px 24px;
    text-align: center;
    width: auto;
}

.btnprimary:hover {
    background-color: #F25C2D;
    color: #FBFBFB;
}

.btnsecondary {
    background-color: white;
    margin: 0 5px;
    color: black;
    font-weight: 900;
    border-radius: 12px;
    border: 2px solid black;
    font-size: 24px;
    padding: 16px 24px;
    text-align: center;
    width: auto;
}

.btnsecondary:hover {
    background-color: #F4F4F4;
    color: black;
}
</style>