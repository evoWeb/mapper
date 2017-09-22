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
        constructor (x, y, row) {
            this.id = x + '_ ' + y;
            this.x = x;
            this.y = y;
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
                        row.cells.push(new Cell(x, y, row));
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

                    if (this.currentCell.type === '') {
                        Vue.set(this.currentCell, 'type', 'room');

                        this.addColonsAndRows();
                    }
                }
            },
            changeRow: function (direction) {
                let rowIndex = this.getRowIndex(this.rows, this.currentCell.row),
                    cellIndex = this.getColonIndex(this.currentCell.row.cells, this.currentCell);

                rowIndex += direction;

                if (typeof this.rows[rowIndex] !== 'undefined') {
                    this.currentCell = this.rows[rowIndex].cells[cellIndex];
                    if (this.currentCell.type === '') {
                        Vue.set(this.currentCell, 'type', 'room');
                    }
                }

                rowIndex += direction;

                this.addRow(rowIndex);
            },
            changeColon: function (direction) {
                let cellIndex = this.getColonIndex(this.currentCell.row.cells, this.currentCell);

                cellIndex += direction;

                if (typeof this.currentCell.row.cells[cellIndex] !== 'undefined') {
                    this.currentCell = this.currentCell.row.cells[cellIndex];
                    if (this.currentCell.type === '') {
                        Vue.set(this.currentCell, 'type', 'room');
                    }
                }

                cellIndex += direction;

                this.addColon(cellIndex);
            },

            addColonsAndRows: function () {
                let rowIndex = this.getRowIndex(this.rows, this.currentCell.row),
                    cellIndex = this.getColonIndex(this.currentCell.row.cells, this.currentCell);

                this.addRow(rowIndex + 1);
                this.addRow(rowIndex - 1);
                this.addColon(cellIndex + 1);
                this.addColon(cellIndex - 1);
            },

            getRowIndex: function (rows, currentRow) {
                let index = 0;

                rows.map(function (row, i) {
                    if (row === currentRow) {
                        index = i;
                    }
                });

                return index;
            },
            getColonIndex: function (cells, currentCell) {
                let index = 0;

                cells.map(function (cell, i) {
                    if (cell === currentCell) {
                        index = i;
                    }
                });

                return index;
            },
            addRow: function (rowIndex) {
                if (typeof this.rows[rowIndex] !== 'undefined') {
                    return;
                }

                let row = { id: rowIndex, cells: [] };
                this.rows[0].cells.map(function (cell, index) {
                    row.cells.push(new Cell(index, rowIndex, row));
                });

                if (rowIndex > 0) {
                    this.rows.push(row);
                } else {
                    this.rows.unshift(row);
                }
            },
            addColon: function (cellIndex) {
                if (typeof this.rows[0].cells[cellIndex] !== 'undefined') {
                    return;
                }

                this.rows.map(function (row, index) {
                    let cell = new Cell(cellIndex, row.cells[0].y, row);

                    if (cellIndex > 0) {
                        row.cells.push(cell);
                    } else {
                        row.cells.unshift(cell);
                    }
                });
            }
        }
    }
</script>
