import json
import boto3 
dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('cloud-resume-test')


def lambda_handler(event, context):
    
    response = table.get_item(Key={
        'id': "1"
    })
    views = response['Item']['views']
    
    views = views + 1
    print(views)
    response = table.put_item(Item = {
        'id' : '1',
        'views': views
    })
    return views
 
print(lambda_handler(4, 5))
      
'''
def lambda_handler(event, context):
    # TODO implement
    return {
        'statusCode': 200,
        'body': json.dumps('Hello from Lambda!')
    }
 '''      