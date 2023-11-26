
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Users
 * 
 */
export type Users = $Result.DefaultSelection<Prisma.$UsersPayload>
/**
 * Model Wood_info
 * 
 */
export type Wood_info = $Result.DefaultSelection<Prisma.$Wood_infoPayload>
/**
 * Model Wood_Image
 * 
 */
export type Wood_Image = $Result.DefaultSelection<Prisma.$Wood_ImagePayload>
/**
 * Model Manual
 * 
 */
export type Manual = $Result.DefaultSelection<Prisma.$ManualPayload>
/**
 * Model Classify
 * 
 */
export type Classify = $Result.DefaultSelection<Prisma.$ClassifyPayload>
/**
 * Model Note
 * 
 */
export type Note = $Result.DefaultSelection<Prisma.$NotePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const roleEnum: {
  USER: 'USER',
  EXPERT: 'EXPERT',
  ADMIN: 'ADMIN'
};

export type roleEnum = (typeof roleEnum)[keyof typeof roleEnum]


export const StatusVerifyEnum: {
  WAITING_FOR_VERIFICATION: 'WAITING_FOR_VERIFICATION',
  PASSED_CERTIFICATION: 'PASSED_CERTIFICATION',
  FAILED_CERTIFICATION: 'FAILED_CERTIFICATION'
};

export type StatusVerifyEnum = (typeof StatusVerifyEnum)[keyof typeof StatusVerifyEnum]

}

export type roleEnum = $Enums.roleEnum

export const roleEnum: typeof $Enums.roleEnum

export type StatusVerifyEnum = $Enums.StatusVerifyEnum

