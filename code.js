function flip(arr, n) {
    var tmp = [];
    if (arr.length <= n) {
        for (var i = arr.length - 1; i >= 0; i--) {
            tmp.push(arr[i]);
        }
        arr = tmp;
    } else {
        for (var j = n - 1; j >= 0; j--) {
            tmp.push(arr[j]);
        }
        for (var k = 0; k < n; k++) {
            arr[k] = tmp[k];
        }
    }
    return arr;
}

// Use only flip() here to manipulate the array
function pancakeSort(arr) {
    var small = Infinity;
    var smallind = -1;
    for (var j = 0; j < arr.length; j++) {
        small = Infinity;
        smallind = -1;
        for (var i = 0; i < arr.length - j; i++) {
            if (arr[i] <= small) {
                small = arr[i];
                smallind = i;
            }
        }
        if (smallind != -1) {
            arr = flip(arr, smallind + 1);
            arr = flip(arr, arr.length - j);
        }
    }
    arr = flip(arr, arr.length + 1);
    return arr;
}
