<template>
    <tr :id="row.id">
        <td
            is="cell"
            v-for="cell in row.cells"
            v-bind:cell="cell"
            v-bind:key="cell.id">
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
        ]
    };
</script>