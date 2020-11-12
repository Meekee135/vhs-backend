# VHS Backend

This page only has information related to project development.

# Operations

## Installation

1. Install [NodeJS](https://nodejs.org/en/)
1. Run `npm install` in the project root

## Building

To build the project, run `npm run build`.

## Running

To run the project, run `npm run start`.

## Testing

To run the tests, run `npm run test`.

## Deployment

Deployment to Heroku will be performed automatically after a push to the specific git branch:

-   dev - deployment to dev environment
-   staging - deployment to staging environment
-   master - deployment to production environment

_Warning_: Deployment process is not implemented yet.

# Architecture

## Terminology

_services_ is a collection of functionality dedicated to a specific domain. Services include all the business logic of the app. The main part of the application.

_database_ is a layer that contains all required database entities and repositories. It should not contain any business logic.

_gateway_ is a layer that provides endpoints (routes) connected to services (business logic). It should not contain any business logic.

## Main Services

_Movie service_

-   Creation, reading, updating of movie.

_Comment service_

-   Creation, reading of movie comment.

## Gateways and clients

VHS backend is exposed via HTTP gateway using [NestJS](https://nestjs.com/) as a framework.

_Warning_:
Please neither make any other non-HTTP-related code dependent on NestJS nor implement business logic in the gateway layer.

Swagger documentation (`/api/v1/docs/`) can be used as a low-level GUI.

# Development

## Conventions

-   Services can only use serializable data structures for communication with each other:
    this assures that services can be pulled into separate servers easily.

-   All dependencies must be declared explicitly and should not be imported directly. Please adhere to the dependency inversion principle.

-   Persistence layers (in most cases, database connections) should be treated as external services. One should hide persistence-related implementation details.

# Testing

Testing was done only for services that contain all required logic. Gateway and Database layers will be tested in the future.

