<template>
    <td
        :id="cell.id"
        class="cell"
        :class="classObject"
        @click="click">&nbsp;</td>
</template>

<script>
    export default {
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
                let classes = {
                    wt: this.cell.top,
                    wr: this.cell.right,
                    wb: this.cell.bottom,
                    wl: this.cell.left,

                    current: this.cell.current
                };

                if (this.cell.type !== '') {
                    classes[this.cell.type] = true;
                }

                if (this.cell.color !== '') {
                    classes[this.cell.color] = true;
                }

                return classes;
            }
        },

        methods: {
            click: function (event) {
                this.$emit('cellClicked', this.cell, event);
            }
        }
    };
</script>
