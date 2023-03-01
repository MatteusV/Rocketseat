import { useForm } from 'react-hook-form'
import { Container, ContainerForm } from './style'
// import md5 from 'md5'

import { api } from '../../lib/axios'

interface LoginProps {
  email: string
  password: string
}

export function Login() {
  const { register, handleSubmit } = useForm()

  async function handleLoginUser(data: LoginProps) {
    const { email, password } = data
    // const password = md5(data.password)

    await api
      .post('login', {
        email,
        password,
      })
      .then((response) => {
        if (response.status === 200) {
          localStorage.setItem('id_user', response.data[0].id)

          alert('Login realizado com sucesso')
          window.location.href = 'http://localhost:5173/'
        } else {
          alert('Email ou senha erradas')
        }
      })
  }

  return (
    <Container>
      <h1>Login</h1>
      <ContainerForm>
        <form action="" onSubmit={handleSubmit(handleLoginUser)} method="post">
          <div>
            <input type="email" placeholder="email" {...register('email')} />
          </div>
          <div>
            <input
              type="password"
              placeholder="senha"
              {...register('password')}
            />
          </div>

          <input type="submit" value="Login" />
        </form>
      </ContainerForm>
    </Container>
  )
}
