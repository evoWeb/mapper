<template>
    <div id="mapper">

        <table>
            <tr
                is="row"
                v-for="row in rows"
                :row="row"
                :key="row.id"
                @cellClicked="cellClicked">
            </tr>
        </table>

        <div is="control" @invertCellValue="invertCellValue" @setCellValue="setCellValue"></div>

    </div>
</template>

<script>
    import Vue from 'vue';

    export default {
        data () {
            return {
                rows: [],
                currentCell: {}
            }
        },

        mounted: function () {
            this.prepareRows();
        },

        methods: {
            prepareRows: function () {
                let rows = [];
                for (let i = 0; i < 5; i++) {
                    let row = { id: i, cells: [] };
                    for (let j = 0; j < 5; j++) {
                        let cell = {id: i + '_' + j, top: false, right: false, bottom: false, left: false, current: false };

                        row.cells.push(cell);
                    }
                    rows.push(row);
                }

                rows[2]['cells'][2]['type'] = 'room';
                rows[2]['cells'][2]['current'] = true;

                this.rows = rows;
                this.currentCell = this.rows[2]['cells'][2];
            },

            invertCellValue(key) {
                Vue.set(this.currentCell, key, !this.currentCell[key]);
            },

            setCellValue(key, value) {
                Vue.set(this.currentCell, key, value);
            },

            cellClicked: function (cell) {
                if (cell.id !== this.currentCell.id) {
                    this.currentCell = cell;
                }
            }
        }
    }
</script>
