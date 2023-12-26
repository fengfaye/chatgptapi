
const TELEGRAPH_URL = 'https://api.openai.com';

addEventListener('fetch', 事件 => {
  event.respondWith(handleRequest(event.request))
})

异步函数handleRequest（请求）{
  const url = 新 URL(request.url);
  const headers_Origin = request.headers.get("Access-Control-Allow-Origin") || “*”
  url.host = TELEGRAPH_URL.replace(/^https?:\/\//, '');
  const moddedRequest = new Request(url.toString(), {
    标头：request.headers，
    方法：请求.方法，
    主体：请求主体，
    重定向：“关注”
  });
  const 响应 = 等待 fetch(modifiedRequest);
  const moddedResponse = new Response(response.body, 响应);
  //添加允许跨域访问的响应头
  ModifiedResponse.headers.set('Access-Control-Allow-Origin', headers_Origin);
  返回修改后的响应；
}

