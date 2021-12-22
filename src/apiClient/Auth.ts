
export function createAuthenticationUrl(): string {
    return "https://accounts.google.com/o/oauth2/v2/auth?client_id=635845251298-j06uqtccb1toatn7iqrb2tq5v6hddnev.apps.googleusercontent.com&redirect_uri=http://localhost:3001&response_type=token&scope=https://www.googleapis.com/auth/userinfo.email openid https://www.googleapis.com/auth/userinfo.profile&state=karkinkar";
}
