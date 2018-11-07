<template>
    <div>
        <div class="card mb-3">
            <div class="card-header">
                <i class="fas fa-chart-area"></i> Users
            </div>
            <div class="card-body">
                <v-table
                     class="mb-3"
                     is-horizontal-resize
                     style="width:100%"
                     :multiple-sort="multipleSort"
                     :columns="columns"
                     :table-data="tableData"
                     @sort-change="sortChange"
                     row-hover-color="#eee"
                     row-click-color="#edf7ff"
                ></v-table>
                <v-pagination
                        :total="600"
                        :layout="['prev', 'pager', 'next']">
                </v-pagination>
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
            tableData: [
                {"name":"Nick","phone":"0938442871","birthday":"1990-03-27","consumption":"$10,384"},
                {"name":"Bob","phone":"0932345667","birthday":"1983-09-10","consumption":"$82,102"},
                {"name":"Jack","phone":"0938123345","birthday":"1985-03-11","consumption":"$23,154"},
                {"name":"Benjiming","phone":"0932987801","birthday":"1990-03-27","consumption":"$33,190"},
                {"name":"Andy","phone":"0955491872","birthday":"1976-05-30","consumption":"$55,289"},
             ],
            multipleSort:false,
            columns: [
                {field: 'name', title: 'Name', width: 80, titleAlign: 'center',columnAlign:'center',orderBy:'asc',isResize:true},
                {field: 'phone', title: 'Phone', width: 150, titleAlign: 'center',columnAlign:'center',orderBy:'asc',isResize:true},
                {field: 'birthday', title: 'Birthday', width: 150, titleAlign: 'center',columnAlign:'center',isResize:true},
                {field: 'consumption', title: 'Consumption',width: 280, titleAlign: 'center',columnAlign:'center',orderBy:'asc', isResize:true}
            ]

        }
    },
    methods: {
        sortChange(params){
            console.log(params)
        }
    }
}
</script>
<style lang="scss">

</style>
