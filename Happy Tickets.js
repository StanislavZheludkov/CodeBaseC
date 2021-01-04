var f = 0;
var s = 0;
var t = 0;
var fo = 0;
var fi = 0;
var si = 0;
var i = 0;
do {
    if (+si + +fi + +fo == +t + +s + +f) {
        i++;
        f++;
        if (f == 10) {
            f = 0;
            s++;
            if (s == 10) {
                s = 0;
                t++;
                if (t == 10) {
                    t = 0;
                    fo++;
                    if (fo == 10) {
                        fo = 0;
                        fi++;
                        if (fi == 10) {
                            fi = 0;
                            si++
                        }
                    }
                }
            }
        }
    } else {
        f++;
        if (f == 10) {
            f = 0;
            s++;
            if (s == 10) {
                s = 0;
                t++;
                if (t == 10) {
                    t = 0;
                    fo++;
                    if (fo == 10) {
                        fo = 0;
                        fi++;
                        if (fi == 10) {
                            fi = 0;
                            si++
                        }
                    }
                }
            }
        }
    }
}
while (si < 10);
alert(i);