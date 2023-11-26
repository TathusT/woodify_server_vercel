
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
} = require('./runtime/library')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.6.0
 * Query Engine version: e95e739751f42d8ca026f6b910f5a2dc5adeaeee
 */
Prisma.prismaVersion = {
  client: "5.6.0",
  engine: "e95e739751f42d8ca026f6b910f5a2dc5adeaeee"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}


  const path = require('path')

/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UsersScalarFieldEnum = {
  u_id: 'u_id',
  line_id: 'line_id',
  firstname: 'firstname',
  lastname: 'lastname',
  email: 'email',
  phone: 'phone',
  image: 'image',
  role: 'role',
  create_at: 'create_at',
  update_at: 'update_at'
};

exports.Prisma.Wood_infoScalarFieldEnum = {
  w_id: 'w_id',
  common_name: 'common_name',
  eng_name: 'eng_name',
  botanical_name: 'botanical_name',
  pedigree: 'pedigree',
  place_of_origin: 'place_of_origin',
  wood_characteristics: 'wood_characteristics',
  anatomical_characteristics: 'anatomical_characteristics',
  other: 'other',
  status: 'status',
  create_at: 'create_at',
  update_at: 'update_at',
  create_by: 'create_by',
  update_by: 'update_by'
};

exports.Prisma.Wood_ImageScalarFieldEnum = {
  wi_id: 'wi_id',
  w_id: 'w_id',
  path: 'path'
};

exports.Prisma.ManualScalarFieldEnum = {
  m_id: 'm_id',
  topic: 'topic',
  description: 'description',
  status: 'status',
  image: 'image',
  create_at: 'create_at',
  update_at: 'update_at',
  create_by: 'create_by',
  update_by: 'update_by'
};

exports.Prisma.ClassifyScalarFieldEnum = {
  c_id: 'c_id',
  status: 'status',
  status_verify: 'status_verify',
  select_result: 'select_result',
  result: 'result',
  create_at: 'create_at',
  create_by: 'create_by',
  verify_by: 'verify_by'
};

