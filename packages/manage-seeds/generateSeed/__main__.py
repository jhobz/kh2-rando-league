from http import HTTPStatus

def main(args):
    name = args.get('name')
    if not name:
        name = 'world'

    return {
        'body': {
            'statusCode': HTTPStatus.ACCEPTED,
            'body': f'Hello {name}!'
        }
    }