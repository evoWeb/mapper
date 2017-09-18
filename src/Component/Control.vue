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
    import Vue from 'vue';

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
                console.log(event);
                // w
                if (event.key === 'w') {
                    this.moveUp();
                }
                // a
                else if (event.key === 'a') {
                    this.moveLeft();
                }
                // s
                else if (event.key === 's') {
                    this.moveDown();
                }
                // d
                else if (event.key === 'd') {
                    this.moveRight();
                }

                // z
                else if (event.key === 'z') {
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
                console.log(color);
                if (color === '') {
                    this.$emit('setCellValue', 'type', 'room');
                }

                this.$emit('setCellValue', 'color', color);
            }
        }
    };
</script>