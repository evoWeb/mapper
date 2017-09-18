<template>
    <td
        :id="cell.id"
        class="cell"
        :class="classObject"
        @click="click">&nbsp;</td>
</template>

<script>
    module.exports = {
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
    };
</script>