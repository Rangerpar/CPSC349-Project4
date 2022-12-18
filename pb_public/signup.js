import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import pb from '../pocketBase'

const username_ref = useRef(null)
const email_ref = useRef(null)
const password_ref = useRef(null)

await pb.collection('users').create({
        username,
        email,
        password,
      })

naviagte('index.html')
