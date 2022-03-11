
# WIP: Fake ATM API

Application that simulates an automatic teller machine that automates the delivery of paper money

## Tech Stack

Express, Typescript, bcyptjs, json-web-token and typeorm.


## Run Locally

Clone the project

```bash
  git clone https://github.com/tiago-santos-dev/fake-atm-api.git
```

Go to the project directory

```bash
  cd fake-atm-api
```

Install dependencies

```bash
  npm install 
  # or
  yarn install
```

Create an .env file in the project root, adding the environment variables (model available in .env.example)

Database host, port and credentials
```
 DB_TYPE
 DB_HOST
 DB_PORT
 DB_USER
 DB_PASS
 DB_NAME
```
Key used for token generation
```
PRIVATE_KEY
```

Use the following command to run the migrations

```bash
  npm run typeorm migration:run
  # or
  yarn typeorm migration:run
```



Run the project

```bash
  npm run dev
  # or 
  yarn dev
```

## Front-end

 - [repository link](https://github.com/tiago-santos-dev/fake-atm)

 ## Database Class Diagram

[![ATM-drawio.png](https://i.postimg.cc/636MxjF5/ATM-Page-2-drawio.png)](https://postimg.cc/cKjRQmsV)


## License

[MIT](https://choosealicense.com/licenses/mit/)

