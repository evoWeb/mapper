// Define row
Vue.component('row', {
    template: '#map-row',

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
});

// Define cell
Vue.component('cell', {
    template: '#map-cell',

    props: [
        /**
        {
            // string
            'id',

            // bool
            'top',
            // bool
            'right',
            // bool
            'bottom',
            // bool
            'left',

            // string '', room, torch, focus
            'type',

            // string '', red, green, blue, yellow, purple
            'color'

            // bool
            'current'
        }
         */
        'cell'
    ],

    computed: {
        classObject: function () {
            return {
                wt: this.cell.top,
                wr: this.cell.right,
                wb: this.cell.bottom,
                wl: this.cell.left,

                room: this.cell.type === 'room',
                torch: this.cell.type === 'torch',
                focus: this.cell.type === 'focus',

                red: this.cell.color === 'red',
                green: this.cell.color === 'green',
                blue: this.cell.color === 'blue',
                yellow: this.cell.color === 'yellow',
                purple: this.cell.color === 'purple',

                current: this.cell.current
            };
        }
    },
    methods: {
        click: function (event) {
            this.$root.cellClicked(this, event);
        }
    }
});

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
            console.log(cell);
            console.log(event);
        },

        setWall: function (wall) {
            Vue.set(vm.currentCell, wall, !vm.currentCell[wall]);
        },
        setType: function (type) {
            if (type === '') {
                Vue.set(vm.currentCell, 'top', false);
                Vue.set(vm.currentCell, 'right', false);
                Vue.set(vm.currentCell, 'bottom', false);
                Vue.set(vm.currentCell, 'left', false);
                Vue.set(vm.currentCell, 'type', '');
                Vue.set(vm.currentCell, 'color', '');
            } else {
                Vue.set(vm.currentCell, 'type', type);
            }
        },
        setColor: function (color) {
            if (color === '') {
                Vue.set(vm.currentCell, 'type', 'room');
                Vue.set(vm.currentCell, 'color', '');
            } else {
                Vue.set(vm.currentCell, 'color', color);
            }
        }
    }
});
