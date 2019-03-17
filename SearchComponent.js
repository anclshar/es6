Vue.component('search', {
    data(){
        return {
            userSearch: ''
        }
    },
    method: {
        filter(){
            let regexp  = new RegExp(this.userSearch, 'i')
            this.filtered = this.products.filter(el => regexp.test(el.product_name))
        }
    },
    mounted(){
        getJson(url)
        {
            return fetch(url)
                .then(result => result.json())
                .catch(error => {
                    console.log(error)
                })
        }
    },
    template: ` <div class="products">
                    <product v-for="item of filtered" :key="item.id_product" :img="imgCatalog" :product="item"></product>
            </div>`
})