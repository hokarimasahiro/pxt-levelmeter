/*
  level meter block
*/

//% color=#006464 weight=20 icon="\uf3fd" block="levelMeter"
namespace levelmeter {

	/**
	 * TODO: level meter
	 * @param left left-level, eg: 2
	 * @param right right level, eg: 3
	 */
    //% blockId="DispalyLevel" block="DispalyLevel left|%left right %right"
    //% weight=92 blockGap=10
    //% left.min=-9 left.max=9 right.mon=-9 right.max=9
    export function DispalyLevel(left: number, right: number) {
        if (left >= 0) {
            led.unplot(0, 0)
            if (left >= 9) {
                led.plot(1, 0)
            } else {
                led.unplot(1, 0)
            }
            if (left >= 8) {
                led.plot(0, 1)
            } else {
                led.unplot(0, 1)
            }
            if (left >= 7) {
                led.plot(1, 1)
            } else {
                led.unplot(1, 1)
            }
            if (left >= 6) {
                led.plot(0, 2)
            } else {
                led.unplot(0, 2)
            }
            if (left >= 5) {
                led.plot(1, 2)
            } else {
                led.unplot(1, 2)
            }
            if (left >= 4) {
                led.plot(0, 3)
            } else {
                led.unplot(0, 3)
            }
            if (left >= 3) {
                led.plot(1, 3)
            } else {
                led.unplot(1, 3)
            }
            if (left >= 2) {
                led.plot(0, 4)
            } else {
                led.unplot(0, 4)
            }
            if (left >= 1) {
                led.plot(1, 4)
            } else {
                led.unplot(1, 4)
            }
        } else {
            led.unplot(0, 4)
            if (left <= -9) {
                led.plot(1, 4)
            } else {
                led.unplot(1, 4)
            }
            if (left <= -8) {
                led.plot(0, 3)
            } else {
                led.unplot(0, 3)
            }
            if (left <= -7) {
                led.plot(1, 3)
            } else {
                led.unplot(1, 3)
            }
            if (left <= -6) {
                led.plot(0, 2)
            } else {
                led.unplot(0, 2)
            }
            if (left <= -5) {
                led.plot(1, 2)
            } else {
                led.unplot(1, 2)
            }
            if (left <= -4) {
                led.plot(0, 1)
            } else {
                led.unplot(0, 1)
            }
            if (left <= -3) {
                led.plot(1, 1)
            } else {
                led.unplot(1, 1)
            }
            if (left <= -2) {
                led.plot(0, 0)
            } else {
                led.unplot(0, 0)
            }
            if (left <= 1) {
                led.plot(1, 0)
            } else {
                led.unplot(1, 0)
            }
        }
        if (right >= 0) {
            led.unplot(4, 0)
            if (right >= 9) {
                led.plot(3, 0)
            } else {
                led.unplot(3, 0)
            }
            if (right >= 8) {
                led.plot(4, 1)
            } else {
                led.unplot(4, 1)
            }
            if (right >= 7) {
                led.plot(3, 1)
            } else {
                led.unplot(3, 1)
            }
            if (right >= 6) {
                led.plot(4, 2)
            } else {
                led.unplot(4, 2)
            }
            if (right >= 5) {
                led.plot(3, 2)
            } else {
                led.unplot(3, 2)
            }
            if (right >= 4) {
                led.plot(4, 3)
            } else {
                led.unplot(4, 3)
            }
            if (right >= 3) {
                led.plot(3, 3)
            } else {
                led.unplot(3, 3)
            }
            if (right >= 2) {
                led.plot(4, 4)
            } else {
                led.unplot(4, 4)
            }
            if (right >= 1) {
                led.plot(3, 4)
            } else {
                led.unplot(3, 4)
            }
        } else {
            led.unplot(4, 4)
            if (right <= -9) {
                led.plot(3, 4)
            } else {
                led.unplot(3, 4)
            }
            if (right <= -8) {
                led.plot(4, 3)
            } else {
                led.unplot(4, 3)
            }
            if (right <= -7) {
                led.plot(3, 3)
            } else {
                led.unplot(3, 3)
            }
            if (right <= -6) {
                led.plot(4, 2)
            } else {
                led.unplot(4, 2)
            }
            if (right <= -5) {
                led.plot(3, 2)
            } else {
                led.unplot(3, 2)
            }
            if (right <= -4) {
                led.plot(4, 1)
            } else {
                led.unplot(4, 1)
            }
            if (right <= -3) {
                led.plot(3, 1)
            } else {
                led.unplot(3, 1)
            }
            if (right <= -2) {
                led.plot(4, 0)
            } else {
                led.unplot(4, 0)
            }
            if (right <= 1) {
                led.plot(3, 0)
            } else {
                led.unplot(3, 0)
            }
        }
    }
}
