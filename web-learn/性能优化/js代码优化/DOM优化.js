

/*
(1). DOM　　
　　a. HTML Collection（HTML收集器，返回的是一个数组内容信息）
　　在脚本中 document.images、document.forms 、getElementsByTagName()返回的都是 HTMLCollection类型的集合，
   在平时使用的时候大多将它作为数组来使用，因为它有 length属性，也可以使用索引访问每一个元素。
   不过在访问性能上则比数组要差很多，原因是这个集合并不是一个静态的结果，它表示的仅仅是一个特定的查询，
   每次访问该集合时都会重新执行这个查询从而更新查询结果。
   所谓的 “访问集合” 包括读取集合的 length属性、访问集合中的元素。
　　因此，当你需要遍历 HTML Collection的时候，尽量将它转为数组后再访问，以提高性能。
   即使不转换为数组，也请尽可能少的访问它，例如在遍历的时候可以将 length属性、成员保存到局部变量后再使用局部变量。　　
　　b. Reflow & Repaint　　
　　除了上面一点之外， DOM操作还需要考虑浏览器的 Reflow和Repaint ，因为这些都是需要消耗资源的。
*/