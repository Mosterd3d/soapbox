<template>
    <div class="productList">
        <select v-model="select" style="margin-bottom:10px" @change="deleteProduct">
            <option value="">Select</option>
            <option value="">Delete</option>
        </select>
        <table class="table table-bordered table-responsive-lg">
            <tr>
                <th style="width: 1%;">
                    <input type="checkbox" @click="select_all_via_check_box" v-model="all_select">
                </th>
                <th style="width: 20%;">Product Name</th>
                <th style="width: 5%;">Quantity in Stock</th>
                <th style="width: 10%;">Price</th>
                <th style="width: 10%;">Total</th>
            </tr>
                <tr class="single-product" v-for='(product, index) in items'>
                    <td><input type="checkbox" v-model="deleteItems" :value="`${product.id}`"></td>
                    <td><input size="14" type="text" placeholder="Product Name*" class="form-control" name="name" id="name" v-model="product.name" @blur="handleBlur(product)"/></td>
                    <td><input size="4" type="number" placeholder="Quantity of stock*" class="form-control" name="stock" id="stock" v-model="product.stock" @blur="handleBlur(product)"/></td>
                    <td><input size="10" step='0.01' type="number" placeholder="Price*" class="form-control" name="price" id="price" v-model="product.price" @blur="handleBlur(product)"/></td>
                    <td>{{(product.price * product.stock).toFixed(2)}}</td>
                </tr>
        </table>
    </div>
</template>

<script>
    export default {
        name: "ProductList",
        props:['items'],
        data() {
            return {
                deleteItems: [],
                select: '',
                all_select: false,
                select_delete_text: 'Delete All',
                fields: {},
                // errors: {}
            }
        },
        methods: {
            deleteProduct() {
                axios.post('api/remove', this.deleteItems )
                    .then((response) => {
                        this.$emit('updateProducts', response.data)
                    })
            },
            select_all_via_check_box(){
                if(this.all_select === false){
                    this.all_select = true
                    this.items.forEach(item => {
                        this.deleteItems.push(item.id)
                    });
                }else{
                    this.all_select = false
                    this.deleteItems = []
                }
            },
            handleBlur(product) {
                // this.errors = {};
                this.fields = {name: product.name, stock: product.stock, price: product.price}
                axios.post(`api/update/${product.id}`, this.fields).then(response => {
                    this.$emit('updateProducts', response.data)
                }).catch(error => {
                    if (error.response.status === 422) {
                        // TODO: @Do something with error handling :)
                        // this.errors = error.response.data.errors || {};
                    }
                });
            },
        }
    }
</script>
