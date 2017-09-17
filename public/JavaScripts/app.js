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

    created: function () {
        document.addEventListener('keydown', this.keyDown)
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
        keyDown: function (event) {
            console.log(event);
            // z
            if (event.key === 'z') {
                this.setWall('top');
            }
            // u
            else if (event.key === 'u') {
                this.setWall('right');
            }
            // i
            else if (event.key === 'i') {
                this.setWall('bottom');
            }
            // o
            else if (event.key === 'o') {
                this.setWall('left');
            }

            // esc
            else if (event.keyCode === 27) {
                this.setType('');
            }
            // h
            else if (event.key === 'h') {
                this.setType('room');
            }
            // j
            else if (event.key === 'j') {
                this.setType('torch');
            }
            // k
            else if (event.key === 'k') {
                this.setType('focus');
            }

            // 0
            else if (event.key === '0') {
                this.setColor('');
            }
            // 1
            else if (event.key === '1') {
                this.setColor('red');
            }
            // 2
            else if (event.key === '2') {
                this.setColor('green');
            }
            // 3
            else if (event.key === '3') {
                this.setColor('blue');
            }
            // 4
            else if (event.key === '4') {
                this.setColor('yellow');
            }
            // 5
            else if (event.key === '5') {
                this.setColor('purple');
            }
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
