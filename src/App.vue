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

        <div is="control"
             @changeColon="changeColon"
             @changeRow="changeRow"
             @invertCellValue="invertCellValue"
             @setCellValue="setCellValue"></div>

    </div>
</template>

<script>
    import Vue from 'vue';

    class Cell {
        constructor (id, row) {
            this.id = id;
            this.row = row;
            this.top = false;
            this.right = false;
            this.bottom = false;
            this.left = false;
            this.current = false;
            this.type = '';
        }
    }

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
                let rowCount = 3,
                    colonCount = 3,
                    rowCenter = Math.floor(rowCount / 2),
                    colonCenter = Math.floor(colonCount / 2),
                    rows = [];

                for (let x = 0; x < rowCount; x++) {
                    let row = { id: x, cells: [] };
                    for (let y = 0; y < colonCount; y++) {
                        let cell = new Cell(x + '_' + y, row);

                        row.cells.push(cell);
                    }
                    rows.push(row);
                }

                this.rows = rows;

                this.currentCell = this.rows[rowCenter]['cells'][colonCenter];
                this.currentCell['type'] = 'room';
                this.currentCell['current'] = true;
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
            },
            changeRow: function (direction) {

            },
            changeColon: function (direction) {

            }
        }
    }
</script>
