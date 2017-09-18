Vue.component('row', row);
Vue.component('cell', cell);
Vue.component('control', control);

var vm = new Vue({
    el: '#mapper',
    data: {
        rows: [],
        currentCell: {}
    },

    mounted: function () {
        this.prepareRows();
    },

    methods: {
        prepareRows: function () {
            var rows = [];
            for (var i = 0; i < 5; i++) {
                var row = { id: i, cells: [] };
                for (var j = 0; j < 5; j++) {
                    var cell = {id: i + '_' + j, top: false, right: false, bottom: false, left: false, current: false };

                    row.cells.push(cell);
                }
                rows.push(row);
            }

            rows[2]['cells'][2]['type'] = 'room';
            rows[2]['cells'][2]['current'] = true;

            this.currentCell = rows[2]['cells'][2];
            this.rows = rows;
        },

        cellClicked: function (cell, event) {
            if (cell.id !== this.currentCell.id) {
                this.currentCell = cell;
            }
            console.log(cell);
            console.log(event);
        }
    }
});
