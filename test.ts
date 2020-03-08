// tests go here; this will not be compiled when this package is used as a library
while (1)
    for (let l = -9; l <= 9; l++) {
        levelmeter.DispalyLevel(l, 0 - l);
        basic.pause(100);
    }