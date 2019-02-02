Vue.component('answer-item', {
    template: `
    <li class="li-container">
        <div class="li-title"><a class="a-title" href="">Titre</a></div>
        <div class="li-content">Description</div>
    </li>`,
});

Vue.component('answer', {
    template: `
    <div class="container-answers">
        <ul class="ul-container" v-for="n in 10">
            <answer-item/>
        </ul>
    </div>`,
});

let vm = new Vue({
    el: '#container-vue',
    template: `
    <answer/>`,
    methods: { 
        search: function () {
            this.type = "answer";
        }, 
    },
});