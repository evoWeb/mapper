<template>
    <div id="control" :class="{showControls: show}">
        <span @click="show != show">Show/hide</span>
        <a href="#" @click="moveUp()">up (w)</a>
        <a href="#" @click="moveLeft()">left (a)</a>
        <a href="#" @click="moveDown()">down (s)</a>
        <a href="#" @click="moveRight()">right (d)</a>
        <br/>
        <a href="#" @click="setType('')">empty (esc)</a>
        <a href="#" @click="setType('room')">room (h)</a>
        <a href="#" @click="setType('torch')">torch (j)</a>
        <a href="#" @click="setType('focus')">focus (k)</a>
        <br/>
        <a href="#" @click="setWall('top')">top (z)</a>
        <a href="#" @click="setWall('right')">right (u)</a>
        <a href="#" @click="setWall('bottom')">bottom (i)</a>
        <a href="#" @click="setWall('left')">left (o)</a>
        <br/>
        <a href="#" @click="setColor('')">clear (0)</a>
        <a href="#" @click="setColor('red')">red (1)</a>
        <a href="#" @click="setColor('green')">green (2)</a>
        <a href="#" @click="setColor('blue')">blue (3)</a>
        <a href="#" @click="setColor('yellow')">yellow (4)</a>
        <a href="#" @click="setColor('purple')">purple (5)</a>
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