export const StatusVerifyEnum: typeof $Enums.StatusVerifyEnum

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.users.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<ExtArgs>;

  /**
   * `prisma.wood_info`: Exposes CRUD operations for the **Wood_info** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Wood_infos
    * const wood_infos = await prisma.wood_info.findMany()
    * ```
    */
  get wood_info(): Prisma.Wood_infoDelegate<ExtArgs>;

  /**
   * `prisma.wood_Image`: Exposes CRUD operations for the **Wood_Image** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Wood_Images
    * const wood_Images = await prisma.wood_Image.findMany()
    * ```
    */
  get wood_Image(): Prisma.Wood_ImageDelegate<ExtArgs>;

  /**
   * `prisma.manual`: Exposes CRUD operations for the **Manual** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Manuals
    * const manuals = await prisma.manual.findMany()
    * ```
    */
  get manual(): Prisma.ManualDelegate<ExtArgs>;

  /**
   * `prisma.classify`: Exposes CRUD operations for the **Classify** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Classifies
    * const classifies = await prisma.classify.findMany()
    * ```
    */
  get classify(): Prisma.ClassifyDelegate<ExtArgs>;

  /**
   * `prisma.note`: Exposes CRUD operations for the **Note** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notes
    * const notes = await prisma.note.findMany()
    * ```
    */
  get note(): Prisma.NoteDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.6.0
   * Query Engine version: e95e739751f42d8ca026f6b910f5a2dc5adeaeee
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Users: 'Users',
    Wood_info: 'Wood_info',
    Wood_Image: 'Wood_Image',
    Manual: 'Manual',
    Classify: 'Classify',
    Note: 'Note'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'users' | 'wood_info' | 'wood_Image' | 'manual' | 'classify' | 'note'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Users: {
        payload: Prisma.$UsersPayload<ExtArgs>
        fields: Prisma.UsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findFirst: {
            args: Prisma.UsersFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findMany: {
            args: Prisma.UsersFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          create: {
            args: Prisma.UsersCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          createMany: {
            args: Prisma.UsersCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UsersDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          update: {
            args: Prisma.UsersUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          deleteMany: {
            args: Prisma.UsersDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UsersUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UsersUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.UsersGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersCountArgs<ExtArgs>,
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      Wood_info: {
        payload: Prisma.$Wood_infoPayload<ExtArgs>
        fields: Prisma.Wood_infoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Wood_infoFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Wood_infoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Wood_infoFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Wood_infoPayload>
          }
          findFirst: {
            args: Prisma.Wood_infoFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Wood_infoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Wood_infoFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Wood_infoPayload>
          }
          findMany: {
            args: Prisma.Wood_infoFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Wood_infoPayload>[]
          }
          create: {
            args: Prisma.Wood_infoCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Wood_infoPayload>
          }
          createMany: {
            args: Prisma.Wood_infoCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.Wood_infoDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Wood_infoPayload>
          }
          update: {
            args: Prisma.Wood_infoUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Wood_infoPayload>
          }
          deleteMany: {
            args: Prisma.Wood_infoDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.Wood_infoUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.Wood_infoUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Wood_infoPayload>
          }
          aggregate: {
            args: Prisma.Wood_infoAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateWood_info>
          }
          groupBy: {
            args: Prisma.Wood_infoGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Wood_infoGroupByOutputType>[]
          }
          count: {
            args: Prisma.Wood_infoCountArgs<ExtArgs>,
            result: $Utils.Optional<Wood_infoCountAggregateOutputType> | number
          }
        }
      }
      Wood_Image: {
        payload: Prisma.$Wood_ImagePayload<ExtArgs>
        fields: Prisma.Wood_ImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Wood_ImageFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Wood_ImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Wood_ImageFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Wood_ImagePayload>
          }
          findFirst: {
            args: Prisma.Wood_ImageFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Wood_ImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Wood_ImageFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Wood_ImagePayload>
          }
          findMany: {
            args: Prisma.Wood_ImageFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Wood_ImagePayload>[]
          }
          create: {
            args: Prisma.Wood_ImageCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Wood_ImagePayload>
          }
          createMany: {
            args: Prisma.Wood_ImageCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.Wood_ImageDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Wood_ImagePayload>
          }
          update: {
            args: Prisma.Wood_ImageUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Wood_ImagePayload>
          }
          deleteMany: {
            args: Prisma.Wood_ImageDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.Wood_ImageUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.Wood_ImageUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Wood_ImagePayload>
          }
          aggregate: {
            args: Prisma.Wood_ImageAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateWood_Image>
          }
          groupBy: {
            args: Prisma.Wood_ImageGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Wood_ImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.Wood_ImageCountArgs<ExtArgs>,
            result: $Utils.Optional<Wood_ImageCountAggregateOutputType> | number
          }
        }
      }
      Manual: {
        payload: Prisma.$ManualPayload<ExtArgs>
        fields: Prisma.ManualFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ManualFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ManualPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ManualFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ManualPayload>
          }
          findFirst: {
            args: Prisma.ManualFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ManualPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ManualFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ManualPayload>
          }
          findMany: {
            args: Prisma.ManualFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ManualPayload>[]
          }
          create: {
            args: Prisma.ManualCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ManualPayload>
          }
          createMany: {
            args: Prisma.ManualCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ManualDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ManualPayload>
          }
          update: {
            args: Prisma.ManualUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ManualPayload>
          }
          deleteMany: {
            args: Prisma.ManualDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ManualUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ManualUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ManualPayload>
          }
          aggregate: {
            args: Prisma.ManualAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateManual>
          }
          groupBy: {
            args: Prisma.ManualGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ManualGroupByOutputType>[]
          }
          count: {
            args: Prisma.ManualCountArgs<ExtArgs>,
            result: $Utils.Optional<ManualCountAggregateOutputType> | number
          }
        }
      }
      Classify: {
        payload: Prisma.$ClassifyPayload<ExtArgs>
        fields: Prisma.ClassifyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClassifyFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClassifyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClassifyFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClassifyPayload>
          }
          findFirst: {
            args: Prisma.ClassifyFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClassifyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClassifyFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClassifyPayload>
          }
          findMany: {
            args: Prisma.ClassifyFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClassifyPayload>[]
          }
          create: {
            args: Prisma.ClassifyCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClassifyPayload>
          }
          createMany: {
            args: Prisma.ClassifyCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ClassifyDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClassifyPayload>
          }
          update: {
            args: Prisma.ClassifyUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClassifyPayload>
          }
          deleteMany: {
            args: Prisma.ClassifyDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ClassifyUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ClassifyUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClassifyPayload>
          }
          aggregate: {
            args: Prisma.ClassifyAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateClassify>
          }
          groupBy: {
            args: Prisma.ClassifyGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ClassifyGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClassifyCountArgs<ExtArgs>,
            result: $Utils.Optional<ClassifyCountAggregateOutputType> | number
          }
        }
      }
      Note: {
        payload: Prisma.$NotePayload<ExtArgs>
        fields: Prisma.NoteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NoteFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NotePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NoteFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NotePayload>
          }
          findFirst: {
            args: Prisma.NoteFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NotePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NoteFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NotePayload>
          }
          findMany: {
            args: Prisma.NoteFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NotePayload>[]
          }
          create: {
            args: Prisma.NoteCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NotePayload>
          }
          createMany: {
            args: Prisma.NoteCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.NoteDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NotePayload>
          }
          update: {
            args: Prisma.NoteUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NotePayload>
          }
          deleteMany: {
            args: Prisma.NoteDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.NoteUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.NoteUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NotePayload>
          }
          aggregate: {
            args: Prisma.NoteAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateNote>
          }
          groupBy: {
            args: Prisma.NoteGroupByArgs<ExtArgs>,
            result: $Utils.Optional<NoteGroupByOutputType>[]
          }
          count: {
            args: Prisma.NoteCountArgs<ExtArgs>,
            result: $Utils.Optional<NoteCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    wood_info: number
    updated_wood_info: number
    created_manuals: number
    updated_manuals: number
    created_classify: number
    verify_classify: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    wood_info?: boolean | UsersCountOutputTypeCountWood_infoArgs
    updated_wood_info?: boolean | UsersCountOutputTypeCountUpdated_wood_infoArgs
    created_manuals?: boolean | UsersCountOutputTypeCountCreated_manualsArgs
    updated_manuals?: boolean | UsersCountOutputTypeCountUpdated_manualsArgs
    created_classify?: boolean | UsersCountOutputTypeCountCreated_classifyArgs
    verify_classify?: boolean | UsersCountOutputTypeCountVerify_classifyArgs
  }

  // Custom InputTypes

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountWood_infoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Wood_infoWhereInput
  }


  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountUpdated_wood_infoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Wood_infoWhereInput
  }


  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountCreated_manualsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ManualWhereInput
  }


  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountUpdated_manualsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ManualWhereInput
  }


  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountCreated_classifyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassifyWhereInput
  }


  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountVerify_classifyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassifyWhereInput
  }



  /**
   * Count Type Wood_infoCountOutputType
   */

  export type Wood_infoCountOutputType = {
    wood_image: number
  }

  export type Wood_infoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    wood_image?: boolean | Wood_infoCountOutputTypeCountWood_imageArgs
  }

  // Custom InputTypes

  /**
   * Wood_infoCountOutputType without action
   */
  export type Wood_infoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wood_infoCountOutputType
     */
    select?: Wood_infoCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * Wood_infoCountOutputType without action
   */
  export type Wood_infoCountOutputTypeCountWood_imageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Wood_ImageWhereInput
  }



  /**
   * Count Type ClassifyCountOutputType
   */

  export type ClassifyCountOutputType = {
    notes: number
  }

  export type ClassifyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notes?: boolean | ClassifyCountOutputTypeCountNotesArgs
  }

  // Custom InputTypes

  /**
   * ClassifyCountOutputType without action
   */
  export type ClassifyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassifyCountOutputType
     */
    select?: ClassifyCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ClassifyCountOutputType without action
   */
  export type ClassifyCountOutputTypeCountNotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NoteWhereInput
  }



  /**
   * Models
   */

  /**
   * Model Users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    u_id: number | null
  }

  export type UsersSumAggregateOutputType = {
    u_id: number | null
  }

  export type UsersMinAggregateOutputType = {
    u_id: number | null
    line_id: string | null
    firstname: string | null
    lastname: string | null
    email: string | null
    phone: string | null
    image: string | null
    role: $Enums.roleEnum | null
    create_at: Date | null
    update_at: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    u_id: number | null
    line_id: string | null
    firstname: string | null
    lastname: string | null
    email: string | null
    phone: string | null
    image: string | null
    role: $Enums.roleEnum | null
    create_at: Date | null
    update_at: Date | null
  }

  export type UsersCountAggregateOutputType = {
    u_id: number
    line_id: number
    firstname: number
    lastname: number
    email: number
    phone: number
    image: number
    role: number
    create_at: number
    update_at: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    u_id?: true
  }

  export type UsersSumAggregateInputType = {
    u_id?: true
  }

  export type UsersMinAggregateInputType = {
    u_id?: true
    line_id?: true
    firstname?: true
    lastname?: true
    email?: true
    phone?: true
    image?: true
    role?: true
    create_at?: true
    update_at?: true
  }

  export type UsersMaxAggregateInputType = {
    u_id?: true
    line_id?: true
    firstname?: true
    lastname?: true
    email?: true
    phone?: true
    image?: true
    role?: true
    create_at?: true
    update_at?: true
  }

  export type UsersCountAggregateInputType = {
    u_id?: true
    line_id?: true
    firstname?: true
    lastname?: true
    email?: true
    phone?: true
    image?: true
    role?: true
    create_at?: true
    update_at?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to aggregate.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithAggregationInput | UsersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    u_id: number
    line_id: string
    firstname: string
    lastname: string
    email: string
    phone: string
    image: string
    role: $Enums.roleEnum
    create_at: Date
    update_at: Date
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type UsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    u_id?: boolean
    line_id?: boolean
    firstname?: boolean
    lastname?: boolean
    email?: boolean
    phone?: boolean
    image?: boolean
    role?: boolean
    create_at?: boolean
    update_at?: boolean
    wood_info?: boolean | Users$wood_infoArgs<ExtArgs>
    updated_wood_info?: boolean | Users$updated_wood_infoArgs<ExtArgs>
    created_manuals?: boolean | Users$created_manualsArgs<ExtArgs>
    updated_manuals?: boolean | Users$updated_manualsArgs<ExtArgs>
    created_classify?: boolean | Users$created_classifyArgs<ExtArgs>
    verify_classify?: boolean | Users$verify_classifyArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type UsersSelectScalar = {
    u_id?: boolean
    line_id?: boolean
    firstname?: boolean
    lastname?: boolean
    email?: boolean
    phone?: boolean
    image?: boolean
    role?: boolean
    create_at?: boolean
    update_at?: boolean
  }

  export type UsersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    wood_info?: boolean | Users$wood_infoArgs<ExtArgs>
    updated_wood_info?: boolean | Users$updated_wood_infoArgs<ExtArgs>
    created_manuals?: boolean | Users$created_manualsArgs<ExtArgs>
    updated_manuals?: boolean | Users$updated_manualsArgs<ExtArgs>
    created_classify?: boolean | Users$created_classifyArgs<ExtArgs>
    verify_classify?: boolean | Users$verify_classifyArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users"
    objects: {
      wood_info: Prisma.$Wood_infoPayload<ExtArgs>[]
      updated_wood_info: Prisma.$Wood_infoPayload<ExtArgs>[]
      created_manuals: Prisma.$ManualPayload<ExtArgs>[]
      updated_manuals: Prisma.$ManualPayload<ExtArgs>[]
      created_classify: Prisma.$ClassifyPayload<ExtArgs>[]
      verify_classify: Prisma.$ClassifyPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      u_id: number
      line_id: string
      firstname: string
      lastname: string
      email: string
      phone: string
      image: string
      role: $Enums.roleEnum
      create_at: Date
      update_at: Date
    }, ExtArgs["result"]["users"]>
    composites: {}
  }


  type UsersGetPayload<S extends boolean | null | undefined | UsersDefaultArgs> = $Result.GetResult<Prisma.$UsersPayload, S>

  type UsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UsersFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: UsersCountAggregateInputType | true
    }

  export interface UsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Users'], meta: { name: 'Users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UsersFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UsersFindUniqueArgs<ExtArgs>>
    ): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Users that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UsersFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UsersFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UsersFindFirstArgs<ExtArgs>>
    ): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UsersFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `u_id`
     * const usersWithU_idOnly = await prisma.users.findMany({ select: { u_id: true } })
     * 
    **/
    findMany<T extends UsersFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UsersFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
    **/
    create<T extends UsersCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UsersCreateArgs<ExtArgs>>
    ): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UsersCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const users = await prisma.users.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UsersCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UsersCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
    **/
    delete<T extends UsersDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UsersDeleteArgs<ExtArgs>>
    ): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UsersUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UsersUpdateArgs<ExtArgs>>
    ): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UsersDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UsersDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UsersUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UsersUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
    **/
    upsert<T extends UsersUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UsersUpsertArgs<ExtArgs>>
    ): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Users model
   */
  readonly fields: UsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    wood_info<T extends Users$wood_infoArgs<ExtArgs> = {}>(args?: Subset<T, Users$wood_infoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Wood_infoPayload<ExtArgs>, T, 'findMany'> | Null>;

    updated_wood_info<T extends Users$updated_wood_infoArgs<ExtArgs> = {}>(args?: Subset<T, Users$updated_wood_infoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Wood_infoPayload<ExtArgs>, T, 'findMany'> | Null>;

    created_manuals<T extends Users$created_manualsArgs<ExtArgs> = {}>(args?: Subset<T, Users$created_manualsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ManualPayload<ExtArgs>, T, 'findMany'> | Null>;

    updated_manuals<T extends Users$updated_manualsArgs<ExtArgs> = {}>(args?: Subset<T, Users$updated_manualsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ManualPayload<ExtArgs>, T, 'findMany'> | Null>;

    created_classify<T extends Users$created_classifyArgs<ExtArgs> = {}>(args?: Subset<T, Users$created_classifyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassifyPayload<ExtArgs>, T, 'findMany'> | Null>;

    verify_classify<T extends Users$verify_classifyArgs<ExtArgs> = {}>(args?: Subset<T, Users$verify_classifyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassifyPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Users model
   */ 
  interface UsersFieldRefs {
    readonly u_id: FieldRef<"Users", 'Int'>
    readonly line_id: FieldRef<"Users", 'String'>
    readonly firstname: FieldRef<"Users", 'String'>
    readonly lastname: FieldRef<"Users", 'String'>
    readonly email: FieldRef<"Users", 'String'>
    readonly phone: FieldRef<"Users", 'String'>
    readonly image: FieldRef<"Users", 'String'>
    readonly role: FieldRef<"Users", 'roleEnum'>
    readonly create_at: FieldRef<"Users", 'DateTime'>
    readonly update_at: FieldRef<"Users", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Users findUnique
   */
  export type UsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }


  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }


  /**
   * Users findFirst
   */
  export type UsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }


  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }


  /**
   * Users findMany
   */
  export type UsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }


  /**
   * Users create
   */
  export type UsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to create a Users.
     */
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }


  /**
   * Users createMany
   */
  export type UsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Users update
   */
  export type UsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to update a Users.
     */
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     */
    where: UsersWhereUniqueInput
  }


  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
  }


  /**
   * Users upsert
   */
  export type UsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The filter to search for the Users to update in case it exists.
     */
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     */
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }


  /**
   * Users delete
   */
  export type UsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter which Users to delete.
     */
    where: UsersWhereUniqueInput
  }


  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UsersWhereInput
  }


  /**
   * Users.wood_info
   */
  export type Users$wood_infoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wood_info
     */
    select?: Wood_infoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Wood_infoInclude<ExtArgs> | null
    where?: Wood_infoWhereInput
    orderBy?: Wood_infoOrderByWithRelationInput | Wood_infoOrderByWithRelationInput[]
    cursor?: Wood_infoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Wood_infoScalarFieldEnum | Wood_infoScalarFieldEnum[]
  }


  /**
   * Users.updated_wood_info
   */
  export type Users$updated_wood_infoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wood_info
     */
    select?: Wood_infoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Wood_infoInclude<ExtArgs> | null
    where?: Wood_infoWhereInput
    orderBy?: Wood_infoOrderByWithRelationInput | Wood_infoOrderByWithRelationInput[]
    cursor?: Wood_infoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Wood_infoScalarFieldEnum | Wood_infoScalarFieldEnum[]
  }


  /**
   * Users.created_manuals
   */
  export type Users$created_manualsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manual
     */
    select?: ManualSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ManualInclude<ExtArgs> | null
    where?: ManualWhereInput
    orderBy?: ManualOrderByWithRelationInput | ManualOrderByWithRelationInput[]
    cursor?: ManualWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ManualScalarFieldEnum | ManualScalarFieldEnum[]
  }


  /**
   * Users.updated_manuals
   */
  export type Users$updated_manualsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manual
     */
    select?: ManualSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ManualInclude<ExtArgs> | null
    where?: ManualWhereInput
    orderBy?: ManualOrderByWithRelationInput | ManualOrderByWithRelationInput[]
    cursor?: ManualWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ManualScalarFieldEnum | ManualScalarFieldEnum[]
  }


  /**
   * Users.created_classify
   */
  export type Users$created_classifyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classify
     */
    select?: ClassifySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClassifyInclude<ExtArgs> | null
    where?: ClassifyWhereInput
    orderBy?: ClassifyOrderByWithRelationInput | ClassifyOrderByWithRelationInput[]
    cursor?: ClassifyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClassifyScalarFieldEnum | ClassifyScalarFieldEnum[]
  }


  /**
   * Users.verify_classify
   */
  export type Users$verify_classifyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classify
     */
    select?: ClassifySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClassifyInclude<ExtArgs> | null
    where?: ClassifyWhereInput
    orderBy?: ClassifyOrderByWithRelationInput | ClassifyOrderByWithRelationInput[]
    cursor?: ClassifyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClassifyScalarFieldEnum | ClassifyScalarFieldEnum[]
  }


  /**
   * Users without action
   */
  export type UsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude<ExtArgs> | null
  }



  /**
   * Model Wood_info
   */

  export type AggregateWood_info = {
    _count: Wood_infoCountAggregateOutputType | null
    _avg: Wood_infoAvgAggregateOutputType | null
    _sum: Wood_infoSumAggregateOutputType | null
    _min: Wood_infoMinAggregateOutputType | null
    _max: Wood_infoMaxAggregateOutputType | null
  }

  export type Wood_infoAvgAggregateOutputType = {
    w_id: number | null
    create_by: number | null
    update_by: number | null
  }

  export type Wood_infoSumAggregateOutputType = {
    w_id: number | null
    create_by: number | null
    update_by: number | null
  }

  export type Wood_infoMinAggregateOutputType = {
    w_id: number | null
    botanical_name: string | null
    pedigree: string | null
    place_of_origin: string | null
    wood_characteristics: string | null
    anatomical_characteristics: string | null
    other: string | null
    status: boolean | null
    create_at: Date | null
    update_at: Date | null
    create_by: number | null
    update_by: number | null
  }

  export type Wood_infoMaxAggregateOutputType = {
    w_id: number | null
    botanical_name: string | null
    pedigree: string | null
    place_of_origin: string | null
    wood_characteristics: string | null
    anatomical_characteristics: string | null
    other: string | null
    status: boolean | null
    create_at: Date | null
    update_at: Date | null
    create_by: number | null
    update_by: number | null
  }

  export type Wood_infoCountAggregateOutputType = {
    w_id: number
    common_name: number
    eng_name: number
    botanical_name: number
    pedigree: number
    place_of_origin: number
    wood_characteristics: number
    anatomical_characteristics: number
    other: number
    status: number
    create_at: number
    update_at: number
    create_by: number
    update_by: number
    _all: number
  }


  export type Wood_infoAvgAggregateInputType = {
    w_id?: true
    create_by?: true
    update_by?: true
  }

  export type Wood_infoSumAggregateInputType = {
    w_id?: true
    create_by?: true
    update_by?: true
  }

  export type Wood_infoMinAggregateInputType = {
    w_id?: true
    botanical_name?: true
    pedigree?: true
    place_of_origin?: true
    wood_characteristics?: true
    anatomical_characteristics?: true
    other?: true
    status?: true
    create_at?: true
    update_at?: true
    create_by?: true
    update_by?: true
  }

  export type Wood_infoMaxAggregateInputType = {
    w_id?: true
    botanical_name?: true
    pedigree?: true
    place_of_origin?: true
    wood_characteristics?: true
    anatomical_characteristics?: true
    other?: true
    status?: true
    create_at?: true
    update_at?: true
    create_by?: true
    update_by?: true
  }

  export type Wood_infoCountAggregateInputType = {
    w_id?: true
    common_name?: true
    eng_name?: true
    botanical_name?: true
    pedigree?: true
    place_of_origin?: true
    wood_characteristics?: true
    anatomical_characteristics?: true
    other?: true
    status?: true
    create_at?: true
    update_at?: true
    create_by?: true
    update_by?: true
    _all?: true
  }

  export type Wood_infoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Wood_info to aggregate.
     */
    where?: Wood_infoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wood_infos to fetch.
     */
    orderBy?: Wood_infoOrderByWithRelationInput | Wood_infoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Wood_infoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wood_infos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wood_infos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Wood_infos
    **/
    _count?: true | Wood_infoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Wood_infoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Wood_infoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Wood_infoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Wood_infoMaxAggregateInputType
  }

  export type GetWood_infoAggregateType<T extends Wood_infoAggregateArgs> = {
        [P in keyof T & keyof AggregateWood_info]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWood_info[P]>
      : GetScalarType<T[P], AggregateWood_info[P]>
  }




  export type Wood_infoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Wood_infoWhereInput
    orderBy?: Wood_infoOrderByWithAggregationInput | Wood_infoOrderByWithAggregationInput[]
    by: Wood_infoScalarFieldEnum[] | Wood_infoScalarFieldEnum
    having?: Wood_infoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Wood_infoCountAggregateInputType | true
    _avg?: Wood_infoAvgAggregateInputType
    _sum?: Wood_infoSumAggregateInputType
    _min?: Wood_infoMinAggregateInputType
    _max?: Wood_infoMaxAggregateInputType
  }

  export type Wood_infoGroupByOutputType = {
    w_id: number
    common_name: string[]
    eng_name: string[]
    botanical_name: string
    pedigree: string
    place_of_origin: string
    wood_characteristics: string
    anatomical_characteristics: string
    other: string
    status: boolean
    create_at: Date
    update_at: Date
    create_by: number
    update_by: number
    _count: Wood_infoCountAggregateOutputType | null
    _avg: Wood_infoAvgAggregateOutputType | null
    _sum: Wood_infoSumAggregateOutputType | null
    _min: Wood_infoMinAggregateOutputType | null
    _max: Wood_infoMaxAggregateOutputType | null
  }

  type GetWood_infoGroupByPayload<T extends Wood_infoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Wood_infoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Wood_infoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Wood_infoGroupByOutputType[P]>
            : GetScalarType<T[P], Wood_infoGroupByOutputType[P]>
        }
      >
    >


  export type Wood_infoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    w_id?: boolean
    common_name?: boolean
    eng_name?: boolean
    botanical_name?: boolean
    pedigree?: boolean
    place_of_origin?: boolean
    wood_characteristics?: boolean
    anatomical_characteristics?: boolean
    other?: boolean
    status?: boolean
    create_at?: boolean
    update_at?: boolean
    create_by?: boolean
    update_by?: boolean
    wood_image?: boolean | Wood_info$wood_imageArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
    updater?: boolean | UsersDefaultArgs<ExtArgs>
    _count?: boolean | Wood_infoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["wood_info"]>

  export type Wood_infoSelectScalar = {
    w_id?: boolean
    common_name?: boolean
    eng_name?: boolean
    botanical_name?: boolean
    pedigree?: boolean
    place_of_origin?: boolean
    wood_characteristics?: boolean
    anatomical_characteristics?: boolean
    other?: boolean
    status?: boolean
    create_at?: boolean
    update_at?: boolean
    create_by?: boolean
    update_by?: boolean
  }

  export type Wood_infoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    wood_image?: boolean | Wood_info$wood_imageArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
    updater?: boolean | UsersDefaultArgs<ExtArgs>
    _count?: boolean | Wood_infoCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $Wood_infoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Wood_info"
    objects: {
      wood_image: Prisma.$Wood_ImagePayload<ExtArgs>[]
      user: Prisma.$UsersPayload<ExtArgs>
      updater: Prisma.$UsersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      w_id: number
      common_name: string[]
      eng_name: string[]
      botanical_name: string
      pedigree: string
      place_of_origin: string
      wood_characteristics: string
      anatomical_characteristics: string
      other: string
      status: boolean
      create_at: Date
      update_at: Date
      create_by: number
      update_by: number
    }, ExtArgs["result"]["wood_info"]>
    composites: {}
  }


  type Wood_infoGetPayload<S extends boolean | null | undefined | Wood_infoDefaultArgs> = $Result.GetResult<Prisma.$Wood_infoPayload, S>

  type Wood_infoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<Wood_infoFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: Wood_infoCountAggregateInputType | true
    }

  export interface Wood_infoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Wood_info'], meta: { name: 'Wood_info' } }
    /**
     * Find zero or one Wood_info that matches the filter.
     * @param {Wood_infoFindUniqueArgs} args - Arguments to find a Wood_info
     * @example
     * // Get one Wood_info
     * const wood_info = await prisma.wood_info.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends Wood_infoFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, Wood_infoFindUniqueArgs<ExtArgs>>
    ): Prisma__Wood_infoClient<$Result.GetResult<Prisma.$Wood_infoPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Wood_info that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {Wood_infoFindUniqueOrThrowArgs} args - Arguments to find a Wood_info
     * @example
     * // Get one Wood_info
     * const wood_info = await prisma.wood_info.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends Wood_infoFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, Wood_infoFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__Wood_infoClient<$Result.GetResult<Prisma.$Wood_infoPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Wood_info that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Wood_infoFindFirstArgs} args - Arguments to find a Wood_info
     * @example
     * // Get one Wood_info
     * const wood_info = await prisma.wood_info.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends Wood_infoFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, Wood_infoFindFirstArgs<ExtArgs>>
    ): Prisma__Wood_infoClient<$Result.GetResult<Prisma.$Wood_infoPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Wood_info that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Wood_infoFindFirstOrThrowArgs} args - Arguments to find a Wood_info
     * @example
     * // Get one Wood_info
     * const wood_info = await prisma.wood_info.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends Wood_infoFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, Wood_infoFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__Wood_infoClient<$Result.GetResult<Prisma.$Wood_infoPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Wood_infos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Wood_infoFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Wood_infos
     * const wood_infos = await prisma.wood_info.findMany()
     * 
     * // Get first 10 Wood_infos
     * const wood_infos = await prisma.wood_info.findMany({ take: 10 })
     * 
     * // Only select the `w_id`
     * const wood_infoWithW_idOnly = await prisma.wood_info.findMany({ select: { w_id: true } })
     * 
    **/
    findMany<T extends Wood_infoFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Wood_infoFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Wood_infoPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Wood_info.
     * @param {Wood_infoCreateArgs} args - Arguments to create a Wood_info.
     * @example
     * // Create one Wood_info
     * const Wood_info = await prisma.wood_info.create({
     *   data: {
     *     // ... data to create a Wood_info
     *   }
     * })
     * 
    **/
    create<T extends Wood_infoCreateArgs<ExtArgs>>(
      args: SelectSubset<T, Wood_infoCreateArgs<ExtArgs>>
    ): Prisma__Wood_infoClient<$Result.GetResult<Prisma.$Wood_infoPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Wood_infos.
     *     @param {Wood_infoCreateManyArgs} args - Arguments to create many Wood_infos.
     *     @example
     *     // Create many Wood_infos
     *     const wood_info = await prisma.wood_info.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends Wood_infoCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Wood_infoCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Wood_info.
     * @param {Wood_infoDeleteArgs} args - Arguments to delete one Wood_info.
     * @example
     * // Delete one Wood_info
     * const Wood_info = await prisma.wood_info.delete({
     *   where: {
     *     // ... filter to delete one Wood_info
     *   }
     * })
     * 
    **/
    delete<T extends Wood_infoDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, Wood_infoDeleteArgs<ExtArgs>>
    ): Prisma__Wood_infoClient<$Result.GetResult<Prisma.$Wood_infoPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Wood_info.
     * @param {Wood_infoUpdateArgs} args - Arguments to update one Wood_info.
     * @example
     * // Update one Wood_info
     * const wood_info = await prisma.wood_info.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends Wood_infoUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, Wood_infoUpdateArgs<ExtArgs>>
    ): Prisma__Wood_infoClient<$Result.GetResult<Prisma.$Wood_infoPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Wood_infos.
     * @param {Wood_infoDeleteManyArgs} args - Arguments to filter Wood_infos to delete.
     * @example
     * // Delete a few Wood_infos
     * const { count } = await prisma.wood_info.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends Wood_infoDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Wood_infoDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Wood_infos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Wood_infoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Wood_infos
     * const wood_info = await prisma.wood_info.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends Wood_infoUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, Wood_infoUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Wood_info.
     * @param {Wood_infoUpsertArgs} args - Arguments to update or create a Wood_info.
     * @example
     * // Update or create a Wood_info
     * const wood_info = await prisma.wood_info.upsert({
     *   create: {
     *     // ... data to create a Wood_info
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Wood_info we want to update
     *   }
     * })
    **/
    upsert<T extends Wood_infoUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, Wood_infoUpsertArgs<ExtArgs>>
    ): Prisma__Wood_infoClient<$Result.GetResult<Prisma.$Wood_infoPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Wood_infos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Wood_infoCountArgs} args - Arguments to filter Wood_infos to count.
     * @example
     * // Count the number of Wood_infos
     * const count = await prisma.wood_info.count({
     *   where: {
     *     // ... the filter for the Wood_infos we want to count
     *   }
     * })
    **/
    count<T extends Wood_infoCountArgs>(
      args?: Subset<T, Wood_infoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Wood_infoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Wood_info.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Wood_infoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Wood_infoAggregateArgs>(args: Subset<T, Wood_infoAggregateArgs>): Prisma.PrismaPromise<GetWood_infoAggregateType<T>>

    /**
     * Group by Wood_info.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Wood_infoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Wood_infoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Wood_infoGroupByArgs['orderBy'] }
        : { orderBy?: Wood_infoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Wood_infoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWood_infoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Wood_info model
   */
  readonly fields: Wood_infoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Wood_info.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Wood_infoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    wood_image<T extends Wood_info$wood_imageArgs<ExtArgs> = {}>(args?: Subset<T, Wood_info$wood_imageArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Wood_ImagePayload<ExtArgs>, T, 'findMany'> | Null>;

    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    updater<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Wood_info model
   */ 
  interface Wood_infoFieldRefs {
    readonly w_id: FieldRef<"Wood_info", 'Int'>
    readonly common_name: FieldRef<"Wood_info", 'String[]'>
    readonly eng_name: FieldRef<"Wood_info", 'String[]'>
    readonly botanical_name: FieldRef<"Wood_info", 'String'>
    readonly pedigree: FieldRef<"Wood_info", 'String'>
    readonly place_of_origin: FieldRef<"Wood_info", 'String'>
    readonly wood_characteristics: FieldRef<"Wood_info", 'String'>
    readonly anatomical_characteristics: FieldRef<"Wood_info", 'String'>
    readonly other: FieldRef<"Wood_info", 'String'>
    readonly status: FieldRef<"Wood_info", 'Boolean'>
    readonly create_at: FieldRef<"Wood_info", 'DateTime'>
    readonly update_at: FieldRef<"Wood_info", 'DateTime'>
    readonly create_by: FieldRef<"Wood_info", 'Int'>
    readonly update_by: FieldRef<"Wood_info", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Wood_info findUnique
   */
  export type Wood_infoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wood_info
     */
    select?: Wood_infoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Wood_infoInclude<ExtArgs> | null
    /**
     * Filter, which Wood_info to fetch.
     */
    where: Wood_infoWhereUniqueInput
  }


  /**
   * Wood_info findUniqueOrThrow
   */
  export type Wood_infoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wood_info
     */
    select?: Wood_infoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Wood_infoInclude<ExtArgs> | null
    /**
     * Filter, which Wood_info to fetch.
     */
    where: Wood_infoWhereUniqueInput
  }


  /**
   * Wood_info findFirst
   */
  export type Wood_infoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wood_info
     */
    select?: Wood_infoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Wood_infoInclude<ExtArgs> | null
    /**
     * Filter, which Wood_info to fetch.
     */
    where?: Wood_infoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wood_infos to fetch.
     */
    orderBy?: Wood_infoOrderByWithRelationInput | Wood_infoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Wood_infos.
     */
    cursor?: Wood_infoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wood_infos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wood_infos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Wood_infos.
     */
    distinct?: Wood_infoScalarFieldEnum | Wood_infoScalarFieldEnum[]
  }


  /**
   * Wood_info findFirstOrThrow
   */
  export type Wood_infoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wood_info
     */
    select?: Wood_infoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Wood_infoInclude<ExtArgs> | null
    /**
     * Filter, which Wood_info to fetch.
     */
    where?: Wood_infoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wood_infos to fetch.
     */
    orderBy?: Wood_infoOrderByWithRelationInput | Wood_infoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Wood_infos.
     */
    cursor?: Wood_infoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wood_infos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wood_infos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Wood_infos.
     */
    distinct?: Wood_infoScalarFieldEnum | Wood_infoScalarFieldEnum[]
  }


  /**
   * Wood_info findMany
   */
  export type Wood_infoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wood_info
     */
    select?: Wood_infoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Wood_infoInclude<ExtArgs> | null
    /**
     * Filter, which Wood_infos to fetch.
     */
    where?: Wood_infoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wood_infos to fetch.
     */
    orderBy?: Wood_infoOrderByWithRelationInput | Wood_infoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Wood_infos.
     */
    cursor?: Wood_infoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wood_infos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wood_infos.
     */
    skip?: number
    distinct?: Wood_infoScalarFieldEnum | Wood_infoScalarFieldEnum[]
  }


  /**
   * Wood_info create
   */
  export type Wood_infoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wood_info
     */
    select?: Wood_infoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Wood_infoInclude<ExtArgs> | null
    /**
     * The data needed to create a Wood_info.
     */
    data: XOR<Wood_infoCreateInput, Wood_infoUncheckedCreateInput>
  }


  /**
   * Wood_info createMany
   */
  export type Wood_infoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Wood_infos.
     */
    data: Wood_infoCreateManyInput | Wood_infoCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Wood_info update
   */
  export type Wood_infoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wood_info
     */
    select?: Wood_infoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Wood_infoInclude<ExtArgs> | null
    /**
     * The data needed to update a Wood_info.
     */
    data: XOR<Wood_infoUpdateInput, Wood_infoUncheckedUpdateInput>
    /**
     * Choose, which Wood_info to update.
     */
    where: Wood_infoWhereUniqueInput
  }


  /**
   * Wood_info updateMany
   */
  export type Wood_infoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Wood_infos.
     */
    data: XOR<Wood_infoUpdateManyMutationInput, Wood_infoUncheckedUpdateManyInput>
    /**
     * Filter which Wood_infos to update
     */
    where?: Wood_infoWhereInput
  }


  /**
   * Wood_info upsert
   */
  export type Wood_infoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wood_info
     */
    select?: Wood_infoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Wood_infoInclude<ExtArgs> | null
    /**
     * The filter to search for the Wood_info to update in case it exists.
     */
    where: Wood_infoWhereUniqueInput
    /**
     * In case the Wood_info found by the `where` argument doesn't exist, create a new Wood_info with this data.
     */
    create: XOR<Wood_infoCreateInput, Wood_infoUncheckedCreateInput>
    /**
     * In case the Wood_info was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Wood_infoUpdateInput, Wood_infoUncheckedUpdateInput>
  }


  /**
   * Wood_info delete
   */
  export type Wood_infoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wood_info
     */
    select?: Wood_infoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Wood_infoInclude<ExtArgs> | null
    /**
     * Filter which Wood_info to delete.
     */
    where: Wood_infoWhereUniqueInput
  }


  /**
   * Wood_info deleteMany
   */
  export type Wood_infoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Wood_infos to delete
     */
    where?: Wood_infoWhereInput
  }


  /**
   * Wood_info.wood_image
   */
  export type Wood_info$wood_imageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wood_Image
     */
    select?: Wood_ImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Wood_ImageInclude<ExtArgs> | null
    where?: Wood_ImageWhereInput
    orderBy?: Wood_ImageOrderByWithRelationInput | Wood_ImageOrderByWithRelationInput[]
    cursor?: Wood_ImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Wood_ImageScalarFieldEnum | Wood_ImageScalarFieldEnum[]
  }


  /**
   * Wood_info without action
   */
  export type Wood_infoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wood_info
     */
    select?: Wood_infoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Wood_infoInclude<ExtArgs> | null
  }



  /**
   * Model Wood_Image
   */

  export type AggregateWood_Image = {
    _count: Wood_ImageCountAggregateOutputType | null
    _avg: Wood_ImageAvgAggregateOutputType | null
    _sum: Wood_ImageSumAggregateOutputType | null
    _min: Wood_ImageMinAggregateOutputType | null
    _max: Wood_ImageMaxAggregateOutputType | null
  }

  export type Wood_ImageAvgAggregateOutputType = {
    wi_id: number | null
    w_id: number | null
  }

  export type Wood_ImageSumAggregateOutputType = {
    wi_id: number | null
    w_id: number | null
  }

  export type Wood_ImageMinAggregateOutputType = {
    wi_id: number | null
    w_id: number | null
    path: string | null
  }

  export type Wood_ImageMaxAggregateOutputType = {
    wi_id: number | null
    w_id: number | null
    path: string | null
  }

  export type Wood_ImageCountAggregateOutputType = {
    wi_id: number
    w_id: number
    path: number
    _all: number
  }


  export type Wood_ImageAvgAggregateInputType = {
    wi_id?: true
    w_id?: true
  }

  export type Wood_ImageSumAggregateInputType = {
    wi_id?: true
    w_id?: true
  }

  export type Wood_ImageMinAggregateInputType = {
    wi_id?: true
    w_id?: true
    path?: true
  }

  export type Wood_ImageMaxAggregateInputType = {
    wi_id?: true
    w_id?: true
    path?: true
  }

  export type Wood_ImageCountAggregateInputType = {
    wi_id?: true
    w_id?: true
    path?: true
    _all?: true
  }

  export type Wood_ImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Wood_Image to aggregate.
     */
    where?: Wood_ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wood_Images to fetch.
     */
    orderBy?: Wood_ImageOrderByWithRelationInput | Wood_ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Wood_ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wood_Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wood_Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Wood_Images
    **/
    _count?: true | Wood_ImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Wood_ImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Wood_ImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Wood_ImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Wood_ImageMaxAggregateInputType
  }

  export type GetWood_ImageAggregateType<T extends Wood_ImageAggregateArgs> = {
        [P in keyof T & keyof AggregateWood_Image]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWood_Image[P]>
      : GetScalarType<T[P], AggregateWood_Image[P]>
  }




  export type Wood_ImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Wood_ImageWhereInput
    orderBy?: Wood_ImageOrderByWithAggregationInput | Wood_ImageOrderByWithAggregationInput[]
    by: Wood_ImageScalarFieldEnum[] | Wood_ImageScalarFieldEnum
    having?: Wood_ImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Wood_ImageCountAggregateInputType | true
    _avg?: Wood_ImageAvgAggregateInputType
    _sum?: Wood_ImageSumAggregateInputType
    _min?: Wood_ImageMinAggregateInputType
    _max?: Wood_ImageMaxAggregateInputType
  }

  export type Wood_ImageGroupByOutputType = {
    wi_id: number
    w_id: number
    path: string
    _count: Wood_ImageCountAggregateOutputType | null
    _avg: Wood_ImageAvgAggregateOutputType | null
    _sum: Wood_ImageSumAggregateOutputType | null
    _min: Wood_ImageMinAggregateOutputType | null
    _max: Wood_ImageMaxAggregateOutputType | null
  }

  type GetWood_ImageGroupByPayload<T extends Wood_ImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Wood_ImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Wood_ImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Wood_ImageGroupByOutputType[P]>
            : GetScalarType<T[P], Wood_ImageGroupByOutputType[P]>
        }
      >
    >


  export type Wood_ImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    wi_id?: boolean
    w_id?: boolean
    path?: boolean
    wood_info?: boolean | Wood_infoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["wood_Image"]>

  export type Wood_ImageSelectScalar = {
    wi_id?: boolean
    w_id?: boolean
    path?: boolean
  }

  export type Wood_ImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    wood_info?: boolean | Wood_infoDefaultArgs<ExtArgs>
  }


  export type $Wood_ImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Wood_Image"
    objects: {
      wood_info: Prisma.$Wood_infoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      wi_id: number
      w_id: number
      path: string
    }, ExtArgs["result"]["wood_Image"]>
    composites: {}
  }


  type Wood_ImageGetPayload<S extends boolean | null | undefined | Wood_ImageDefaultArgs> = $Result.GetResult<Prisma.$Wood_ImagePayload, S>

  type Wood_ImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<Wood_ImageFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: Wood_ImageCountAggregateInputType | true
    }

  export interface Wood_ImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Wood_Image'], meta: { name: 'Wood_Image' } }
    /**
     * Find zero or one Wood_Image that matches the filter.
     * @param {Wood_ImageFindUniqueArgs} args - Arguments to find a Wood_Image
     * @example
     * // Get one Wood_Image
     * const wood_Image = await prisma.wood_Image.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends Wood_ImageFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, Wood_ImageFindUniqueArgs<ExtArgs>>
    ): Prisma__Wood_ImageClient<$Result.GetResult<Prisma.$Wood_ImagePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Wood_Image that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {Wood_ImageFindUniqueOrThrowArgs} args - Arguments to find a Wood_Image
     * @example
     * // Get one Wood_Image
     * const wood_Image = await prisma.wood_Image.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends Wood_ImageFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, Wood_ImageFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__Wood_ImageClient<$Result.GetResult<Prisma.$Wood_ImagePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Wood_Image that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Wood_ImageFindFirstArgs} args - Arguments to find a Wood_Image
     * @example
     * // Get one Wood_Image
     * const wood_Image = await prisma.wood_Image.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends Wood_ImageFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, Wood_ImageFindFirstArgs<ExtArgs>>
    ): Prisma__Wood_ImageClient<$Result.GetResult<Prisma.$Wood_ImagePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Wood_Image that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Wood_ImageFindFirstOrThrowArgs} args - Arguments to find a Wood_Image
     * @example
     * // Get one Wood_Image
     * const wood_Image = await prisma.wood_Image.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends Wood_ImageFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, Wood_ImageFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__Wood_ImageClient<$Result.GetResult<Prisma.$Wood_ImagePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Wood_Images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Wood_ImageFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Wood_Images
     * const wood_Images = await prisma.wood_Image.findMany()
     * 
     * // Get first 10 Wood_Images
     * const wood_Images = await prisma.wood_Image.findMany({ take: 10 })
     * 
     * // Only select the `wi_id`
     * const wood_ImageWithWi_idOnly = await prisma.wood_Image.findMany({ select: { wi_id: true } })
     * 
    **/
    findMany<T extends Wood_ImageFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Wood_ImageFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Wood_ImagePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Wood_Image.
     * @param {Wood_ImageCreateArgs} args - Arguments to create a Wood_Image.
     * @example
     * // Create one Wood_Image
     * const Wood_Image = await prisma.wood_Image.create({
     *   data: {
     *     // ... data to create a Wood_Image
     *   }
     * })
     * 
    **/
    create<T extends Wood_ImageCreateArgs<ExtArgs>>(
      args: SelectSubset<T, Wood_ImageCreateArgs<ExtArgs>>
    ): Prisma__Wood_ImageClient<$Result.GetResult<Prisma.$Wood_ImagePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Wood_Images.
     *     @param {Wood_ImageCreateManyArgs} args - Arguments to create many Wood_Images.
     *     @example
     *     // Create many Wood_Images
     *     const wood_Image = await prisma.wood_Image.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends Wood_ImageCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Wood_ImageCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Wood_Image.
     * @param {Wood_ImageDeleteArgs} args - Arguments to delete one Wood_Image.
     * @example
     * // Delete one Wood_Image
     * const Wood_Image = await prisma.wood_Image.delete({
     *   where: {
     *     // ... filter to delete one Wood_Image
     *   }
     * })
     * 
    **/
    delete<T extends Wood_ImageDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, Wood_ImageDeleteArgs<ExtArgs>>
    ): Prisma__Wood_ImageClient<$Result.GetResult<Prisma.$Wood_ImagePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Wood_Image.
     * @param {Wood_ImageUpdateArgs} args - Arguments to update one Wood_Image.
     * @example
     * // Update one Wood_Image
     * const wood_Image = await prisma.wood_Image.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends Wood_ImageUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, Wood_ImageUpdateArgs<ExtArgs>>
    ): Prisma__Wood_ImageClient<$Result.GetResult<Prisma.$Wood_ImagePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Wood_Images.
     * @param {Wood_ImageDeleteManyArgs} args - Arguments to filter Wood_Images to delete.
     * @example
     * // Delete a few Wood_Images
     * const { count } = await prisma.wood_Image.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends Wood_ImageDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Wood_ImageDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Wood_Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Wood_ImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Wood_Images
     * const wood_Image = await prisma.wood_Image.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends Wood_ImageUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, Wood_ImageUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Wood_Image.
     * @param {Wood_ImageUpsertArgs} args - Arguments to update or create a Wood_Image.
     * @example
     * // Update or create a Wood_Image
     * const wood_Image = await prisma.wood_Image.upsert({
     *   create: {
     *     // ... data to create a Wood_Image
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Wood_Image we want to update
     *   }
     * })
    **/
    upsert<T extends Wood_ImageUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, Wood_ImageUpsertArgs<ExtArgs>>
    ): Prisma__Wood_ImageClient<$Result.GetResult<Prisma.$Wood_ImagePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Wood_Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Wood_ImageCountArgs} args - Arguments to filter Wood_Images to count.
     * @example
     * // Count the number of Wood_Images
     * const count = await prisma.wood_Image.count({
     *   where: {
     *     // ... the filter for the Wood_Images we want to count
     *   }
     * })
    **/
    count<T extends Wood_ImageCountArgs>(
      args?: Subset<T, Wood_ImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Wood_ImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Wood_Image.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Wood_ImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Wood_ImageAggregateArgs>(args: Subset<T, Wood_ImageAggregateArgs>): Prisma.PrismaPromise<GetWood_ImageAggregateType<T>>

    /**
     * Group by Wood_Image.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Wood_ImageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Wood_ImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Wood_ImageGroupByArgs['orderBy'] }
        : { orderBy?: Wood_ImageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Wood_ImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWood_ImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Wood_Image model
   */
  readonly fields: Wood_ImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Wood_Image.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Wood_ImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    wood_info<T extends Wood_infoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, Wood_infoDefaultArgs<ExtArgs>>): Prisma__Wood_infoClient<$Result.GetResult<Prisma.$Wood_infoPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Wood_Image model
   */ 
  interface Wood_ImageFieldRefs {
    readonly wi_id: FieldRef<"Wood_Image", 'Int'>
    readonly w_id: FieldRef<"Wood_Image", 'Int'>
    readonly path: FieldRef<"Wood_Image", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Wood_Image findUnique
   */
  export type Wood_ImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wood_Image
     */
    select?: Wood_ImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Wood_ImageInclude<ExtArgs> | null
    /**
     * Filter, which Wood_Image to fetch.
     */
    where: Wood_ImageWhereUniqueInput
  }


  /**
   * Wood_Image findUniqueOrThrow
   */
  export type Wood_ImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wood_Image
     */
    select?: Wood_ImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Wood_ImageInclude<ExtArgs> | null
    /**
     * Filter, which Wood_Image to fetch.
     */
    where: Wood_ImageWhereUniqueInput
  }


  /**
   * Wood_Image findFirst
   */
  export type Wood_ImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wood_Image
     */
    select?: Wood_ImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Wood_ImageInclude<ExtArgs> | null
    /**
     * Filter, which Wood_Image to fetch.
     */
    where?: Wood_ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wood_Images to fetch.
     */
    orderBy?: Wood_ImageOrderByWithRelationInput | Wood_ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Wood_Images.
     */
    cursor?: Wood_ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wood_Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wood_Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Wood_Images.
     */
    distinct?: Wood_ImageScalarFieldEnum | Wood_ImageScalarFieldEnum[]
  }


  /**
   * Wood_Image findFirstOrThrow
   */
  export type Wood_ImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wood_Image
     */
    select?: Wood_ImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Wood_ImageInclude<ExtArgs> | null
    /**
     * Filter, which Wood_Image to fetch.
     */
    where?: Wood_ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wood_Images to fetch.
     */
    orderBy?: Wood_ImageOrderByWithRelationInput | Wood_ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Wood_Images.
     */
    cursor?: Wood_ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wood_Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wood_Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Wood_Images.
     */
    distinct?: Wood_ImageScalarFieldEnum | Wood_ImageScalarFieldEnum[]
  }


  /**
   * Wood_Image findMany
   */
  export type Wood_ImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wood_Image
     */
    select?: Wood_ImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Wood_ImageInclude<ExtArgs> | null
    /**
     * Filter, which Wood_Images to fetch.
     */
    where?: Wood_ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wood_Images to fetch.
     */
    orderBy?: Wood_ImageOrderByWithRelationInput | Wood_ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Wood_Images.
     */
    cursor?: Wood_ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wood_Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wood_Images.
     */
    skip?: number
    distinct?: Wood_ImageScalarFieldEnum | Wood_ImageScalarFieldEnum[]
  }


  /**
   * Wood_Image create
   */
  export type Wood_ImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wood_Image
     */
    select?: Wood_ImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Wood_ImageInclude<ExtArgs> | null
    /**
     * The data needed to create a Wood_Image.
     */
    data: XOR<Wood_ImageCreateInput, Wood_ImageUncheckedCreateInput>
  }


  /**
   * Wood_Image createMany
   */
  export type Wood_ImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Wood_Images.
     */
    data: Wood_ImageCreateManyInput | Wood_ImageCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Wood_Image update
   */
  export type Wood_ImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wood_Image
     */
    select?: Wood_ImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Wood_ImageInclude<ExtArgs> | null
    /**
     * The data needed to update a Wood_Image.
     */
    data: XOR<Wood_ImageUpdateInput, Wood_ImageUncheckedUpdateInput>
    /**
     * Choose, which Wood_Image to update.
     */
    where: Wood_ImageWhereUniqueInput
  }


  /**
   * Wood_Image updateMany
   */
  export type Wood_ImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Wood_Images.
     */
    data: XOR<Wood_ImageUpdateManyMutationInput, Wood_ImageUncheckedUpdateManyInput>
    /**
     * Filter which Wood_Images to update
     */
    where?: Wood_ImageWhereInput
  }


  /**
   * Wood_Image upsert
   */
  export type Wood_ImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wood_Image
     */
    select?: Wood_ImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Wood_ImageInclude<ExtArgs> | null
    /**
     * The filter to search for the Wood_Image to update in case it exists.
     */
    where: Wood_ImageWhereUniqueInput
    /**
     * In case the Wood_Image found by the `where` argument doesn't exist, create a new Wood_Image with this data.
     */
    create: XOR<Wood_ImageCreateInput, Wood_ImageUncheckedCreateInput>
    /**
     * In case the Wood_Image was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Wood_ImageUpdateInput, Wood_ImageUncheckedUpdateInput>
  }


  /**
   * Wood_Image delete
   */
  export type Wood_ImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wood_Image
     */
    select?: Wood_ImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Wood_ImageInclude<ExtArgs> | null
    /**
     * Filter which Wood_Image to delete.
     */
    where: Wood_ImageWhereUniqueInput
  }


  /**
   * Wood_Image deleteMany
   */
  export type Wood_ImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Wood_Images to delete
     */
    where?: Wood_ImageWhereInput
  }


  /**
   * Wood_Image without action
   */
  export type Wood_ImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wood_Image
     */
    select?: Wood_ImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Wood_ImageInclude<ExtArgs> | null
  }



  /**
   * Model Manual
   */

  export type AggregateManual = {
    _count: ManualCountAggregateOutputType | null
    _avg: ManualAvgAggregateOutputType | null
    _sum: ManualSumAggregateOutputType | null
    _min: ManualMinAggregateOutputType | null
    _max: ManualMaxAggregateOutputType | null
  }

  export type ManualAvgAggregateOutputType = {
    m_id: number | null
    create_by: number | null
    update_by: number | null
  }

  export type ManualSumAggregateOutputType = {
    m_id: number | null
    create_by: number | null
    update_by: number | null
  }

  export type ManualMinAggregateOutputType = {
    m_id: number | null
    topic: string | null
    description: string | null
    status: boolean | null
    image: string | null
    create_at: Date | null
    update_at: Date | null
    create_by: number | null
    update_by: number | null
  }

  export type ManualMaxAggregateOutputType = {
    m_id: number | null
    topic: string | null
    description: string | null
    status: boolean | null
    image: string | null
    create_at: Date | null
    update_at: Date | null
    create_by: number | null
    update_by: number | null
  }

  export type ManualCountAggregateOutputType = {
    m_id: number
    topic: number
    description: number
    status: number
    image: number
    create_at: number
    update_at: number
    create_by: number
    update_by: number
    _all: number
  }


  export type ManualAvgAggregateInputType = {
    m_id?: true
    create_by?: true
    update_by?: true
  }

  export type ManualSumAggregateInputType = {
    m_id?: true
    create_by?: true
    update_by?: true
  }

  export type ManualMinAggregateInputType = {
    m_id?: true
    topic?: true
    description?: true
    status?: true
    image?: true
    create_at?: true
    update_at?: true
    create_by?: true
    update_by?: true
  }

  export type ManualMaxAggregateInputType = {
    m_id?: true
    topic?: true
    description?: true
    status?: true
    image?: true
    create_at?: true
    update_at?: true
    create_by?: true
    update_by?: true
  }

  export type ManualCountAggregateInputType = {
    m_id?: true
    topic?: true
    description?: true
    status?: true
    image?: true
    create_at?: true
    update_at?: true
    create_by?: true
    update_by?: true
    _all?: true
  }

  export type ManualAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Manual to aggregate.
     */
    where?: ManualWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Manuals to fetch.
     */
    orderBy?: ManualOrderByWithRelationInput | ManualOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ManualWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Manuals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Manuals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Manuals
    **/
    _count?: true | ManualCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ManualAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ManualSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ManualMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ManualMaxAggregateInputType
  }

  export type GetManualAggregateType<T extends ManualAggregateArgs> = {
        [P in keyof T & keyof AggregateManual]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateManual[P]>
      : GetScalarType<T[P], AggregateManual[P]>
  }




  export type ManualGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ManualWhereInput
    orderBy?: ManualOrderByWithAggregationInput | ManualOrderByWithAggregationInput[]
    by: ManualScalarFieldEnum[] | ManualScalarFieldEnum
    having?: ManualScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ManualCountAggregateInputType | true
    _avg?: ManualAvgAggregateInputType
    _sum?: ManualSumAggregateInputType
    _min?: ManualMinAggregateInputType
    _max?: ManualMaxAggregateInputType
  }

  export type ManualGroupByOutputType = {
    m_id: number
    topic: string
    description: string
    status: boolean
    image: string
    create_at: Date
    update_at: Date
    create_by: number
    update_by: number
    _count: ManualCountAggregateOutputType | null
    _avg: ManualAvgAggregateOutputType | null
    _sum: ManualSumAggregateOutputType | null
    _min: ManualMinAggregateOutputType | null
    _max: ManualMaxAggregateOutputType | null
  }

  type GetManualGroupByPayload<T extends ManualGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ManualGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ManualGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ManualGroupByOutputType[P]>
            : GetScalarType<T[P], ManualGroupByOutputType[P]>
        }
      >
    >


  export type ManualSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    m_id?: boolean
    topic?: boolean
    description?: boolean
    status?: boolean
    image?: boolean
    create_at?: boolean
    update_at?: boolean
    create_by?: boolean
    update_by?: boolean
    creator?: boolean | UsersDefaultArgs<ExtArgs>
    updater?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["manual"]>

  export type ManualSelectScalar = {
    m_id?: boolean
    topic?: boolean
    description?: boolean
    status?: boolean
    image?: boolean
    create_at?: boolean
    update_at?: boolean
    create_by?: boolean
    update_by?: boolean
  }

  export type ManualInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UsersDefaultArgs<ExtArgs>
    updater?: boolean | UsersDefaultArgs<ExtArgs>
  }


  export type $ManualPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Manual"
    objects: {
      creator: Prisma.$UsersPayload<ExtArgs>
      updater: Prisma.$UsersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      m_id: number
      topic: string
      description: string
      status: boolean
      image: string
      create_at: Date
      update_at: Date
      create_by: number
      update_by: number
    }, ExtArgs["result"]["manual"]>
    composites: {}
  }


  type ManualGetPayload<S extends boolean | null | undefined | ManualDefaultArgs> = $Result.GetResult<Prisma.$ManualPayload, S>

  type ManualCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ManualFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: ManualCountAggregateInputType | true
    }

  export interface ManualDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Manual'], meta: { name: 'Manual' } }
    /**
     * Find zero or one Manual that matches the filter.
     * @param {ManualFindUniqueArgs} args - Arguments to find a Manual
     * @example
     * // Get one Manual
     * const manual = await prisma.manual.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ManualFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ManualFindUniqueArgs<ExtArgs>>
    ): Prisma__ManualClient<$Result.GetResult<Prisma.$ManualPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Manual that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ManualFindUniqueOrThrowArgs} args - Arguments to find a Manual
     * @example
     * // Get one Manual
     * const manual = await prisma.manual.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ManualFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ManualFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ManualClient<$Result.GetResult<Prisma.$ManualPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Manual that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManualFindFirstArgs} args - Arguments to find a Manual
     * @example
     * // Get one Manual
     * const manual = await prisma.manual.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ManualFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ManualFindFirstArgs<ExtArgs>>
    ): Prisma__ManualClient<$Result.GetResult<Prisma.$ManualPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Manual that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManualFindFirstOrThrowArgs} args - Arguments to find a Manual
     * @example
     * // Get one Manual
     * const manual = await prisma.manual.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ManualFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ManualFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ManualClient<$Result.GetResult<Prisma.$ManualPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Manuals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManualFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Manuals
     * const manuals = await prisma.manual.findMany()
     * 
     * // Get first 10 Manuals
     * const manuals = await prisma.manual.findMany({ take: 10 })
     * 
     * // Only select the `m_id`
     * const manualWithM_idOnly = await prisma.manual.findMany({ select: { m_id: true } })
     * 
    **/
    findMany<T extends ManualFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ManualFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ManualPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Manual.
     * @param {ManualCreateArgs} args - Arguments to create a Manual.
     * @example
     * // Create one Manual
     * const Manual = await prisma.manual.create({
     *   data: {
     *     // ... data to create a Manual
     *   }
     * })
     * 
    **/
    create<T extends ManualCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ManualCreateArgs<ExtArgs>>
    ): Prisma__ManualClient<$Result.GetResult<Prisma.$ManualPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Manuals.
     *     @param {ManualCreateManyArgs} args - Arguments to create many Manuals.
     *     @example
     *     // Create many Manuals
     *     const manual = await prisma.manual.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ManualCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ManualCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Manual.
     * @param {ManualDeleteArgs} args - Arguments to delete one Manual.
     * @example
     * // Delete one Manual
     * const Manual = await prisma.manual.delete({
     *   where: {
     *     // ... filter to delete one Manual
     *   }
     * })
     * 
    **/
    delete<T extends ManualDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ManualDeleteArgs<ExtArgs>>
    ): Prisma__ManualClient<$Result.GetResult<Prisma.$ManualPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Manual.
     * @param {ManualUpdateArgs} args - Arguments to update one Manual.
     * @example
     * // Update one Manual
     * const manual = await prisma.manual.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ManualUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ManualUpdateArgs<ExtArgs>>
    ): Prisma__ManualClient<$Result.GetResult<Prisma.$ManualPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Manuals.
     * @param {ManualDeleteManyArgs} args - Arguments to filter Manuals to delete.
     * @example
     * // Delete a few Manuals
     * const { count } = await prisma.manual.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ManualDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ManualDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Manuals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManualUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Manuals
     * const manual = await prisma.manual.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ManualUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ManualUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Manual.
     * @param {ManualUpsertArgs} args - Arguments to update or create a Manual.
     * @example
     * // Update or create a Manual
     * const manual = await prisma.manual.upsert({
     *   create: {
     *     // ... data to create a Manual
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Manual we want to update
     *   }
     * })
    **/
    upsert<T extends ManualUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ManualUpsertArgs<ExtArgs>>
    ): Prisma__ManualClient<$Result.GetResult<Prisma.$ManualPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Manuals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManualCountArgs} args - Arguments to filter Manuals to count.
     * @example
     * // Count the number of Manuals
     * const count = await prisma.manual.count({
     *   where: {
     *     // ... the filter for the Manuals we want to count
     *   }
     * })
    **/
    count<T extends ManualCountArgs>(
      args?: Subset<T, ManualCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ManualCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Manual.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManualAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ManualAggregateArgs>(args: Subset<T, ManualAggregateArgs>): Prisma.PrismaPromise<GetManualAggregateType<T>>

    /**
     * Group by Manual.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManualGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ManualGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ManualGroupByArgs['orderBy'] }
        : { orderBy?: ManualGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ManualGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetManualGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Manual model
   */
  readonly fields: ManualFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Manual.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ManualClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    creator<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    updater<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Manual model
   */ 
  interface ManualFieldRefs {
    readonly m_id: FieldRef<"Manual", 'Int'>
    readonly topic: FieldRef<"Manual", 'String'>
    readonly description: FieldRef<"Manual", 'String'>
    readonly status: FieldRef<"Manual", 'Boolean'>
    readonly image: FieldRef<"Manual", 'String'>
    readonly create_at: FieldRef<"Manual", 'DateTime'>
    readonly update_at: FieldRef<"Manual", 'DateTime'>
    readonly create_by: FieldRef<"Manual", 'Int'>
    readonly update_by: FieldRef<"Manual", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Manual findUnique
   */
  export type ManualFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manual
     */
    select?: ManualSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ManualInclude<ExtArgs> | null
    /**
     * Filter, which Manual to fetch.
     */
    where: ManualWhereUniqueInput
  }


  /**
   * Manual findUniqueOrThrow
   */
  export type ManualFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manual
     */
    select?: ManualSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ManualInclude<ExtArgs> | null
    /**
     * Filter, which Manual to fetch.
     */
    where: ManualWhereUniqueInput
  }


  /**
   * Manual findFirst
   */
  export type ManualFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manual
     */
    select?: ManualSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ManualInclude<ExtArgs> | null
    /**
     * Filter, which Manual to fetch.
     */
    where?: ManualWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Manuals to fetch.
     */
    orderBy?: ManualOrderByWithRelationInput | ManualOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Manuals.
     */
    cursor?: ManualWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Manuals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Manuals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Manuals.
     */
    distinct?: ManualScalarFieldEnum | ManualScalarFieldEnum[]
  }


  /**
   * Manual findFirstOrThrow
   */
  export type ManualFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manual
     */
    select?: ManualSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ManualInclude<ExtArgs> | null
    /**
     * Filter, which Manual to fetch.
     */
    where?: ManualWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Manuals to fetch.
     */
    orderBy?: ManualOrderByWithRelationInput | ManualOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Manuals.
     */
    cursor?: ManualWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Manuals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Manuals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Manuals.
     */
    distinct?: ManualScalarFieldEnum | ManualScalarFieldEnum[]
  }


  /**
   * Manual findMany
   */
  export type ManualFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manual
     */
    select?: ManualSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ManualInclude<ExtArgs> | null
    /**
     * Filter, which Manuals to fetch.
     */
    where?: ManualWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Manuals to fetch.
     */
    orderBy?: ManualOrderByWithRelationInput | ManualOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Manuals.
     */
    cursor?: ManualWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Manuals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Manuals.
     */
    skip?: number
    distinct?: ManualScalarFieldEnum | ManualScalarFieldEnum[]
  }


  /**
   * Manual create
   */
  export type ManualCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manual
     */
    select?: ManualSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ManualInclude<ExtArgs> | null
    /**
     * The data needed to create a Manual.
     */
    data: XOR<ManualCreateInput, ManualUncheckedCreateInput>
  }


  /**
   * Manual createMany
   */
  export type ManualCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Manuals.
     */
    data: ManualCreateManyInput | ManualCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Manual update
   */
  export type ManualUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manual
     */
    select?: ManualSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ManualInclude<ExtArgs> | null
    /**
     * The data needed to update a Manual.
     */
    data: XOR<ManualUpdateInput, ManualUncheckedUpdateInput>
    /**
     * Choose, which Manual to update.
     */
    where: ManualWhereUniqueInput
  }


  /**
   * Manual updateMany
   */
  export type ManualUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Manuals.
     */
    data: XOR<ManualUpdateManyMutationInput, ManualUncheckedUpdateManyInput>
    /**
     * Filter which Manuals to update
     */
    where?: ManualWhereInput
  }


  /**
   * Manual upsert
   */
  export type ManualUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manual
     */
    select?: ManualSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ManualInclude<ExtArgs> | null
    /**
     * The filter to search for the Manual to update in case it exists.
     */
    where: ManualWhereUniqueInput
    /**
     * In case the Manual found by the `where` argument doesn't exist, create a new Manual with this data.
     */
    create: XOR<ManualCreateInput, ManualUncheckedCreateInput>
    /**
     * In case the Manual was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ManualUpdateInput, ManualUncheckedUpdateInput>
  }


  /**
   * Manual delete
   */
  export type ManualDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manual
     */
    select?: ManualSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ManualInclude<ExtArgs> | null
    /**
     * Filter which Manual to delete.
     */
    where: ManualWhereUniqueInput
  }


  /**
   * Manual deleteMany
   */
  export type ManualDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Manuals to delete
     */
    where?: ManualWhereInput
  }


  /**
   * Manual without action
   */
  export type ManualDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manual
     */
    select?: ManualSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ManualInclude<ExtArgs> | null
  }



  /**
   * Model Classify
   */

  export type AggregateClassify = {
    _count: ClassifyCountAggregateOutputType | null
    _avg: ClassifyAvgAggregateOutputType | null
    _sum: ClassifySumAggregateOutputType | null
    _min: ClassifyMinAggregateOutputType | null
    _max: ClassifyMaxAggregateOutputType | null
  }

  export type ClassifyAvgAggregateOutputType = {
    c_id: number | null
    create_by: number | null
    verify_by: number | null
  }

  export type ClassifySumAggregateOutputType = {
    c_id: number | null
    create_by: number | null
    verify_by: number | null
  }

  export type ClassifyMinAggregateOutputType = {
    c_id: number | null
    status: boolean | null
    status_verify: $Enums.StatusVerifyEnum | null
    select_result: string | null
    create_at: Date | null
    create_by: number | null
    verify_by: number | null
  }

  export type ClassifyMaxAggregateOutputType = {
    c_id: number | null
    status: boolean | null
    status_verify: $Enums.StatusVerifyEnum | null
    select_result: string | null
    create_at: Date | null
    create_by: number | null
    verify_by: number | null
  }

  export type ClassifyCountAggregateOutputType = {
    c_id: number
    status: number
    status_verify: number
    select_result: number
    result: number
    create_at: number
    create_by: number
    verify_by: number
    _all: number
  }


  export type ClassifyAvgAggregateInputType = {
    c_id?: true
    create_by?: true
    verify_by?: true
  }

  export type ClassifySumAggregateInputType = {
    c_id?: true
    create_by?: true
    verify_by?: true
  }

  export type ClassifyMinAggregateInputType = {
    c_id?: true
    status?: true
    status_verify?: true
    select_result?: true
    create_at?: true
    create_by?: true
    verify_by?: true
  }

  export type ClassifyMaxAggregateInputType = {
    c_id?: true
    status?: true
    status_verify?: true
    select_result?: true
    create_at?: true
    create_by?: true
    verify_by?: true
  }

  export type ClassifyCountAggregateInputType = {
    c_id?: true
    status?: true
    status_verify?: true
    select_result?: true
    result?: true
    create_at?: true
    create_by?: true
    verify_by?: true
    _all?: true
  }

  export type ClassifyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Classify to aggregate.
     */
    where?: ClassifyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classifies to fetch.
     */
    orderBy?: ClassifyOrderByWithRelationInput | ClassifyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClassifyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classifies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classifies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Classifies
    **/
    _count?: true | ClassifyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClassifyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClassifySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClassifyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClassifyMaxAggregateInputType
  }

  export type GetClassifyAggregateType<T extends ClassifyAggregateArgs> = {
        [P in keyof T & keyof AggregateClassify]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClassify[P]>
      : GetScalarType<T[P], AggregateClassify[P]>
  }




  export type ClassifyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassifyWhereInput
    orderBy?: ClassifyOrderByWithAggregationInput | ClassifyOrderByWithAggregationInput[]
    by: ClassifyScalarFieldEnum[] | ClassifyScalarFieldEnum
    having?: ClassifyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClassifyCountAggregateInputType | true
    _avg?: ClassifyAvgAggregateInputType
    _sum?: ClassifySumAggregateInputType
    _min?: ClassifyMinAggregateInputType
    _max?: ClassifyMaxAggregateInputType
  }

  export type ClassifyGroupByOutputType = {
    c_id: number
    status: boolean
    status_verify: $Enums.StatusVerifyEnum
    select_result: string
    result: JsonValue
    create_at: Date
    create_by: number
    verify_by: number
    _count: ClassifyCountAggregateOutputType | null
    _avg: ClassifyAvgAggregateOutputType | null
    _sum: ClassifySumAggregateOutputType | null
    _min: ClassifyMinAggregateOutputType | null
    _max: ClassifyMaxAggregateOutputType | null
  }

  type GetClassifyGroupByPayload<T extends ClassifyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClassifyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClassifyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClassifyGroupByOutputType[P]>
            : GetScalarType<T[P], ClassifyGroupByOutputType[P]>
        }
      >
    >


  export type ClassifySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    c_id?: boolean
    status?: boolean
    status_verify?: boolean
    select_result?: boolean
    result?: boolean
    create_at?: boolean
    create_by?: boolean
    verify_by?: boolean
    creator?: boolean | UsersDefaultArgs<ExtArgs>
    verifitor?: boolean | UsersDefaultArgs<ExtArgs>
    notes?: boolean | Classify$notesArgs<ExtArgs>
    _count?: boolean | ClassifyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["classify"]>

  export type ClassifySelectScalar = {
    c_id?: boolean
    status?: boolean
    status_verify?: boolean
    select_result?: boolean
    result?: boolean
    create_at?: boolean
    create_by?: boolean
    verify_by?: boolean
  }

  export type ClassifyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UsersDefaultArgs<ExtArgs>
    verifitor?: boolean | UsersDefaultArgs<ExtArgs>
    notes?: boolean | Classify$notesArgs<ExtArgs>
    _count?: boolean | ClassifyCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ClassifyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Classify"
    objects: {
      creator: Prisma.$UsersPayload<ExtArgs>
      verifitor: Prisma.$UsersPayload<ExtArgs>
      notes: Prisma.$NotePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      c_id: number
      status: boolean
      status_verify: $Enums.StatusVerifyEnum
      select_result: string
      result: Prisma.JsonValue
      create_at: Date
      create_by: number
      verify_by: number
    }, ExtArgs["result"]["classify"]>
    composites: {}
  }


  type ClassifyGetPayload<S extends boolean | null | undefined | ClassifyDefaultArgs> = $Result.GetResult<Prisma.$ClassifyPayload, S>

  type ClassifyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ClassifyFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: ClassifyCountAggregateInputType | true
    }

  export interface ClassifyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Classify'], meta: { name: 'Classify' } }
    /**
     * Find zero or one Classify that matches the filter.
     * @param {ClassifyFindUniqueArgs} args - Arguments to find a Classify
     * @example
     * // Get one Classify
     * const classify = await prisma.classify.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ClassifyFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ClassifyFindUniqueArgs<ExtArgs>>
    ): Prisma__ClassifyClient<$Result.GetResult<Prisma.$ClassifyPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Classify that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ClassifyFindUniqueOrThrowArgs} args - Arguments to find a Classify
     * @example
     * // Get one Classify
     * const classify = await prisma.classify.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ClassifyFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ClassifyFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ClassifyClient<$Result.GetResult<Prisma.$ClassifyPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Classify that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassifyFindFirstArgs} args - Arguments to find a Classify
     * @example
     * // Get one Classify
     * const classify = await prisma.classify.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ClassifyFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ClassifyFindFirstArgs<ExtArgs>>
    ): Prisma__ClassifyClient<$Result.GetResult<Prisma.$ClassifyPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Classify that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassifyFindFirstOrThrowArgs} args - Arguments to find a Classify
     * @example
     * // Get one Classify
     * const classify = await prisma.classify.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ClassifyFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ClassifyFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ClassifyClient<$Result.GetResult<Prisma.$ClassifyPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Classifies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassifyFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Classifies
     * const classifies = await prisma.classify.findMany()
     * 
     * // Get first 10 Classifies
     * const classifies = await prisma.classify.findMany({ take: 10 })
     * 
     * // Only select the `c_id`
     * const classifyWithC_idOnly = await prisma.classify.findMany({ select: { c_id: true } })
     * 
    **/
    findMany<T extends ClassifyFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ClassifyFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassifyPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Classify.
     * @param {ClassifyCreateArgs} args - Arguments to create a Classify.
     * @example
     * // Create one Classify
     * const Classify = await prisma.classify.create({
     *   data: {
     *     // ... data to create a Classify
     *   }
     * })
     * 
    **/
    create<T extends ClassifyCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ClassifyCreateArgs<ExtArgs>>
    ): Prisma__ClassifyClient<$Result.GetResult<Prisma.$ClassifyPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Classifies.
     *     @param {ClassifyCreateManyArgs} args - Arguments to create many Classifies.
     *     @example
     *     // Create many Classifies
     *     const classify = await prisma.classify.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ClassifyCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ClassifyCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Classify.
     * @param {ClassifyDeleteArgs} args - Arguments to delete one Classify.
     * @example
     * // Delete one Classify
     * const Classify = await prisma.classify.delete({
     *   where: {
     *     // ... filter to delete one Classify
     *   }
     * })
     * 
    **/
    delete<T extends ClassifyDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ClassifyDeleteArgs<ExtArgs>>
    ): Prisma__ClassifyClient<$Result.GetResult<Prisma.$ClassifyPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Classify.
     * @param {ClassifyUpdateArgs} args - Arguments to update one Classify.
     * @example
     * // Update one Classify
     * const classify = await prisma.classify.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ClassifyUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ClassifyUpdateArgs<ExtArgs>>
    ): Prisma__ClassifyClient<$Result.GetResult<Prisma.$ClassifyPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Classifies.
     * @param {ClassifyDeleteManyArgs} args - Arguments to filter Classifies to delete.
     * @example
     * // Delete a few Classifies
     * const { count } = await prisma.classify.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ClassifyDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ClassifyDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Classifies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassifyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Classifies
     * const classify = await prisma.classify.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ClassifyUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ClassifyUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Classify.
     * @param {ClassifyUpsertArgs} args - Arguments to update or create a Classify.
     * @example
     * // Update or create a Classify
     * const classify = await prisma.classify.upsert({
     *   create: {
     *     // ... data to create a Classify
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Classify we want to update
     *   }
     * })
    **/
    upsert<T extends ClassifyUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ClassifyUpsertArgs<ExtArgs>>
    ): Prisma__ClassifyClient<$Result.GetResult<Prisma.$ClassifyPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Classifies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassifyCountArgs} args - Arguments to filter Classifies to count.
     * @example
     * // Count the number of Classifies
     * const count = await prisma.classify.count({
     *   where: {
     *     // ... the filter for the Classifies we want to count
     *   }
     * })
    **/
    count<T extends ClassifyCountArgs>(
      args?: Subset<T, ClassifyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClassifyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Classify.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassifyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClassifyAggregateArgs>(args: Subset<T, ClassifyAggregateArgs>): Prisma.PrismaPromise<GetClassifyAggregateType<T>>

    /**
     * Group by Classify.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassifyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClassifyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClassifyGroupByArgs['orderBy'] }
        : { orderBy?: ClassifyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClassifyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClassifyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Classify model
   */
  readonly fields: ClassifyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Classify.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClassifyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    creator<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    verifitor<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    notes<T extends Classify$notesArgs<ExtArgs> = {}>(args?: Subset<T, Classify$notesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Classify model
   */ 
  interface ClassifyFieldRefs {
    readonly c_id: FieldRef<"Classify", 'Int'>
    readonly status: FieldRef<"Classify", 'Boolean'>
    readonly status_verify: FieldRef<"Classify", 'StatusVerifyEnum'>
    readonly select_result: FieldRef<"Classify", 'String'>
    readonly result: FieldRef<"Classify", 'Json'>
    readonly create_at: FieldRef<"Classify", 'DateTime'>
    readonly create_by: FieldRef<"Classify", 'Int'>
    readonly verify_by: FieldRef<"Classify", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Classify findUnique
   */
  export type ClassifyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classify
     */
    select?: ClassifySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClassifyInclude<ExtArgs> | null
    /**
     * Filter, which Classify to fetch.
     */
    where: ClassifyWhereUniqueInput
  }


  /**
   * Classify findUniqueOrThrow
   */
  export type ClassifyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classify
     */
    select?: ClassifySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClassifyInclude<ExtArgs> | null
    /**
     * Filter, which Classify to fetch.
     */
    where: ClassifyWhereUniqueInput
  }


  /**
   * Classify findFirst
   */
  export type ClassifyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classify
     */
    select?: ClassifySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClassifyInclude<ExtArgs> | null
    /**
     * Filter, which Classify to fetch.
     */
    where?: ClassifyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classifies to fetch.
     */
    orderBy?: ClassifyOrderByWithRelationInput | ClassifyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Classifies.
     */
    cursor?: ClassifyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classifies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classifies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Classifies.
     */
    distinct?: ClassifyScalarFieldEnum | ClassifyScalarFieldEnum[]
  }


  /**
   * Classify findFirstOrThrow
   */
  export type ClassifyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classify
     */
    select?: ClassifySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClassifyInclude<ExtArgs> | null
    /**
     * Filter, which Classify to fetch.
     */
    where?: ClassifyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classifies to fetch.
     */
    orderBy?: ClassifyOrderByWithRelationInput | ClassifyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Classifies.
     */
    cursor?: ClassifyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classifies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classifies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Classifies.
     */
    distinct?: ClassifyScalarFieldEnum | ClassifyScalarFieldEnum[]
  }


  /**
   * Classify findMany
   */
  export type ClassifyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classify
     */
    select?: ClassifySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClassifyInclude<ExtArgs> | null
    /**
     * Filter, which Classifies to fetch.
     */
    where?: ClassifyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classifies to fetch.
     */
    orderBy?: ClassifyOrderByWithRelationInput | ClassifyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Classifies.
     */
    cursor?: ClassifyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classifies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classifies.
     */
    skip?: number
    distinct?: ClassifyScalarFieldEnum | ClassifyScalarFieldEnum[]
  }


  /**
   * Classify create
   */
  export type ClassifyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classify
     */
    select?: ClassifySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClassifyInclude<ExtArgs> | null
    /**
     * The data needed to create a Classify.
     */
    data: XOR<ClassifyCreateInput, ClassifyUncheckedCreateInput>
  }


  /**
   * Classify createMany
   */
  export type ClassifyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Classifies.
     */
    data: ClassifyCreateManyInput | ClassifyCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Classify update
   */
  export type ClassifyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classify
     */
    select?: ClassifySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClassifyInclude<ExtArgs> | null
    /**
     * The data needed to update a Classify.
     */
    data: XOR<ClassifyUpdateInput, ClassifyUncheckedUpdateInput>
    /**
     * Choose, which Classify to update.
     */
    where: ClassifyWhereUniqueInput
  }


  /**
   * Classify updateMany
   */
  export type ClassifyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Classifies.
     */
    data: XOR<ClassifyUpdateManyMutationInput, ClassifyUncheckedUpdateManyInput>
    /**
     * Filter which Classifies to update
     */
    where?: ClassifyWhereInput
  }


  /**
   * Classify upsert
   */
  export type ClassifyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classify
     */
    select?: ClassifySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClassifyInclude<ExtArgs> | null
    /**
     * The filter to search for the Classify to update in case it exists.
     */
    where: ClassifyWhereUniqueInput
    /**
     * In case the Classify found by the `where` argument doesn't exist, create a new Classify with this data.
     */
    create: XOR<ClassifyCreateInput, ClassifyUncheckedCreateInput>
    /**
     * In case the Classify was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClassifyUpdateInput, ClassifyUncheckedUpdateInput>
  }


  /**
   * Classify delete
   */
  export type ClassifyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classify
     */
    select?: ClassifySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClassifyInclude<ExtArgs> | null
    /**
     * Filter which Classify to delete.
     */
    where: ClassifyWhereUniqueInput
  }


  /**
   * Classify deleteMany
   */
  export type ClassifyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Classifies to delete
     */
    where?: ClassifyWhereInput
  }


  /**
   * Classify.notes
   */
  export type Classify$notesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NoteInclude<ExtArgs> | null
    where?: NoteWhereInput
    orderBy?: NoteOrderByWithRelationInput | NoteOrderByWithRelationInput[]
    cursor?: NoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NoteScalarFieldEnum | NoteScalarFieldEnum[]
  }


  /**
   * Classify without action
   */
  export type ClassifyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classify
     */
    select?: ClassifySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClassifyInclude<ExtArgs> | null
  }



  /**
   * Model Note
   */

  export type AggregateNote = {
    _count: NoteCountAggregateOutputType | null
    _avg: NoteAvgAggregateOutputType | null
    _sum: NoteSumAggregateOutputType | null
    _min: NoteMinAggregateOutputType | null
    _max: NoteMaxAggregateOutputType | null
  }

  export type NoteAvgAggregateOutputType = {
    n_id: number | null
    c_id: number | null
    create_by: number | null
  }

  export type NoteSumAggregateOutputType = {
    n_id: number | null
    c_id: number | null
    create_by: number | null
  }

  export type NoteMinAggregateOutputType = {
    n_id: number | null
    c_id: number | null
    change_result: boolean | null
    read_status: boolean | null
    description: string | null
    create_at: Date | null
    create_by: number | null
  }

  export type NoteMaxAggregateOutputType = {
    n_id: number | null
    c_id: number | null
    change_result: boolean | null
    read_status: boolean | null
    description: string | null
    create_at: Date | null
    create_by: number | null
  }

  export type NoteCountAggregateOutputType = {
    n_id: number
    c_id: number
    change_result: number
    read_status: number
    description: number
    create_at: number
    create_by: number
    _all: number
  }


  export type NoteAvgAggregateInputType = {
    n_id?: true
    c_id?: true
    create_by?: true
  }

  export type NoteSumAggregateInputType = {
    n_id?: true
    c_id?: true
    create_by?: true
  }

  export type NoteMinAggregateInputType = {
    n_id?: true
    c_id?: true
    change_result?: true
    read_status?: true
    description?: true
    create_at?: true
    create_by?: true
  }

  export type NoteMaxAggregateInputType = {
    n_id?: true
    c_id?: true
    change_result?: true
    read_status?: true
    description?: true
    create_at?: true
    create_by?: true
  }

  export type NoteCountAggregateInputType = {
    n_id?: true
    c_id?: true
    change_result?: true
    read_status?: true
    description?: true
    create_at?: true
    create_by?: true
    _all?: true
  }

  export type NoteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Note to aggregate.
     */
    where?: NoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notes to fetch.
     */
    orderBy?: NoteOrderByWithRelationInput | NoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notes
    **/
    _count?: true | NoteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NoteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NoteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NoteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NoteMaxAggregateInputType
  }

  export type GetNoteAggregateType<T extends NoteAggregateArgs> = {
        [P in keyof T & keyof AggregateNote]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNote[P]>
      : GetScalarType<T[P], AggregateNote[P]>
  }




  export type NoteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NoteWhereInput
    orderBy?: NoteOrderByWithAggregationInput | NoteOrderByWithAggregationInput[]
    by: NoteScalarFieldEnum[] | NoteScalarFieldEnum
    having?: NoteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NoteCountAggregateInputType | true
    _avg?: NoteAvgAggregateInputType
    _sum?: NoteSumAggregateInputType
    _min?: NoteMinAggregateInputType
    _max?: NoteMaxAggregateInputType
  }

  export type NoteGroupByOutputType = {
    n_id: number
    c_id: number
    change_result: boolean
    read_status: boolean
    description: string
    create_at: Date
    create_by: number
    _count: NoteCountAggregateOutputType | null
    _avg: NoteAvgAggregateOutputType | null
    _sum: NoteSumAggregateOutputType | null
    _min: NoteMinAggregateOutputType | null
    _max: NoteMaxAggregateOutputType | null
  }

  type GetNoteGroupByPayload<T extends NoteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NoteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NoteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NoteGroupByOutputType[P]>
            : GetScalarType<T[P], NoteGroupByOutputType[P]>
        }
      >
    >


  export type NoteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    n_id?: boolean
    c_id?: boolean
    change_result?: boolean
    read_status?: boolean
    description?: boolean
    create_at?: boolean
    create_by?: boolean
    classify?: boolean | ClassifyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["note"]>

  export type NoteSelectScalar = {
    n_id?: boolean
    c_id?: boolean
    change_result?: boolean
    read_status?: boolean
    description?: boolean
    create_at?: boolean
    create_by?: boolean
  }

  export type NoteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    classify?: boolean | ClassifyDefaultArgs<ExtArgs>
  }


  export type $NotePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Note"
    objects: {
      classify: Prisma.$ClassifyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      n_id: number
      c_id: number
      change_result: boolean
      read_status: boolean
      description: string
      create_at: Date
      create_by: number
    }, ExtArgs["result"]["note"]>
    composites: {}
  }


  type NoteGetPayload<S extends boolean | null | undefined | NoteDefaultArgs> = $Result.GetResult<Prisma.$NotePayload, S>

  type NoteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<NoteFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: NoteCountAggregateInputType | true
    }

  export interface NoteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Note'], meta: { name: 'Note' } }
    /**
     * Find zero or one Note that matches the filter.
     * @param {NoteFindUniqueArgs} args - Arguments to find a Note
     * @example
     * // Get one Note
     * const note = await prisma.note.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends NoteFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, NoteFindUniqueArgs<ExtArgs>>
    ): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Note that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {NoteFindUniqueOrThrowArgs} args - Arguments to find a Note
     * @example
     * // Get one Note
     * const note = await prisma.note.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends NoteFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, NoteFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Note that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteFindFirstArgs} args - Arguments to find a Note
     * @example
     * // Get one Note
     * const note = await prisma.note.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends NoteFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, NoteFindFirstArgs<ExtArgs>>
    ): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Note that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteFindFirstOrThrowArgs} args - Arguments to find a Note
     * @example
     * // Get one Note
     * const note = await prisma.note.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends NoteFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, NoteFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Notes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notes
     * const notes = await prisma.note.findMany()
     * 
     * // Get first 10 Notes
     * const notes = await prisma.note.findMany({ take: 10 })
     * 
     * // Only select the `n_id`
     * const noteWithN_idOnly = await prisma.note.findMany({ select: { n_id: true } })
     * 
    **/
    findMany<T extends NoteFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, NoteFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Note.
     * @param {NoteCreateArgs} args - Arguments to create a Note.
     * @example
     * // Create one Note
     * const Note = await prisma.note.create({
     *   data: {
     *     // ... data to create a Note
     *   }
     * })
     * 
    **/
    create<T extends NoteCreateArgs<ExtArgs>>(
      args: SelectSubset<T, NoteCreateArgs<ExtArgs>>
    ): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Notes.
     *     @param {NoteCreateManyArgs} args - Arguments to create many Notes.
     *     @example
     *     // Create many Notes
     *     const note = await prisma.note.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends NoteCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, NoteCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Note.
     * @param {NoteDeleteArgs} args - Arguments to delete one Note.
     * @example
     * // Delete one Note
     * const Note = await prisma.note.delete({
     *   where: {
     *     // ... filter to delete one Note
     *   }
     * })
     * 
    **/
    delete<T extends NoteDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, NoteDeleteArgs<ExtArgs>>
    ): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Note.
     * @param {NoteUpdateArgs} args - Arguments to update one Note.
     * @example
     * // Update one Note
     * const note = await prisma.note.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends NoteUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, NoteUpdateArgs<ExtArgs>>
    ): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Notes.
     * @param {NoteDeleteManyArgs} args - Arguments to filter Notes to delete.
     * @example
     * // Delete a few Notes
     * const { count } = await prisma.note.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends NoteDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, NoteDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notes
     * const note = await prisma.note.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends NoteUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, NoteUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Note.
     * @param {NoteUpsertArgs} args - Arguments to update or create a Note.
     * @example
     * // Update or create a Note
     * const note = await prisma.note.upsert({
     *   create: {
     *     // ... data to create a Note
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Note we want to update
     *   }
     * })
    **/
    upsert<T extends NoteUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, NoteUpsertArgs<ExtArgs>>
    ): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Notes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteCountArgs} args - Arguments to filter Notes to count.
     * @example
     * // Count the number of Notes
     * const count = await prisma.note.count({
     *   where: {
     *     // ... the filter for the Notes we want to count
     *   }
     * })
    **/
    count<T extends NoteCountArgs>(
      args?: Subset<T, NoteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NoteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Note.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NoteAggregateArgs>(args: Subset<T, NoteAggregateArgs>): Prisma.PrismaPromise<GetNoteAggregateType<T>>

    /**
     * Group by Note.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NoteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NoteGroupByArgs['orderBy'] }
        : { orderBy?: NoteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NoteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNoteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Note model
   */
  readonly fields: NoteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Note.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NoteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    classify<T extends ClassifyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClassifyDefaultArgs<ExtArgs>>): Prisma__ClassifyClient<$Result.GetResult<Prisma.$ClassifyPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Note model
   */ 
  interface NoteFieldRefs {
    readonly n_id: FieldRef<"Note", 'Int'>
    readonly c_id: FieldRef<"Note", 'Int'>
    readonly change_result: FieldRef<"Note", 'Boolean'>
    readonly read_status: FieldRef<"Note", 'Boolean'>
    readonly description: FieldRef<"Note", 'String'>
    readonly create_at: FieldRef<"Note", 'DateTime'>
    readonly create_by: FieldRef<"Note", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Note findUnique
   */
  export type NoteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * Filter, which Note to fetch.
     */
    where: NoteWhereUniqueInput
  }


  /**
   * Note findUniqueOrThrow
   */
  export type NoteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * Filter, which Note to fetch.
     */
    where: NoteWhereUniqueInput
  }


  /**
   * Note findFirst
   */
  export type NoteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * Filter, which Note to fetch.
     */
    where?: NoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notes to fetch.
     */
    orderBy?: NoteOrderByWithRelationInput | NoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notes.
     */
    cursor?: NoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notes.
     */
    distinct?: NoteScalarFieldEnum | NoteScalarFieldEnum[]
  }


  /**
   * Note findFirstOrThrow
   */
  export type NoteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * Filter, which Note to fetch.
     */
    where?: NoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notes to fetch.
     */
    orderBy?: NoteOrderByWithRelationInput | NoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notes.
     */
    cursor?: NoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notes.
     */
    distinct?: NoteScalarFieldEnum | NoteScalarFieldEnum[]
  }


  /**
   * Note findMany
   */
  export type NoteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * Filter, which Notes to fetch.
     */
    where?: NoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notes to fetch.
     */
    orderBy?: NoteOrderByWithRelationInput | NoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notes.
     */
    cursor?: NoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notes.
     */
    skip?: number
    distinct?: NoteScalarFieldEnum | NoteScalarFieldEnum[]
  }


  /**
   * Note create
   */
  export type NoteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * The data needed to create a Note.
     */
    data: XOR<NoteCreateInput, NoteUncheckedCreateInput>
  }


  /**
   * Note createMany
   */
  export type NoteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notes.
     */
    data: NoteCreateManyInput | NoteCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Note update
   */
  export type NoteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * The data needed to update a Note.
     */
    data: XOR<NoteUpdateInput, NoteUncheckedUpdateInput>
    /**
     * Choose, which Note to update.
     */
    where: NoteWhereUniqueInput
  }


  /**
   * Note updateMany
   */
  export type NoteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notes.
     */
    data: XOR<NoteUpdateManyMutationInput, NoteUncheckedUpdateManyInput>
    /**
     * Filter which Notes to update
     */
    where?: NoteWhereInput
  }


  /**
   * Note upsert
   */
  export type NoteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * The filter to search for the Note to update in case it exists.
     */
    where: NoteWhereUniqueInput
    /**
     * In case the Note found by the `where` argument doesn't exist, create a new Note with this data.
     */
    create: XOR<NoteCreateInput, NoteUncheckedCreateInput>
    /**
     * In case the Note was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NoteUpdateInput, NoteUncheckedUpdateInput>
  }


  /**
   * Note delete
   */
  export type NoteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * Filter which Note to delete.
     */
    where: NoteWhereUniqueInput
  }


  /**
   * Note deleteMany
   */
  export type NoteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notes to delete
     */
    where?: NoteWhereInput
  }


  /**
   * Note without action
   */
  export type NoteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NoteInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsersScalarFieldEnum: {
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

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const Wood_infoScalarFieldEnum: {
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

  export type Wood_infoScalarFieldEnum = (typeof Wood_infoScalarFieldEnum)[keyof typeof Wood_infoScalarFieldEnum]


  export const Wood_ImageScalarFieldEnum: {
    wi_id: 'wi_id',
    w_id: 'w_id',
    path: 'path'
  };

  export type Wood_ImageScalarFieldEnum = (typeof Wood_ImageScalarFieldEnum)[keyof typeof Wood_ImageScalarFieldEnum]


  export const ManualScalarFieldEnum: {
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

  export type ManualScalarFieldEnum = (typeof ManualScalarFieldEnum)[keyof typeof ManualScalarFieldEnum]


  export const ClassifyScalarFieldEnum: {
    c_id: 'c_id',
    status: 'status',
    status_verify: 'status_verify',
    select_result: 'select_result',
    result: 'result',
    create_at: 'create_at',
    create_by: 'create_by',
    verify_by: 'verify_by'
  };

  export type ClassifyScalarFieldEnum = (typeof ClassifyScalarFieldEnum)[keyof typeof ClassifyScalarFieldEnum]


  export const NoteScalarFieldEnum: {
    n_id: 'n_id',
    c_id: 'c_id',
    change_result: 'change_result',
    read_status: 'read_status',
    description: 'description',
    create_at: 'create_at',
    create_by: 'create_by'
  };

  export type NoteScalarFieldEnum = (typeof NoteScalarFieldEnum)[keyof typeof NoteScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'roleEnum'
   */
  export type EnumroleEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'roleEnum'>
    


  /**
   * Reference to a field of type 'roleEnum[]'
   */
  export type ListEnumroleEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'roleEnum[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'StatusVerifyEnum'
   */
  export type EnumStatusVerifyEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusVerifyEnum'>
    


  /**
   * Reference to a field of type 'StatusVerifyEnum[]'
   */
  export type ListEnumStatusVerifyEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusVerifyEnum[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UsersWhereInput = {
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    u_id?: IntFilter<"Users"> | number
    line_id?: StringFilter<"Users"> | string
    firstname?: StringFilter<"Users"> | string
    lastname?: StringFilter<"Users"> | string
    email?: StringFilter<"Users"> | string
    phone?: StringFilter<"Users"> | string
    image?: StringFilter<"Users"> | string
    role?: EnumroleEnumFilter<"Users"> | $Enums.roleEnum
    create_at?: DateTimeFilter<"Users"> | Date | string
    update_at?: DateTimeFilter<"Users"> | Date | string
    wood_info?: Wood_infoListRelationFilter
    updated_wood_info?: Wood_infoListRelationFilter
    created_manuals?: ManualListRelationFilter
    updated_manuals?: ManualListRelationFilter
    created_classify?: ClassifyListRelationFilter
    verify_classify?: ClassifyListRelationFilter
  }

  export type UsersOrderByWithRelationInput = {
    u_id?: SortOrder
    line_id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    image?: SortOrder
    role?: SortOrder
    create_at?: SortOrder
    update_at?: SortOrder
    wood_info?: Wood_infoOrderByRelationAggregateInput
    updated_wood_info?: Wood_infoOrderByRelationAggregateInput
    created_manuals?: ManualOrderByRelationAggregateInput
    updated_manuals?: ManualOrderByRelationAggregateInput
    created_classify?: ClassifyOrderByRelationAggregateInput
    verify_classify?: ClassifyOrderByRelationAggregateInput
  }

  export type UsersWhereUniqueInput = Prisma.AtLeast<{
    u_id?: number
    line_id?: string
    email?: string
    phone?: string
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    firstname?: StringFilter<"Users"> | string
    lastname?: StringFilter<"Users"> | string
    image?: StringFilter<"Users"> | string
    role?: EnumroleEnumFilter<"Users"> | $Enums.roleEnum
    create_at?: DateTimeFilter<"Users"> | Date | string
    update_at?: DateTimeFilter<"Users"> | Date | string
    wood_info?: Wood_infoListRelationFilter
    updated_wood_info?: Wood_infoListRelationFilter
    created_manuals?: ManualListRelationFilter
    updated_manuals?: ManualListRelationFilter
    created_classify?: ClassifyListRelationFilter
    verify_classify?: ClassifyListRelationFilter
  }, "u_id" | "line_id" | "email" | "phone">

  export type UsersOrderByWithAggregationInput = {
    u_id?: SortOrder
    line_id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    image?: SortOrder
    role?: SortOrder
    create_at?: SortOrder
    update_at?: SortOrder
    _count?: UsersCountOrderByAggregateInput
    _avg?: UsersAvgOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
    _sum?: UsersSumOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    OR?: UsersScalarWhereWithAggregatesInput[]
    NOT?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    u_id?: IntWithAggregatesFilter<"Users"> | number
    line_id?: StringWithAggregatesFilter<"Users"> | string
    firstname?: StringWithAggregatesFilter<"Users"> | string
    lastname?: StringWithAggregatesFilter<"Users"> | string
    email?: StringWithAggregatesFilter<"Users"> | string
    phone?: StringWithAggregatesFilter<"Users"> | string
    image?: StringWithAggregatesFilter<"Users"> | string
    role?: EnumroleEnumWithAggregatesFilter<"Users"> | $Enums.roleEnum
    create_at?: DateTimeWithAggregatesFilter<"Users"> | Date | string
    update_at?: DateTimeWithAggregatesFilter<"Users"> | Date | string
  }

  export type Wood_infoWhereInput = {
    AND?: Wood_infoWhereInput | Wood_infoWhereInput[]
    OR?: Wood_infoWhereInput[]
    NOT?: Wood_infoWhereInput | Wood_infoWhereInput[]
    w_id?: IntFilter<"Wood_info"> | number
    common_name?: StringNullableListFilter<"Wood_info">
    eng_name?: StringNullableListFilter<"Wood_info">
    botanical_name?: StringFilter<"Wood_info"> | string
    pedigree?: StringFilter<"Wood_info"> | string
    place_of_origin?: StringFilter<"Wood_info"> | string
    wood_characteristics?: StringFilter<"Wood_info"> | string
    anatomical_characteristics?: StringFilter<"Wood_info"> | string
    other?: StringFilter<"Wood_info"> | string
    status?: BoolFilter<"Wood_info"> | boolean
    create_at?: DateTimeFilter<"Wood_info"> | Date | string
    update_at?: DateTimeFilter<"Wood_info"> | Date | string
    create_by?: IntFilter<"Wood_info"> | number
    update_by?: IntFilter<"Wood_info"> | number
    wood_image?: Wood_ImageListRelationFilter
    user?: XOR<UsersRelationFilter, UsersWhereInput>
    updater?: XOR<UsersRelationFilter, UsersWhereInput>
  }

  export type Wood_infoOrderByWithRelationInput = {
    w_id?: SortOrder
    common_name?: SortOrder
    eng_name?: SortOrder
    botanical_name?: SortOrder
    pedigree?: SortOrder
    place_of_origin?: SortOrder
    wood_characteristics?: SortOrder
    anatomical_characteristics?: SortOrder
    other?: SortOrder
    status?: SortOrder
    create_at?: SortOrder
    update_at?: SortOrder
    create_by?: SortOrder
    update_by?: SortOrder
    wood_image?: Wood_ImageOrderByRelationAggregateInput
    user?: UsersOrderByWithRelationInput
    updater?: UsersOrderByWithRelationInput
  }

  export type Wood_infoWhereUniqueInput = Prisma.AtLeast<{
    w_id?: number
    AND?: Wood_infoWhereInput | Wood_infoWhereInput[]
    OR?: Wood_infoWhereInput[]
    NOT?: Wood_infoWhereInput | Wood_infoWhereInput[]
    common_name?: StringNullableListFilter<"Wood_info">
    eng_name?: StringNullableListFilter<"Wood_info">
    botanical_name?: StringFilter<"Wood_info"> | string
    pedigree?: StringFilter<"Wood_info"> | string
    place_of_origin?: StringFilter<"Wood_info"> | string
    wood_characteristics?: StringFilter<"Wood_info"> | string
    anatomical_characteristics?: StringFilter<"Wood_info"> | string
    other?: StringFilter<"Wood_info"> | string
    status?: BoolFilter<"Wood_info"> | boolean
    create_at?: DateTimeFilter<"Wood_info"> | Date | string
    update_at?: DateTimeFilter<"Wood_info"> | Date | string
    create_by?: IntFilter<"Wood_info"> | number
    update_by?: IntFilter<"Wood_info"> | number
    wood_image?: Wood_ImageListRelationFilter
    user?: XOR<UsersRelationFilter, UsersWhereInput>
    updater?: XOR<UsersRelationFilter, UsersWhereInput>
  }, "w_id">

  export type Wood_infoOrderByWithAggregationInput = {
    w_id?: SortOrder
    common_name?: SortOrder
    eng_name?: SortOrder
    botanical_name?: SortOrder
    pedigree?: SortOrder
    place_of_origin?: SortOrder
    wood_characteristics?: SortOrder
    anatomical_characteristics?: SortOrder
    other?: SortOrder
    status?: SortOrder
    create_at?: SortOrder
    update_at?: SortOrder
    create_by?: SortOrder
    update_by?: SortOrder
    _count?: Wood_infoCountOrderByAggregateInput
    _avg?: Wood_infoAvgOrderByAggregateInput
    _max?: Wood_infoMaxOrderByAggregateInput
    _min?: Wood_infoMinOrderByAggregateInput
    _sum?: Wood_infoSumOrderByAggregateInput
  }

  export type Wood_infoScalarWhereWithAggregatesInput = {
    AND?: Wood_infoScalarWhereWithAggregatesInput | Wood_infoScalarWhereWithAggregatesInput[]
    OR?: Wood_infoScalarWhereWithAggregatesInput[]
    NOT?: Wood_infoScalarWhereWithAggregatesInput | Wood_infoScalarWhereWithAggregatesInput[]
    w_id?: IntWithAggregatesFilter<"Wood_info"> | number
    common_name?: StringNullableListFilter<"Wood_info">
    eng_name?: StringNullableListFilter<"Wood_info">
    botanical_name?: StringWithAggregatesFilter<"Wood_info"> | string
    pedigree?: StringWithAggregatesFilter<"Wood_info"> | string
    place_of_origin?: StringWithAggregatesFilter<"Wood_info"> | string
    wood_characteristics?: StringWithAggregatesFilter<"Wood_info"> | string
    anatomical_characteristics?: StringWithAggregatesFilter<"Wood_info"> | string
    other?: StringWithAggregatesFilter<"Wood_info"> | string
    status?: BoolWithAggregatesFilter<"Wood_info"> | boolean
    create_at?: DateTimeWithAggregatesFilter<"Wood_info"> | Date | string
    update_at?: DateTimeWithAggregatesFilter<"Wood_info"> | Date | string
    create_by?: IntWithAggregatesFilter<"Wood_info"> | number
    update_by?: IntWithAggregatesFilter<"Wood_info"> | number
  }

  export type Wood_ImageWhereInput = {
    AND?: Wood_ImageWhereInput | Wood_ImageWhereInput[]
    OR?: Wood_ImageWhereInput[]
    NOT?: Wood_ImageWhereInput | Wood_ImageWhereInput[]
    wi_id?: IntFilter<"Wood_Image"> | number
    w_id?: IntFilter<"Wood_Image"> | number
    path?: StringFilter<"Wood_Image"> | string
    wood_info?: XOR<Wood_infoRelationFilter, Wood_infoWhereInput>
  }

  export type Wood_ImageOrderByWithRelationInput = {
    wi_id?: SortOrder
    w_id?: SortOrder
    path?: SortOrder
    wood_info?: Wood_infoOrderByWithRelationInput
  }

  export type Wood_ImageWhereUniqueInput = Prisma.AtLeast<{
    wi_id?: number
    AND?: Wood_ImageWhereInput | Wood_ImageWhereInput[]
    OR?: Wood_ImageWhereInput[]
    NOT?: Wood_ImageWhereInput | Wood_ImageWhereInput[]
    w_id?: IntFilter<"Wood_Image"> | number
    path?: StringFilter<"Wood_Image"> | string
    wood_info?: XOR<Wood_infoRelationFilter, Wood_infoWhereInput>
  }, "wi_id">

  export type Wood_ImageOrderByWithAggregationInput = {
    wi_id?: SortOrder
    w_id?: SortOrder
    path?: SortOrder
    _count?: Wood_ImageCountOrderByAggregateInput
    _avg?: Wood_ImageAvgOrderByAggregateInput
    _max?: Wood_ImageMaxOrderByAggregateInput
    _min?: Wood_ImageMinOrderByAggregateInput
    _sum?: Wood_ImageSumOrderByAggregateInput
  }

  export type Wood_ImageScalarWhereWithAggregatesInput = {
    AND?: Wood_ImageScalarWhereWithAggregatesInput | Wood_ImageScalarWhereWithAggregatesInput[]
    OR?: Wood_ImageScalarWhereWithAggregatesInput[]
    NOT?: Wood_ImageScalarWhereWithAggregatesInput | Wood_ImageScalarWhereWithAggregatesInput[]
    wi_id?: IntWithAggregatesFilter<"Wood_Image"> | number
    w_id?: IntWithAggregatesFilter<"Wood_Image"> | number
    path?: StringWithAggregatesFilter<"Wood_Image"> | string
  }

  export type ManualWhereInput = {
    AND?: ManualWhereInput | ManualWhereInput[]
    OR?: ManualWhereInput[]
    NOT?: ManualWhereInput | ManualWhereInput[]
    m_id?: IntFilter<"Manual"> | number
    topic?: StringFilter<"Manual"> | string
    description?: StringFilter<"Manual"> | string
    status?: BoolFilter<"Manual"> | boolean
    image?: StringFilter<"Manual"> | string
    create_at?: DateTimeFilter<"Manual"> | Date | string
    update_at?: DateTimeFilter<"Manual"> | Date | string
    create_by?: IntFilter<"Manual"> | number
    update_by?: IntFilter<"Manual"> | number
    creator?: XOR<UsersRelationFilter, UsersWhereInput>
    updater?: XOR<UsersRelationFilter, UsersWhereInput>
  }

  export type ManualOrderByWithRelationInput = {
    m_id?: SortOrder
    topic?: SortOrder
    description?: SortOrder
    status?: SortOrder
    image?: SortOrder
    create_at?: SortOrder
    update_at?: SortOrder
    create_by?: SortOrder
    update_by?: SortOrder
    creator?: UsersOrderByWithRelationInput
    updater?: UsersOrderByWithRelationInput
  }

  export type ManualWhereUniqueInput = Prisma.AtLeast<{
    m_id?: number
    AND?: ManualWhereInput | ManualWhereInput[]
    OR?: ManualWhereInput[]
    NOT?: ManualWhereInput | ManualWhereInput[]
    topic?: StringFilter<"Manual"> | string
    description?: StringFilter<"Manual"> | string
    status?: BoolFilter<"Manual"> | boolean
    image?: StringFilter<"Manual"> | string
    create_at?: DateTimeFilter<"Manual"> | Date | string
    update_at?: DateTimeFilter<"Manual"> | Date | string
    create_by?: IntFilter<"Manual"> | number
    update_by?: IntFilter<"Manual"> | number
    creator?: XOR<UsersRelationFilter, UsersWhereInput>
    updater?: XOR<UsersRelationFilter, UsersWhereInput>
  }, "m_id">

  export type ManualOrderByWithAggregationInput = {
    m_id?: SortOrder
    topic?: SortOrder
    description?: SortOrder
    status?: SortOrder
    image?: SortOrder
    create_at?: SortOrder
    update_at?: SortOrder
    create_by?: SortOrder
    update_by?: SortOrder
    _count?: ManualCountOrderByAggregateInput
    _avg?: ManualAvgOrderByAggregateInput
    _max?: ManualMaxOrderByAggregateInput
    _min?: ManualMinOrderByAggregateInput
    _sum?: ManualSumOrderByAggregateInput
  }

  export type ManualScalarWhereWithAggregatesInput = {
    AND?: ManualScalarWhereWithAggregatesInput | ManualScalarWhereWithAggregatesInput[]
    OR?: ManualScalarWhereWithAggregatesInput[]
    NOT?: ManualScalarWhereWithAggregatesInput | ManualScalarWhereWithAggregatesInput[]
    m_id?: IntWithAggregatesFilter<"Manual"> | number
    topic?: StringWithAggregatesFilter<"Manual"> | string
    description?: StringWithAggregatesFilter<"Manual"> | string
    status?: BoolWithAggregatesFilter<"Manual"> | boolean
    image?: StringWithAggregatesFilter<"Manual"> | string
    create_at?: DateTimeWithAggregatesFilter<"Manual"> | Date | string
    update_at?: DateTimeWithAggregatesFilter<"Manual"> | Date | string
    create_by?: IntWithAggregatesFilter<"Manual"> | number
    update_by?: IntWithAggregatesFilter<"Manual"> | number
  }

  export type ClassifyWhereInput = {
    AND?: ClassifyWhereInput | ClassifyWhereInput[]
    OR?: ClassifyWhereInput[]
    NOT?: ClassifyWhereInput | ClassifyWhereInput[]
    c_id?: IntFilter<"Classify"> | number
    status?: BoolFilter<"Classify"> | boolean
    status_verify?: EnumStatusVerifyEnumFilter<"Classify"> | $Enums.StatusVerifyEnum
    select_result?: StringFilter<"Classify"> | string
    result?: JsonFilter<"Classify">
    create_at?: DateTimeFilter<"Classify"> | Date | string
    create_by?: IntFilter<"Classify"> | number
    verify_by?: IntFilter<"Classify"> | number
    creator?: XOR<UsersRelationFilter, UsersWhereInput>
    verifitor?: XOR<UsersRelationFilter, UsersWhereInput>
    notes?: NoteListRelationFilter
  }

  export type ClassifyOrderByWithRelationInput = {
    c_id?: SortOrder
    status?: SortOrder
    status_verify?: SortOrder
    select_result?: SortOrder
    result?: SortOrder
    create_at?: SortOrder
    create_by?: SortOrder
    verify_by?: SortOrder
    creator?: UsersOrderByWithRelationInput
    verifitor?: UsersOrderByWithRelationInput
    notes?: NoteOrderByRelationAggregateInput
  }

  export type ClassifyWhereUniqueInput = Prisma.AtLeast<{
    c_id?: number
    AND?: ClassifyWhereInput | ClassifyWhereInput[]
    OR?: ClassifyWhereInput[]
    NOT?: ClassifyWhereInput | ClassifyWhereInput[]
    status?: BoolFilter<"Classify"> | boolean
    status_verify?: EnumStatusVerifyEnumFilter<"Classify"> | $Enums.StatusVerifyEnum
    select_result?: StringFilter<"Classify"> | string
    result?: JsonFilter<"Classify">
    create_at?: DateTimeFilter<"Classify"> | Date | string
    create_by?: IntFilter<"Classify"> | number
    verify_by?: IntFilter<"Classify"> | number
    creator?: XOR<UsersRelationFilter, UsersWhereInput>
    verifitor?: XOR<UsersRelationFilter, UsersWhereInput>
    notes?: NoteListRelationFilter
  }, "c_id">

  export type ClassifyOrderByWithAggregationInput = {
    c_id?: SortOrder
    status?: SortOrder
    status_verify?: SortOrder
    select_result?: SortOrder
    result?: SortOrder
    create_at?: SortOrder
    create_by?: SortOrder
    verify_by?: SortOrder
    _count?: ClassifyCountOrderByAggregateInput
    _avg?: ClassifyAvgOrderByAggregateInput
    _max?: ClassifyMaxOrderByAggregateInput
    _min?: ClassifyMinOrderByAggregateInput
    _sum?: ClassifySumOrderByAggregateInput
  }

  export type ClassifyScalarWhereWithAggregatesInput = {
    AND?: ClassifyScalarWhereWithAggregatesInput | ClassifyScalarWhereWithAggregatesInput[]
    OR?: ClassifyScalarWhereWithAggregatesInput[]
    NOT?: ClassifyScalarWhereWithAggregatesInput | ClassifyScalarWhereWithAggregatesInput[]
    c_id?: IntWithAggregatesFilter<"Classify"> | number
    status?: BoolWithAggregatesFilter<"Classify"> | boolean
    status_verify?: EnumStatusVerifyEnumWithAggregatesFilter<"Classify"> | $Enums.StatusVerifyEnum
    select_result?: StringWithAggregatesFilter<"Classify"> | string
    result?: JsonWithAggregatesFilter<"Classify">
    create_at?: DateTimeWithAggregatesFilter<"Classify"> | Date | string
    create_by?: IntWithAggregatesFilter<"Classify"> | number
    verify_by?: IntWithAggregatesFilter<"Classify"> | number
  }

  export type NoteWhereInput = {
    AND?: NoteWhereInput | NoteWhereInput[]
    OR?: NoteWhereInput[]
    NOT?: NoteWhereInput | NoteWhereInput[]
    n_id?: IntFilter<"Note"> | number
    c_id?: IntFilter<"Note"> | number
    change_result?: BoolFilter<"Note"> | boolean
    read_status?: BoolFilter<"Note"> | boolean
    description?: StringFilter<"Note"> | string
    create_at?: DateTimeFilter<"Note"> | Date | string
    create_by?: IntFilter<"Note"> | number
    classify?: XOR<ClassifyRelationFilter, ClassifyWhereInput>
  }

  export type NoteOrderByWithRelationInput = {
    n_id?: SortOrder
    c_id?: SortOrder
    change_result?: SortOrder
    read_status?: SortOrder
    description?: SortOrder
    create_at?: SortOrder
    create_by?: SortOrder
    classify?: ClassifyOrderByWithRelationInput
  }

  export type NoteWhereUniqueInput = Prisma.AtLeast<{
    n_id?: number
    AND?: NoteWhereInput | NoteWhereInput[]
    OR?: NoteWhereInput[]
    NOT?: NoteWhereInput | NoteWhereInput[]
    c_id?: IntFilter<"Note"> | number
    change_result?: BoolFilter<"Note"> | boolean
    read_status?: BoolFilter<"Note"> | boolean
    description?: StringFilter<"Note"> | string
    create_at?: DateTimeFilter<"Note"> | Date | string
    create_by?: IntFilter<"Note"> | number
    classify?: XOR<ClassifyRelationFilter, ClassifyWhereInput>
  }, "n_id">

  export type NoteOrderByWithAggregationInput = {
    n_id?: SortOrder
    c_id?: SortOrder
    change_result?: SortOrder
    read_status?: SortOrder
    description?: SortOrder
    create_at?: SortOrder
    create_by?: SortOrder
    _count?: NoteCountOrderByAggregateInput
    _avg?: NoteAvgOrderByAggregateInput
    _max?: NoteMaxOrderByAggregateInput
    _min?: NoteMinOrderByAggregateInput
    _sum?: NoteSumOrderByAggregateInput
  }

  export type NoteScalarWhereWithAggregatesInput = {
    AND?: NoteScalarWhereWithAggregatesInput | NoteScalarWhereWithAggregatesInput[]
    OR?: NoteScalarWhereWithAggregatesInput[]
    NOT?: NoteScalarWhereWithAggregatesInput | NoteScalarWhereWithAggregatesInput[]
    n_id?: IntWithAggregatesFilter<"Note"> | number
    c_id?: IntWithAggregatesFilter<"Note"> | number
    change_result?: BoolWithAggregatesFilter<"Note"> | boolean
    read_status?: BoolWithAggregatesFilter<"Note"> | boolean
    description?: StringWithAggregatesFilter<"Note"> | string
    create_at?: DateTimeWithAggregatesFilter<"Note"> | Date | string
    create_by?: IntWithAggregatesFilter<"Note"> | number
  }

  export type UsersCreateInput = {
    line_id: string
    firstname: string
    lastname: string
    email: string
    phone: string
    image: string
    role: $Enums.roleEnum
    create_at: Date | string
    update_at: Date | string
    wood_info?: Wood_infoCreateNestedManyWithoutUserInput
    updated_wood_info?: Wood_infoCreateNestedManyWithoutUpdaterInput
    created_manuals?: ManualCreateNestedManyWithoutCreatorInput
    updated_manuals?: ManualCreateNestedManyWithoutUpdaterInput
    created_classify?: ClassifyCreateNestedManyWithoutCreatorInput
    verify_classify?: ClassifyCreateNestedManyWithoutVerifitorInput
  }

  export type UsersUncheckedCreateInput = {
    u_id?: number
    line_id: string
    firstname: string
    lastname: string
    email: string
    phone: string
    image: string
    role: $Enums.roleEnum
    create_at: Date | string
    update_at: Date | string
    wood_info?: Wood_infoUncheckedCreateNestedManyWithoutUserInput
    updated_wood_info?: Wood_infoUncheckedCreateNestedManyWithoutUpdaterInput
    created_manuals?: ManualUncheckedCreateNestedManyWithoutCreatorInput
    updated_manuals?: ManualUncheckedCreateNestedManyWithoutUpdaterInput
    created_classify?: ClassifyUncheckedCreateNestedManyWithoutCreatorInput
    verify_classify?: ClassifyUncheckedCreateNestedManyWithoutVerifitorInput
  }

  export type UsersUpdateInput = {
    line_id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    role?: EnumroleEnumFieldUpdateOperationsInput | $Enums.roleEnum
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    wood_info?: Wood_infoUpdateManyWithoutUserNestedInput
    updated_wood_info?: Wood_infoUpdateManyWithoutUpdaterNestedInput
    created_manuals?: ManualUpdateManyWithoutCreatorNestedInput
    updated_manuals?: ManualUpdateManyWithoutUpdaterNestedInput
    created_classify?: ClassifyUpdateManyWithoutCreatorNestedInput
    verify_classify?: ClassifyUpdateManyWithoutVerifitorNestedInput
  }

  export type UsersUncheckedUpdateInput = {
    u_id?: IntFieldUpdateOperationsInput | number
    line_id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    role?: EnumroleEnumFieldUpdateOperationsInput | $Enums.roleEnum
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    wood_info?: Wood_infoUncheckedUpdateManyWithoutUserNestedInput
    updated_wood_info?: Wood_infoUncheckedUpdateManyWithoutUpdaterNestedInput
    created_manuals?: ManualUncheckedUpdateManyWithoutCreatorNestedInput
    updated_manuals?: ManualUncheckedUpdateManyWithoutUpdaterNestedInput
    created_classify?: ClassifyUncheckedUpdateManyWithoutCreatorNestedInput
    verify_classify?: ClassifyUncheckedUpdateManyWithoutVerifitorNestedInput
  }

  export type UsersCreateManyInput = {
    u_id?: number
    line_id: string
    firstname: string
    lastname: string
    email: string
    phone: string
    image: string
    role: $Enums.roleEnum
    create_at: Date | string
    update_at: Date | string
  }

  export type UsersUpdateManyMutationInput = {
    line_id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    role?: EnumroleEnumFieldUpdateOperationsInput | $Enums.roleEnum
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersUncheckedUpdateManyInput = {
    u_id?: IntFieldUpdateOperationsInput | number
    line_id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    role?: EnumroleEnumFieldUpdateOperationsInput | $Enums.roleEnum
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Wood_infoCreateInput = {
    common_name?: Wood_infoCreatecommon_nameInput | string[]
    eng_name?: Wood_infoCreateeng_nameInput | string[]
    botanical_name: string
    pedigree: string
    place_of_origin: string
    wood_characteristics: string
    anatomical_characteristics: string
    other: string
    status: boolean
    create_at: Date | string
    update_at: Date | string
    wood_image?: Wood_ImageCreateNestedManyWithoutWood_infoInput
    user: UsersCreateNestedOneWithoutWood_infoInput
    updater: UsersCreateNestedOneWithoutUpdated_wood_infoInput
  }

  export type Wood_infoUncheckedCreateInput = {
    w_id?: number
    common_name?: Wood_infoCreatecommon_nameInput | string[]
    eng_name?: Wood_infoCreateeng_nameInput | string[]
    botanical_name: string
    pedigree: string
    place_of_origin: string
    wood_characteristics: string
    anatomical_characteristics: string
    other: string
    status: boolean
    create_at: Date | string
    update_at: Date | string
    create_by: number
    update_by: number
    wood_image?: Wood_ImageUncheckedCreateNestedManyWithoutWood_infoInput
  }

  export type Wood_infoUpdateInput = {
    common_name?: Wood_infoUpdatecommon_nameInput | string[]
    eng_name?: Wood_infoUpdateeng_nameInput | string[]
    botanical_name?: StringFieldUpdateOperationsInput | string
    pedigree?: StringFieldUpdateOperationsInput | string
    place_of_origin?: StringFieldUpdateOperationsInput | string
    wood_characteristics?: StringFieldUpdateOperationsInput | string
    anatomical_characteristics?: StringFieldUpdateOperationsInput | string
    other?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    wood_image?: Wood_ImageUpdateManyWithoutWood_infoNestedInput
    user?: UsersUpdateOneRequiredWithoutWood_infoNestedInput
    updater?: UsersUpdateOneRequiredWithoutUpdated_wood_infoNestedInput
  }

  export type Wood_infoUncheckedUpdateInput = {
    w_id?: IntFieldUpdateOperationsInput | number
    common_name?: Wood_infoUpdatecommon_nameInput | string[]
    eng_name?: Wood_infoUpdateeng_nameInput | string[]
    botanical_name?: StringFieldUpdateOperationsInput | string
    pedigree?: StringFieldUpdateOperationsInput | string
    place_of_origin?: StringFieldUpdateOperationsInput | string
    wood_characteristics?: StringFieldUpdateOperationsInput | string
    anatomical_characteristics?: StringFieldUpdateOperationsInput | string
    other?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    create_by?: IntFieldUpdateOperationsInput | number
    update_by?: IntFieldUpdateOperationsInput | number
    wood_image?: Wood_ImageUncheckedUpdateManyWithoutWood_infoNestedInput
  }

  export type Wood_infoCreateManyInput = {
    w_id?: number
    common_name?: Wood_infoCreatecommon_nameInput | string[]
    eng_name?: Wood_infoCreateeng_nameInput | string[]
    botanical_name: string
    pedigree: string
    place_of_origin: string
    wood_characteristics: string
    anatomical_characteristics: string
    other: string
    status: boolean
    create_at: Date | string
    update_at: Date | string
    create_by: number
    update_by: number
  }

  export type Wood_infoUpdateManyMutationInput = {
    common_name?: Wood_infoUpdatecommon_nameInput | string[]
    eng_name?: Wood_infoUpdateeng_nameInput | string[]
    botanical_name?: StringFieldUpdateOperationsInput | string
    pedigree?: StringFieldUpdateOperationsInput | string
    place_of_origin?: StringFieldUpdateOperationsInput | string
    wood_characteristics?: StringFieldUpdateOperationsInput | string
    anatomical_characteristics?: StringFieldUpdateOperationsInput | string
    other?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Wood_infoUncheckedUpdateManyInput = {
    w_id?: IntFieldUpdateOperationsInput | number
    common_name?: Wood_infoUpdatecommon_nameInput | string[]
    eng_name?: Wood_infoUpdateeng_nameInput | string[]
    botanical_name?: StringFieldUpdateOperationsInput | string
    pedigree?: StringFieldUpdateOperationsInput | string
    place_of_origin?: StringFieldUpdateOperationsInput | string
    wood_characteristics?: StringFieldUpdateOperationsInput | string
    anatomical_characteristics?: StringFieldUpdateOperationsInput | string
    other?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    create_by?: IntFieldUpdateOperationsInput | number
    update_by?: IntFieldUpdateOperationsInput | number
  }

  export type Wood_ImageCreateInput = {
    path: string
    wood_info: Wood_infoCreateNestedOneWithoutWood_imageInput
  }

  export type Wood_ImageUncheckedCreateInput = {
    wi_id?: number
    w_id: number
    path: string
  }

  export type Wood_ImageUpdateInput = {
    path?: StringFieldUpdateOperationsInput | string
    wood_info?: Wood_infoUpdateOneRequiredWithoutWood_imageNestedInput
  }

  export type Wood_ImageUncheckedUpdateInput = {
    wi_id?: IntFieldUpdateOperationsInput | number
    w_id?: IntFieldUpdateOperationsInput | number
    path?: StringFieldUpdateOperationsInput | string
  }

  export type Wood_ImageCreateManyInput = {
    wi_id?: number
    w_id: number
    path: string
  }

  export type Wood_ImageUpdateManyMutationInput = {
    path?: StringFieldUpdateOperationsInput | string
  }

  export type Wood_ImageUncheckedUpdateManyInput = {
    wi_id?: IntFieldUpdateOperationsInput | number
    w_id?: IntFieldUpdateOperationsInput | number
    path?: StringFieldUpdateOperationsInput | string
  }

  export type ManualCreateInput = {
    topic: string
    description: string
    status: boolean
    image: string
    create_at: Date | string
    update_at: Date | string
    creator: UsersCreateNestedOneWithoutCreated_manualsInput
    updater: UsersCreateNestedOneWithoutUpdated_manualsInput
  }

  export type ManualUncheckedCreateInput = {
    m_id?: number
    topic: string
    description: string
    status: boolean
    image: string
    create_at: Date | string
    update_at: Date | string
    create_by: number
    update_by: number
  }

  export type ManualUpdateInput = {
    topic?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    image?: StringFieldUpdateOperationsInput | string
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UsersUpdateOneRequiredWithoutCreated_manualsNestedInput
    updater?: UsersUpdateOneRequiredWithoutUpdated_manualsNestedInput
  }

  export type ManualUncheckedUpdateInput = {
    m_id?: IntFieldUpdateOperationsInput | number
    topic?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    image?: StringFieldUpdateOperationsInput | string
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    create_by?: IntFieldUpdateOperationsInput | number
    update_by?: IntFieldUpdateOperationsInput | number
  }

  export type ManualCreateManyInput = {
    m_id?: number
    topic: string
    description: string
    status: boolean
    image: string
    create_at: Date | string
    update_at: Date | string
    create_by: number
    update_by: number
  }

  export type ManualUpdateManyMutationInput = {
    topic?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    image?: StringFieldUpdateOperationsInput | string
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ManualUncheckedUpdateManyInput = {
    m_id?: IntFieldUpdateOperationsInput | number
    topic?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    image?: StringFieldUpdateOperationsInput | string
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    create_by?: IntFieldUpdateOperationsInput | number
    update_by?: IntFieldUpdateOperationsInput | number
  }

  export type ClassifyCreateInput = {
    status: boolean
    status_verify: $Enums.StatusVerifyEnum
    select_result: string
    result: JsonNullValueInput | InputJsonValue
    create_at: Date | string
    creator: UsersCreateNestedOneWithoutCreated_classifyInput
    verifitor: UsersCreateNestedOneWithoutVerify_classifyInput
    notes?: NoteCreateNestedManyWithoutClassifyInput
  }

  export type ClassifyUncheckedCreateInput = {
    c_id?: number
    status: boolean
    status_verify: $Enums.StatusVerifyEnum
    select_result: string
    result: JsonNullValueInput | InputJsonValue
    create_at: Date | string
    create_by: number
    verify_by: number
    notes?: NoteUncheckedCreateNestedManyWithoutClassifyInput
  }

  export type ClassifyUpdateInput = {
    status?: BoolFieldUpdateOperationsInput | boolean
    status_verify?: EnumStatusVerifyEnumFieldUpdateOperationsInput | $Enums.StatusVerifyEnum
    select_result?: StringFieldUpdateOperationsInput | string
    result?: JsonNullValueInput | InputJsonValue
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UsersUpdateOneRequiredWithoutCreated_classifyNestedInput
    verifitor?: UsersUpdateOneRequiredWithoutVerify_classifyNestedInput
    notes?: NoteUpdateManyWithoutClassifyNestedInput
  }

  export type ClassifyUncheckedUpdateInput = {
    c_id?: IntFieldUpdateOperationsInput | number
    status?: BoolFieldUpdateOperationsInput | boolean
    status_verify?: EnumStatusVerifyEnumFieldUpdateOperationsInput | $Enums.StatusVerifyEnum
    select_result?: StringFieldUpdateOperationsInput | string
    result?: JsonNullValueInput | InputJsonValue
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    create_by?: IntFieldUpdateOperationsInput | number
    verify_by?: IntFieldUpdateOperationsInput | number
    notes?: NoteUncheckedUpdateManyWithoutClassifyNestedInput
  }

  export type ClassifyCreateManyInput = {
    c_id?: number
    status: boolean
    status_verify: $Enums.StatusVerifyEnum
    select_result: string
    result: JsonNullValueInput | InputJsonValue
    create_at: Date | string
    create_by: number
    verify_by: number
  }

  export type ClassifyUpdateManyMutationInput = {
    status?: BoolFieldUpdateOperationsInput | boolean
    status_verify?: EnumStatusVerifyEnumFieldUpdateOperationsInput | $Enums.StatusVerifyEnum
    select_result?: StringFieldUpdateOperationsInput | string
    result?: JsonNullValueInput | InputJsonValue
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClassifyUncheckedUpdateManyInput = {
    c_id?: IntFieldUpdateOperationsInput | number
    status?: BoolFieldUpdateOperationsInput | boolean
    status_verify?: EnumStatusVerifyEnumFieldUpdateOperationsInput | $Enums.StatusVerifyEnum
    select_result?: StringFieldUpdateOperationsInput | string
    result?: JsonNullValueInput | InputJsonValue
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    create_by?: IntFieldUpdateOperationsInput | number
    verify_by?: IntFieldUpdateOperationsInput | number
  }

  export type NoteCreateInput = {
    change_result: boolean
    read_status: boolean
    description: string
    create_at: Date | string
    create_by: number
    classify: ClassifyCreateNestedOneWithoutNotesInput
  }

  export type NoteUncheckedCreateInput = {
    n_id?: number
    c_id: number
    change_result: boolean
    read_status: boolean
    description: string
    create_at: Date | string
    create_by: number
  }

  export type NoteUpdateInput = {
    change_result?: BoolFieldUpdateOperationsInput | boolean
    read_status?: BoolFieldUpdateOperationsInput | boolean
    description?: StringFieldUpdateOperationsInput | string
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    create_by?: IntFieldUpdateOperationsInput | number
    classify?: ClassifyUpdateOneRequiredWithoutNotesNestedInput
  }

  export type NoteUncheckedUpdateInput = {
    n_id?: IntFieldUpdateOperationsInput | number
    c_id?: IntFieldUpdateOperationsInput | number
    change_result?: BoolFieldUpdateOperationsInput | boolean
    read_status?: BoolFieldUpdateOperationsInput | boolean
    description?: StringFieldUpdateOperationsInput | string
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    create_by?: IntFieldUpdateOperationsInput | number
  }

  export type NoteCreateManyInput = {
    n_id?: number
    c_id: number
    change_result: boolean
    read_status: boolean
    description: string
    create_at: Date | string
    create_by: number
  }

  export type NoteUpdateManyMutationInput = {
    change_result?: BoolFieldUpdateOperationsInput | boolean
    read_status?: BoolFieldUpdateOperationsInput | boolean
    description?: StringFieldUpdateOperationsInput | string
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    create_by?: IntFieldUpdateOperationsInput | number
  }

  export type NoteUncheckedUpdateManyInput = {
    n_id?: IntFieldUpdateOperationsInput | number
    c_id?: IntFieldUpdateOperationsInput | number
    change_result?: BoolFieldUpdateOperationsInput | boolean
    read_status?: BoolFieldUpdateOperationsInput | boolean
    description?: StringFieldUpdateOperationsInput | string
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    create_by?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumroleEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.roleEnum | EnumroleEnumFieldRefInput<$PrismaModel>
    in?: $Enums.roleEnum[] | ListEnumroleEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.roleEnum[] | ListEnumroleEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumroleEnumFilter<$PrismaModel> | $Enums.roleEnum
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type Wood_infoListRelationFilter = {
    every?: Wood_infoWhereInput
    some?: Wood_infoWhereInput
    none?: Wood_infoWhereInput
  }

  export type ManualListRelationFilter = {
    every?: ManualWhereInput
    some?: ManualWhereInput
    none?: ManualWhereInput
  }

  export type ClassifyListRelationFilter = {
    every?: ClassifyWhereInput
    some?: ClassifyWhereInput
    none?: ClassifyWhereInput
  }

  export type Wood_infoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ManualOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClassifyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsersCountOrderByAggregateInput = {
    u_id?: SortOrder
    line_id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    image?: SortOrder
    role?: SortOrder
    create_at?: SortOrder
    update_at?: SortOrder
  }

  export type UsersAvgOrderByAggregateInput = {
    u_id?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    u_id?: SortOrder
    line_id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    image?: SortOrder
    role?: SortOrder
    create_at?: SortOrder
    update_at?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    u_id?: SortOrder
    line_id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    image?: SortOrder
    role?: SortOrder
    create_at?: SortOrder
    update_at?: SortOrder
  }

  export type UsersSumOrderByAggregateInput = {
    u_id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumroleEnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.roleEnum | EnumroleEnumFieldRefInput<$PrismaModel>
    in?: $Enums.roleEnum[] | ListEnumroleEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.roleEnum[] | ListEnumroleEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumroleEnumWithAggregatesFilter<$PrismaModel> | $Enums.roleEnum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumroleEnumFilter<$PrismaModel>
    _max?: NestedEnumroleEnumFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type Wood_ImageListRelationFilter = {
    every?: Wood_ImageWhereInput
    some?: Wood_ImageWhereInput
    none?: Wood_ImageWhereInput
  }

  export type UsersRelationFilter = {
    is?: UsersWhereInput
    isNot?: UsersWhereInput
  }

  export type Wood_ImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Wood_infoCountOrderByAggregateInput = {
    w_id?: SortOrder
    common_name?: SortOrder
    eng_name?: SortOrder
    botanical_name?: SortOrder
    pedigree?: SortOrder
    place_of_origin?: SortOrder
    wood_characteristics?: SortOrder
    anatomical_characteristics?: SortOrder
    other?: SortOrder
    status?: SortOrder
    create_at?: SortOrder
    update_at?: SortOrder
    create_by?: SortOrder
    update_by?: SortOrder
  }

  export type Wood_infoAvgOrderByAggregateInput = {
    w_id?: SortOrder
    create_by?: SortOrder
    update_by?: SortOrder
  }

  export type Wood_infoMaxOrderByAggregateInput = {
    w_id?: SortOrder
    botanical_name?: SortOrder
    pedigree?: SortOrder
    place_of_origin?: SortOrder
    wood_characteristics?: SortOrder
    anatomical_characteristics?: SortOrder
    other?: SortOrder
    status?: SortOrder
    create_at?: SortOrder
    update_at?: SortOrder
    create_by?: SortOrder
    update_by?: SortOrder
  }

  export type Wood_infoMinOrderByAggregateInput = {
    w_id?: SortOrder
    botanical_name?: SortOrder
    pedigree?: SortOrder
    place_of_origin?: SortOrder
    wood_characteristics?: SortOrder
    anatomical_characteristics?: SortOrder
    other?: SortOrder
    status?: SortOrder
    create_at?: SortOrder
    update_at?: SortOrder
    create_by?: SortOrder
    update_by?: SortOrder
  }

  export type Wood_infoSumOrderByAggregateInput = {
    w_id?: SortOrder
    create_by?: SortOrder
    update_by?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type Wood_infoRelationFilter = {
    is?: Wood_infoWhereInput
    isNot?: Wood_infoWhereInput
  }

  export type Wood_ImageCountOrderByAggregateInput = {
    wi_id?: SortOrder
    w_id?: SortOrder
    path?: SortOrder
  }

  export type Wood_ImageAvgOrderByAggregateInput = {
    wi_id?: SortOrder
    w_id?: SortOrder
  }

  export type Wood_ImageMaxOrderByAggregateInput = {
    wi_id?: SortOrder
    w_id?: SortOrder
    path?: SortOrder
  }

  export type Wood_ImageMinOrderByAggregateInput = {
    wi_id?: SortOrder
    w_id?: SortOrder
    path?: SortOrder
  }

  export type Wood_ImageSumOrderByAggregateInput = {
    wi_id?: SortOrder
    w_id?: SortOrder
  }

  export type ManualCountOrderByAggregateInput = {
    m_id?: SortOrder
    topic?: SortOrder
    description?: SortOrder
    status?: SortOrder
    image?: SortOrder
    create_at?: SortOrder
    update_at?: SortOrder
    create_by?: SortOrder
    update_by?: SortOrder
  }

  export type ManualAvgOrderByAggregateInput = {
    m_id?: SortOrder
    create_by?: SortOrder
    update_by?: SortOrder
  }

  export type ManualMaxOrderByAggregateInput = {
    m_id?: SortOrder
    topic?: SortOrder
    description?: SortOrder
    status?: SortOrder
    image?: SortOrder
    create_at?: SortOrder
    update_at?: SortOrder
    create_by?: SortOrder
    update_by?: SortOrder
  }

  export type ManualMinOrderByAggregateInput = {
    m_id?: SortOrder
    topic?: SortOrder
    description?: SortOrder
    status?: SortOrder
    image?: SortOrder
    create_at?: SortOrder
    update_at?: SortOrder
    create_by?: SortOrder
    update_by?: SortOrder
  }

  export type ManualSumOrderByAggregateInput = {
    m_id?: SortOrder
    create_by?: SortOrder
    update_by?: SortOrder
  }

  export type EnumStatusVerifyEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusVerifyEnum | EnumStatusVerifyEnumFieldRefInput<$PrismaModel>
    in?: $Enums.StatusVerifyEnum[] | ListEnumStatusVerifyEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusVerifyEnum[] | ListEnumStatusVerifyEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusVerifyEnumFilter<$PrismaModel> | $Enums.StatusVerifyEnum
  }
  export type JsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NoteListRelationFilter = {
    every?: NoteWhereInput
    some?: NoteWhereInput
    none?: NoteWhereInput
  }

  export type NoteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClassifyCountOrderByAggregateInput = {
    c_id?: SortOrder
    status?: SortOrder
    status_verify?: SortOrder
    select_result?: SortOrder
    result?: SortOrder
    create_at?: SortOrder
    create_by?: SortOrder
    verify_by?: SortOrder
  }

  export type ClassifyAvgOrderByAggregateInput = {
    c_id?: SortOrder
    create_by?: SortOrder
    verify_by?: SortOrder
  }

  export type ClassifyMaxOrderByAggregateInput = {
    c_id?: SortOrder
    status?: SortOrder
    status_verify?: SortOrder
    select_result?: SortOrder
    create_at?: SortOrder
    create_by?: SortOrder
    verify_by?: SortOrder
  }

  export type ClassifyMinOrderByAggregateInput = {
    c_id?: SortOrder
    status?: SortOrder
    status_verify?: SortOrder
    select_result?: SortOrder
    create_at?: SortOrder
    create_by?: SortOrder
    verify_by?: SortOrder
  }

  export type ClassifySumOrderByAggregateInput = {
    c_id?: SortOrder
    create_by?: SortOrder
    verify_by?: SortOrder
  }

  export type EnumStatusVerifyEnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusVerifyEnum | EnumStatusVerifyEnumFieldRefInput<$PrismaModel>
    in?: $Enums.StatusVerifyEnum[] | ListEnumStatusVerifyEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusVerifyEnum[] | ListEnumStatusVerifyEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusVerifyEnumWithAggregatesFilter<$PrismaModel> | $Enums.StatusVerifyEnum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusVerifyEnumFilter<$PrismaModel>
    _max?: NestedEnumStatusVerifyEnumFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type ClassifyRelationFilter = {
    is?: ClassifyWhereInput
    isNot?: ClassifyWhereInput
  }

  export type NoteCountOrderByAggregateInput = {
    n_id?: SortOrder
    c_id?: SortOrder
    change_result?: SortOrder
    read_status?: SortOrder
    description?: SortOrder
    create_at?: SortOrder
    create_by?: SortOrder
  }

  export type NoteAvgOrderByAggregateInput = {
    n_id?: SortOrder
    c_id?: SortOrder
    create_by?: SortOrder
  }

  export type NoteMaxOrderByAggregateInput = {
    n_id?: SortOrder
    c_id?: SortOrder
    change_result?: SortOrder
    read_status?: SortOrder
    description?: SortOrder
    create_at?: SortOrder
    create_by?: SortOrder
  }

  export type NoteMinOrderByAggregateInput = {
    n_id?: SortOrder
    c_id?: SortOrder
    change_result?: SortOrder
    read_status?: SortOrder
    description?: SortOrder
    create_at?: SortOrder
    create_by?: SortOrder
  }

  export type NoteSumOrderByAggregateInput = {
    n_id?: SortOrder
    c_id?: SortOrder
    create_by?: SortOrder
  }

  export type Wood_infoCreateNestedManyWithoutUserInput = {
    create?: XOR<Wood_infoCreateWithoutUserInput, Wood_infoUncheckedCreateWithoutUserInput> | Wood_infoCreateWithoutUserInput[] | Wood_infoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Wood_infoCreateOrConnectWithoutUserInput | Wood_infoCreateOrConnectWithoutUserInput[]
    createMany?: Wood_infoCreateManyUserInputEnvelope
    connect?: Wood_infoWhereUniqueInput | Wood_infoWhereUniqueInput[]
  }

  export type Wood_infoCreateNestedManyWithoutUpdaterInput = {
    create?: XOR<Wood_infoCreateWithoutUpdaterInput, Wood_infoUncheckedCreateWithoutUpdaterInput> | Wood_infoCreateWithoutUpdaterInput[] | Wood_infoUncheckedCreateWithoutUpdaterInput[]
    connectOrCreate?: Wood_infoCreateOrConnectWithoutUpdaterInput | Wood_infoCreateOrConnectWithoutUpdaterInput[]
    createMany?: Wood_infoCreateManyUpdaterInputEnvelope
    connect?: Wood_infoWhereUniqueInput | Wood_infoWhereUniqueInput[]
  }

  export type ManualCreateNestedManyWithoutCreatorInput = {
    create?: XOR<ManualCreateWithoutCreatorInput, ManualUncheckedCreateWithoutCreatorInput> | ManualCreateWithoutCreatorInput[] | ManualUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: ManualCreateOrConnectWithoutCreatorInput | ManualCreateOrConnectWithoutCreatorInput[]
    createMany?: ManualCreateManyCreatorInputEnvelope
    connect?: ManualWhereUniqueInput | ManualWhereUniqueInput[]
  }

  export type ManualCreateNestedManyWithoutUpdaterInput = {
    create?: XOR<ManualCreateWithoutUpdaterInput, ManualUncheckedCreateWithoutUpdaterInput> | ManualCreateWithoutUpdaterInput[] | ManualUncheckedCreateWithoutUpdaterInput[]
    connectOrCreate?: ManualCreateOrConnectWithoutUpdaterInput | ManualCreateOrConnectWithoutUpdaterInput[]
    createMany?: ManualCreateManyUpdaterInputEnvelope
    connect?: ManualWhereUniqueInput | ManualWhereUniqueInput[]
  }

  export type ClassifyCreateNestedManyWithoutCreatorInput = {
    create?: XOR<ClassifyCreateWithoutCreatorInput, ClassifyUncheckedCreateWithoutCreatorInput> | ClassifyCreateWithoutCreatorInput[] | ClassifyUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: ClassifyCreateOrConnectWithoutCreatorInput | ClassifyCreateOrConnectWithoutCreatorInput[]
    createMany?: ClassifyCreateManyCreatorInputEnvelope
    connect?: ClassifyWhereUniqueInput | ClassifyWhereUniqueInput[]
  }

  export type ClassifyCreateNestedManyWithoutVerifitorInput = {
    create?: XOR<ClassifyCreateWithoutVerifitorInput, ClassifyUncheckedCreateWithoutVerifitorInput> | ClassifyCreateWithoutVerifitorInput[] | ClassifyUncheckedCreateWithoutVerifitorInput[]
    connectOrCreate?: ClassifyCreateOrConnectWithoutVerifitorInput | ClassifyCreateOrConnectWithoutVerifitorInput[]
    createMany?: ClassifyCreateManyVerifitorInputEnvelope
    connect?: ClassifyWhereUniqueInput | ClassifyWhereUniqueInput[]
  }

  export type Wood_infoUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Wood_infoCreateWithoutUserInput, Wood_infoUncheckedCreateWithoutUserInput> | Wood_infoCreateWithoutUserInput[] | Wood_infoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Wood_infoCreateOrConnectWithoutUserInput | Wood_infoCreateOrConnectWithoutUserInput[]
    createMany?: Wood_infoCreateManyUserInputEnvelope
    connect?: Wood_infoWhereUniqueInput | Wood_infoWhereUniqueInput[]
  }

  export type Wood_infoUncheckedCreateNestedManyWithoutUpdaterInput = {
    create?: XOR<Wood_infoCreateWithoutUpdaterInput, Wood_infoUncheckedCreateWithoutUpdaterInput> | Wood_infoCreateWithoutUpdaterInput[] | Wood_infoUncheckedCreateWithoutUpdaterInput[]
    connectOrCreate?: Wood_infoCreateOrConnectWithoutUpdaterInput | Wood_infoCreateOrConnectWithoutUpdaterInput[]
    createMany?: Wood_infoCreateManyUpdaterInputEnvelope
    connect?: Wood_infoWhereUniqueInput | Wood_infoWhereUniqueInput[]
  }

  export type ManualUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<ManualCreateWithoutCreatorInput, ManualUncheckedCreateWithoutCreatorInput> | ManualCreateWithoutCreatorInput[] | ManualUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: ManualCreateOrConnectWithoutCreatorInput | ManualCreateOrConnectWithoutCreatorInput[]
    createMany?: ManualCreateManyCreatorInputEnvelope
    connect?: ManualWhereUniqueInput | ManualWhereUniqueInput[]
  }

  export type ManualUncheckedCreateNestedManyWithoutUpdaterInput = {
    create?: XOR<ManualCreateWithoutUpdaterInput, ManualUncheckedCreateWithoutUpdaterInput> | ManualCreateWithoutUpdaterInput[] | ManualUncheckedCreateWithoutUpdaterInput[]
    connectOrCreate?: ManualCreateOrConnectWithoutUpdaterInput | ManualCreateOrConnectWithoutUpdaterInput[]
    createMany?: ManualCreateManyUpdaterInputEnvelope
    connect?: ManualWhereUniqueInput | ManualWhereUniqueInput[]
  }

  export type ClassifyUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<ClassifyCreateWithoutCreatorInput, ClassifyUncheckedCreateWithoutCreatorInput> | ClassifyCreateWithoutCreatorInput[] | ClassifyUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: ClassifyCreateOrConnectWithoutCreatorInput | ClassifyCreateOrConnectWithoutCreatorInput[]
    createMany?: ClassifyCreateManyCreatorInputEnvelope
    connect?: ClassifyWhereUniqueInput | ClassifyWhereUniqueInput[]
  }

  export type ClassifyUncheckedCreateNestedManyWithoutVerifitorInput = {
    create?: XOR<ClassifyCreateWithoutVerifitorInput, ClassifyUncheckedCreateWithoutVerifitorInput> | ClassifyCreateWithoutVerifitorInput[] | ClassifyUncheckedCreateWithoutVerifitorInput[]
    connectOrCreate?: ClassifyCreateOrConnectWithoutVerifitorInput | ClassifyCreateOrConnectWithoutVerifitorInput[]
    createMany?: ClassifyCreateManyVerifitorInputEnvelope
    connect?: ClassifyWhereUniqueInput | ClassifyWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumroleEnumFieldUpdateOperationsInput = {
    set?: $Enums.roleEnum
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type Wood_infoUpdateManyWithoutUserNestedInput = {
    create?: XOR<Wood_infoCreateWithoutUserInput, Wood_infoUncheckedCreateWithoutUserInput> | Wood_infoCreateWithoutUserInput[] | Wood_infoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Wood_infoCreateOrConnectWithoutUserInput | Wood_infoCreateOrConnectWithoutUserInput[]
    upsert?: Wood_infoUpsertWithWhereUniqueWithoutUserInput | Wood_infoUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: Wood_infoCreateManyUserInputEnvelope
    set?: Wood_infoWhereUniqueInput | Wood_infoWhereUniqueInput[]
    disconnect?: Wood_infoWhereUniqueInput | Wood_infoWhereUniqueInput[]
    delete?: Wood_infoWhereUniqueInput | Wood_infoWhereUniqueInput[]
    connect?: Wood_infoWhereUniqueInput | Wood_infoWhereUniqueInput[]
    update?: Wood_infoUpdateWithWhereUniqueWithoutUserInput | Wood_infoUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: Wood_infoUpdateManyWithWhereWithoutUserInput | Wood_infoUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: Wood_infoScalarWhereInput | Wood_infoScalarWhereInput[]
  }

  export type Wood_infoUpdateManyWithoutUpdaterNestedInput = {
    create?: XOR<Wood_infoCreateWithoutUpdaterInput, Wood_infoUncheckedCreateWithoutUpdaterInput> | Wood_infoCreateWithoutUpdaterInput[] | Wood_infoUncheckedCreateWithoutUpdaterInput[]
    connectOrCreate?: Wood_infoCreateOrConnectWithoutUpdaterInput | Wood_infoCreateOrConnectWithoutUpdaterInput[]
    upsert?: Wood_infoUpsertWithWhereUniqueWithoutUpdaterInput | Wood_infoUpsertWithWhereUniqueWithoutUpdaterInput[]
    createMany?: Wood_infoCreateManyUpdaterInputEnvelope
    set?: Wood_infoWhereUniqueInput | Wood_infoWhereUniqueInput[]
    disconnect?: Wood_infoWhereUniqueInput | Wood_infoWhereUniqueInput[]
    delete?: Wood_infoWhereUniqueInput | Wood_infoWhereUniqueInput[]
    connect?: Wood_infoWhereUniqueInput | Wood_infoWhereUniqueInput[]
    update?: Wood_infoUpdateWithWhereUniqueWithoutUpdaterInput | Wood_infoUpdateWithWhereUniqueWithoutUpdaterInput[]
    updateMany?: Wood_infoUpdateManyWithWhereWithoutUpdaterInput | Wood_infoUpdateManyWithWhereWithoutUpdaterInput[]
    deleteMany?: Wood_infoScalarWhereInput | Wood_infoScalarWhereInput[]
  }

  export type ManualUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<ManualCreateWithoutCreatorInput, ManualUncheckedCreateWithoutCreatorInput> | ManualCreateWithoutCreatorInput[] | ManualUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: ManualCreateOrConnectWithoutCreatorInput | ManualCreateOrConnectWithoutCreatorInput[]
    upsert?: ManualUpsertWithWhereUniqueWithoutCreatorInput | ManualUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: ManualCreateManyCreatorInputEnvelope
    set?: ManualWhereUniqueInput | ManualWhereUniqueInput[]
    disconnect?: ManualWhereUniqueInput | ManualWhereUniqueInput[]
    delete?: ManualWhereUniqueInput | ManualWhereUniqueInput[]
    connect?: ManualWhereUniqueInput | ManualWhereUniqueInput[]
    update?: ManualUpdateWithWhereUniqueWithoutCreatorInput | ManualUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: ManualUpdateManyWithWhereWithoutCreatorInput | ManualUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: ManualScalarWhereInput | ManualScalarWhereInput[]
  }

  export type ManualUpdateManyWithoutUpdaterNestedInput = {
    create?: XOR<ManualCreateWithoutUpdaterInput, ManualUncheckedCreateWithoutUpdaterInput> | ManualCreateWithoutUpdaterInput[] | ManualUncheckedCreateWithoutUpdaterInput[]
    connectOrCreate?: ManualCreateOrConnectWithoutUpdaterInput | ManualCreateOrConnectWithoutUpdaterInput[]
    upsert?: ManualUpsertWithWhereUniqueWithoutUpdaterInput | ManualUpsertWithWhereUniqueWithoutUpdaterInput[]
    createMany?: ManualCreateManyUpdaterInputEnvelope
    set?: ManualWhereUniqueInput | ManualWhereUniqueInput[]
    disconnect?: ManualWhereUniqueInput | ManualWhereUniqueInput[]
    delete?: ManualWhereUniqueInput | ManualWhereUniqueInput[]
    connect?: ManualWhereUniqueInput | ManualWhereUniqueInput[]
    update?: ManualUpdateWithWhereUniqueWithoutUpdaterInput | ManualUpdateWithWhereUniqueWithoutUpdaterInput[]
    updateMany?: ManualUpdateManyWithWhereWithoutUpdaterInput | ManualUpdateManyWithWhereWithoutUpdaterInput[]
    deleteMany?: ManualScalarWhereInput | ManualScalarWhereInput[]
  }

  export type ClassifyUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<ClassifyCreateWithoutCreatorInput, ClassifyUncheckedCreateWithoutCreatorInput> | ClassifyCreateWithoutCreatorInput[] | ClassifyUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: ClassifyCreateOrConnectWithoutCreatorInput | ClassifyCreateOrConnectWithoutCreatorInput[]
    upsert?: ClassifyUpsertWithWhereUniqueWithoutCreatorInput | ClassifyUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: ClassifyCreateManyCreatorInputEnvelope
    set?: ClassifyWhereUniqueInput | ClassifyWhereUniqueInput[]
    disconnect?: ClassifyWhereUniqueInput | ClassifyWhereUniqueInput[]
    delete?: ClassifyWhereUniqueInput | ClassifyWhereUniqueInput[]
    connect?: ClassifyWhereUniqueInput | ClassifyWhereUniqueInput[]
    update?: ClassifyUpdateWithWhereUniqueWithoutCreatorInput | ClassifyUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: ClassifyUpdateManyWithWhereWithoutCreatorInput | ClassifyUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: ClassifyScalarWhereInput | ClassifyScalarWhereInput[]
  }

  export type ClassifyUpdateManyWithoutVerifitorNestedInput = {
    create?: XOR<ClassifyCreateWithoutVerifitorInput, ClassifyUncheckedCreateWithoutVerifitorInput> | ClassifyCreateWithoutVerifitorInput[] | ClassifyUncheckedCreateWithoutVerifitorInput[]
    connectOrCreate?: ClassifyCreateOrConnectWithoutVerifitorInput | ClassifyCreateOrConnectWithoutVerifitorInput[]
    upsert?: ClassifyUpsertWithWhereUniqueWithoutVerifitorInput | ClassifyUpsertWithWhereUniqueWithoutVerifitorInput[]
    createMany?: ClassifyCreateManyVerifitorInputEnvelope
    set?: ClassifyWhereUniqueInput | ClassifyWhereUniqueInput[]
    disconnect?: ClassifyWhereUniqueInput | ClassifyWhereUniqueInput[]
    delete?: ClassifyWhereUniqueInput | ClassifyWhereUniqueInput[]
    connect?: ClassifyWhereUniqueInput | ClassifyWhereUniqueInput[]
    update?: ClassifyUpdateWithWhereUniqueWithoutVerifitorInput | ClassifyUpdateWithWhereUniqueWithoutVerifitorInput[]
    updateMany?: ClassifyUpdateManyWithWhereWithoutVerifitorInput | ClassifyUpdateManyWithWhereWithoutVerifitorInput[]
    deleteMany?: ClassifyScalarWhereInput | ClassifyScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type Wood_infoUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Wood_infoCreateWithoutUserInput, Wood_infoUncheckedCreateWithoutUserInput> | Wood_infoCreateWithoutUserInput[] | Wood_infoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Wood_infoCreateOrConnectWithoutUserInput | Wood_infoCreateOrConnectWithoutUserInput[]
    upsert?: Wood_infoUpsertWithWhereUniqueWithoutUserInput | Wood_infoUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: Wood_infoCreateManyUserInputEnvelope
    set?: Wood_infoWhereUniqueInput | Wood_infoWhereUniqueInput[]
    disconnect?: Wood_infoWhereUniqueInput | Wood_infoWhereUniqueInput[]
    delete?: Wood_infoWhereUniqueInput | Wood_infoWhereUniqueInput[]
    connect?: Wood_infoWhereUniqueInput | Wood_infoWhereUniqueInput[]
    update?: Wood_infoUpdateWithWhereUniqueWithoutUserInput | Wood_infoUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: Wood_infoUpdateManyWithWhereWithoutUserInput | Wood_infoUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: Wood_infoScalarWhereInput | Wood_infoScalarWhereInput[]
  }

  export type Wood_infoUncheckedUpdateManyWithoutUpdaterNestedInput = {
    create?: XOR<Wood_infoCreateWithoutUpdaterInput, Wood_infoUncheckedCreateWithoutUpdaterInput> | Wood_infoCreateWithoutUpdaterInput[] | Wood_infoUncheckedCreateWithoutUpdaterInput[]
    connectOrCreate?: Wood_infoCreateOrConnectWithoutUpdaterInput | Wood_infoCreateOrConnectWithoutUpdaterInput[]
    upsert?: Wood_infoUpsertWithWhereUniqueWithoutUpdaterInput | Wood_infoUpsertWithWhereUniqueWithoutUpdaterInput[]
    createMany?: Wood_infoCreateManyUpdaterInputEnvelope
    set?: Wood_infoWhereUniqueInput | Wood_infoWhereUniqueInput[]
    disconnect?: Wood_infoWhereUniqueInput | Wood_infoWhereUniqueInput[]
    delete?: Wood_infoWhereUniqueInput | Wood_infoWhereUniqueInput[]
    connect?: Wood_infoWhereUniqueInput | Wood_infoWhereUniqueInput[]
    update?: Wood_infoUpdateWithWhereUniqueWithoutUpdaterInput | Wood_infoUpdateWithWhereUniqueWithoutUpdaterInput[]
    updateMany?: Wood_infoUpdateManyWithWhereWithoutUpdaterInput | Wood_infoUpdateManyWithWhereWithoutUpdaterInput[]
    deleteMany?: Wood_infoScalarWhereInput | Wood_infoScalarWhereInput[]
  }

  export type ManualUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<ManualCreateWithoutCreatorInput, ManualUncheckedCreateWithoutCreatorInput> | ManualCreateWithoutCreatorInput[] | ManualUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: ManualCreateOrConnectWithoutCreatorInput | ManualCreateOrConnectWithoutCreatorInput[]
    upsert?: ManualUpsertWithWhereUniqueWithoutCreatorInput | ManualUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: ManualCreateManyCreatorInputEnvelope
    set?: ManualWhereUniqueInput | ManualWhereUniqueInput[]
    disconnect?: ManualWhereUniqueInput | ManualWhereUniqueInput[]
    delete?: ManualWhereUniqueInput | ManualWhereUniqueInput[]
    connect?: ManualWhereUniqueInput | ManualWhereUniqueInput[]
    update?: ManualUpdateWithWhereUniqueWithoutCreatorInput | ManualUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: ManualUpdateManyWithWhereWithoutCreatorInput | ManualUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: ManualScalarWhereInput | ManualScalarWhereInput[]
  }

  export type ManualUncheckedUpdateManyWithoutUpdaterNestedInput = {
    create?: XOR<ManualCreateWithoutUpdaterInput, ManualUncheckedCreateWithoutUpdaterInput> | ManualCreateWithoutUpdaterInput[] | ManualUncheckedCreateWithoutUpdaterInput[]
    connectOrCreate?: ManualCreateOrConnectWithoutUpdaterInput | ManualCreateOrConnectWithoutUpdaterInput[]
    upsert?: ManualUpsertWithWhereUniqueWithoutUpdaterInput | ManualUpsertWithWhereUniqueWithoutUpdaterInput[]
    createMany?: ManualCreateManyUpdaterInputEnvelope
    set?: ManualWhereUniqueInput | ManualWhereUniqueInput[]
    disconnect?: ManualWhereUniqueInput | ManualWhereUniqueInput[]
    delete?: ManualWhereUniqueInput | ManualWhereUniqueInput[]
    connect?: ManualWhereUniqueInput | ManualWhereUniqueInput[]
    update?: ManualUpdateWithWhereUniqueWithoutUpdaterInput | ManualUpdateWithWhereUniqueWithoutUpdaterInput[]
    updateMany?: ManualUpdateManyWithWhereWithoutUpdaterInput | ManualUpdateManyWithWhereWithoutUpdaterInput[]
    deleteMany?: ManualScalarWhereInput | ManualScalarWhereInput[]
  }

  export type ClassifyUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<ClassifyCreateWithoutCreatorInput, ClassifyUncheckedCreateWithoutCreatorInput> | ClassifyCreateWithoutCreatorInput[] | ClassifyUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: ClassifyCreateOrConnectWithoutCreatorInput | ClassifyCreateOrConnectWithoutCreatorInput[]
    upsert?: ClassifyUpsertWithWhereUniqueWithoutCreatorInput | ClassifyUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: ClassifyCreateManyCreatorInputEnvelope
    set?: ClassifyWhereUniqueInput | ClassifyWhereUniqueInput[]
    disconnect?: ClassifyWhereUniqueInput | ClassifyWhereUniqueInput[]
    delete?: ClassifyWhereUniqueInput | ClassifyWhereUniqueInput[]
    connect?: ClassifyWhereUniqueInput | ClassifyWhereUniqueInput[]
    update?: ClassifyUpdateWithWhereUniqueWithoutCreatorInput | ClassifyUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: ClassifyUpdateManyWithWhereWithoutCreatorInput | ClassifyUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: ClassifyScalarWhereInput | ClassifyScalarWhereInput[]
  }

  export type ClassifyUncheckedUpdateManyWithoutVerifitorNestedInput = {
    create?: XOR<ClassifyCreateWithoutVerifitorInput, ClassifyUncheckedCreateWithoutVerifitorInput> | ClassifyCreateWithoutVerifitorInput[] | ClassifyUncheckedCreateWithoutVerifitorInput[]
    connectOrCreate?: ClassifyCreateOrConnectWithoutVerifitorInput | ClassifyCreateOrConnectWithoutVerifitorInput[]
    upsert?: ClassifyUpsertWithWhereUniqueWithoutVerifitorInput | ClassifyUpsertWithWhereUniqueWithoutVerifitorInput[]
    createMany?: ClassifyCreateManyVerifitorInputEnvelope
    set?: ClassifyWhereUniqueInput | ClassifyWhereUniqueInput[]
    disconnect?: ClassifyWhereUniqueInput | ClassifyWhereUniqueInput[]
    delete?: ClassifyWhereUniqueInput | ClassifyWhereUniqueInput[]
    connect?: ClassifyWhereUniqueInput | ClassifyWhereUniqueInput[]
    update?: ClassifyUpdateWithWhereUniqueWithoutVerifitorInput | ClassifyUpdateWithWhereUniqueWithoutVerifitorInput[]
    updateMany?: ClassifyUpdateManyWithWhereWithoutVerifitorInput | ClassifyUpdateManyWithWhereWithoutVerifitorInput[]
    deleteMany?: ClassifyScalarWhereInput | ClassifyScalarWhereInput[]
  }

  export type Wood_infoCreatecommon_nameInput = {
    set: string[]
  }

  export type Wood_infoCreateeng_nameInput = {
    set: string[]
  }

  export type Wood_ImageCreateNestedManyWithoutWood_infoInput = {
    create?: XOR<Wood_ImageCreateWithoutWood_infoInput, Wood_ImageUncheckedCreateWithoutWood_infoInput> | Wood_ImageCreateWithoutWood_infoInput[] | Wood_ImageUncheckedCreateWithoutWood_infoInput[]
    connectOrCreate?: Wood_ImageCreateOrConnectWithoutWood_infoInput | Wood_ImageCreateOrConnectWithoutWood_infoInput[]
    createMany?: Wood_ImageCreateManyWood_infoInputEnvelope
    connect?: Wood_ImageWhereUniqueInput | Wood_ImageWhereUniqueInput[]
  }

  export type UsersCreateNestedOneWithoutWood_infoInput = {
    create?: XOR<UsersCreateWithoutWood_infoInput, UsersUncheckedCreateWithoutWood_infoInput>
    connectOrCreate?: UsersCreateOrConnectWithoutWood_infoInput
    connect?: UsersWhereUniqueInput
  }

  export type UsersCreateNestedOneWithoutUpdated_wood_infoInput = {
    create?: XOR<UsersCreateWithoutUpdated_wood_infoInput, UsersUncheckedCreateWithoutUpdated_wood_infoInput>
    connectOrCreate?: UsersCreateOrConnectWithoutUpdated_wood_infoInput
    connect?: UsersWhereUniqueInput
  }

  export type Wood_ImageUncheckedCreateNestedManyWithoutWood_infoInput = {
    create?: XOR<Wood_ImageCreateWithoutWood_infoInput, Wood_ImageUncheckedCreateWithoutWood_infoInput> | Wood_ImageCreateWithoutWood_infoInput[] | Wood_ImageUncheckedCreateWithoutWood_infoInput[]
    connectOrCreate?: Wood_ImageCreateOrConnectWithoutWood_infoInput | Wood_ImageCreateOrConnectWithoutWood_infoInput[]
    createMany?: Wood_ImageCreateManyWood_infoInputEnvelope
    connect?: Wood_ImageWhereUniqueInput | Wood_ImageWhereUniqueInput[]
  }

  export type Wood_infoUpdatecommon_nameInput = {
    set?: string[]
    push?: string | string[]
  }

  export type Wood_infoUpdateeng_nameInput = {
    set?: string[]
    push?: string | string[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type Wood_ImageUpdateManyWithoutWood_infoNestedInput = {
    create?: XOR<Wood_ImageCreateWithoutWood_infoInput, Wood_ImageUncheckedCreateWithoutWood_infoInput> | Wood_ImageCreateWithoutWood_infoInput[] | Wood_ImageUncheckedCreateWithoutWood_infoInput[]
    connectOrCreate?: Wood_ImageCreateOrConnectWithoutWood_infoInput | Wood_ImageCreateOrConnectWithoutWood_infoInput[]
    upsert?: Wood_ImageUpsertWithWhereUniqueWithoutWood_infoInput | Wood_ImageUpsertWithWhereUniqueWithoutWood_infoInput[]
    createMany?: Wood_ImageCreateManyWood_infoInputEnvelope
    set?: Wood_ImageWhereUniqueInput | Wood_ImageWhereUniqueInput[]
    disconnect?: Wood_ImageWhereUniqueInput | Wood_ImageWhereUniqueInput[]
    delete?: Wood_ImageWhereUniqueInput | Wood_ImageWhereUniqueInput[]
    connect?: Wood_ImageWhereUniqueInput | Wood_ImageWhereUniqueInput[]
    update?: Wood_ImageUpdateWithWhereUniqueWithoutWood_infoInput | Wood_ImageUpdateWithWhereUniqueWithoutWood_infoInput[]
    updateMany?: Wood_ImageUpdateManyWithWhereWithoutWood_infoInput | Wood_ImageUpdateManyWithWhereWithoutWood_infoInput[]
    deleteMany?: Wood_ImageScalarWhereInput | Wood_ImageScalarWhereInput[]
  }

  export type UsersUpdateOneRequiredWithoutWood_infoNestedInput = {
    create?: XOR<UsersCreateWithoutWood_infoInput, UsersUncheckedCreateWithoutWood_infoInput>
    connectOrCreate?: UsersCreateOrConnectWithoutWood_infoInput
    upsert?: UsersUpsertWithoutWood_infoInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutWood_infoInput, UsersUpdateWithoutWood_infoInput>, UsersUncheckedUpdateWithoutWood_infoInput>
  }

  export type UsersUpdateOneRequiredWithoutUpdated_wood_infoNestedInput = {
    create?: XOR<UsersCreateWithoutUpdated_wood_infoInput, UsersUncheckedCreateWithoutUpdated_wood_infoInput>
    connectOrCreate?: UsersCreateOrConnectWithoutUpdated_wood_infoInput
    upsert?: UsersUpsertWithoutUpdated_wood_infoInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutUpdated_wood_infoInput, UsersUpdateWithoutUpdated_wood_infoInput>, UsersUncheckedUpdateWithoutUpdated_wood_infoInput>
  }

  export type Wood_ImageUncheckedUpdateManyWithoutWood_infoNestedInput = {
    create?: XOR<Wood_ImageCreateWithoutWood_infoInput, Wood_ImageUncheckedCreateWithoutWood_infoInput> | Wood_ImageCreateWithoutWood_infoInput[] | Wood_ImageUncheckedCreateWithoutWood_infoInput[]
    connectOrCreate?: Wood_ImageCreateOrConnectWithoutWood_infoInput | Wood_ImageCreateOrConnectWithoutWood_infoInput[]
    upsert?: Wood_ImageUpsertWithWhereUniqueWithoutWood_infoInput | Wood_ImageUpsertWithWhereUniqueWithoutWood_infoInput[]
    createMany?: Wood_ImageCreateManyWood_infoInputEnvelope
    set?: Wood_ImageWhereUniqueInput | Wood_ImageWhereUniqueInput[]
    disconnect?: Wood_ImageWhereUniqueInput | Wood_ImageWhereUniqueInput[]
    delete?: Wood_ImageWhereUniqueInput | Wood_ImageWhereUniqueInput[]
    connect?: Wood_ImageWhereUniqueInput | Wood_ImageWhereUniqueInput[]
    update?: Wood_ImageUpdateWithWhereUniqueWithoutWood_infoInput | Wood_ImageUpdateWithWhereUniqueWithoutWood_infoInput[]
    updateMany?: Wood_ImageUpdateManyWithWhereWithoutWood_infoInput | Wood_ImageUpdateManyWithWhereWithoutWood_infoInput[]
    deleteMany?: Wood_ImageScalarWhereInput | Wood_ImageScalarWhereInput[]
  }

  export type Wood_infoCreateNestedOneWithoutWood_imageInput = {
    create?: XOR<Wood_infoCreateWithoutWood_imageInput, Wood_infoUncheckedCreateWithoutWood_imageInput>
    connectOrCreate?: Wood_infoCreateOrConnectWithoutWood_imageInput
    connect?: Wood_infoWhereUniqueInput
  }

  export type Wood_infoUpdateOneRequiredWithoutWood_imageNestedInput = {
    create?: XOR<Wood_infoCreateWithoutWood_imageInput, Wood_infoUncheckedCreateWithoutWood_imageInput>
    connectOrCreate?: Wood_infoCreateOrConnectWithoutWood_imageInput
    upsert?: Wood_infoUpsertWithoutWood_imageInput
    connect?: Wood_infoWhereUniqueInput
    update?: XOR<XOR<Wood_infoUpdateToOneWithWhereWithoutWood_imageInput, Wood_infoUpdateWithoutWood_imageInput>, Wood_infoUncheckedUpdateWithoutWood_imageInput>
  }

  export type UsersCreateNestedOneWithoutCreated_manualsInput = {
    create?: XOR<UsersCreateWithoutCreated_manualsInput, UsersUncheckedCreateWithoutCreated_manualsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutCreated_manualsInput
    connect?: UsersWhereUniqueInput
  }

  export type UsersCreateNestedOneWithoutUpdated_manualsInput = {
    create?: XOR<UsersCreateWithoutUpdated_manualsInput, UsersUncheckedCreateWithoutUpdated_manualsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutUpdated_manualsInput
    connect?: UsersWhereUniqueInput
  }

  export type UsersUpdateOneRequiredWithoutCreated_manualsNestedInput = {
    create?: XOR<UsersCreateWithoutCreated_manualsInput, UsersUncheckedCreateWithoutCreated_manualsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutCreated_manualsInput
    upsert?: UsersUpsertWithoutCreated_manualsInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutCreated_manualsInput, UsersUpdateWithoutCreated_manualsInput>, UsersUncheckedUpdateWithoutCreated_manualsInput>
  }

  export type UsersUpdateOneRequiredWithoutUpdated_manualsNestedInput = {
    create?: XOR<UsersCreateWithoutUpdated_manualsInput, UsersUncheckedCreateWithoutUpdated_manualsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutUpdated_manualsInput
    upsert?: UsersUpsertWithoutUpdated_manualsInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutUpdated_manualsInput, UsersUpdateWithoutUpdated_manualsInput>, UsersUncheckedUpdateWithoutUpdated_manualsInput>
  }

  export type UsersCreateNestedOneWithoutCreated_classifyInput = {
    create?: XOR<UsersCreateWithoutCreated_classifyInput, UsersUncheckedCreateWithoutCreated_classifyInput>
    connectOrCreate?: UsersCreateOrConnectWithoutCreated_classifyInput
    connect?: UsersWhereUniqueInput
  }

  export type UsersCreateNestedOneWithoutVerify_classifyInput = {
    create?: XOR<UsersCreateWithoutVerify_classifyInput, UsersUncheckedCreateWithoutVerify_classifyInput>
    connectOrCreate?: UsersCreateOrConnectWithoutVerify_classifyInput
    connect?: UsersWhereUniqueInput
  }

  export type NoteCreateNestedManyWithoutClassifyInput = {
    create?: XOR<NoteCreateWithoutClassifyInput, NoteUncheckedCreateWithoutClassifyInput> | NoteCreateWithoutClassifyInput[] | NoteUncheckedCreateWithoutClassifyInput[]
    connectOrCreate?: NoteCreateOrConnectWithoutClassifyInput | NoteCreateOrConnectWithoutClassifyInput[]
    createMany?: NoteCreateManyClassifyInputEnvelope
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
  }

  export type NoteUncheckedCreateNestedManyWithoutClassifyInput = {
    create?: XOR<NoteCreateWithoutClassifyInput, NoteUncheckedCreateWithoutClassifyInput> | NoteCreateWithoutClassifyInput[] | NoteUncheckedCreateWithoutClassifyInput[]
    connectOrCreate?: NoteCreateOrConnectWithoutClassifyInput | NoteCreateOrConnectWithoutClassifyInput[]
    createMany?: NoteCreateManyClassifyInputEnvelope
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
  }

  export type EnumStatusVerifyEnumFieldUpdateOperationsInput = {
    set?: $Enums.StatusVerifyEnum
  }

  export type UsersUpdateOneRequiredWithoutCreated_classifyNestedInput = {
    create?: XOR<UsersCreateWithoutCreated_classifyInput, UsersUncheckedCreateWithoutCreated_classifyInput>
    connectOrCreate?: UsersCreateOrConnectWithoutCreated_classifyInput
    upsert?: UsersUpsertWithoutCreated_classifyInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutCreated_classifyInput, UsersUpdateWithoutCreated_classifyInput>, UsersUncheckedUpdateWithoutCreated_classifyInput>
  }

  export type UsersUpdateOneRequiredWithoutVerify_classifyNestedInput = {
    create?: XOR<UsersCreateWithoutVerify_classifyInput, UsersUncheckedCreateWithoutVerify_classifyInput>
    connectOrCreate?: UsersCreateOrConnectWithoutVerify_classifyInput
    upsert?: UsersUpsertWithoutVerify_classifyInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutVerify_classifyInput, UsersUpdateWithoutVerify_classifyInput>, UsersUncheckedUpdateWithoutVerify_classifyInput>
  }

  export type NoteUpdateManyWithoutClassifyNestedInput = {
    create?: XOR<NoteCreateWithoutClassifyInput, NoteUncheckedCreateWithoutClassifyInput> | NoteCreateWithoutClassifyInput[] | NoteUncheckedCreateWithoutClassifyInput[]
    connectOrCreate?: NoteCreateOrConnectWithoutClassifyInput | NoteCreateOrConnectWithoutClassifyInput[]
    upsert?: NoteUpsertWithWhereUniqueWithoutClassifyInput | NoteUpsertWithWhereUniqueWithoutClassifyInput[]
    createMany?: NoteCreateManyClassifyInputEnvelope
    set?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    disconnect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    delete?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    update?: NoteUpdateWithWhereUniqueWithoutClassifyInput | NoteUpdateWithWhereUniqueWithoutClassifyInput[]
    updateMany?: NoteUpdateManyWithWhereWithoutClassifyInput | NoteUpdateManyWithWhereWithoutClassifyInput[]
    deleteMany?: NoteScalarWhereInput | NoteScalarWhereInput[]
  }

  export type NoteUncheckedUpdateManyWithoutClassifyNestedInput = {
    create?: XOR<NoteCreateWithoutClassifyInput, NoteUncheckedCreateWithoutClassifyInput> | NoteCreateWithoutClassifyInput[] | NoteUncheckedCreateWithoutClassifyInput[]
    connectOrCreate?: NoteCreateOrConnectWithoutClassifyInput | NoteCreateOrConnectWithoutClassifyInput[]
    upsert?: NoteUpsertWithWhereUniqueWithoutClassifyInput | NoteUpsertWithWhereUniqueWithoutClassifyInput[]
    createMany?: NoteCreateManyClassifyInputEnvelope
    set?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    disconnect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    delete?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    update?: NoteUpdateWithWhereUniqueWithoutClassifyInput | NoteUpdateWithWhereUniqueWithoutClassifyInput[]
    updateMany?: NoteUpdateManyWithWhereWithoutClassifyInput | NoteUpdateManyWithWhereWithoutClassifyInput[]
    deleteMany?: NoteScalarWhereInput | NoteScalarWhereInput[]
  }

  export type ClassifyCreateNestedOneWithoutNotesInput = {
    create?: XOR<ClassifyCreateWithoutNotesInput, ClassifyUncheckedCreateWithoutNotesInput>
    connectOrCreate?: ClassifyCreateOrConnectWithoutNotesInput
    connect?: ClassifyWhereUniqueInput
  }

  export type ClassifyUpdateOneRequiredWithoutNotesNestedInput = {
    create?: XOR<ClassifyCreateWithoutNotesInput, ClassifyUncheckedCreateWithoutNotesInput>
    connectOrCreate?: ClassifyCreateOrConnectWithoutNotesInput
    upsert?: ClassifyUpsertWithoutNotesInput
    connect?: ClassifyWhereUniqueInput
    update?: XOR<XOR<ClassifyUpdateToOneWithWhereWithoutNotesInput, ClassifyUpdateWithoutNotesInput>, ClassifyUncheckedUpdateWithoutNotesInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumroleEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.roleEnum | EnumroleEnumFieldRefInput<$PrismaModel>
    in?: $Enums.roleEnum[] | ListEnumroleEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.roleEnum[] | ListEnumroleEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumroleEnumFilter<$PrismaModel> | $Enums.roleEnum
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumroleEnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.roleEnum | EnumroleEnumFieldRefInput<$PrismaModel>
    in?: $Enums.roleEnum[] | ListEnumroleEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.roleEnum[] | ListEnumroleEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumroleEnumWithAggregatesFilter<$PrismaModel> | $Enums.roleEnum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumroleEnumFilter<$PrismaModel>
    _max?: NestedEnumroleEnumFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumStatusVerifyEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusVerifyEnum | EnumStatusVerifyEnumFieldRefInput<$PrismaModel>
    in?: $Enums.StatusVerifyEnum[] | ListEnumStatusVerifyEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusVerifyEnum[] | ListEnumStatusVerifyEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusVerifyEnumFilter<$PrismaModel> | $Enums.StatusVerifyEnum
  }

  export type NestedEnumStatusVerifyEnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusVerifyEnum | EnumStatusVerifyEnumFieldRefInput<$PrismaModel>
    in?: $Enums.StatusVerifyEnum[] | ListEnumStatusVerifyEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusVerifyEnum[] | ListEnumStatusVerifyEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusVerifyEnumWithAggregatesFilter<$PrismaModel> | $Enums.StatusVerifyEnum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusVerifyEnumFilter<$PrismaModel>
    _max?: NestedEnumStatusVerifyEnumFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type Wood_infoCreateWithoutUserInput = {
    common_name?: Wood_infoCreatecommon_nameInput | string[]
    eng_name?: Wood_infoCreateeng_nameInput | string[]
    botanical_name: string
    pedigree: string
    place_of_origin: string
    wood_characteristics: string
    anatomical_characteristics: string
    other: string
    status: boolean
    create_at: Date | string
    update_at: Date | string
    wood_image?: Wood_ImageCreateNestedManyWithoutWood_infoInput
    updater: UsersCreateNestedOneWithoutUpdated_wood_infoInput
  }

  export type Wood_infoUncheckedCreateWithoutUserInput = {
    w_id?: number
    common_name?: Wood_infoCreatecommon_nameInput | string[]
    eng_name?: Wood_infoCreateeng_nameInput | string[]
    botanical_name: string
    pedigree: string
    place_of_origin: string
    wood_characteristics: string
    anatomical_characteristics: string
    other: string
    status: boolean
    create_at: Date | string
    update_at: Date | string
    update_by: number
    wood_image?: Wood_ImageUncheckedCreateNestedManyWithoutWood_infoInput
  }

  export type Wood_infoCreateOrConnectWithoutUserInput = {
    where: Wood_infoWhereUniqueInput
    create: XOR<Wood_infoCreateWithoutUserInput, Wood_infoUncheckedCreateWithoutUserInput>
  }

  export type Wood_infoCreateManyUserInputEnvelope = {
    data: Wood_infoCreateManyUserInput | Wood_infoCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type Wood_infoCreateWithoutUpdaterInput = {
    common_name?: Wood_infoCreatecommon_nameInput | string[]
    eng_name?: Wood_infoCreateeng_nameInput | string[]
    botanical_name: string
    pedigree: string
    place_of_origin: string
    wood_characteristics: string
    anatomical_characteristics: string
    other: string
    status: boolean
    create_at: Date | string
    update_at: Date | string
    wood_image?: Wood_ImageCreateNestedManyWithoutWood_infoInput
    user: UsersCreateNestedOneWithoutWood_infoInput
  }

  export type Wood_infoUncheckedCreateWithoutUpdaterInput = {
    w_id?: number
    common_name?: Wood_infoCreatecommon_nameInput | string[]
    eng_name?: Wood_infoCreateeng_nameInput | string[]
    botanical_name: string
    pedigree: string
    place_of_origin: string
    wood_characteristics: string
    anatomical_characteristics: string
    other: string
    status: boolean
    create_at: Date | string
    update_at: Date | string
    create_by: number
    wood_image?: Wood_ImageUncheckedCreateNestedManyWithoutWood_infoInput
  }

  export type Wood_infoCreateOrConnectWithoutUpdaterInput = {
    where: Wood_infoWhereUniqueInput
    create: XOR<Wood_infoCreateWithoutUpdaterInput, Wood_infoUncheckedCreateWithoutUpdaterInput>
  }

  export type Wood_infoCreateManyUpdaterInputEnvelope = {
    data: Wood_infoCreateManyUpdaterInput | Wood_infoCreateManyUpdaterInput[]
    skipDuplicates?: boolean
  }

  export type ManualCreateWithoutCreatorInput = {
    topic: string
    description: string
    status: boolean
    image: string
    create_at: Date | string
    update_at: Date | string
    updater: UsersCreateNestedOneWithoutUpdated_manualsInput
  }

  export type ManualUncheckedCreateWithoutCreatorInput = {
    m_id?: number
    topic: string
    description: string
    status: boolean
    image: string
    create_at: Date | string
    update_at: Date | string
    update_by: number
  }

  export type ManualCreateOrConnectWithoutCreatorInput = {
    where: ManualWhereUniqueInput
    create: XOR<ManualCreateWithoutCreatorInput, ManualUncheckedCreateWithoutCreatorInput>
  }

  export type ManualCreateManyCreatorInputEnvelope = {
    data: ManualCreateManyCreatorInput | ManualCreateManyCreatorInput[]
    skipDuplicates?: boolean
  }

  export type ManualCreateWithoutUpdaterInput = {
    topic: string
    description: string
    status: boolean
    image: string
    create_at: Date | string
    update_at: Date | string
    creator: UsersCreateNestedOneWithoutCreated_manualsInput
  }

  export type ManualUncheckedCreateWithoutUpdaterInput = {
    m_id?: number
    topic: string
    description: string
    status: boolean
    image: string
    create_at: Date | string
    update_at: Date | string
    create_by: number
  }

  export type ManualCreateOrConnectWithoutUpdaterInput = {
    where: ManualWhereUniqueInput
    create: XOR<ManualCreateWithoutUpdaterInput, ManualUncheckedCreateWithoutUpdaterInput>
  }

  export type ManualCreateManyUpdaterInputEnvelope = {
    data: ManualCreateManyUpdaterInput | ManualCreateManyUpdaterInput[]
    skipDuplicates?: boolean
  }

  export type ClassifyCreateWithoutCreatorInput = {
    status: boolean
    status_verify: $Enums.StatusVerifyEnum
    select_result: string
    result: JsonNullValueInput | InputJsonValue
    create_at: Date | string
    verifitor: UsersCreateNestedOneWithoutVerify_classifyInput
    notes?: NoteCreateNestedManyWithoutClassifyInput
  }

  export type ClassifyUncheckedCreateWithoutCreatorInput = {
    c_id?: number
    status: boolean
    status_verify: $Enums.StatusVerifyEnum
    select_result: string
    result: JsonNullValueInput | InputJsonValue
    create_at: Date | string
    verify_by: number
    notes?: NoteUncheckedCreateNestedManyWithoutClassifyInput
  }

  export type ClassifyCreateOrConnectWithoutCreatorInput = {
    where: ClassifyWhereUniqueInput
    create: XOR<ClassifyCreateWithoutCreatorInput, ClassifyUncheckedCreateWithoutCreatorInput>
  }

  export type ClassifyCreateManyCreatorInputEnvelope = {
    data: ClassifyCreateManyCreatorInput | ClassifyCreateManyCreatorInput[]
    skipDuplicates?: boolean
  }

  export type ClassifyCreateWithoutVerifitorInput = {
    status: boolean
    status_verify: $Enums.StatusVerifyEnum
    select_result: string
    result: JsonNullValueInput | InputJsonValue
    create_at: Date | string
    creator: UsersCreateNestedOneWithoutCreated_classifyInput
    notes?: NoteCreateNestedManyWithoutClassifyInput
  }

  export type ClassifyUncheckedCreateWithoutVerifitorInput = {
    c_id?: number
    status: boolean
    status_verify: $Enums.StatusVerifyEnum
    select_result: string
    result: JsonNullValueInput | InputJsonValue
    create_at: Date | string
    create_by: number
    notes?: NoteUncheckedCreateNestedManyWithoutClassifyInput
  }

  export type ClassifyCreateOrConnectWithoutVerifitorInput = {
    where: ClassifyWhereUniqueInput
    create: XOR<ClassifyCreateWithoutVerifitorInput, ClassifyUncheckedCreateWithoutVerifitorInput>
  }

  export type ClassifyCreateManyVerifitorInputEnvelope = {
    data: ClassifyCreateManyVerifitorInput | ClassifyCreateManyVerifitorInput[]
    skipDuplicates?: boolean
  }

  export type Wood_infoUpsertWithWhereUniqueWithoutUserInput = {
    where: Wood_infoWhereUniqueInput
    update: XOR<Wood_infoUpdateWithoutUserInput, Wood_infoUncheckedUpdateWithoutUserInput>
    create: XOR<Wood_infoCreateWithoutUserInput, Wood_infoUncheckedCreateWithoutUserInput>
  }

  export type Wood_infoUpdateWithWhereUniqueWithoutUserInput = {
    where: Wood_infoWhereUniqueInput
    data: XOR<Wood_infoUpdateWithoutUserInput, Wood_infoUncheckedUpdateWithoutUserInput>
  }

  export type Wood_infoUpdateManyWithWhereWithoutUserInput = {
    where: Wood_infoScalarWhereInput
    data: XOR<Wood_infoUpdateManyMutationInput, Wood_infoUncheckedUpdateManyWithoutUserInput>
  }

  export type Wood_infoScalarWhereInput = {
    AND?: Wood_infoScalarWhereInput | Wood_infoScalarWhereInput[]
    OR?: Wood_infoScalarWhereInput[]
    NOT?: Wood_infoScalarWhereInput | Wood_infoScalarWhereInput[]
    w_id?: IntFilter<"Wood_info"> | number
    common_name?: StringNullableListFilter<"Wood_info">
    eng_name?: StringNullableListFilter<"Wood_info">
    botanical_name?: StringFilter<"Wood_info"> | string
    pedigree?: StringFilter<"Wood_info"> | string
    place_of_origin?: StringFilter<"Wood_info"> | string
    wood_characteristics?: StringFilter<"Wood_info"> | string
    anatomical_characteristics?: StringFilter<"Wood_info"> | string
    other?: StringFilter<"Wood_info"> | string
    status?: BoolFilter<"Wood_info"> | boolean
    create_at?: DateTimeFilter<"Wood_info"> | Date | string
    update_at?: DateTimeFilter<"Wood_info"> | Date | string
    create_by?: IntFilter<"Wood_info"> | number
    update_by?: IntFilter<"Wood_info"> | number
  }

  export type Wood_infoUpsertWithWhereUniqueWithoutUpdaterInput = {
    where: Wood_infoWhereUniqueInput
    update: XOR<Wood_infoUpdateWithoutUpdaterInput, Wood_infoUncheckedUpdateWithoutUpdaterInput>
    create: XOR<Wood_infoCreateWithoutUpdaterInput, Wood_infoUncheckedCreateWithoutUpdaterInput>
  }

  export type Wood_infoUpdateWithWhereUniqueWithoutUpdaterInput = {
    where: Wood_infoWhereUniqueInput
    data: XOR<Wood_infoUpdateWithoutUpdaterInput, Wood_infoUncheckedUpdateWithoutUpdaterInput>
  }

  export type Wood_infoUpdateManyWithWhereWithoutUpdaterInput = {
    where: Wood_infoScalarWhereInput
    data: XOR<Wood_infoUpdateManyMutationInput, Wood_infoUncheckedUpdateManyWithoutUpdaterInput>
  }

  export type ManualUpsertWithWhereUniqueWithoutCreatorInput = {
    where: ManualWhereUniqueInput
    update: XOR<ManualUpdateWithoutCreatorInput, ManualUncheckedUpdateWithoutCreatorInput>
    create: XOR<ManualCreateWithoutCreatorInput, ManualUncheckedCreateWithoutCreatorInput>
  }

  export type ManualUpdateWithWhereUniqueWithoutCreatorInput = {
    where: ManualWhereUniqueInput
    data: XOR<ManualUpdateWithoutCreatorInput, ManualUncheckedUpdateWithoutCreatorInput>
  }

  export type ManualUpdateManyWithWhereWithoutCreatorInput = {
    where: ManualScalarWhereInput
    data: XOR<ManualUpdateManyMutationInput, ManualUncheckedUpdateManyWithoutCreatorInput>
  }

  export type ManualScalarWhereInput = {
    AND?: ManualScalarWhereInput | ManualScalarWhereInput[]
    OR?: ManualScalarWhereInput[]
    NOT?: ManualScalarWhereInput | ManualScalarWhereInput[]
    m_id?: IntFilter<"Manual"> | number
    topic?: StringFilter<"Manual"> | string
    description?: StringFilter<"Manual"> | string
    status?: BoolFilter<"Manual"> | boolean
    image?: StringFilter<"Manual"> | string
    create_at?: DateTimeFilter<"Manual"> | Date | string
    update_at?: DateTimeFilter<"Manual"> | Date | string
    create_by?: IntFilter<"Manual"> | number
    update_by?: IntFilter<"Manual"> | number
  }

  export type ManualUpsertWithWhereUniqueWithoutUpdaterInput = {
    where: ManualWhereUniqueInput
    update: XOR<ManualUpdateWithoutUpdaterInput, ManualUncheckedUpdateWithoutUpdaterInput>
    create: XOR<ManualCreateWithoutUpdaterInput, ManualUncheckedCreateWithoutUpdaterInput>
  }

  export type ManualUpdateWithWhereUniqueWithoutUpdaterInput = {
    where: ManualWhereUniqueInput
    data: XOR<ManualUpdateWithoutUpdaterInput, ManualUncheckedUpdateWithoutUpdaterInput>
  }

  export type ManualUpdateManyWithWhereWithoutUpdaterInput = {
    where: ManualScalarWhereInput
    data: XOR<ManualUpdateManyMutationInput, ManualUncheckedUpdateManyWithoutUpdaterInput>
  }

  export type ClassifyUpsertWithWhereUniqueWithoutCreatorInput = {
    where: ClassifyWhereUniqueInput
    update: XOR<ClassifyUpdateWithoutCreatorInput, ClassifyUncheckedUpdateWithoutCreatorInput>
    create: XOR<ClassifyCreateWithoutCreatorInput, ClassifyUncheckedCreateWithoutCreatorInput>
  }

  export type ClassifyUpdateWithWhereUniqueWithoutCreatorInput = {
    where: ClassifyWhereUniqueInput
    data: XOR<ClassifyUpdateWithoutCreatorInput, ClassifyUncheckedUpdateWithoutCreatorInput>
  }

  export type ClassifyUpdateManyWithWhereWithoutCreatorInput = {
    where: ClassifyScalarWhereInput
    data: XOR<ClassifyUpdateManyMutationInput, ClassifyUncheckedUpdateManyWithoutCreatorInput>
  }

  export type ClassifyScalarWhereInput = {
    AND?: ClassifyScalarWhereInput | ClassifyScalarWhereInput[]
    OR?: ClassifyScalarWhereInput[]
    NOT?: ClassifyScalarWhereInput | ClassifyScalarWhereInput[]
    c_id?: IntFilter<"Classify"> | number
    status?: BoolFilter<"Classify"> | boolean
    status_verify?: EnumStatusVerifyEnumFilter<"Classify"> | $Enums.StatusVerifyEnum
    select_result?: StringFilter<"Classify"> | string
    result?: JsonFilter<"Classify">
    create_at?: DateTimeFilter<"Classify"> | Date | string
    create_by?: IntFilter<"Classify"> | number
    verify_by?: IntFilter<"Classify"> | number
  }

  export type ClassifyUpsertWithWhereUniqueWithoutVerifitorInput = {
    where: ClassifyWhereUniqueInput
    update: XOR<ClassifyUpdateWithoutVerifitorInput, ClassifyUncheckedUpdateWithoutVerifitorInput>
    create: XOR<ClassifyCreateWithoutVerifitorInput, ClassifyUncheckedCreateWithoutVerifitorInput>
  }

  export type ClassifyUpdateWithWhereUniqueWithoutVerifitorInput = {
    where: ClassifyWhereUniqueInput
    data: XOR<ClassifyUpdateWithoutVerifitorInput, ClassifyUncheckedUpdateWithoutVerifitorInput>
  }

  export type ClassifyUpdateManyWithWhereWithoutVerifitorInput = {
    where: ClassifyScalarWhereInput
    data: XOR<ClassifyUpdateManyMutationInput, ClassifyUncheckedUpdateManyWithoutVerifitorInput>
  }

  export type Wood_ImageCreateWithoutWood_infoInput = {
    path: string
  }

  export type Wood_ImageUncheckedCreateWithoutWood_infoInput = {
    wi_id?: number
    path: string
  }

  export type Wood_ImageCreateOrConnectWithoutWood_infoInput = {
    where: Wood_ImageWhereUniqueInput
    create: XOR<Wood_ImageCreateWithoutWood_infoInput, Wood_ImageUncheckedCreateWithoutWood_infoInput>
  }

  export type Wood_ImageCreateManyWood_infoInputEnvelope = {
    data: Wood_ImageCreateManyWood_infoInput | Wood_ImageCreateManyWood_infoInput[]
    skipDuplicates?: boolean
  }

  export type UsersCreateWithoutWood_infoInput = {
    line_id: string
    firstname: string
    lastname: string
    email: string
    phone: string
    image: string
    role: $Enums.roleEnum
    create_at: Date | string
    update_at: Date | string
    updated_wood_info?: Wood_infoCreateNestedManyWithoutUpdaterInput
    created_manuals?: ManualCreateNestedManyWithoutCreatorInput
    updated_manuals?: ManualCreateNestedManyWithoutUpdaterInput
    created_classify?: ClassifyCreateNestedManyWithoutCreatorInput
    verify_classify?: ClassifyCreateNestedManyWithoutVerifitorInput
  }

  export type UsersUncheckedCreateWithoutWood_infoInput = {
    u_id?: number
    line_id: string
    firstname: string
    lastname: string
    email: string
    phone: string
    image: string
    role: $Enums.roleEnum
    create_at: Date | string
    update_at: Date | string
    updated_wood_info?: Wood_infoUncheckedCreateNestedManyWithoutUpdaterInput
    created_manuals?: ManualUncheckedCreateNestedManyWithoutCreatorInput
    updated_manuals?: ManualUncheckedCreateNestedManyWithoutUpdaterInput
    created_classify?: ClassifyUncheckedCreateNestedManyWithoutCreatorInput
    verify_classify?: ClassifyUncheckedCreateNestedManyWithoutVerifitorInput
  }

  export type UsersCreateOrConnectWithoutWood_infoInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutWood_infoInput, UsersUncheckedCreateWithoutWood_infoInput>
  }

  export type UsersCreateWithoutUpdated_wood_infoInput = {
    line_id: string
    firstname: string
    lastname: string
    email: string
    phone: string
    image: string
    role: $Enums.roleEnum
    create_at: Date | string
    update_at: Date | string
    wood_info?: Wood_infoCreateNestedManyWithoutUserInput
    created_manuals?: ManualCreateNestedManyWithoutCreatorInput
    updated_manuals?: ManualCreateNestedManyWithoutUpdaterInput
    created_classify?: ClassifyCreateNestedManyWithoutCreatorInput
    verify_classify?: ClassifyCreateNestedManyWithoutVerifitorInput
  }

  export type UsersUncheckedCreateWithoutUpdated_wood_infoInput = {
    u_id?: number
    line_id: string
    firstname: string
    lastname: string
    email: string
    phone: string
    image: string
    role: $Enums.roleEnum
    create_at: Date | string
    update_at: Date | string
    wood_info?: Wood_infoUncheckedCreateNestedManyWithoutUserInput
    created_manuals?: ManualUncheckedCreateNestedManyWithoutCreatorInput
    updated_manuals?: ManualUncheckedCreateNestedManyWithoutUpdaterInput
    created_classify?: ClassifyUncheckedCreateNestedManyWithoutCreatorInput
    verify_classify?: ClassifyUncheckedCreateNestedManyWithoutVerifitorInput
  }

  export type UsersCreateOrConnectWithoutUpdated_wood_infoInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutUpdated_wood_infoInput, UsersUncheckedCreateWithoutUpdated_wood_infoInput>
  }

  export type Wood_ImageUpsertWithWhereUniqueWithoutWood_infoInput = {
    where: Wood_ImageWhereUniqueInput
    update: XOR<Wood_ImageUpdateWithoutWood_infoInput, Wood_ImageUncheckedUpdateWithoutWood_infoInput>
    create: XOR<Wood_ImageCreateWithoutWood_infoInput, Wood_ImageUncheckedCreateWithoutWood_infoInput>
  }

  export type Wood_ImageUpdateWithWhereUniqueWithoutWood_infoInput = {
    where: Wood_ImageWhereUniqueInput
    data: XOR<Wood_ImageUpdateWithoutWood_infoInput, Wood_ImageUncheckedUpdateWithoutWood_infoInput>
  }

  export type Wood_ImageUpdateManyWithWhereWithoutWood_infoInput = {
    where: Wood_ImageScalarWhereInput
    data: XOR<Wood_ImageUpdateManyMutationInput, Wood_ImageUncheckedUpdateManyWithoutWood_infoInput>
  }

  export type Wood_ImageScalarWhereInput = {
    AND?: Wood_ImageScalarWhereInput | Wood_ImageScalarWhereInput[]
    OR?: Wood_ImageScalarWhereInput[]
    NOT?: Wood_ImageScalarWhereInput | Wood_ImageScalarWhereInput[]
    wi_id?: IntFilter<"Wood_Image"> | number
    w_id?: IntFilter<"Wood_Image"> | number
    path?: StringFilter<"Wood_Image"> | string
  }

  export type UsersUpsertWithoutWood_infoInput = {
    update: XOR<UsersUpdateWithoutWood_infoInput, UsersUncheckedUpdateWithoutWood_infoInput>
    create: XOR<UsersCreateWithoutWood_infoInput, UsersUncheckedCreateWithoutWood_infoInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutWood_infoInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutWood_infoInput, UsersUncheckedUpdateWithoutWood_infoInput>
  }

  export type UsersUpdateWithoutWood_infoInput = {
    line_id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    role?: EnumroleEnumFieldUpdateOperationsInput | $Enums.roleEnum
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_wood_info?: Wood_infoUpdateManyWithoutUpdaterNestedInput
    created_manuals?: ManualUpdateManyWithoutCreatorNestedInput
    updated_manuals?: ManualUpdateManyWithoutUpdaterNestedInput
    created_classify?: ClassifyUpdateManyWithoutCreatorNestedInput
    verify_classify?: ClassifyUpdateManyWithoutVerifitorNestedInput
  }

  export type UsersUncheckedUpdateWithoutWood_infoInput = {
    u_id?: IntFieldUpdateOperationsInput | number
    line_id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    role?: EnumroleEnumFieldUpdateOperationsInput | $Enums.roleEnum
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_wood_info?: Wood_infoUncheckedUpdateManyWithoutUpdaterNestedInput
    created_manuals?: ManualUncheckedUpdateManyWithoutCreatorNestedInput
    updated_manuals?: ManualUncheckedUpdateManyWithoutUpdaterNestedInput
    created_classify?: ClassifyUncheckedUpdateManyWithoutCreatorNestedInput
    verify_classify?: ClassifyUncheckedUpdateManyWithoutVerifitorNestedInput
  }

  export type UsersUpsertWithoutUpdated_wood_infoInput = {
    update: XOR<UsersUpdateWithoutUpdated_wood_infoInput, UsersUncheckedUpdateWithoutUpdated_wood_infoInput>
    create: XOR<UsersCreateWithoutUpdated_wood_infoInput, UsersUncheckedCreateWithoutUpdated_wood_infoInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutUpdated_wood_infoInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutUpdated_wood_infoInput, UsersUncheckedUpdateWithoutUpdated_wood_infoInput>
  }

  export type UsersUpdateWithoutUpdated_wood_infoInput = {
    line_id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    role?: EnumroleEnumFieldUpdateOperationsInput | $Enums.roleEnum
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    wood_info?: Wood_infoUpdateManyWithoutUserNestedInput
    created_manuals?: ManualUpdateManyWithoutCreatorNestedInput
    updated_manuals?: ManualUpdateManyWithoutUpdaterNestedInput
    created_classify?: ClassifyUpdateManyWithoutCreatorNestedInput
    verify_classify?: ClassifyUpdateManyWithoutVerifitorNestedInput
  }

  export type UsersUncheckedUpdateWithoutUpdated_wood_infoInput = {
    u_id?: IntFieldUpdateOperationsInput | number
    line_id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    role?: EnumroleEnumFieldUpdateOperationsInput | $Enums.roleEnum
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    wood_info?: Wood_infoUncheckedUpdateManyWithoutUserNestedInput
    created_manuals?: ManualUncheckedUpdateManyWithoutCreatorNestedInput
    updated_manuals?: ManualUncheckedUpdateManyWithoutUpdaterNestedInput
    created_classify?: ClassifyUncheckedUpdateManyWithoutCreatorNestedInput
    verify_classify?: ClassifyUncheckedUpdateManyWithoutVerifitorNestedInput
  }

  export type Wood_infoCreateWithoutWood_imageInput = {
    common_name?: Wood_infoCreatecommon_nameInput | string[]
    eng_name?: Wood_infoCreateeng_nameInput | string[]
    botanical_name: string
    pedigree: string
    place_of_origin: string
    wood_characteristics: string
    anatomical_characteristics: string
    other: string
    status: boolean
    create_at: Date | string
    update_at: Date | string
    user: UsersCreateNestedOneWithoutWood_infoInput
    updater: UsersCreateNestedOneWithoutUpdated_wood_infoInput
  }

  export type Wood_infoUncheckedCreateWithoutWood_imageInput = {
    w_id?: number
    common_name?: Wood_infoCreatecommon_nameInput | string[]
    eng_name?: Wood_infoCreateeng_nameInput | string[]
    botanical_name: string
    pedigree: string
    place_of_origin: string
    wood_characteristics: string
    anatomical_characteristics: string
    other: string
    status: boolean
    create_at: Date | string
    update_at: Date | string
    create_by: number
    update_by: number
  }

  export type Wood_infoCreateOrConnectWithoutWood_imageInput = {
    where: Wood_infoWhereUniqueInput
    create: XOR<Wood_infoCreateWithoutWood_imageInput, Wood_infoUncheckedCreateWithoutWood_imageInput>
  }

  export type Wood_infoUpsertWithoutWood_imageInput = {
    update: XOR<Wood_infoUpdateWithoutWood_imageInput, Wood_infoUncheckedUpdateWithoutWood_imageInput>
    create: XOR<Wood_infoCreateWithoutWood_imageInput, Wood_infoUncheckedCreateWithoutWood_imageInput>
    where?: Wood_infoWhereInput
  }

  export type Wood_infoUpdateToOneWithWhereWithoutWood_imageInput = {
    where?: Wood_infoWhereInput
    data: XOR<Wood_infoUpdateWithoutWood_imageInput, Wood_infoUncheckedUpdateWithoutWood_imageInput>
  }

  export type Wood_infoUpdateWithoutWood_imageInput = {
    common_name?: Wood_infoUpdatecommon_nameInput | string[]
    eng_name?: Wood_infoUpdateeng_nameInput | string[]
    botanical_name?: StringFieldUpdateOperationsInput | string
    pedigree?: StringFieldUpdateOperationsInput | string
    place_of_origin?: StringFieldUpdateOperationsInput | string
    wood_characteristics?: StringFieldUpdateOperationsInput | string
    anatomical_characteristics?: StringFieldUpdateOperationsInput | string
    other?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutWood_infoNestedInput
    updater?: UsersUpdateOneRequiredWithoutUpdated_wood_infoNestedInput
  }

  export type Wood_infoUncheckedUpdateWithoutWood_imageInput = {
    w_id?: IntFieldUpdateOperationsInput | number
    common_name?: Wood_infoUpdatecommon_nameInput | string[]
    eng_name?: Wood_infoUpdateeng_nameInput | string[]
    botanical_name?: StringFieldUpdateOperationsInput | string
    pedigree?: StringFieldUpdateOperationsInput | string
    place_of_origin?: StringFieldUpdateOperationsInput | string
    wood_characteristics?: StringFieldUpdateOperationsInput | string
    anatomical_characteristics?: StringFieldUpdateOperationsInput | string
    other?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    create_by?: IntFieldUpdateOperationsInput | number
    update_by?: IntFieldUpdateOperationsInput | number
  }

  export type UsersCreateWithoutCreated_manualsInput = {
    line_id: string
    firstname: string
    lastname: string
    email: string
    phone: string
    image: string
    role: $Enums.roleEnum
    create_at: Date | string
    update_at: Date | string
    wood_info?: Wood_infoCreateNestedManyWithoutUserInput
    updated_wood_info?: Wood_infoCreateNestedManyWithoutUpdaterInput
    updated_manuals?: ManualCreateNestedManyWithoutUpdaterInput
    created_classify?: ClassifyCreateNestedManyWithoutCreatorInput
    verify_classify?: ClassifyCreateNestedManyWithoutVerifitorInput
  }

  export type UsersUncheckedCreateWithoutCreated_manualsInput = {
    u_id?: number
    line_id: string
    firstname: string
    lastname: string
    email: string
    phone: string
    image: string
    role: $Enums.roleEnum
    create_at: Date | string
    update_at: Date | string
    wood_info?: Wood_infoUncheckedCreateNestedManyWithoutUserInput
    updated_wood_info?: Wood_infoUncheckedCreateNestedManyWithoutUpdaterInput
    updated_manuals?: ManualUncheckedCreateNestedManyWithoutUpdaterInput
    created_classify?: ClassifyUncheckedCreateNestedManyWithoutCreatorInput
    verify_classify?: ClassifyUncheckedCreateNestedManyWithoutVerifitorInput
  }

  export type UsersCreateOrConnectWithoutCreated_manualsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutCreated_manualsInput, UsersUncheckedCreateWithoutCreated_manualsInput>
  }

  export type UsersCreateWithoutUpdated_manualsInput = {
    line_id: string
    firstname: string
    lastname: string
    email: string
    phone: string
    image: string
    role: $Enums.roleEnum
    create_at: Date | string
    update_at: Date | string
    wood_info?: Wood_infoCreateNestedManyWithoutUserInput
    updated_wood_info?: Wood_infoCreateNestedManyWithoutUpdaterInput
    created_manuals?: ManualCreateNestedManyWithoutCreatorInput
    created_classify?: ClassifyCreateNestedManyWithoutCreatorInput
    verify_classify?: ClassifyCreateNestedManyWithoutVerifitorInput
  }

  export type UsersUncheckedCreateWithoutUpdated_manualsInput = {
    u_id?: number
    line_id: string
    firstname: string
    lastname: string
    email: string
    phone: string
    image: string
    role: $Enums.roleEnum
    create_at: Date | string
    update_at: Date | string
    wood_info?: Wood_infoUncheckedCreateNestedManyWithoutUserInput
    updated_wood_info?: Wood_infoUncheckedCreateNestedManyWithoutUpdaterInput
    created_manuals?: ManualUncheckedCreateNestedManyWithoutCreatorInput
    created_classify?: ClassifyUncheckedCreateNestedManyWithoutCreatorInput
    verify_classify?: ClassifyUncheckedCreateNestedManyWithoutVerifitorInput
  }

  export type UsersCreateOrConnectWithoutUpdated_manualsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutUpdated_manualsInput, UsersUncheckedCreateWithoutUpdated_manualsInput>
  }

  export type UsersUpsertWithoutCreated_manualsInput = {
    update: XOR<UsersUpdateWithoutCreated_manualsInput, UsersUncheckedUpdateWithoutCreated_manualsInput>
    create: XOR<UsersCreateWithoutCreated_manualsInput, UsersUncheckedCreateWithoutCreated_manualsInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutCreated_manualsInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutCreated_manualsInput, UsersUncheckedUpdateWithoutCreated_manualsInput>
  }

  export type UsersUpdateWithoutCreated_manualsInput = {
    line_id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    role?: EnumroleEnumFieldUpdateOperationsInput | $Enums.roleEnum
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    wood_info?: Wood_infoUpdateManyWithoutUserNestedInput
    updated_wood_info?: Wood_infoUpdateManyWithoutUpdaterNestedInput
    updated_manuals?: ManualUpdateManyWithoutUpdaterNestedInput
    created_classify?: ClassifyUpdateManyWithoutCreatorNestedInput
    verify_classify?: ClassifyUpdateManyWithoutVerifitorNestedInput
  }

  export type UsersUncheckedUpdateWithoutCreated_manualsInput = {
    u_id?: IntFieldUpdateOperationsInput | number
    line_id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    role?: EnumroleEnumFieldUpdateOperationsInput | $Enums.roleEnum
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    wood_info?: Wood_infoUncheckedUpdateManyWithoutUserNestedInput
    updated_wood_info?: Wood_infoUncheckedUpdateManyWithoutUpdaterNestedInput
    updated_manuals?: ManualUncheckedUpdateManyWithoutUpdaterNestedInput
    created_classify?: ClassifyUncheckedUpdateManyWithoutCreatorNestedInput
    verify_classify?: ClassifyUncheckedUpdateManyWithoutVerifitorNestedInput
  }

  export type UsersUpsertWithoutUpdated_manualsInput = {
    update: XOR<UsersUpdateWithoutUpdated_manualsInput, UsersUncheckedUpdateWithoutUpdated_manualsInput>
    create: XOR<UsersCreateWithoutUpdated_manualsInput, UsersUncheckedCreateWithoutUpdated_manualsInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutUpdated_manualsInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutUpdated_manualsInput, UsersUncheckedUpdateWithoutUpdated_manualsInput>
  }

  export type UsersUpdateWithoutUpdated_manualsInput = {
    line_id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    role?: EnumroleEnumFieldUpdateOperationsInput | $Enums.roleEnum
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    wood_info?: Wood_infoUpdateManyWithoutUserNestedInput
    updated_wood_info?: Wood_infoUpdateManyWithoutUpdaterNestedInput
    created_manuals?: ManualUpdateManyWithoutCreatorNestedInput
    created_classify?: ClassifyUpdateManyWithoutCreatorNestedInput
    verify_classify?: ClassifyUpdateManyWithoutVerifitorNestedInput
  }

  export type UsersUncheckedUpdateWithoutUpdated_manualsInput = {
    u_id?: IntFieldUpdateOperationsInput | number
    line_id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    role?: EnumroleEnumFieldUpdateOperationsInput | $Enums.roleEnum
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    wood_info?: Wood_infoUncheckedUpdateManyWithoutUserNestedInput
    updated_wood_info?: Wood_infoUncheckedUpdateManyWithoutUpdaterNestedInput
    created_manuals?: ManualUncheckedUpdateManyWithoutCreatorNestedInput
    created_classify?: ClassifyUncheckedUpdateManyWithoutCreatorNestedInput
    verify_classify?: ClassifyUncheckedUpdateManyWithoutVerifitorNestedInput
  }

  export type UsersCreateWithoutCreated_classifyInput = {
    line_id: string
    firstname: string
    lastname: string
    email: string
    phone: string
    image: string
    role: $Enums.roleEnum
    create_at: Date | string
    update_at: Date | string
    wood_info?: Wood_infoCreateNestedManyWithoutUserInput
    updated_wood_info?: Wood_infoCreateNestedManyWithoutUpdaterInput
    created_manuals?: ManualCreateNestedManyWithoutCreatorInput
    updated_manuals?: ManualCreateNestedManyWithoutUpdaterInput
    verify_classify?: ClassifyCreateNestedManyWithoutVerifitorInput
  }

  export type UsersUncheckedCreateWithoutCreated_classifyInput = {
    u_id?: number
    line_id: string
    firstname: string
    lastname: string
    email: string
    phone: string
    image: string
    role: $Enums.roleEnum
    create_at: Date | string
    update_at: Date | string
    wood_info?: Wood_infoUncheckedCreateNestedManyWithoutUserInput
    updated_wood_info?: Wood_infoUncheckedCreateNestedManyWithoutUpdaterInput
    created_manuals?: ManualUncheckedCreateNestedManyWithoutCreatorInput
    updated_manuals?: ManualUncheckedCreateNestedManyWithoutUpdaterInput
    verify_classify?: ClassifyUncheckedCreateNestedManyWithoutVerifitorInput
  }

  export type UsersCreateOrConnectWithoutCreated_classifyInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutCreated_classifyInput, UsersUncheckedCreateWithoutCreated_classifyInput>
  }

  export type UsersCreateWithoutVerify_classifyInput = {
    line_id: string
    firstname: string
    lastname: string
    email: string
    phone: string
    image: string
    role: $Enums.roleEnum
    create_at: Date | string
    update_at: Date | string
    wood_info?: Wood_infoCreateNestedManyWithoutUserInput
    updated_wood_info?: Wood_infoCreateNestedManyWithoutUpdaterInput
    created_manuals?: ManualCreateNestedManyWithoutCreatorInput
    updated_manuals?: ManualCreateNestedManyWithoutUpdaterInput
    created_classify?: ClassifyCreateNestedManyWithoutCreatorInput
  }

  export type UsersUncheckedCreateWithoutVerify_classifyInput = {
    u_id?: number
    line_id: string
    firstname: string
    lastname: string
    email: string
    phone: string
    image: string
    role: $Enums.roleEnum
    create_at: Date | string
    update_at: Date | string
    wood_info?: Wood_infoUncheckedCreateNestedManyWithoutUserInput
    updated_wood_info?: Wood_infoUncheckedCreateNestedManyWithoutUpdaterInput
    created_manuals?: ManualUncheckedCreateNestedManyWithoutCreatorInput
    updated_manuals?: ManualUncheckedCreateNestedManyWithoutUpdaterInput
    created_classify?: ClassifyUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type UsersCreateOrConnectWithoutVerify_classifyInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutVerify_classifyInput, UsersUncheckedCreateWithoutVerify_classifyInput>
  }

  export type NoteCreateWithoutClassifyInput = {
    change_result: boolean
    read_status: boolean
    description: string
    create_at: Date | string
    create_by: number
  }

  export type NoteUncheckedCreateWithoutClassifyInput = {
    n_id?: number
    change_result: boolean
    read_status: boolean
    description: string
    create_at: Date | string
    create_by: number
  }

  export type NoteCreateOrConnectWithoutClassifyInput = {
    where: NoteWhereUniqueInput
    create: XOR<NoteCreateWithoutClassifyInput, NoteUncheckedCreateWithoutClassifyInput>
  }

  export type NoteCreateManyClassifyInputEnvelope = {
    data: NoteCreateManyClassifyInput | NoteCreateManyClassifyInput[]
    skipDuplicates?: boolean
  }

  export type UsersUpsertWithoutCreated_classifyInput = {
    update: XOR<UsersUpdateWithoutCreated_classifyInput, UsersUncheckedUpdateWithoutCreated_classifyInput>
    create: XOR<UsersCreateWithoutCreated_classifyInput, UsersUncheckedCreateWithoutCreated_classifyInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutCreated_classifyInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutCreated_classifyInput, UsersUncheckedUpdateWithoutCreated_classifyInput>
  }

  export type UsersUpdateWithoutCreated_classifyInput = {
    line_id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    role?: EnumroleEnumFieldUpdateOperationsInput | $Enums.roleEnum
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    wood_info?: Wood_infoUpdateManyWithoutUserNestedInput
    updated_wood_info?: Wood_infoUpdateManyWithoutUpdaterNestedInput
    created_manuals?: ManualUpdateManyWithoutCreatorNestedInput
    updated_manuals?: ManualUpdateManyWithoutUpdaterNestedInput
    verify_classify?: ClassifyUpdateManyWithoutVerifitorNestedInput
  }

  export type UsersUncheckedUpdateWithoutCreated_classifyInput = {
    u_id?: IntFieldUpdateOperationsInput | number
    line_id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    role?: EnumroleEnumFieldUpdateOperationsInput | $Enums.roleEnum
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    wood_info?: Wood_infoUncheckedUpdateManyWithoutUserNestedInput
    updated_wood_info?: Wood_infoUncheckedUpdateManyWithoutUpdaterNestedInput
    created_manuals?: ManualUncheckedUpdateManyWithoutCreatorNestedInput
    updated_manuals?: ManualUncheckedUpdateManyWithoutUpdaterNestedInput
    verify_classify?: ClassifyUncheckedUpdateManyWithoutVerifitorNestedInput
  }

  export type UsersUpsertWithoutVerify_classifyInput = {
    update: XOR<UsersUpdateWithoutVerify_classifyInput, UsersUncheckedUpdateWithoutVerify_classifyInput>
    create: XOR<UsersCreateWithoutVerify_classifyInput, UsersUncheckedCreateWithoutVerify_classifyInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutVerify_classifyInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutVerify_classifyInput, UsersUncheckedUpdateWithoutVerify_classifyInput>
  }

  export type UsersUpdateWithoutVerify_classifyInput = {
    line_id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    role?: EnumroleEnumFieldUpdateOperationsInput | $Enums.roleEnum
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    wood_info?: Wood_infoUpdateManyWithoutUserNestedInput
    updated_wood_info?: Wood_infoUpdateManyWithoutUpdaterNestedInput
    created_manuals?: ManualUpdateManyWithoutCreatorNestedInput
    updated_manuals?: ManualUpdateManyWithoutUpdaterNestedInput
    created_classify?: ClassifyUpdateManyWithoutCreatorNestedInput
  }

  export type UsersUncheckedUpdateWithoutVerify_classifyInput = {
    u_id?: IntFieldUpdateOperationsInput | number
    line_id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    role?: EnumroleEnumFieldUpdateOperationsInput | $Enums.roleEnum
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    wood_info?: Wood_infoUncheckedUpdateManyWithoutUserNestedInput
    updated_wood_info?: Wood_infoUncheckedUpdateManyWithoutUpdaterNestedInput
    created_manuals?: ManualUncheckedUpdateManyWithoutCreatorNestedInput
    updated_manuals?: ManualUncheckedUpdateManyWithoutUpdaterNestedInput
    created_classify?: ClassifyUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type NoteUpsertWithWhereUniqueWithoutClassifyInput = {
    where: NoteWhereUniqueInput
    update: XOR<NoteUpdateWithoutClassifyInput, NoteUncheckedUpdateWithoutClassifyInput>
    create: XOR<NoteCreateWithoutClassifyInput, NoteUncheckedCreateWithoutClassifyInput>
  }

  export type NoteUpdateWithWhereUniqueWithoutClassifyInput = {
    where: NoteWhereUniqueInput
    data: XOR<NoteUpdateWithoutClassifyInput, NoteUncheckedUpdateWithoutClassifyInput>
  }

  export type NoteUpdateManyWithWhereWithoutClassifyInput = {
    where: NoteScalarWhereInput
    data: XOR<NoteUpdateManyMutationInput, NoteUncheckedUpdateManyWithoutClassifyInput>
  }

  export type NoteScalarWhereInput = {
    AND?: NoteScalarWhereInput | NoteScalarWhereInput[]
    OR?: NoteScalarWhereInput[]
    NOT?: NoteScalarWhereInput | NoteScalarWhereInput[]
    n_id?: IntFilter<"Note"> | number
    c_id?: IntFilter<"Note"> | number
    change_result?: BoolFilter<"Note"> | boolean
    read_status?: BoolFilter<"Note"> | boolean
    description?: StringFilter<"Note"> | string
    create_at?: DateTimeFilter<"Note"> | Date | string
    create_by?: IntFilter<"Note"> | number
  }

  export type ClassifyCreateWithoutNotesInput = {
    status: boolean
    status_verify: $Enums.StatusVerifyEnum
    select_result: string
    result: JsonNullValueInput | InputJsonValue
    create_at: Date | string
    creator: UsersCreateNestedOneWithoutCreated_classifyInput
    verifitor: UsersCreateNestedOneWithoutVerify_classifyInput
  }

  export type ClassifyUncheckedCreateWithoutNotesInput = {
    c_id?: number
    status: boolean
    status_verify: $Enums.StatusVerifyEnum
    select_result: string
    result: JsonNullValueInput | InputJsonValue
    create_at: Date | string
    create_by: number
    verify_by: number
  }

  export type ClassifyCreateOrConnectWithoutNotesInput = {
    where: ClassifyWhereUniqueInput
    create: XOR<ClassifyCreateWithoutNotesInput, ClassifyUncheckedCreateWithoutNotesInput>
  }

  export type ClassifyUpsertWithoutNotesInput = {
    update: XOR<ClassifyUpdateWithoutNotesInput, ClassifyUncheckedUpdateWithoutNotesInput>
    create: XOR<ClassifyCreateWithoutNotesInput, ClassifyUncheckedCreateWithoutNotesInput>
    where?: ClassifyWhereInput
  }

  export type ClassifyUpdateToOneWithWhereWithoutNotesInput = {
    where?: ClassifyWhereInput
    data: XOR<ClassifyUpdateWithoutNotesInput, ClassifyUncheckedUpdateWithoutNotesInput>
  }

  export type ClassifyUpdateWithoutNotesInput = {
    status?: BoolFieldUpdateOperationsInput | boolean
    status_verify?: EnumStatusVerifyEnumFieldUpdateOperationsInput | $Enums.StatusVerifyEnum
    select_result?: StringFieldUpdateOperationsInput | string
    result?: JsonNullValueInput | InputJsonValue
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UsersUpdateOneRequiredWithoutCreated_classifyNestedInput
    verifitor?: UsersUpdateOneRequiredWithoutVerify_classifyNestedInput
  }

  export type ClassifyUncheckedUpdateWithoutNotesInput = {
    c_id?: IntFieldUpdateOperationsInput | number
    status?: BoolFieldUpdateOperationsInput | boolean
    status_verify?: EnumStatusVerifyEnumFieldUpdateOperationsInput | $Enums.StatusVerifyEnum
    select_result?: StringFieldUpdateOperationsInput | string
    result?: JsonNullValueInput | InputJsonValue
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    create_by?: IntFieldUpdateOperationsInput | number
    verify_by?: IntFieldUpdateOperationsInput | number
  }

  export type Wood_infoCreateManyUserInput = {
    w_id?: number
    common_name?: Wood_infoCreatecommon_nameInput | string[]
    eng_name?: Wood_infoCreateeng_nameInput | string[]
    botanical_name: string
    pedigree: string
    place_of_origin: string
    wood_characteristics: string
    anatomical_characteristics: string
    other: string
    status: boolean
    create_at: Date | string
    update_at: Date | string
    update_by: number
  }

  export type Wood_infoCreateManyUpdaterInput = {
    w_id?: number
    common_name?: Wood_infoCreatecommon_nameInput | string[]
    eng_name?: Wood_infoCreateeng_nameInput | string[]
    botanical_name: string
    pedigree: string
    place_of_origin: string
    wood_characteristics: string
    anatomical_characteristics: string
    other: string
    status: boolean
    create_at: Date | string
    update_at: Date | string
    create_by: number
  }

  export type ManualCreateManyCreatorInput = {
    m_id?: number
    topic: string
    description: string
    status: boolean
    image: string
    create_at: Date | string
    update_at: Date | string
    update_by: number
  }

  export type ManualCreateManyUpdaterInput = {
    m_id?: number
    topic: string
    description: string
    status: boolean
    image: string
    create_at: Date | string
    update_at: Date | string
    create_by: number
  }

  export type ClassifyCreateManyCreatorInput = {
    c_id?: number
    status: boolean
    status_verify: $Enums.StatusVerifyEnum
    select_result: string
    result: JsonNullValueInput | InputJsonValue
    create_at: Date | string
    verify_by: number
  }

  export type ClassifyCreateManyVerifitorInput = {
    c_id?: number
    status: boolean
    status_verify: $Enums.StatusVerifyEnum
    select_result: string
    result: JsonNullValueInput | InputJsonValue
    create_at: Date | string
    create_by: number
  }

  export type Wood_infoUpdateWithoutUserInput = {
    common_name?: Wood_infoUpdatecommon_nameInput | string[]
    eng_name?: Wood_infoUpdateeng_nameInput | string[]
    botanical_name?: StringFieldUpdateOperationsInput | string
    pedigree?: StringFieldUpdateOperationsInput | string
    place_of_origin?: StringFieldUpdateOperationsInput | string
    wood_characteristics?: StringFieldUpdateOperationsInput | string
    anatomical_characteristics?: StringFieldUpdateOperationsInput | string
    other?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    wood_image?: Wood_ImageUpdateManyWithoutWood_infoNestedInput
    updater?: UsersUpdateOneRequiredWithoutUpdated_wood_infoNestedInput
  }

  export type Wood_infoUncheckedUpdateWithoutUserInput = {
    w_id?: IntFieldUpdateOperationsInput | number
    common_name?: Wood_infoUpdatecommon_nameInput | string[]
    eng_name?: Wood_infoUpdateeng_nameInput | string[]
    botanical_name?: StringFieldUpdateOperationsInput | string
    pedigree?: StringFieldUpdateOperationsInput | string
    place_of_origin?: StringFieldUpdateOperationsInput | string
    wood_characteristics?: StringFieldUpdateOperationsInput | string
    anatomical_characteristics?: StringFieldUpdateOperationsInput | string
    other?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_by?: IntFieldUpdateOperationsInput | number
    wood_image?: Wood_ImageUncheckedUpdateManyWithoutWood_infoNestedInput
  }

  export type Wood_infoUncheckedUpdateManyWithoutUserInput = {
    w_id?: IntFieldUpdateOperationsInput | number
    common_name?: Wood_infoUpdatecommon_nameInput | string[]
    eng_name?: Wood_infoUpdateeng_nameInput | string[]
    botanical_name?: StringFieldUpdateOperationsInput | string
    pedigree?: StringFieldUpdateOperationsInput | string
    place_of_origin?: StringFieldUpdateOperationsInput | string
    wood_characteristics?: StringFieldUpdateOperationsInput | string
    anatomical_characteristics?: StringFieldUpdateOperationsInput | string
    other?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_by?: IntFieldUpdateOperationsInput | number
  }

  export type Wood_infoUpdateWithoutUpdaterInput = {
    common_name?: Wood_infoUpdatecommon_nameInput | string[]
    eng_name?: Wood_infoUpdateeng_nameInput | string[]
    botanical_name?: StringFieldUpdateOperationsInput | string
    pedigree?: StringFieldUpdateOperationsInput | string
    place_of_origin?: StringFieldUpdateOperationsInput | string
    wood_characteristics?: StringFieldUpdateOperationsInput | string
    anatomical_characteristics?: StringFieldUpdateOperationsInput | string
    other?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    wood_image?: Wood_ImageUpdateManyWithoutWood_infoNestedInput
    user?: UsersUpdateOneRequiredWithoutWood_infoNestedInput
  }

  export type Wood_infoUncheckedUpdateWithoutUpdaterInput = {
    w_id?: IntFieldUpdateOperationsInput | number
    common_name?: Wood_infoUpdatecommon_nameInput | string[]
    eng_name?: Wood_infoUpdateeng_nameInput | string[]
    botanical_name?: StringFieldUpdateOperationsInput | string
    pedigree?: StringFieldUpdateOperationsInput | string
    place_of_origin?: StringFieldUpdateOperationsInput | string
    wood_characteristics?: StringFieldUpdateOperationsInput | string
    anatomical_characteristics?: StringFieldUpdateOperationsInput | string
    other?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    create_by?: IntFieldUpdateOperationsInput | number
    wood_image?: Wood_ImageUncheckedUpdateManyWithoutWood_infoNestedInput
  }

  export type Wood_infoUncheckedUpdateManyWithoutUpdaterInput = {
    w_id?: IntFieldUpdateOperationsInput | number
    common_name?: Wood_infoUpdatecommon_nameInput | string[]
    eng_name?: Wood_infoUpdateeng_nameInput | string[]
    botanical_name?: StringFieldUpdateOperationsInput | string
    pedigree?: StringFieldUpdateOperationsInput | string
    place_of_origin?: StringFieldUpdateOperationsInput | string
    wood_characteristics?: StringFieldUpdateOperationsInput | string
    anatomical_characteristics?: StringFieldUpdateOperationsInput | string
    other?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    create_by?: IntFieldUpdateOperationsInput | number
  }

  export type ManualUpdateWithoutCreatorInput = {
    topic?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    image?: StringFieldUpdateOperationsInput | string
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updater?: UsersUpdateOneRequiredWithoutUpdated_manualsNestedInput
  }

  export type ManualUncheckedUpdateWithoutCreatorInput = {
    m_id?: IntFieldUpdateOperationsInput | number
    topic?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    image?: StringFieldUpdateOperationsInput | string
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_by?: IntFieldUpdateOperationsInput | number
  }

  export type ManualUncheckedUpdateManyWithoutCreatorInput = {
    m_id?: IntFieldUpdateOperationsInput | number
    topic?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    image?: StringFieldUpdateOperationsInput | string
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_by?: IntFieldUpdateOperationsInput | number
  }

  export type ManualUpdateWithoutUpdaterInput = {
    topic?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    image?: StringFieldUpdateOperationsInput | string
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UsersUpdateOneRequiredWithoutCreated_manualsNestedInput
  }

  export type ManualUncheckedUpdateWithoutUpdaterInput = {
    m_id?: IntFieldUpdateOperationsInput | number
    topic?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    image?: StringFieldUpdateOperationsInput | string
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    create_by?: IntFieldUpdateOperationsInput | number
  }

  export type ManualUncheckedUpdateManyWithoutUpdaterInput = {
    m_id?: IntFieldUpdateOperationsInput | number
    topic?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    image?: StringFieldUpdateOperationsInput | string
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    create_by?: IntFieldUpdateOperationsInput | number
  }

  export type ClassifyUpdateWithoutCreatorInput = {
    status?: BoolFieldUpdateOperationsInput | boolean
    status_verify?: EnumStatusVerifyEnumFieldUpdateOperationsInput | $Enums.StatusVerifyEnum
    select_result?: StringFieldUpdateOperationsInput | string
    result?: JsonNullValueInput | InputJsonValue
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    verifitor?: UsersUpdateOneRequiredWithoutVerify_classifyNestedInput
    notes?: NoteUpdateManyWithoutClassifyNestedInput
  }

  export type ClassifyUncheckedUpdateWithoutCreatorInput = {
    c_id?: IntFieldUpdateOperationsInput | number
    status?: BoolFieldUpdateOperationsInput | boolean
    status_verify?: EnumStatusVerifyEnumFieldUpdateOperationsInput | $Enums.StatusVerifyEnum
    select_result?: StringFieldUpdateOperationsInput | string
    result?: JsonNullValueInput | InputJsonValue
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    verify_by?: IntFieldUpdateOperationsInput | number
    notes?: NoteUncheckedUpdateManyWithoutClassifyNestedInput
  }

  export type ClassifyUncheckedUpdateManyWithoutCreatorInput = {
    c_id?: IntFieldUpdateOperationsInput | number
    status?: BoolFieldUpdateOperationsInput | boolean
    status_verify?: EnumStatusVerifyEnumFieldUpdateOperationsInput | $Enums.StatusVerifyEnum
    select_result?: StringFieldUpdateOperationsInput | string
    result?: JsonNullValueInput | InputJsonValue
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    verify_by?: IntFieldUpdateOperationsInput | number
  }

  export type ClassifyUpdateWithoutVerifitorInput = {
    status?: BoolFieldUpdateOperationsInput | boolean
    status_verify?: EnumStatusVerifyEnumFieldUpdateOperationsInput | $Enums.StatusVerifyEnum
    select_result?: StringFieldUpdateOperationsInput | string
    result?: JsonNullValueInput | InputJsonValue
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UsersUpdateOneRequiredWithoutCreated_classifyNestedInput
    notes?: NoteUpdateManyWithoutClassifyNestedInput
  }

  export type ClassifyUncheckedUpdateWithoutVerifitorInput = {
    c_id?: IntFieldUpdateOperationsInput | number
    status?: BoolFieldUpdateOperationsInput | boolean
    status_verify?: EnumStatusVerifyEnumFieldUpdateOperationsInput | $Enums.StatusVerifyEnum
    select_result?: StringFieldUpdateOperationsInput | string
    result?: JsonNullValueInput | InputJsonValue
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    create_by?: IntFieldUpdateOperationsInput | number
    notes?: NoteUncheckedUpdateManyWithoutClassifyNestedInput
  }

  export type ClassifyUncheckedUpdateManyWithoutVerifitorInput = {
    c_id?: IntFieldUpdateOperationsInput | number
    status?: BoolFieldUpdateOperationsInput | boolean
    status_verify?: EnumStatusVerifyEnumFieldUpdateOperationsInput | $Enums.StatusVerifyEnum
    select_result?: StringFieldUpdateOperationsInput | string
    result?: JsonNullValueInput | InputJsonValue
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    create_by?: IntFieldUpdateOperationsInput | number
  }

  export type Wood_ImageCreateManyWood_infoInput = {
    wi_id?: number
    path: string
  }

  export type Wood_ImageUpdateWithoutWood_infoInput = {
    path?: StringFieldUpdateOperationsInput | string
  }

  export type Wood_ImageUncheckedUpdateWithoutWood_infoInput = {
    wi_id?: IntFieldUpdateOperationsInput | number
    path?: StringFieldUpdateOperationsInput | string
  }

  export type Wood_ImageUncheckedUpdateManyWithoutWood_infoInput = {
    wi_id?: IntFieldUpdateOperationsInput | number
    path?: StringFieldUpdateOperationsInput | string
  }

  export type NoteCreateManyClassifyInput = {
    n_id?: number
    change_result: boolean
    read_status: boolean
    description: string
    create_at: Date | string
    create_by: number
  }

  export type NoteUpdateWithoutClassifyInput = {
    change_result?: BoolFieldUpdateOperationsInput | boolean
    read_status?: BoolFieldUpdateOperationsInput | boolean
    description?: StringFieldUpdateOperationsInput | string
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    create_by?: IntFieldUpdateOperationsInput | number
  }

  export type NoteUncheckedUpdateWithoutClassifyInput = {
    n_id?: IntFieldUpdateOperationsInput | number
    change_result?: BoolFieldUpdateOperationsInput | boolean
    read_status?: BoolFieldUpdateOperationsInput | boolean
    description?: StringFieldUpdateOperationsInput | string
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    create_by?: IntFieldUpdateOperationsInput | number
  }

  export type NoteUncheckedUpdateManyWithoutClassifyInput = {
    n_id?: IntFieldUpdateOperationsInput | number
    change_result?: BoolFieldUpdateOperationsInput | boolean
    read_status?: BoolFieldUpdateOperationsInput | boolean
    description?: StringFieldUpdateOperationsInput | string
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    create_by?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UsersCountOutputTypeDefaultArgs instead
     */
    export type UsersCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UsersCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use Wood_infoCountOutputTypeDefaultArgs instead
     */
    export type Wood_infoCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Wood_infoCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ClassifyCountOutputTypeDefaultArgs instead
     */
    export type ClassifyCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ClassifyCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UsersDefaultArgs instead
     */
    export type UsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UsersDefaultArgs<ExtArgs>
    /**
     * @deprecated Use Wood_infoDefaultArgs instead
     */
    export type Wood_infoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Wood_infoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use Wood_ImageDefaultArgs instead
     */
    export type Wood_ImageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Wood_ImageDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ManualDefaultArgs instead
     */
    export type ManualArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ManualDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ClassifyDefaultArgs instead
     */
    export type ClassifyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ClassifyDefaultArgs<ExtArgs>
    /**
     * @deprecated Use NoteDefaultArgs instead
     */
    export type NoteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = NoteDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}