POST	/api/auth/signup	signup new account
POST	/api/auth/signin	login an account
GET	/api/test/all	retrieve public content
GET	/api/test/user	access User’s content
GET	/api/test/admin	access Admin’s content

POST	/api/auth/signup	signup new account
POST	/api/auth/signin	login an account
GET	/api/test/all	retrieve public content
GET	/api/test/user	access User’s content
GET	/api/test/admin	access Admin’s content

Authentication:
POST /api/auth/signup
POST /api/auth/signin

http://192.168.1.150:8080/api/auth/user/change-password/1
   {
      "password": "123123"
   }

POST	/users	         create user
POST	/password-reset	Send password reset link
POST	/password-reset/:userId/:token	Reset user password

Authorization:
GET /api/test/all
GET /api/test/user for loggedin users (user/moderator/admin)
GET /api/test/mod for moderator
GET /api/test/admin for admin

Methods	Urls	Actions
POST	/users	create user
POST	/password-reset	Send password reset link
POST	/password-reset/:userId/:token	Reset user password



POST	/users	         create user
POST	/password-reset	Send password reset link
POST	/password-reset/:userId/:token	Reset user password

Authorization:
GET /api/test/all
GET /api/test/user for loggedin users (user/moderator/admin)
GET /api/test/mod for moderator
GET /api/test/admin for admin


### FILE UPLOAD:
Methods	Urls	Actions
POST	/upload	upload a File
GET	/files	get List of Files (name & url)
GET	/files/[filename]	download a File

## OUT
localhost:8080/api/auth/signup
{
   "username": "jackson",
   "email": "stasreet@rap.scom",
   "password": "hahaha123!",
   "roles": ["user", "admin"]
}

## localhost:8080/api/auth/signin
{
   "username": "jackson",
   "password": "hahaha123!"
   
}


// app.post("/reset_password", controller.resetPassword)

// changen password
app.post("/change_Password", controller.changePassword)


// reset password. request reset password
axios.post(`http://localhost:8080/api/auth/reset_password/${email}`)

// update password insert new password
axios.post(`http://localhost:8080/api/auth/update_password/${userId}/${token}`)

