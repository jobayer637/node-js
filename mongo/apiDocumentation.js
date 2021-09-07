const apiDocumentation = [
    {
        "blog" : {
            "create" : {
                "title": "required|min-10",
                "body": "required|min-20",
                "image": "optional|single-image",
                "userId": "required",
                "api-route": "http://localhost:4000/api/blog/create"
            },
            "update": {
                "title": "required",
                "body": "required",
                "image": "optional",
                "api-route": "http://localhost:4000/api/blog/update/blogId"
            },
            "delete": {
                "api-route": "http://localhost:4000/api/blog/delete/blogId"
            },
            "all": {
                "api-route": "http://localhost:4000/api/blog/blogs"
            },
            "single": {
                "api-route": "http://localhost:4000/api/blog/blogId"
            }
        }
    },

    {
        "user" : {
            "register" : {
                "name": "required",
                "email": "required",
                "password": "required",
                "image": "optional",
                "api-route": "http://localhost:4000/api/auth/register"
            },
            "login": {
                "name": "required",
                "email": "required",
                "api-route": "http://localhost:4000/api/auth/login"
            },
            "update user": {
                "name": "required",
                "email": "required",
                "image": "optional",
                "api-route": "http://localhost:4000/api/user/update/userId"
            },
            "update password": {
                "oldPassword": "required",
                "newPassword": "required",
                "api-route": "http://localhost:4000/api/user/update/password/userId"
            },
            "delete": {
                "api-route": "http://localhost:4000/api/user/delete/userId"
            },
            "all": {
                "api-route": "http://localhost:4000/api/user/users"
            },
            "single": {
                "api-route": "http://localhost:4000/api/user/userId"
            }
        }
    }
]

module.exports = apiDocumentation