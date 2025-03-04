# Changelog

## 2.1.2

-   upgrade the runtime to version 1.2.4

## 2.1.1

-   upgrade the runtime to version 1.0.8

## 2.1.0

-   the `httpServer` configuration moved from `modules` to `infrastructure`
-   the `apiKey` in the `httpServer` infrastructure is now mandatory

## 2.0.8

-> SDK 1.1.5

-   open source release

## 2.0.7

-> SDK 1.1.4

-   preparations for open source release

## 2.0.6

-   update OpenAPI docs

## 2.0.5

-   use DATABASE\_\_DB_NAME (aliased to DATABASE_NAME) instead of ACCOUNT for configuring the MongoDB database
    > for backwards compatibilitiy you can still use ACCOUNT
-   the `httpEndpointEventPublisher` module was renamed to `webhooks`

## 2.0.4

-   upgrade NodeJS to version 16.13.0 (LTS)
-   send CORS header for invalidJsonInPayload error

## 2.0.3

-   simplify CORS policy and disable it by default (allow everthing by setting env var `MODULES__HTTP_SERVER__CORS__ORIGIN` to `true`)
-   upgrade the runtime to version 1.0.4

## 2.0.2

-> SDK 1.1.3

-   upgrade the runtime to version 1.0.2

## 2.0.1

-> SDK 1.1.2

-   the `Monitoring/Support` endpoint now additionally returns the runtime version as part of its `version` property
-   the `Monitoring/Version` endpoint now additionally returns the runtime version

## 2.0.0

-   upgrade the runtime to open source version 1.0.1
-   upgrade Node.js to 16.10.0

**breaking changes**

-   the structure of some data has changed significantly => the connector has to be deleted and recreated from scratch
-   renamed coreSync module to sync
-   the coreLibrary part of the configuration was renamed to transportLibrary (only affected when using a custom config file)

## 1.3.2

-   upgrade the runtime version to 2.0.6

## 1.3.1

-> SDK 1.1.1

-   upgrade the runtime version to 2.0.5

## 1.3.0

-> SDK 1.1.0

-   upgrade the runtime version to 2.0.1
-   tokens can now be ephemeral (not saved in DB)

## 1.2.12

-   upgrade the runtime version to 1.8.4
-   exceptions in modules will not crash the connector anymore

## 1.2.11

-   upgrade the runtime version to 1.7.13
-   errors in the CoreSync module will not crash the connector anymore

## 1.2.10

-   upgrade the runtime version to 1.7.11

## 1.2.9

-   upgrade the runtime version to 1.7.10
-   upgrade the mongodb library to 1.0.4. Authentication without username an password fails if you pass an `authSource` in the database connection string

## 1.2.8

-> SDK 1.0.5

-   return status-code 201 for the routes `/api/v1/RelationshipTemplates/:id/Token` and `/api/v1/Files/:id/Token` with accept set to `image/png` and `application/json`

## 1.2.7

-   upgrade the runtime version to 1.7.1

## 1.2.6

-   added the possibility to provide a custom config file
    -   mount the file inside the container and specify the file location in the `CUSTOM_CONFIG_LOCATION` environment variable

## 1.2.5

-> SDK 1.0.4

-   upgrade runtime version to 1.7.0
-   `/api/v1/Files/:id/Token` supports an expiresAt query parameter to override the default behaviour
-   `/api/v1/RelationshipTemplates/:id/Token` supports an expiresAt query parameter to override the default behaviour

## 1.2.4

-> SDK 1.0.3

-   `/Monitoring/Support` is now showing the identityInfo of the connector

## 1.2.3

-   `/Monitoring/Support` is not showing the platformClientSecret anymore

## 1.2.2

-   `/health` checks if the Connector is authorized on the Enmeshed backend

## 1.2.1

-> SDK 1.0.2

-   upgrade the runtime to version 1.6.4
-   clientId and clientId are checked on connector startup
-   `/api/v1/Account/LastCompletedSyncRun` renamed to `/api/v1/Account/SyncInfo`

## 1.2.0

-   provided `Auto Accept Relationship Creation Changes` module.
    -   enable by setting `MODULES__AUTO_ACCEPT_RELATIONSHIP_CREATION_CHANGES__ENABLED` to "true"

## 1.1.0

-   upgrade the runtime to version 1.5.6
-   required setting the PLATFORM_CLIENT_ID and PLATFORM_CLIENT_SECRET

## 1.0.7

-   upgrade the runtime to version 1.5.5

## 1.0.6

-   upgrade the runtime to version 1.5.4

## 1.0.5

-   provided openapi docs for the `/api/v1/Account/LastCompletedSyncRun` Route

## 1.0.4

-   upgrade the runtime to version 1.2.0

## 1.0.3

-> SDK 1.0.1

-   Added /api/v1/Account/LastCompletedSyncRun Route
-   upgrade nodejs to 16.5.0

## 1.0.2

-   tested on the new backend

## 1.0.1

-   fix concurrent requests on the `/api/v1/Account/Sync` route
