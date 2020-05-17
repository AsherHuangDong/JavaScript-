
let HanNuoTa = function (n, x, y, z) {
    if (n === 1) {
        console.log('将第' + n + '个盘片从' + x + '移动到' + z)
    } else {
        // 将 n-1个盘片从 x柱 移动到 y柱
        HanNuoTa(n - 1, x, z, y)
        // 将 第n个盘片从 x柱 移动到 z柱
        console.log('将第' + n + '个盘片从' + x + '移动到' + z)
        // 将 n-1个盘片从 y柱 移动到 z柱
        HanNuoTa(n - 1, y, x, z)
    }
}

HanNuoTa(3, 'X', 'Y', 'Z')