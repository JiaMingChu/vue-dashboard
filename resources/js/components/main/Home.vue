<template>
    <div>
        <nav class="navbar navbar-expand navbar-dark bg-dark static-top">
            <router-link to="/" class="navbar-brand mr-1">Vue Dashboard</router-link> <button class="btn btn-link btn-sm text-white order-1 order-sm-0" id="sidebarToggle"><i class="fas fa-bars"></i></button> <!-- Navbar Search -->

            <ul class="navbar-nav ml-auto">
                <li class="nav-item dropdown no-arrow mx-1">
                    <a aria-expanded="false" aria-haspopup="true" class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" id="alertsDropdown" role="button"><i class="fas fa-bell fa-fw"></i> <span class="badge badge-danger">1</span></a>
                    <div aria-labelledby="alertsDropdown" class="dropdown-menu dropdown-menu-right">
                        <a class="dropdown-item" href="#">Notice</a> <a class="dropdown-item" href="#">Notice 1</a>
                        <div class="dropdown-divider"></div><a class="dropdown-item" href="#">Notice 2</a>
                    </div>
                </li>
                <li class="nav-item dropdown no-arrow mx-1">
                    <a aria-expanded="false" aria-haspopup="true" class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" id="messagesDropdown" role="button"><i class="fas fa-envelope fa-fw"></i> <span class="badge badge-danger">7</span></a>
                    <div aria-labelledby="messagesDropdown" class="dropdown-menu dropdown-menu-right">
                        <a class="dropdown-item" href="#">Message</a> <a class="dropdown-item" href="#">Message1</a>
                        <div class="dropdown-divider"></div><a class="dropdown-item" href="#">Message 2</a>
                    </div>
                </li>
                <li class="nav-item dropdown no-arrow">
                    <a aria-expanded="false" aria-haspopup="true" class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" id="userDropdown" role="button"><i class="fas fa-user-circle fa-fw"></i></a>
                    <div aria-labelledby="userDropdown" class="dropdown-menu dropdown-menu-right">
                        <a class="dropdown-item" href="#">Settings</a> <a class="dropdown-item" href="#">Activity Log</a>
                        <div class="dropdown-divider"></div><a class="dropdown-item" data-target="#logoutModal" data-toggle="modal" href="#">Logout</a>
                    </div>
                </li>
            </ul>
        </nav>
        <div id="wrapper">
            <!-- Sidebar -->
            <ul class="sidebar navbar-nav">
                <li class="nav-item" :class="{ 'active': $route.path == '/' }">
                    <router-link to="/" class="nav-link"><i class="fas fa-fw fa-tachometer-alt"></i> <span>Dashboard</span></router-link>
                </li>
                <li class="nav-item" :class="{ 'active': $route.path == '/charts' }">
                    <router-link to="/charts" class="nav-link"><i class="fas fa-fw fa-chart-area"></i> <span>Charts</span></router-link>
                </li>
                <li class="nav-item" :class="{ 'active': $route.path == '/tables' }">
                    <router-link to="/tables" class="nav-link"><i class="fas fa-fw fa-table"></i> <span>Tables</span></router-link>
                </li>
            </ul>
            <div id="content-wrapper">
                <div class="container-fluid" style="display: inline-block">
                    <!-- Breadcrumbs-->
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item">
                            <a href="#">Dashboard</a>
                        </li>
                        <li class="breadcrumb-item active">{{ $route.path.split('/')[1] | capitalize }}</li>

                    </ol>
                    <router-view></router-view>
                </div><!-- /.container-fluid -->
                <!-- Sticky Footer -->
                <footer class="sticky-footer">
                    <div class="container my-auto">
                        <div class="copyright text-center my-auto">
                            <span>Copyright © Benjiming 2018</span>
                        </div>
                    </div>
                </footer>
            </div><!-- /.content-wrapper -->
        </div><!-- /#wrapper -->
        <!-- Scroll to Top Button-->
         <a class="scroll-to-top rounded" href="#page-top"><i class="fas fa-angle-up"></i></a> <!-- Logout Modal-->
        <div aria-hidden="true" aria-labelledby="exampleModalLabel" class="modal fade" id="logoutModal" role="dialog" tabindex="-1">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Ready to Leave?</h5><button aria-label="Close" class="close" data-dismiss="modal" type="button"><span aria-hidden="true">×</span></button>
                    </div>
                    <div class="modal-body">
                        Select "Logout" below if you are ready to end your current session.
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-secondary" data-dismiss="modal" type="button">Cancel</button> <router-link to="/login" class="btn btn-primary" data-dismiss="modal">Logout</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script src="{{ asset('js/menu.js') }}"></script>
<script>
    export default {
        data: function () {
            return {
              active: ''
            }
        },
        filters: {
            capitalize: function(value) {
                if (!value) return ''
                value = value.toString()
                return value.charAt(0).toUpperCase() + value.slice(1)
            }
        },
        watch:{
            '$route' (to, from) {

             }
        },
        mounted(){
            $("#sidebarToggle").on('click',function(e) {
              e.preventDefault();
              $("body").toggleClass("sidebar-toggled");
              $(".sidebar").toggleClass("toggled");
            });

            // Prevent the content wrapper from scrolling when the fixed side navigation hovered over
            $('body.fixed-nav .sidebar').on('mousewheel DOMMouseScroll wheel', function(e) {
              if ($(window).width() > 768) {
                var e0 = e.originalEvent,
                  delta = e0.wheelDelta || -e0.detail;
                this.scrollTop += (delta < 0 ? 1 : -1) * 30;
                e.preventDefault();
              }
            });

            // Scroll to top button appear
            $(document).on('scroll',function() {
              var scrollDistance = $(this).scrollTop();
              if (scrollDistance > 100) {
                $('.scroll-to-top').fadeIn();
              } else {
                $('.scroll-to-top').fadeOut();
              }
            });

            // Smooth scrolling using jQuery easing
            $(document).on('click', 'a.scroll-to-top', function(event) {
              var $anchor = $(this);
              $('html, body').stop().animate({
                scrollTop: ($($anchor.attr('href')).offset().top)
              }, 1000, 'easeInOutExpo');
              event.preventDefault();
            });
        }

    }
</script>
<style>

</style>
