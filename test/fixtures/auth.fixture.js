const authPerson = {
  'email': 'foo@bar.com',
  'phone_number': '1234567890',
  'user_name': 'foo',
  'password': 'bar',
  'first_name': 'Jeffrey',
  'last_name': 'Dahmer',
  'address': '123 myAdress',
  'city': 'Denver',
  'state': 'CO',
  'zip' : '80211',
  'role_id': 1
}

const mockRequest = {
  url: '/api/v1/persons/login',
  headers: {
    auth: 'Bearer jlksdjfklsgsdfhsdgfdj'
  }
}

const nextMock = function() {
  return 'called next()';
}

export { authPerson };
export { mockRequest };
export { nextMock };
