<template>
    <div class="container">
        <div class="card card-login mx-auto mt-5">
            <div class="card-header">
                Reset Password
            </div>
            <div class="card-body">
                <div class="text-center mb-4">
                    <h4>Forgot your password?</h4>
                    <p>Enter your email address and we will send you instructions on how to reset your password.</p>
                </div>
                <form>
                    <div class="form-group">
                        <div class="form-label-group">
                            <input autofocus="autofocus" class="form-control" id="inputEmail" placeholder="Enter email address" required="required" type="email"> <label for="inputEmail">Enter email address</label>
                        </div>
                    </div>
                    <router-link class="btn btn-primary btn-block" to="/login">Reset Password</router-link>
                </form>
                <div class="text-center">
                    <router-link class="d-block small mt-3" to="/register">Register an Account</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

</script>
<style lang="scss">

</style>
