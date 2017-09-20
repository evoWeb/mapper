<template>
    <div id="mapper">

        <table>
            <tr
                is="row"
                v-for="row in rows"
                v-bind:row="row"
                v-bind:key="row.id">
            </tr>
        </table>

        <div is="control" @invertCellValue="invertCellValue" @setCellValue="setCellValue" @cellClicked="cellClicked"></div>

    </div>
</template>

<script>
    export default {
        data () {
            return {
                rows: [],
                currentRow: 0,
                currentCell: 0
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

                this.currentRow = 2;
                this.currentCell = 2;

                rows[this.currentRow]['cells'][this.currentCell]['type'] = 'room';
                rows[this.currentRow]['cells'][this.currentCell]['current'] = true;

                this.rows = rows;
            },

            invertCellValue(key) {
                let currentCell = this.rows[this.currentRow]['cells'][this.currentCell];
                currentCell[key] = !currentCell[key];
            },

            setCellValue(key, value) {
                console.log(key, value);
                let currentCell = this.rows[this.currentRow]['cells'][this.currentCell];
                currentCell[key] = value;
                //this.$forceUpdate();
            },

            cellClicked: function (cell, event) {
                let currentCell = this.rows[this.currentRow]['cells'][this.currentCell];
                if (cell.id !== currentCell.id) {
                    let idValues = cell.id.split('_');
                    this.currentRow = idValues[0];
                    this.currentCell = idValues[1];
                }
                console.log(cell);
                console.log(event);
            }
        }
    }
</script>
