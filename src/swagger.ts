export default {
  swagger: '2.0',
  info:{
    title: "Next Level Week Together",
    description: "API for managing program Valoriza for Rocketseat ❤️",
    version: "1.0.0",
  },
  produces:['application/json'],
  schemes: ["http"],
  host: 'localhost:3333',
  basePath: '/api/v1',
  paths: {
    '/users':{
      post: {
        summary : "Create a new user",
        description: "Create a new user",
        produces: ["application/json"],
        consumes: ["application/json"],
        parameters:[
          {
            in: "body",
            name: "body",
            description: "user object",
            required: true,
            schema:{
              type: "object",
              $ref: "#/definitions/newUser"
            }
          }
        ],
        responses: {
        "200": {
            description: "successful operation",
            schema: {
                type: "array",
                items: {
                    $ref: "#/definitions/successNewUser"
                }
            }
        },
        "400": {
            description: "Invalid status value",
            schema: {
                $ref: "#/definitions/error"
            }
          }
        }
      }
    },
    '/tags':{
      post: {
        summary : "Create a new user",
        description: "Create a new user",
        produces: ["application/json"],
        consumes: ["application/json"],
        parameters:[
          {
            in: "body",
            name: "body",
            description: "user object",
            required: true,
            schema:{
              type: "object",
              $ref: "#/definitions/newTag"
            }
          }
        ],
        responses: {
        "200": {
            description: "successful operation",
            schema: {
                type: "array",
                items: {
                    $ref: "#/definitions/successNewTag"
                }
            }
        },
        "400": {
            description: "Invalid status value",
            schema: {
                $ref: "#/definitions/error"
            }
          }
        }
      }
    }
  },
  definitions:{
    "newUser":{
      type: "object",
      properties:{
        "name": {type: "string"},
        "email": {type: "string"},
        "admin": {type: "boolean"}
      }
    },
    "newTag":{
      type: "object",
      properties:{
        "name": {type: "string"},
      }
    },
    "successNewUser":{
      type: "object",
      properties:{
      "id":{type: "string"},
      "name": {type: "string"}, 
      "email": {type: "string"},
      "admin": {type: "boolean"},
      "created_at": {type: "string"},
      "updated_at": {type: "string"}
      }
    },
    "successNewTag":{
      type: "object",
      properties:{
      "id":{type: "string"},
      "name": {type: "string"}, 
      "created_at": {type: "string"},
      "updated_at": {type: "string"}
      }
    },
    "error":{
      type: "object",
      properties:{
      "error":{type: "string", description: "error message"},
      }
    }
  }
}
           