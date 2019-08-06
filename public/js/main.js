const image = 'https://placehold.it/200x150';
const cartImage = 'https://placehold.it/100x80';
const API = 'https://raw.githubusercontent.com/digor/GB-Online-Store/master/responses';

let app = new Vue ({
    el: '#app',
    data: {
    },
    methods: {
        getJson (url) {
            return fetch (url)
                .then (result => result.json ())
                .catch (error => {
                    this.$refs.err.setError (error)
                })
        },
        postJson (url, data) {
            return fetch (url, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify (data)
            })
                .then (result => result.json ())
                .catch (error => {
                    this.$refs.err.setError (error)
                })
        },
        putJson (url, data) {
            return fetch (url, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify (data)
            })
                .then (result => result.json ())
                .catch (error => {
                    this.$refs.err.setError (error)
                })
        },
        deleteJson(url){
            return fetch (url, {
                method: 'DELETE',
                headers: {
                    "Content-Type": "application/json"
                }
            })
                .then (result => result.json ())
                .catch (error => {
                    this.$refs.err.setError (error)
                })
        }
    },
    components: {
        products, cart, error
    }
})