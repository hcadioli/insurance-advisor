# Insurance Advisor
Find here a specific solution that determines the user insurance needs based on her personal information inputs. 
This simple API is able to provide an [insurance advice](https://github.com/hcadioli/insurance-advisor#insurance-advice) for users accordingly to their risk profile.

## Requirements

Firstly, you will need to have [Node.js installed](https://nodejs.org/en/download/). (Version >= 10.0)

To check if you have Node.js installed, run this command in your terminal:

```
node -v
```

## Getting started

Clone this repository by running:
```
https://github.com/hcadioli/insurance-advisor.git
```


```
npm install
npm start
```

## Get results

To obtain the user insurance advice, you can make a `POST` request to the following endpoint:
`http://localhost:3000/insurance-advisor/insurance-advice` 

Using the following request body:
```json
{
  "age": 38,
  "dependents": 2,
  "house": {"ownership_status": "owned"},
  "income": 0,
  "marital_status": "married",
  "risk_questions": [0, 1, 0],
  "vehicle": {"year": 2018 }
}
```

Another option is to use curl:

```
curl --location --request POST 'http://localhost:3000/insurance-advisor/insurance-advice' \
--header 'Content-Type: application/json' \
--header 'Cookie: sessionId=f3f01696-1684-48a3-8328-5415d87de4f4' \
--data-raw '{
  "age": 38,
  "dependents": 2,
  "house": {"ownership_status": "owned"},
  "income": 0,
  "marital_status": "married",
  "risk_questions": [0, 1, 0],
  "vehicle": {"year": 2018 }
}'
```
## Motivations
During this project, a few strategic decisions were made regarding technical and business aspects.

### Technical considerations
#### HTTP framework:
The chosen http framework was [Koa](https://koajs.com/) due to its advantages in handling middlewares. 
For example, it avoids callback hell and it is better to handle errors through try/catch.

#### Schema validation
The main reason to choose Ajv as an input validator is that it allows you to validate an agnostic JSONSchema.
Which means that with a standard [JSONSchema](http://json-schema.org/draft/2019-09/json-schema-core.html) one can validate the request body.
Even more, it makes easier to maintain the domain untouched and without application rules.
Finally, one can directly reuse the JSONSchema to generate an [OpenAPI documentation](https://swagger.io/specification/).

### Business considerations

#### Insurace Advice
Each line of the insurance advice is composed by insurance categories which can map to several insurance levels (`economic`, `regular`, `responsible`, `ineligible`). See the following example:

```json
{
    "auto": "regular",
    "disability": "ineligible",
    "home": "economic",
    "life": "regular"
}
``` 

The actions to determine an insurance advice are:
- Calculate risk scores based on user personal information;
- Process risk scores to obtain the insurance lines;
- Add ineligile lines (if they exist);

Based on those results, it is possible to assemble the final insurance advice structure to that user.
