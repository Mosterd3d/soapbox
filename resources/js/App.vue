<template>
    <div class="app">
        <div class="container">
            <div class="inner-container">
                <product-create-form v-on:updateProducts="update"></product-create-form>
                <div class="break">
                    <hr>
                    <hr>
                    <hr>
                </div>
                <product-list :items="items" v-on:updateProducts="update"></product-list>
            </div>
            <div class="logo"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data(){
            return {
                items: null
            }
        },
        components: {
            productCreateForm: () => import('./components/products/ProductCreateForm'),
            productList: () => import('./components/products/ProductList'),
        },
        methods: {
            update(e){
                this.items = e;
            }
        },
        mounted () {
            axios.get('api/list').then(function(response){
                this.items = response.data;
            }.bind(this));
        }
    }
</script>
