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
        tags:["Users"],
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
      },
      get: {
        summary : "List all users",
        description: "Create a new user",
        tags:["Users"],
        produces: ["application/json"],
        consumes: ["application/json"],
        responses: {
        "200": {
            description: "successful operation",
            schema: {
                type: "array",
                items: {
                    $ref: "#/definitions/User"
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
        tags:["tags"],
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
      },
      get: {
        summary : "List all tags",
        description: "Create a new user",
        tags:["tags"],
        produces: ["application/json"],
        consumes: ["application/json"],
        responses: {
        "200": {
            description: "successful operation",
            schema: {
                type: "array",
                items: {
                    $ref: "#/definitions/Tags"
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
    '/session':{
      post: {
        summary : "Create a new session",
        description: "Create a new session",
        tags:["Sessions"],
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
              $ref: "#/definitions/newSession"
            }
          }
        ],
        responses: {
        "200": {
            description: "successful operation",
            schema: {
                type: "array",
                items: {
                    $ref: "#/definitions/sucess"
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
    '/compliments':{
      post: {
        summary : "Create a new compliment",
        description: "Create a new compliment",
        tags:["Compliments"],
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
              $ref: "#/definitions/newCompliment"
            }
          }
        ],
        responses: {
        "200": {
            description: "successful operation",
            schema: {
                type: "array",
                items: {
                    $ref: "#/definitions/successNewCompliment"
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
    '/compliments/send':{
      get: {
        summary : "Create a new compliment",
        description: "Create a new compliment",
        tags:["Compliments"],
        produces: ["application/json"],
        consumes: ["application/json"],
        responses: {
        "200": {
            description: "successful operation",
            schema: {
                type: "array",
                items: {
                    $ref: "#/definitions/ComplimentSender"
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
    '/compliments/receive':{
      get: {
        summary : "Create a new compliment",
        description: "Create a new compliment",
        tags:["Compliments"],
        produces: ["application/json"],
        consumes: ["application/json"],
        responses: {
        "200": {
            description: "successful operation",
            schema: {
                type: "array",
                items: {
                    $ref: "#/definitions/ComplimentReceived"
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
        "admin": {type: "boolean"},
        "password": {type: "string"},
        "created_at": {type: "string"},
        "updated_at": {type: "string"}
      }
    },
    "User":{
      type: "object",
      properties:{
        "name": {type: "string"},
        "email": {type: "string"},
        "admin": {type: "boolean"},
        "created_at": {type: "string"},
        "updated_at": {type: "string"}
      }
    },
    "newSession":{
      type: "object",
      properties:{
        "email": {type: "string"},
        "password": {type: "string"}
      }
    },
    "newTag":{
      type: "object",
      properties:{
        "name": {type: "string"},
      }
    },
    "Tags":{
      type: "object",
      properties:{
        "name": {type: "string"},
        "created_at": {type: "string"},
      }
    },
    "newCompliment":{
      type: "object",
      properties:{
        "tag_id": {type: "string"},
        "user_receiver": {type: "string"},
        "message": {type: "string"},
      }
    },
    "ComplimentSender":{
      type: "object",
      properties:{
        "tag_id": {type: "string"},
        "user_receiver": {type: "string"},
        "message": {type: "string"},
      }
    },
    "ComplimentReceived":{
      type: "object",
      properties:{
        "tag_id": {type: "string"},
        "user_sender": {type: "string"},
        "message": {type: "string"},
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
    "successNewCompliment":{
      type: "object",
      properties:{
      "id":{type: "string"},
      "user_sender": {type: "string"}, 
      "user_receiver": {type: "string"},
      "tag_id": {type: "string"},
      "message": {type: "string"},
      "created_at": {type: "string"}
      }
    },
    "error":{
      type: "object",
      properties:{
      "error":{type: "string", description: "error message"},
      }
    },
    "sucess":{
      type: "string",
    }
  }
}
           