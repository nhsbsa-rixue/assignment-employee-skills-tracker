import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import {
  DynamoDBDocumentClient,
} from "@aws-sdk/lib-dynamodb";
import config from "../config";

const dbclient = new DynamoDBClient({
  region: config.AWS_REGION
});
const dynamoDbClient = DynamoDBDocumentClient.from(dbclient);

const setupDynamoDBClient = async (app) => {
  app.use((req: Req, res, next) => {
    req.dynamoDbClient = dynamoDbClient;
    next();
  });
};

export default setupDynamoDBClient;
