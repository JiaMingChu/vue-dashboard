<template>
    <div class="container">
        <div class="card card-register mx-auto mt-5">
            <div class="card-header">
                Register an Account
            </div>
            <div class="card-body">
                <form>
                    <div class="form-group">
                        <div class="form-row">
                            <div class="col-md-6">
                                <div class="form-label-group">
                                    <input autofocus="autofocus" class="form-control" id="firstName" placeholder="First name" required="required" type="text"> <label for="firstName">First name</label>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-label-group">
                                    <input class="form-control" id="lastName" placeholder="Last name" required="required" type="text"> <label for="lastName">Last name</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="form-label-group">
                            <input class="form-control" id="inputEmail" placeholder="Email address" required="required" type="email"> <label for="inputEmail">Email address</label>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="form-row">
                            <div class="col-md-6">
                                <div class="form-label-group">
                                    <input class="form-control" id="inputPassword" placeholder="Password" required="required" type="password"> <label for="inputPassword">Password</label>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-label-group">
                                    <input class="form-control" id="confirmPassword" placeholder="Confirm password" required="required" type="password"> <label for="confirmPassword">Confirm password</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <router-link class="btn btn-primary btn-block" to="/login">Register</router-link>
                </form>
                <div class="text-center">
                    <router-link class="d-block small mt-3" to="/login">Login page</router-link>
                    <router-link class="d-block small" to="/forgotPassword">Forgot Password?</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    
</script>
<style lang="scss">

</style>