exports.Prisma.NoteScalarFieldEnum = {
  n_id: 'n_id',
  c_id: 'c_id',
  change_result: 'change_result',
  read_status: 'read_status',
  description: 'description',
  create_at: 'create_at',
  create_by: 'create_by'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.JsonNullValueInput = {
  JsonNull: Prisma.JsonNull
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};
exports.roleEnum = exports.$Enums.roleEnum = {
  USER: 'USER',
  EXPERT: 'EXPERT',
  ADMIN: 'ADMIN'
};

exports.StatusVerifyEnum = exports.$Enums.StatusVerifyEnum = {
  WAITING_FOR_VERIFICATION: 'WAITING_FOR_VERIFICATION',
  PASSED_CERTIFICATION: 'PASSED_CERTIFICATION',
  FAILED_CERTIFICATION: 'FAILED_CERTIFICATION'
};

exports.Prisma.ModelName = {
  Users: 'Users',
  Wood_info: 'Wood_info',
  Wood_Image: 'Wood_Image',
  Manual: 'Manual',
  Classify: 'Classify',
  Note: 'Note'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "/Users/poldoppio/Documents/Project/ServerWoodify/prisma/generated/client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "darwin-arm64",
        "native": true
      }
    ],
    "previewFeatures": [],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "../../../.env",
    "schemaEnvPath": "../../../.env"
  },
  "relativePath": "../..",
  "clientVersion": "5.6.0",
  "engineVersion": "e95e739751f42d8ca026f6b910f5a2dc5adeaeee",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "Ly8gVGhpcyBpcyB5b3VyIFByaXNtYSBzY2hlbWEgZmlsZSwKLy8gbGVhcm4gbW9yZSBhYm91dCBpdCBpbiB0aGUgZG9jczogaHR0cHM6Ly9wcmlzLmx5L2QvcHJpc21hLXNjaGVtYQoKZ2VuZXJhdG9yIGNsaWVudCB7CiAgcHJvdmlkZXIgPSAicHJpc21hLWNsaWVudC1qcyIKICBvdXRwdXQgICA9ICIuL2dlbmVyYXRlZC9jbGllbnQiCn0KCmRhdGFzb3VyY2UgZGIgewogIHByb3ZpZGVyID0gInBvc3RncmVzcWwiCiAgdXJsICAgICAgPSBlbnYoIkRBVEFCQVNFX1VSTCIpCn0KCm1vZGVsIFVzZXJzewogIHVfaWQgSW50IEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgbGluZV9pZCBTdHJpbmcgQHVuaXF1ZQogIGZpcnN0bmFtZSBTdHJpbmcKICBsYXN0bmFtZSBTdHJpbmcKICBlbWFpbCBTdHJpbmcgQHVuaXF1ZQogIHBob25lIFN0cmluZyBAdW5pcXVlCiAgaW1hZ2UgU3RyaW5nCiAgcm9sZSByb2xlRW51bQogIGNyZWF0ZV9hdCBEYXRlVGltZQogIHVwZGF0ZV9hdCBEYXRlVGltZQogIHdvb2RfaW5mbyBXb29kX2luZm9bXQogIHVwZGF0ZWRfd29vZF9pbmZvIFdvb2RfaW5mb1tdIEByZWxhdGlvbigidXBkYXRlciIpCiAgY3JlYXRlZF9tYW51YWxzIE1hbnVhbFtdIEByZWxhdGlvbigiY3JlYXRlZF9tYW51YWxzIikKICB1cGRhdGVkX21hbnVhbHMgTWFudWFsW10gQHJlbGF0aW9uKCJ1cGRhdGVkX21hbnVhbHMiKQogIGNyZWF0ZWRfY2xhc3NpZnkgQ2xhc3NpZnlbXSBAcmVsYXRpb24oImNyZWF0ZWRfY2xhc3NpZnkiKQogIHZlcmlmeV9jbGFzc2lmeSBDbGFzc2lmeVtdIEByZWxhdGlvbigidmVyaWZ5X2NsYXNzaWZ5IikKfQoKZW51bSByb2xlRW51bSB7CiAgVVNFUgogIEVYUEVSVAogIEFETUlOCn0KCm1vZGVsIFdvb2RfaW5mbyB7CiAgd19pZCAgICAgICAgICAgICAgICAgICAgIEludCAgICAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQogIGNvbW1vbl9uYW1lICAgICAgICAgICAgICBTdHJpbmdbXQogIGVuZ19uYW1lICAgICAgICAgICAgICAgICBTdHJpbmdbXQogIGJvdGFuaWNhbF9uYW1lICAgICAgICAgICBTdHJpbmcKICBwZWRpZ3JlZSAgICAgICAgICAgICAgICAgU3RyaW5nCiAgcGxhY2Vfb2Zfb3JpZ2luICAgICAgICAgIFN0cmluZwogIHdvb2RfY2hhcmFjdGVyaXN0aWNzICAgICBTdHJpbmcKICBhbmF0b21pY2FsX2NoYXJhY3RlcmlzdGljcyBTdHJpbmcKICBvdGhlciAgICAgICAgICAgICAgICAgICAgU3RyaW5nCiAgc3RhdHVzICAgICAgICAgICAgICAgICAgIEJvb2xlYW4KICBjcmVhdGVfYXQgICAgICAgICAgICAgICAgRGF0ZVRpbWUKICB1cGRhdGVfYXQgICAgICAgICAgICAgICAgRGF0ZVRpbWUKICBjcmVhdGVfYnkgICAgICAgICAgICAgICBJbnQKICB1cGRhdGVfYnkgICAgICAgICAgICAgICBJbnQKICB3b29kX2ltYWdlICAgICAgICAgICAgICBXb29kX0ltYWdlW10KICB1c2VyICAgICAgICAgICAgICAgICAgICBVc2VycyAgICAgICBAcmVsYXRpb24oZmllbGRzOiBbY3JlYXRlX2J5XSwgcmVmZXJlbmNlczogW3VfaWRdKQogIHVwZGF0ZXIgICAgICAgICAgICAgICAgIFVzZXJzICAgICAgIEByZWxhdGlvbigidXBkYXRlciIsIGZpZWxkczogW3VwZGF0ZV9ieV0sIHJlZmVyZW5jZXM6IFt1X2lkXSkKfQoKbW9kZWwgV29vZF9JbWFnZXsKICB3aV9pZCBJbnQgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICB3X2lkIEludAogIHBhdGggU3RyaW5nCiAgd29vZF9pbmZvIFdvb2RfaW5mbyBAcmVsYXRpb24oZmllbGRzOiBbd19pZF0sIHJlZmVyZW5jZXM6IFt3X2lkXSkKfQoKbW9kZWwgTWFudWFsewogIG1faWQgSW50IEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgdG9waWMgU3RyaW5nCiAgZGVzY3JpcHRpb24gU3RyaW5nCiAgc3RhdHVzIEJvb2xlYW4KICBpbWFnZSBTdHJpbmcKICBjcmVhdGVfYXQgRGF0ZVRpbWUKICB1cGRhdGVfYXQgRGF0ZVRpbWUKICBjcmVhdGVfYnkgSW50CiAgdXBkYXRlX2J5IEludAogIGNyZWF0b3IgICAgICAgICAgICBVc2VycyAgICBAcmVsYXRpb24oImNyZWF0ZWRfbWFudWFscyIsIGZpZWxkczogW2NyZWF0ZV9ieV0sIHJlZmVyZW5jZXM6IFt1X2lkXSkKICB1cGRhdGVyICAgICAgICAgICAgVXNlcnMgICAgQHJlbGF0aW9uKCJ1cGRhdGVkX21hbnVhbHMiLCBmaWVsZHM6IFt1cGRhdGVfYnldLCByZWZlcmVuY2VzOiBbdV9pZF0pCn0KCm1vZGVsIENsYXNzaWZ5ewogIGNfaWQgSW50IEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgc3RhdHVzIEJvb2xlYW4KICBzdGF0dXNfdmVyaWZ5IFN0YXR1c1ZlcmlmeUVudW0KICBzZWxlY3RfcmVzdWx0IFN0cmluZwogIHJlc3VsdCBKc29uCiAgY3JlYXRlX2F0IERhdGVUaW1lCiAgY3JlYXRlX2J5IEludAogIHZlcmlmeV9ieSBJbnQKICBjcmVhdG9yICAgICAgICAgICAgVXNlcnMgICAgQHJlbGF0aW9uKCJjcmVhdGVkX2NsYXNzaWZ5IiwgZmllbGRzOiBbY3JlYXRlX2J5XSwgcmVmZXJlbmNlczogW3VfaWRdKQogIHZlcmlmaXRvciAgICAgICAgICAgIFVzZXJzICAgIEByZWxhdGlvbigidmVyaWZ5X2NsYXNzaWZ5IiwgZmllbGRzOiBbdmVyaWZ5X2J5XSwgcmVmZXJlbmNlczogW3VfaWRdKQogIG5vdGVzIE5vdGVbXQp9CgplbnVtIFN0YXR1c1ZlcmlmeUVudW0gewogIFdBSVRJTkdfRk9SX1ZFUklGSUNBVElPTgogIFBBU1NFRF9DRVJUSUZJQ0FUSU9OCiAgRkFJTEVEX0NFUlRJRklDQVRJT04KfQoKbW9kZWwgTm90ZXsKICBuX2lkIEludCBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQogIGNfaWQgSW50CiAgY2hhbmdlX3Jlc3VsdCBCb29sZWFuCiAgcmVhZF9zdGF0dXMgQm9vbGVhbgogIGRlc2NyaXB0aW9uIFN0cmluZwogIGNyZWF0ZV9hdCBEYXRlVGltZQogIGNyZWF0ZV9ieSBJbnQKICBjbGFzc2lmeSBDbGFzc2lmeSBAcmVsYXRpb24oZmllbGRzOiBbY19pZF0sIHJlZmVyZW5jZXM6IFtjX2lkXSkKfQoKCgo=",
  "inlineSchemaHash": "ea90c4b438370eefdebc6ac2607f8afcfc13c42c9d57ced3450ccc792c5c72ab"
}

