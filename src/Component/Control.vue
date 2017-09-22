<template>
    <div id="control" :class="{showControls: show}">
        <div @click="this.toggleVisibility">Show/hide controls</div>

        <ul>
            <li class="clearLeft"><a href="#" @click="moveUp()">up (w)</a></li>
            <li><a href="#" @click="moveLeft()">left (a)</a></li>
            <li><a href="#" @click="moveDown()">down (s)</a></li>
            <li><a href="#" @click="moveRight()">right (d)</a></li>

            <li class="clearLeft"><a href="#" @click="setType('')">empty (esc)</a></li>
            <li><a href="#" @click="setType('room')">room (h)</a></li>
            <li><a href="#" @click="setType('torch')">torch (j)</a></li>
            <li><a href="#" @click="setType('focus')">focus (k)</a></li>

            <li class="clearLeft"><a href="#" @click="setWall('top')">top (z)</a></li>
            <li><a href="#" @click="setWall('right')">right (u)</a></li>
            <li><a href="#" @click="setWall('bottom')">bottom (i)</a></li>
            <li><a href="#" @click="setWall('left')">left (o)</a></li>

            <li class="clearLeft"><a href="#" @click="setColor('')">clear (0)</a></li>
            <li><a href="#" @click="setColor('red')">red (1)</a></li>
            <li><a href="#" @click="setColor('green')">green (2)</a></li>
            <li><a href="#" @click="setColor('blue')">blue (3)</a></li>
            <li><a href="#" @click="setColor('yellow')">yellow (4)</a></li>
            <li><a href="#" @click="setColor('purple')">purple (5)</a></li>
        </ul>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                currentCell: {},
                show: true
            }
        },

        created: function () {
            document.addEventListener('keydown', this.keyDown)
        },

        methods: {
            toggleVisibility: function () {
                this.show = !this.show;
            },

            keyDown: function (event) {
                if (event.key === 'w') {
                    this.moveUp();
                } else if (event.key === 'a') {
                    this.moveLeft();
                } else if (event.key === 's') {
                    this.moveDown();
                } else if (event.key === 'd') {
                    this.moveRight();
                }

                else if (event.key === 'z') {
                    this.setWall('top');
                } else if (event.key === 'u') {
                    this.setWall('right');
                } else if (event.key === 'i') {
                    this.setWall('bottom');
                } else if (event.key === 'o') {
                    this.setWall('left');
                }

                // esc
                else if (event.keyCode === 27) {
                    this.setType('');
                } else if (event.key === 'h') {
                    this.setType('room');
                } else if (event.key === 'j') {
                    this.setType('torch');
                } else if (event.key === 'k') {
                    this.setType('focus');
                }

                else if (event.key === '0') {
                    this.setColor('');
                } else if (event.key === '1') {
                    this.setColor('red');
                } else if (event.key === '2') {
                    this.setColor('green');
                } else if (event.key === '3') {
                    this.setColor('blue');
                } else if (event.key === '4') {
                    this.setColor('yellow');
                } else if (event.key === '5') {
                    this.setColor('purple');
                }
            },

            moveUp: function () {

            },
            moveLeft: function () {

            },
            moveDown: function () {

            },
            moveRight: function () {

            },

            setWall: function (wall) {
                this.$emit('invertCellValue', wall);
            },

            setType: function (type) {
                if (type === '') {
                    this.$emit('setCellValue', 'top', false);
                    this.$emit('setCellValue', 'right', false);
                    this.$emit('setCellValue', 'bottom', false);
                    this.$emit('setCellValue', 'left', false);
                    this.$emit('setCellValue', 'color', '');
                }

                this.$emit('setCellValue', 'type', type);
            },

            setColor: function (color) {
                if (color === '') {
                    this.$emit('setCellValue', 'type', 'room');
                }

                this.$emit('setCellValue', 'color', color);
            }
        }
    };
</script>
