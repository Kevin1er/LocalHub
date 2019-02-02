Vue.component('query', {
    template: `
    <div class="container-body">
        <form class="items-body">
        <div class="items-body">
            <div class="item-body">
                <div class="title">
                    LocalHub
                </div>
            </div>
            <div class="item-body">
                <div id="form" class="form">
                    <input id="search" class="form-search" type="search" onfocus="searchFocus()" onblur="searchBlur()" onmouseover="searchOver()" onmouseout="searchOut()" placeholder="Entrez une question ...">
                    <input class="form-button" type="submit" @click.prevent="toSearch()" value="➔">
                </div>
            </div>
        </div>
        </form>
    </div>`,
    methods: { 
        toSearch: function () {
            this.$emit("search"); 
        }, 
    },
});

Vue.component('answer-item', {
    template: `
    <li class="li-container">
        <div class="li-title">Titre</div>
        <div class="li-content">Description</div>
    </li>`,
});

Vue.component('answer', {
    template: `
    <div class="container-answer">
        <ul class="ul-container" v-for="n in 10">
            <answer-item/>
        </ul>
    </div>`,
});

let vm = new Vue({
    el: '#container-vue',
    template: `
    <query v-if="type === 'search'" @search="search"/>
    <answer v-else/>
    `,
    data: () => ({ type: "search"}),
    methods: { 
        search: function () {
            this.type = "answer";
        }, 
    },
});