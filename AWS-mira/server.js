// import entire SDK
const AWS = require('aws-sdk');
AWS.config.update({
  accessKeyId: "AKIAIB7J4P7NUOURG5CA",
  secretAccessKey: "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",
  region: "us-east-2"
});
const rds = new AWS.RDS();

const params = {};

rds.describeDBInstances(params, function(err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else     console.log(data);           // successful response
});