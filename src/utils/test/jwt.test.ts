import { expect, test } from 'vitest'
import {generateToken, verifyToken} from '../jwt'
test('generateToken', () => {
  const token = generateToken({id: 1, name: 'John Doe'})
  console.log(token)
  console.log(verifyToken(token))
})

