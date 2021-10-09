export const googleOauthConfig = {
    "client_id": process.env.REACT_APP_GOOGLE_OAUTH2_CLIENTID,
    "client_secret": process.env.REACT_APP_GOOGLE_OAUTH2_SECRET,
    "redirect_uri": "http://localhost:3000/login/oauth2/code/google",
    "URL_user_info": "https://www.googleapis.com/oauth2/v3/userinfo?access_token="
}