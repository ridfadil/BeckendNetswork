define({ "api": [
  {
    "type": "post",
    "url": "api/auth/refresh-token",
    "title": "Facebook Login",
    "description": "<p>Login with facebook. Creates a new user if it does not exist</p>",
    "version": "1.0.0",
    "name": "FacebookLogin",
    "group": "Auth",
    "permission": [
      {
        "name": "public"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Facebook's access_token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tokenType",
            "description": "<p>Access Token's type</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "accessToken",
            "description": "<p>Authorization Token</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "refreshToken",
            "description": "<p>Token to get a new accessToken after expiration time</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "expiresIn",
            "description": "<p>Access Token's expiration time in miliseconds</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Bad Request 400": [
          {
            "group": "Bad Request 400",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Some parameters may contain invalid values</p>"
          }
        ],
        "Unauthorized 401": [
          {
            "group": "Unauthorized 401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Incorrect access_token</p>"
          }
        ]
      }
    },
    "filename": "app/api/routes/v1/auth.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "api/auth/refresh-token",
    "title": "Google Login",
    "description": "<p>Login with google. Creates a new user if it does not exist</p>",
    "version": "1.0.0",
    "name": "GoogleLogin",
    "group": "Auth",
    "permission": [
      {
        "name": "public"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Google's access_token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tokenType",
            "description": "<p>Access Token's type</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "accessToken",
            "description": "<p>Authorization Token</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "refreshToken",
            "description": "<p>Token to get a new accpessToken after expiration time</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "expiresIn",
            "description": "<p>Access Token's expiration time in miliseconds</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Bad Request 400": [
          {
            "group": "Bad Request 400",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Some parameters may contain invalid values</p>"
          }
        ],
        "Unauthorized 401": [
          {
            "group": "Unauthorized 401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Incorrect access_token</p>"
          }
        ]
      }
    },
    "filename": "app/api/routes/v1/auth.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "api/auth/login",
    "title": "Login",
    "description": "<p>Get an accessToken</p>",
    "version": "1.0.0",
    "name": "Login",
    "group": "Auth",
    "permission": [
      {
        "name": "public"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User's email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..128",
            "optional": false,
            "field": "password",
            "description": "<p>User's password</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token.tokenType",
            "description": "<p>Access Token's type</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token.accessToken",
            "description": "<p>Authorization Token</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token.refreshToken",
            "description": "<p>Token to get a new accressToken after expiration time</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "token.expireIn",
            "description": "<p>Access Token's expiration time in miliseconds</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.id",
            "description": "<p>User's id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.name",
            "description": "<p>User's name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.email",
            "description": "<p>User's email</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.role",
            "description": "<p>User's role</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "user.createdAt",
            "description": "<p>Timestamp</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Bad Request 400": [
          {
            "group": "Bad Request 400",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Some parameters may contain invalid values</p>"
          }
        ],
        "Unauthorized 401": [
          {
            "group": "Unauthorized 401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>in correct email or password</p>"
          }
        ]
      }
    },
    "filename": "app/api/routes/v1/auth.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "api/auth/refresh-token",
    "title": "Refresh Token",
    "description": "<p>Refresh expired accessToken</p>",
    "version": "1.0.0",
    "name": "RefreshToken",
    "group": "Auth",
    "permission": [
      {
        "name": "public"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User's email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "refreshToken",
            "description": "<p>Refresh token aquired when user logged in</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tokenType",
            "description": "<p>Access Token's type</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "accessToken",
            "description": "<p>Authorization Token</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "refreshToken",
            "description": "<p>Token to get a new accessToken after expiration time</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "expiresIn",
            "description": "<p>Access Token's expiration time in miliseconds</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Bad Request 400": [
          {
            "group": "Bad Request 400",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Some parameters may contain invalid values</p>"
          }
        ],
        "Unauthorized 401": [
          {
            "group": "Unauthorized 401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Incorrect email or refreshToken</p>"
          }
        ]
      }
    },
    "filename": "app/api/routes/v1/auth.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "api/auth/register",
    "title": "Register",
    "description": "<p>Register a new user</p>",
    "version": "1.0.0",
    "name": "Register",
    "group": "Auth",
    "permission": [
      {
        "name": "public"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User's email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "6..128",
            "optional": false,
            "field": "password",
            "description": "<p>User's Password</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nama",
            "description": "<p>User's Nama</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "posisi",
            "description": "<p>User's Position</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "tanggalLahir",
            "description": "<p>User's Hire Date</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "noHp",
            "description": "<p>User's Handphone Number</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "level",
            "description": "<p>User's Level</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "gaji",
            "description": "<p>User's Salary</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Created 201": [
          {
            "group": "Created 201",
            "type": "String",
            "optional": false,
            "field": "token.tokenType",
            "description": "<p>Access Token's type</p>"
          },
          {
            "group": "Created 201",
            "type": "String",
            "optional": false,
            "field": "token.accessToken",
            "description": "<p>Authorization Token</p>"
          },
          {
            "group": "Created 201",
            "type": "String",
            "optional": false,
            "field": "token.refreshToken",
            "description": "<p>Token to get a new accessToken after expiration time</p>"
          },
          {
            "group": "Created 201",
            "type": "Number",
            "optional": false,
            "field": "token.expiresIn",
            "description": "<p>Access Token expiration time in miliseconds</p>"
          },
          {
            "group": "Created 201",
            "type": "String",
            "optional": false,
            "field": "token.timezone",
            "description": "<p>The server's Timezone</p>"
          },
          {
            "group": "Created 201",
            "type": "String",
            "optional": false,
            "field": "user.id",
            "description": "<p>User's id</p>"
          },
          {
            "group": "Created 201",
            "type": "String",
            "optional": false,
            "field": "user.email",
            "description": "<p>User's email</p>"
          },
          {
            "group": "Created 201",
            "type": "String",
            "optional": false,
            "field": "user.role",
            "description": "<p>User's role</p>"
          },
          {
            "group": "Created 201",
            "type": "String",
            "optional": false,
            "field": "user.createdAt",
            "description": "<p>Timestamp</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Bad Request 400": [
          {
            "group": "Bad Request 400",
            "optional": false,
            "field": "Validator",
            "description": "<p>some parameters may contain invalid values</p>"
          }
        ]
      }
    },
    "filename": "app/api/routes/v1/auth.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "api/users",
    "title": "Create User",
    "description": "<p>Create a new user</p>",
    "version": "1.0.0",
    "name": "CreateUser",
    "group": "User",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Athorization",
            "description": "<p>User's access token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User's email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "6..128",
            "optional": false,
            "field": "password",
            "description": "<p>User's password</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..128",
            "optional": true,
            "field": "name",
            "description": "<p>User's name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "user",
              "admin"
            ],
            "optional": true,
            "field": "role",
            "description": "<p>User's role</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Created 201": [
          {
            "group": "Created 201",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>User's id</p>"
          },
          {
            "group": "Created 201",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>User's name</p>"
          },
          {
            "group": "Created 201",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User's email</p>"
          },
          {
            "group": "Created 201",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>User's role</p>"
          },
          {
            "group": "Created 201",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Timestamp</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Bad Request 400": [
          {
            "group": "Bad Request 400",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Some parameters may contain invalid values</p>"
          }
        ],
        "Unauthorized 401": [
          {
            "group": "Unauthorized 401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Only authenticated users can create the data</p>"
          }
        ],
        "Forbidden 403": [
          {
            "group": "Forbidden 403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>Only admins can create the data</p>"
          }
        ]
      }
    },
    "filename": "app/api/routes/v1/userRoute.js",
    "groupTitle": "User"
  },
  {
    "type": "patch",
    "url": "api/users/:id",
    "title": "Delete User",
    "description": "<p>Delete a user</p>",
    "version": "1.0.0",
    "name": "DeleteUser",
    "group": "User",
    "permission": [
      {
        "name": "user"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Athorization",
            "description": "<p>User's access token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "No Content 204": [
          {
            "group": "No Content 204",
            "optional": false,
            "field": "Successfully",
            "description": "<p>deleted</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Unauthorized 401": [
          {
            "group": "Unauthorized 401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Only authenticated users can delete the data</p>"
          }
        ],
        "Forbidden 403": [
          {
            "group": "Forbidden 403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>Only user with same id or admins can delete the data</p>"
          }
        ],
        "Not Found 404": [
          {
            "group": "Not Found 404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>User does not exist</p>"
          }
        ]
      }
    },
    "filename": "app/api/routes/v1/userRoute.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "api/users/:id",
    "title": "Get User",
    "description": "<p>Get user information</p>",
    "version": "1.0.0",
    "name": "GetUser",
    "group": "User",
    "permission": [
      {
        "name": "user"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Athorization",
            "description": "<p>User's access token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>User's id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>User's name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User's email</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>User's role</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Timestamp</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Unauthorized 401": [
          {
            "group": "Unauthorized 401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Only authenticated users can access the data</p>"
          }
        ],
        "Forbidden 403": [
          {
            "group": "Forbidden 403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>Only user with same id or admins can access the data</p>"
          }
        ],
        "Not Found 404": [
          {
            "group": "Not Found 404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>User does not exist</p>"
          }
        ]
      }
    },
    "filename": "app/api/routes/v1/userRoute.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "api/users",
    "title": "List Users",
    "description": "<p>Get a list of users</p>",
    "version": "1.0.0",
    "name": "ListUsers",
    "group": "User",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Athorization",
            "description": "<p>User's access token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "size": "1-",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>List page</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "1-100",
            "optional": true,
            "field": "perPage",
            "defaultValue": "1",
            "description": "<p>Users per page</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>User's name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "email",
            "description": "<p>User's email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "user",
              "admin"
            ],
            "optional": true,
            "field": "role",
            "description": "<p>User's role</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "users",
            "description": "<p>List of users.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Unauthorized 401": [
          {
            "group": "Unauthorized 401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Only authenticated users can access the data</p>"
          }
        ],
        "Forbidden 403": [
          {
            "group": "Forbidden 403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>Only admins can access the data</p>"
          }
        ]
      }
    },
    "filename": "app/api/routes/v1/userRoute.js",
    "groupTitle": "User"
  },
  {
    "type": "put",
    "url": "api/users/:id",
    "title": "Replace User",
    "description": "<p>Replace the whole user document with a new one</p>",
    "version": "1.0.0",
    "name": "ReplaceUser",
    "group": "User",
    "permission": [
      {
        "name": "user"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Athorization",
            "description": "<p>User's access token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User's email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "6..128",
            "optional": false,
            "field": "password",
            "description": "<p>User's password</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..128",
            "optional": true,
            "field": "name",
            "description": "<p>User's name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "user",
              "admin"
            ],
            "optional": true,
            "field": "role",
            "description": "<p>User's role (You must be an admin to change the user's role)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>User's id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>User's name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User's email</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>User's role</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Timestamp</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Bad Request 400": [
          {
            "group": "Bad Request 400",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Some parameters may contain invalid values</p>"
          }
        ],
        "Unauthorized 401": [
          {
            "group": "Unauthorized 401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Only authenticated users can modify the data</p>"
          }
        ],
        "Forbidden 403": [
          {
            "group": "Forbidden 403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>Only user with same id or admins can modify the data</p>"
          }
        ],
        "Not Found 404": [
          {
            "group": "Not Found 404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>User does not exist</p>"
          }
        ]
      }
    },
    "filename": "app/api/routes/v1/userRoute.js",
    "groupTitle": "User"
  },
  {
    "type": "patch",
    "url": "api/users/:id",
    "title": "Update User",
    "description": "<p>Update some fields of a user document</p>",
    "version": "1.0.0",
    "name": "UpdateUser",
    "group": "User",
    "permission": [
      {
        "name": "user"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Athorization",
            "description": "<p>User's access token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User's email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "6..128",
            "optional": false,
            "field": "password",
            "description": "<p>User's password</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..128",
            "optional": true,
            "field": "name",
            "description": "<p>User's name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "user",
              "admin"
            ],
            "optional": true,
            "field": "role",
            "description": "<p>User's role (You must be an admin to change the user's role)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>User's id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>User's name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User's email</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>User's role</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Timestamp</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Bad Request 400": [
          {
            "group": "Bad Request 400",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Some parameters may contain invalid values</p>"
          }
        ],
        "Unauthorized 401": [
          {
            "group": "Unauthorized 401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Only authenticated users can modify the data</p>"
          }
        ],
        "Forbidden 403": [
          {
            "group": "Forbidden 403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>Only user with same id or admins can modify the data</p>"
          }
        ],
        "Not Found 404": [
          {
            "group": "Not Found 404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>User does not exist</p>"
          }
        ]
      }
    },
    "filename": "app/api/routes/v1/userRoute.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "api/cuti/ajukanCuti",
    "title": "add cuti",
    "description": "<p>post user's cuti</p>",
    "version": "1.0.0",
    "name": "UserPresent",
    "group": "User",
    "permission": [
      {
        "name": "user"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Athorization",
            "description": "<p>User's access token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email's user</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "awal_cuti",
            "description": "<p>awal cuti user</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "akhir_cuti",
            "description": "<p>akhir cuti user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "keterangan",
            "description": "<p>keterangan user</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email's user</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "awal_cuti",
            "description": "<p>awal cuti user</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "akhir_cuti",
            "description": "<p>akhir cuti user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "keterangan",
            "description": "<p>keterangan user</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Unauthorized 401": [
          {
            "group": "Unauthorized 401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Only authenticated Users can access the data</p>"
          }
        ]
      }
    },
    "filename": "app/api/routes/v1/cutiRoute.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "api/presents/addPresent",
    "title": "User Present",
    "description": "<p>post present user's</p>",
    "version": "1.0.0",
    "name": "UserPresent",
    "group": "User",
    "permission": [
      {
        "name": "user"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Athorization",
            "description": "<p>User's access token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email's user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "backlog",
            "description": "<p>backlog's user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "status_prs",
            "description": "<p>task's status</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "task",
            "description": "<p>task's user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "note",
            "description": "<p>note's user</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>present's id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>user's id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "backlog",
            "description": "<p>Backlog</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status_prs",
            "description": "<p>status_prs</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "task",
            "description": "<p>Task</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Note",
            "description": "<p>Note</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Timestamp</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Unauthorized 401": [
          {
            "group": "Unauthorized 401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Only authenticated Users can access the data</p>"
          }
        ]
      }
    },
    "filename": "app/api/routes/v1/presentRoute.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "api/presents/getAllPresent",
    "title": "Get All User Present",
    "description": "<p>post present user's</p>",
    "version": "1.0.0",
    "name": "UserPresent",
    "group": "User",
    "permission": [
      {
        "name": "user"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Athorization",
            "description": "<p>User's access token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>present's id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>user's id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "backlog",
            "description": "<p>Backlog</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "task",
            "description": "<p>Task</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Note",
            "description": "<p>Note</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Timestamp</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Unauthorized 401": [
          {
            "group": "Unauthorized 401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Only authenticated Users can access the data</p>"
          }
        ]
      }
    },
    "filename": "app/api/routes/v1/presentRoute.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "api/cuti/ajukanCuti",
    "title": "add cuti",
    "description": "<p>get all user's cuti</p>",
    "version": "1.0.0",
    "name": "UserPresent",
    "group": "User",
    "permission": [
      {
        "name": "user"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Athorization",
            "description": "<p>User's access token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email's user</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "awal_cuti",
            "description": "<p>awal cuti user</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "akhir_cuti",
            "description": "<p>akhir cuti user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "keterangan",
            "description": "<p>keterangan user</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Unauthorized 401": [
          {
            "group": "Unauthorized 401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Only authenticated Users can access the data</p>"
          }
        ]
      }
    },
    "filename": "app/api/routes/v1/cutiRoute.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "api/presents/getOnePresent/:userId",
    "title": "get One Present",
    "description": "<p>get present user's</p>",
    "version": "1.0.0",
    "name": "UserPresent",
    "group": "User",
    "permission": [
      {
        "name": "user"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Athorization",
            "description": "<p>User's access token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>present's id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>user's id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "backlog",
            "description": "<p>Backlog</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "task",
            "description": "<p>Task</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Note",
            "description": "<p>Note</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Timestamp</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Unauthorized 401": [
          {
            "group": "Unauthorized 401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Only authenticated Users can access the data</p>"
          }
        ]
      }
    },
    "filename": "app/api/routes/v1/presentRoute.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "api/users/profile",
    "title": "User PRofile",
    "description": "<p>Get logged in user profile information</p>",
    "version": "1.0.0",
    "name": "UserProfile",
    "group": "User",
    "permission": [
      {
        "name": "user"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Athorization",
            "description": "<p>User's access token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>User's id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>User's name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User's email</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>User's role</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Timestamp</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Unauthorized 401": [
          {
            "group": "Unauthorized 401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Only authenticated Users can access the data</p>"
          }
        ]
      }
    },
    "filename": "app/api/routes/v1/userRoute.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "api/slipGaji/getAllSlipGaji",
    "title": "Get All User's Salary Slip",
    "description": "<p>post present user's</p>",
    "version": "1.0.0",
    "name": "UserSlipGaji",
    "group": "User",
    "permission": [
      {
        "name": "user"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Athorization",
            "description": "<p>User's access token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email's user</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "awal_cuti",
            "description": "<p>awal cuti user</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "akhir_cuti",
            "description": "<p>akhir cuti user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "keterangan",
            "description": "<p>keterangan user</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Unauthorized 401": [
          {
            "group": "Unauthorized 401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Only authenticated Users can access the data</p>"
          }
        ]
      }
    },
    "filename": "app/api/routes/v1/slipGajiRoute.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "api/slipGaji/ajukanSlipGaji",
    "title": "User's Salary Slip",
    "description": "<p>post present user's</p>",
    "version": "1.0.0",
    "name": "UserSlipGaji",
    "group": "User",
    "permission": [
      {
        "name": "user"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Athorization",
            "description": "<p>User's access token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email's user</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "awal_cuti",
            "description": "<p>awal cuti user</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "akhir_cuti",
            "description": "<p>akhir cuti user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>status cuti</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "keterangan",
            "description": "<p>keterangan user</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email's user</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "awal_cuti",
            "description": "<p>awal cuti user</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "akhir_cuti",
            "description": "<p>akhir cuti user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>status cuti</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "keterangan",
            "description": "<p>keterangan user</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Unauthorized 401": [
          {
            "group": "Unauthorized 401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Only authenticated Users can access the data</p>"
          }
        ]
      }
    },
    "filename": "app/api/routes/v1/slipGajiRoute.js",
    "groupTitle": "User"
  }
] });
