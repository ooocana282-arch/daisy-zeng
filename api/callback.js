// Vercel Serverless Function - GitHub OAuth 回调端点
// 用户在 GitHub 授权后，GitHub 会带 code 重定向到这里
export default async function handler(req, res) {
  const { code } = req.query
  const clientId = process.env.OAUTH_CLIENT_ID
  const clientSecret = process.env.OAUTH_CLIENT_SECRET

  if (!code) {
    return res.status(400).send('缺少 code 参数')
  }
  if (!clientId || !clientSecret) {
    return res.status(500).send('OAuth 环境变量未配置')
  }

  // 用 code 换取 access_token
  const tokenRes = await fetch('https://github.com/login/oauth/access_token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'User-Agent': 'daisy-zeng-cms',
    },
    body: JSON.stringify({
      client_id: clientId,
      client_secret: clientSecret,
      code,
    }),
  })

  const data = await tokenRes.json()

  if (!data.access_token) {
    return res.status(500).send('获取 access_token 失败：' + JSON.stringify(data))
  }

  // 通过 postMessage 把 token 传给打开此窗口的 Decap CMS，然后关闭窗口
  res.setHeader('Content-Type', 'text/html')
  res.send(`
    <!doctype html>
    <html><body>
      <p>授权成功，正在返回 CMS…</p>
      <script>
        (function() {
          var msg = {
            provider: 'github',
            token: ${JSON.stringify(data.access_token)}
          };
          if (window.opener) {
            window.opener.postMessage(msg, '*');
          }
          setTimeout(function() { window.close(); }, 300);
        })();
      </script>
    </body></html>
  `)
}
