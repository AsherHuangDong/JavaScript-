/**
 * * padStart() 在字符串前面填充 和 padEnd() 在字符串后面填充
 * * 用法：String.padStart(targetLength, padding)
 *        参数：字符串目标长度和填充字段
 * * 要点：填充字符串只有在字符串的长度小于目标长度的时候才有效，而且目标长度如果小于字符串本身长度时
 *        字符串也不会做截断处理，只会原样输出
 */
console.log('Vue'.padStart(10))
console.log('Vue'.padEnd(10))
console.log('React'.padStart(10))
console.log('React'.padEnd(10))
console.log('JavaScript'.padStart(10))
console.log('JavaScript'.padEnd(10))