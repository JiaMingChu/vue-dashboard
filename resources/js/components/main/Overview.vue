<template>
    <div>
        <div class="row">
            <div class="col-xl-3 col-sm-6 mb-3">
                <div class="card text-white bg-primary">
                    <div class="card-body">
                        <div class="card-body-icon">
                            <i class="fas fa-fw fa-comments"></i>
                        </div>
                        <div class="mr-5">
                            26 New Messages!
                        </div>
                    </div><a class="card-footer text-white clearfix small z-1" href="#"><span class="float-left">View Details</span> <span class="float-right"><i class="fas fa-angle-right"></i></span></a>
                </div>
            </div>
            <div class="col-xl-3 col-sm-6 mb-3">
                <div class="card text-white bg-warning">
                    <div class="card-body">
                        <div class="card-body-icon">
                            <i class="fas fa-fw fa-list"></i>
                        </div>
                        <div class="mr-5">
                            11 New Tasks!
                        </div>
                    </div><a class="card-footer text-white clearfix small z-1" href="#"><span class="float-left">View Details</span> <span class="float-right"><i class="fas fa-angle-right"></i></span></a>
                </div>
            </div>
            <div class="col-xl-3 col-sm-6 mb-3">
                <div class="card text-white bg-success">
                    <div class="card-body">
                        <div class="card-body-icon">
                            <i class="fas fa-fw fa-shopping-cart"></i>
                        </div>
                        <div class="mr-5">
                            123 New Orders!
                        </div>
                    </div><a class="card-footer text-white clearfix small z-1" href="#"><span class="float-left">View Details</span> <span class="float-right"><i class="fas fa-angle-right"></i></span></a>
                </div>
            </div>
            <div class="col-xl-3 col-sm-6 mb-3">
                <div class="card text-white bg-danger">
                    <div class="card-body">
                        <div class="card-body-icon">
                            <i class="fas fa-fw fa-life-ring"></i>
                        </div>
                        <div class="mr-5">
                            13 New Tickets!
                        </div>
                    </div><a class="card-footer text-white clearfix small z-1" href="#"><span class="float-left">View Details</span> <span class="float-right"><i class="fas fa-angle-right"></i></span></a>
                </div>
            </div>
        </div>
        <div class="card mb-3">
            <div class="card-header">
                <i class="fas fa-chart-area"></i> Market survey
            </div>
            <div class="card-body">
                <ve-histogram :data="chartData"></ve-histogram>
            </div>
            <div class="card-footer small text-muted">
                Updated yesterday at 11:59 PM
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                chartData: {
                  columns: ['日期', '訪問用户', '下單用户', '下單率'],
                  rows: [
                    { '日期': '1/1', '訪問用户': 1393, '下單用户': 1093, '下單率': 0.32 },
                    { '日期': '1/2', '訪問用户': 3530, '下單用户': 3230, '下單率': 0.26 },
                    { '日期': '1/3', '訪問用户': 2923, '下單用户': 2623, '下單率': 0.76 },
                    { '日期': '1/4', '訪問用户': 1723, '下單用户': 1423, '下單率': 0.49 },
                    { '日期': '1/5', '訪問用户': 3792, '下單用户': 3492, '下單率': 0.323 },
                    { '日期': '1/6', '訪問用户': 4593, '下單用户': 4293, '下單率': 0.78 }
                  ]
                }
            }
        }
    }

</script>
<style lang="scss">
    .chart-block::after{
        clear: both
    }
    .chart-block{
        position: relative
    }
</style>