const fs = require('fs')

config.dirname = __dirname
if (!fs.existsSync(path.join(__dirname, 'schema.prisma'))) {
  const alternativePaths = [
    "prisma/generated/client",
    "generated/client",
  ]
  
  const alternativePath = alternativePaths.find((altPath) => {
    return fs.existsSync(path.join(process.cwd(), altPath, 'schema.prisma'))
  }) ?? alternativePaths[0]

  config.dirname = path.join(process.cwd(), alternativePath)
  config.isBundled = true
}

config.runtimeDataModel = JSON.parse("{\"models\":{\"Users\":{\"dbName\":null,\"fields\":[{\"name\":\"u_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"line_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"firstname\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lastname\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"phone\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"image\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"role\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"roleEnum\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"create_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"update_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"wood_info\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Wood_info\",\"relationName\":\"UsersToWood_info\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_wood_info\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Wood_info\",\"relationName\":\"updater\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_manuals\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Manual\",\"relationName\":\"created_manuals\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_manuals\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Manual\",\"relationName\":\"updated_manuals\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_classify\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Classify\",\"relationName\":\"created_classify\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"verify_classify\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Classify\",\"relationName\":\"verify_classify\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Wood_info\":{\"dbName\":null,\"fields\":[{\"name\":\"w_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"common_name\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"eng_name\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"botanical_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pedigree\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"place_of_origin\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"wood_characteristics\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"anatomical_characteristics\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"other\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"create_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"update_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"create_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"update_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"wood_image\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Wood_Image\",\"relationName\":\"Wood_ImageToWood_info\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Users\",\"relationName\":\"UsersToWood_info\",\"relationFromFields\":[\"create_by\"],\"relationToFields\":[\"u_id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updater\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Users\",\"relationName\":\"updater\",\"relationFromFields\":[\"update_by\"],\"relationToFields\":[\"u_id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Wood_Image\":{\"dbName\":null,\"fields\":[{\"name\":\"wi_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"w_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"path\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"wood_info\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Wood_info\",\"relationName\":\"Wood_ImageToWood_info\",\"relationFromFields\":[\"w_id\"],\"relationToFields\":[\"w_id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Manual\":{\"dbName\":null,\"fields\":[{\"name\":\"m_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"topic\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"image\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"create_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"update_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"create_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"update_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"creator\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Users\",\"relationName\":\"created_manuals\",\"relationFromFields\":[\"create_by\"],\"relationToFields\":[\"u_id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updater\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Users\",\"relationName\":\"updated_manuals\",\"relationFromFields\":[\"update_by\"],\"relationToFields\":[\"u_id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Classify\":{\"dbName\":null,\"fields\":[{\"name\":\"c_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status_verify\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"StatusVerifyEnum\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"select_result\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"result\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"create_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"create_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"verify_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"creator\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Users\",\"relationName\":\"created_classify\",\"relationFromFields\":[\"create_by\"],\"relationToFields\":[\"u_id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"verifitor\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Users\",\"relationName\":\"verify_classify\",\"relationFromFields\":[\"verify_by\"],\"relationToFields\":[\"u_id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"notes\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Note\",\"relationName\":\"ClassifyToNote\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Note\":{\"dbName\":null,\"fields\":[{\"name\":\"n_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"c_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"change_result\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"read_status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"create_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"create_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"classify\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Classify\",\"relationName\":\"ClassifyToNote\",\"relationFromFields\":[\"c_id\"],\"relationToFields\":[\"c_id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{\"roleEnum\":{\"values\":[{\"name\":\"USER\",\"dbName\":null},{\"name\":\"EXPERT\",\"dbName\":null},{\"name\":\"ADMIN\",\"dbName\":null}],\"dbName\":null},\"StatusVerifyEnum\":{\"values\":[{\"name\":\"WAITING_FOR_VERIFICATION\",\"dbName\":null},{\"name\":\"PASSED_CERTIFICATION\",\"dbName\":null},{\"name\":\"FAILED_CERTIFICATION\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.getQueryEngineWasmModule = undefined


const { warnEnvConflicts } = require('./runtime/library')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

// file annotations for bundling tools to include these files
path.join(__dirname, "libquery_engine-darwin-arm64.dylib.node");
path.join(process.cwd(), "prisma/generated/client/libquery_engine-darwin-arm64.dylib.node")
// file annotations for bundling tools to include these files
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "prisma/generated/client/schema.prisma")
