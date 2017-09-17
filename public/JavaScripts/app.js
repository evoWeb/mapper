// Define row
Vue.component('row', {
    props: [
        /**
        {
            'id',
            'cells'
        }
         */
        'row'
    ],
    template: '<tr :id="row.id"><cell v-for="cell in row.cells" v-bind:cell="cell" v-bind:key="cell.id"></cell></tr>'
});

// Define cell
Vue.component('cell', {
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
            // string empty, room, torch, focus
            'type',
            // string cRed cBlue cGreen cYellow cPurple
            'color'
        }
         */
        'cell'
    ],
    template: '<td :id="cell.id" class="">&nbsp;</td>'
});

var rows = [
    {id: 1, cells: [
        {id: '1_1', top: 0, right: 0, bottom: 0, left: 0 },
        {id: '1_2', top: 0, right: 0, bottom: 0, left: 0 },
        {id: '1_3', top: 0, right: 0, bottom: 0, left: 0 },
        {id: '1_4', top: 0, right: 0, bottom: 0, left: 0 }
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
        map: {rows: rows}
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
