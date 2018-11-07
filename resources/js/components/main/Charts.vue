<template>
    <div>
        <div class="card mb-3">
            <div class="card-header">
                <i class="fas fa-chart-area"></i> Market survey Bar
            </div>
            <div class="card-body">
                <ve-histogram :data="chartData" :settings="chartSettings"></ve-histogram>
            </div>
            <div class="card-footer small text-muted">
                Updated yesterday at 11:59 PM
            </div>
        </div>
        <div class="row mb-3">
            <div class="col-lg-8">
                <div class="card-header">
                    <i class="fas fa-chart-area"></i> Market survey Line
                </div>
                <div class="card-body">
                    <ve-line :data="chartData" :settings="chartSettings"></ve-line>
                </div>
                <div class="card-footer small text-muted">
                    Updated yesterday at 11:59 PM
                </div>
            </div>
            <div class="col-lg-4">
                <div class="card-header">
                    <i class="fas fa-chart-area"></i> Market survey Pie
                </div>
                <div class="card-body">
                    <ve-pie :data="chartData"></ve-pie>
                </div>
                <div class="card-footer small text-muted">
                    Updated yesterday at 11:59 PM
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            this.chartSettings = {
                axisSite: { right: ['下單率'] },
                yAxisType: ['KMB', 'percent'],
                yAxisName: ['數值', '比率']
            }
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

</style>
