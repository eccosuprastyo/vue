<template>
    <div id="login">
        <div class="h-100 bg-plum-plate-login bg-animation">
            <div class="d-flex h-100 justify-content-center align-items-center">
                <b-col md="8" class="mx-auto app-login-box">
                    <div class="modal-dialog w-100 mx-auto">
                        <div class="modal-content">
                            <div class="modal-body">
                                <div class="h5 modal-title text-center">
                                    <h4 class="mt-2">
                                        <div>Welcome,</div>
                                        <span>Please sign in to your account below.</span>
                                    </h4>
                                </div>
                                <form ref="form">
                                    <b-form-group id="usernameGroup1"
                                                label-for="usernameLabel1">
                                        <b-form-input id="usernameInput"
                                                    type="text"
                                                    name="username" 
                                                    v-model="username"
                                                    required
                                                    placeholder="Enter username...">
                                        </b-form-input>
                                        
                                    </b-form-group>
                                    <b-form-group id="exampleInputGroup2"
                                                label-for="exampleInput2">
                                        <b-form-input id="exampleInput2"
                                                    type="password"
                                                    name="password" 
                                                    v-model="password"
                                                    required
                                                    placeholder="Enter password...">
                                        </b-form-input>
                                    </b-form-group>
                                   
                                </form>
                                <div class="divider"/>
                            </div>
                            <div class="modal-footer clearfix">
                                <div class="float-right">
                                    <b-button variant="primary"  @click="doLogin" size="lg">Login</b-button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="text-center text-white opacity-8 mt-3">
                        <strong> Copyright &copy; camellabs.com </strong>
                    </div>
                </b-col>
            </div>
        </div>
    </div>
</template>


<script>
    import {  mapActions } from 'vuex'
    export default {
        name: 'Login',
        data: () => ({
            username: "",
            password: "",
        }),
        methods: {
            ...mapActions('login', {
                login: 'login'
            }),
                reset() {
                this.$refs.form.reset();
            },
            doLogin() {
                const { username, password } = this;
                if(this.username != "" && this.password != "") {
                    this.login({ username, password });
                }else{
                    alert('Please fill the text!');
                }
            }
        },
    }
</script>
