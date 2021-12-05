<template>
    <div class="registration-form">
        <h1>
            <strong>Registration form</strong><br>
            <i>to submit your product</i>
        </h1>
        <form @submit.prevent="submit">
            <div class="form-group">
                <input type="text" placeholder="Product Name*" class="form-control" name="name" id="name" v-model="fields.name" />
                <div v-if="errors && errors.name" class="text-danger">{{ errors.name[0] }}</div>
            </div>

            <div class="form-group">
                <input type="number" placeholder="Quantity of stock*" class="form-control" name="stock" id="stock" v-model="fields.stock" />
                <div v-if="errors && errors.stock" class="text-danger">{{ errors.stock[0] }}</div>
            </div>

            <div class="form-group">
                <input type="number" class="form-control" name="price" id="price" step='0.01' placeholder='price*' v-model="fields.price"/>
                <div v-if="errors && errors.price" class="text-danger">{{ errors.price[0] }}</div>
            </div>
            <div class="requiredInfo">
                *Required field
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                fields: {},
                errors: {},
            }
        },
        methods: {
            submit() {
                this.errors = {};
                axios.post('api/submit', this.fields).then(response => {
                    this.$emit('updateProducts', response.data)
                }).catch(error => {
                    if (error.response.status === 422) {
                        this.errors = error.response.data.errors || {};
                    }
                });
            },
        },
    }
</script>
