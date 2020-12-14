# Insurance Advisor
Find here a specific solution that generates the user insurance needs based on her personal information inputs. 
This simple API is able to determine the insurance needs from users accordingly to their risk profile[1].

## Requirements

Firstly, you will need to have [nodejs installed](https://nodejs.org/en/download/).

## Getting started

```
npm install
npm run dev
```

## Motivations
During this project, a few strategic decisions were made regarding technical and business aspects.

### Technical considerations
#### HTTP framework:
The chosen http framework was Koa due to it's possibility to handle middlewares. 
This way, it avoids callback hell and it is better to handle errors through try/catch. 

#### Schema validation
The main reason to choose Ajv as an input validator is that it allows you to validate an agnostic JSONSchema.
Which means that with a standard [JSONSchema](http://json-schema.org/draft/2019-09/json-schema-core.html) one can validate the request body.
Even more, it makes easier to maintain the domain untouched and without application rules.
Finally, one can directly reuse the JSONSchema to generate an [OpenAPI documentation](https://swagger.io/specification/).

### Business considerations
To calculate the risk profile there was an implementation of:
- Risk score calculator;
- Eligibility checks;

Based on those results, it is possible to assemble the final insurance advice structure to that user.
