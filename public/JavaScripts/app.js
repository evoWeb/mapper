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

            // int 0, 1
            'top',
            // int 0, 1
            'right',
            // int 0, 1
            'bottom',
            // int 0, 1
            'left',

            // string '', room, torch, focus
            'type',

            // string '', red, blue, green, yellow, purple
            'color'
        }
         */
        'cell'
    ],

    computed: {
        classObject: function () {
            return {
                wt: this.cell.top > 0,
                wr: this.cell.right > 0,
                wb: this.cell.bottom > 0,
                wl: this.cell.left > 0,

                room: this.cell.type === 'room',
                torch: this.cell.type === 'torch',
                focus: this.cell.type === 'focus',

                red: this.cell.color === 'red',
                blue: this.cell.color === 'blue',
                green: this.cell.color === 'green',
                yellow: this.cell.color === 'yellow',
                purple: this.cell.color === 'purple'
            };
        }
    }
});

new Vue({
    el: '#mapper',
    data: {
        rows: []
    },

    computed: {
        prepareRows: function () {
            var rows = [];
            for (var i = 0; i < 5; i++) {
                var row = { id: i, cells: [] };
                for (var j = 0; j < 5; j++) {
                    var cell = {id: i + '_' + j, top: 0, right: 0, bottom: 0, left: 0 };

                    row.cells.push(cell);
                }
                rows.push(row);
            }

            rows[2]['cells'][2]['type'] = 'room';

            return rows;
        }
    },
    methods: {
        cellClick: function (event) {
            console.log(this);
        }
    }
});
