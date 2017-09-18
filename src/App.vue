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

        <div is="control" @invertCellValue="invertCellValue" @setCellValue="setCellValue"></div>

    </div>
</template>

<script>
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

                this.currentCell = rows[2]['cells'][2];
                this.rows = rows;
            },

            invertCellValue(key) {
                this.currentCell[key] = !this.currentCell[key];
            },
            setCellValue(key, value) {
                this.currentCell[key] = value;
            },

            cellClicked: function (cell, event) {
                if (cell.id !== this.currentCell.id) {
                    this.currentCell = cell;
                }
                console.log(cell);
                console.log(event);
            }
        }
    }
</script>