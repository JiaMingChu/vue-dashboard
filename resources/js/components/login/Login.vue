<template>
    <div class="container">
        <div class="card card-login mx-auto mt-5">
            <div class="card-header">
                Login
            </div>
            <div class="card-body">
                <form>
                    <div class="form-group">
                        <div class="form-label-group">
                            <input autofocus="autofocus" class="form-control" id="inputEmail" placeholder="Email address" required="required" type="email"> <label for="inputEmail">Email address</label>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="form-label-group">
                            <input class="form-control" id="inputPassword" placeholder="Password" required="required" type="password"> <label for="inputPassword">Password</label>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="checkbox">
                            <label><input type="checkbox" value="remember-me"> Remember Password</label>
                        </div>
                    </div>
                    <router-link class="btn btn-primary btn-block" to="/">Login</router-link>
                </form>
                <div class="text-center">
                    <router-link class="d-block small mt-3" to="/register">Register an Account</router-link>
                    <router-link class="d-block small" to="/forgotPassword">Forgot Password?</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
</script>
<style lang="scss" scoped>

</style>
