// Vercel Serverless Function - GitHub OAuth 起始端点
// Decap CMS 会调用 base_url + auth_endpoint 来开始授权流程
export default function handler(req, res) {
  const clientId = process.env.OAUTH_CLIENT_ID
  if (!clientId) {
    return res.status(500).send('OAUTH_CLIENT_ID 环境变量未配置')
  }

  const host = req.headers['x-forwarded-host'] || req.headers.host
  const proto = req.headers['x-forwarded-proto'] || 'https'
  const redirectUri = `${proto}://${host}/api/callback`

  const githubAuthUrl =
    `https://github.com/login/oauth/authorize` +
    `?client_id=${encodeURIComponent(clientId)}` +
    `&redirect_uri=${encodeURIComponent(redirectUri)}` +
    `&scope=repo%20read:user`

  res.redirect(githubAuthUrl)
}
