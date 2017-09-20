<template>
    <tr :id="row.id">
        <td
            is="cell"
            v-for="cell in row.cells"
            :cell="cell"
            :key="cell.id"
            @cellClicked="cellClicked">
        </td>
    </tr>
</template>

<script>
    export default {
        props: [
            /**
             {
                 // string
                 'id',

                 // array
                 'cells'
             }
             */
            'row'
        ],

        methods: {
            cellClicked: function (cell, event) {
                this.$emit('cellClicked', cell, event);
            }
        }
    };
</script>
