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

var rows = [
    {id: 1, cells: [
        {id: '1_1', top: 1, right: 0, bottom: 0, left: 0, type: '' },
        {id: '1_2', top: 0, right: 1, bottom: 0, left: 0, type: 'room' },
        {id: '1_3', top: 0, right: 0, bottom: 1, left: 0, type: 'torch', color: 'red' },
        {id: '1_4', top: 0, right: 0, bottom: 0, left: 1, type: 'focus', color: 'blue' }
    ]},
    {id: 2, cells: [
        {id: '2_1', top: 0, right: 0, bottom: 0, left: 0 },
        {id: '2_2', top: 0, right: 0, bottom: 0, left: 0 },
        {id: '2_3', top: 0, right: 0, bottom: 0, left: 0 },
        {id: '2_4', top: 0, right: 0, bottom: 0, left: 0 }
    ]},
    {id: 3, cells: [
        {id: '3_1', top: 0, right: 0, bottom: 0, left: 0 },
        {id: '3_2', top: 0, right: 0, bottom: 0, left: 0 },
        {id: '3_3', top: 0, right: 0, bottom: 0, left: 0 },
        {id: '3_4', top: 0, right: 0, bottom: 0, left: 0 }
    ]},
    {id: 4, cells: [
        {id: '4_1', top: 0, right: 0, bottom: 0, left: 0 },
        {id: '4_2', top: 0, right: 0, bottom: 0, left: 0 },
        {id: '4_3', top: 0, right: 0, bottom: 0, left: 0 },
        {id: '4_4', top: 0, right: 0, bottom: 0, left: 0 }
    ]}
];

new Vue({
    el: '#mapper',
    data: {
        map: { rows: rows }
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
                    var cell = {id: i + '_' + j, top: 0, right: 0, bottom: 0, left: 0 };

                    row.cells.push(cell);
                }
                rows.push(row);
            }
            //this.rows.push(rows);
        }
    }
});
