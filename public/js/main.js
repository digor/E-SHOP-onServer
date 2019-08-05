const image = 'https://placehold.it/200x150';
const cartImage = 'https://placehold.it/100x80';
const API = 'https://raw.githubusercontent.com/digor/GB-Online-Store/master/responses';

let app = new Vue ({
    el: '#app',
    data: {
        //userSearch: ''
    },
    methods: {
        getJSON (url) {
            return fetch (url)
                .then (result => result.json ())
                .catch (error => {
                    this.$root.$refs.err.setError(error);
                    console.log (error);
                });
        },
        postJSON (url) {
            return fetch (url, {
                method: 'POST',
                headers: {
                    "Content-Type": "aplication/json"
                },
                body: JSON.stringify (data)
            })
                .then (result => result.json ())
                .catch (error => {
                    this.$root.$refs.err.setError(error);
                    console.log (error);
                });
        },
        putJSON (url) {
            return fetch (url, {
                method: 'POST',
                headers: {
                    "Content-Type": "aplication/json"
                },
                body: JSON.stringify (data)
            })
                .then (result => result.json ())
                .catch (error => {
                    this.$root.$refs.err.setError(error);
                    console.log (error);
                });
        },
        filter () {
            let regExp = new RegExp(this.userSearch, 'i');
            this.filtered = this.products.filter(el => regExp.test (el.product_name));
        }
    },
    components: {
        products, cart, error, filterEl
    }
})