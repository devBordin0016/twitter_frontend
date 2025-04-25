/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prettier/prettier */
import { useFormik } from 'formik'
import * as Yup from 'yup'

import { colors, InputGlobal } from '../../styles'
import Button from '../Button'
import * as S from './styles'

import { useRegisterMutation } from '../../services/api'

const Signup = () => {
  const [register, { isError, isSuccess, error }] = useRegisterMutation()

  const form = useFormik({
    initialValues: {
      username: '',
      password: '',
      confirmPassword: ''
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .min(5, 'Precisa ter pelo menos 5 caracteres')
        .max(15, 'Precisa ter no máximo 15 caracteres')
        .required('Campo obrigatório'),
      password: Yup.string()
        .min(5, 'Precisa ter pelo menos 5 caracteres')
        .max(15, 'Precisa ter no máximo 15 caracteres')
        .required('Campo obrigatório'),
      confirmPassword: Yup.string()
        .required('Campo obrigatório')
        .oneOf([Yup.ref('password')], 'As senhas estão diferentes')
    }),
    onSubmit: (values) => {
      register({
        username: values.username,
        password: values.password
      })
    }
  })

  const getErrorMessage = (fieldName: string, message?: string) => {
    const isChanged = fieldName in form.touched
    const isInvalid = fieldName in form.errors

    if (isChanged && isInvalid) return message
    return ''
  }


  return (
    <S.Content>
      {isSuccess ? (
        <S.MessageSuccess>Conta criada com sucesso</S.MessageSuccess>
      ) : (
        <>
          <S.Title>Criar sua conta</S.Title>
          <form onSubmit={form.handleSubmit}>
            <InputGlobal>
              <input
                type="text"
                name="username"
                id="username"
                placeholder=""
                value={form.values.username}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <label htmlFor="username">Usuário</label>
              <small>{getErrorMessage('username', form.errors.username)}</small>
            </InputGlobal>
            <InputGlobal>
              <input
                type="password"
                name="password"
                id="password"
                placeholder=""
                value={form.values.password}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <label htmlFor="password">Senha</label>
              <small>{getErrorMessage('password', form.errors.password)}</small>
            </InputGlobal>
            <InputGlobal>
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                placeholder=""
                value={form.values.confirmPassword}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <label htmlFor="confirmPassword">Confirmar senha</label>
              <small>
                {getErrorMessage(
                  'confirmPassword',
                  form.errors.confirmPassword
                )}
              </small>
            </InputGlobal>
            {isError && error && 'status' in error && error.status === 400 && (
              <>
                {(error.data as any)?.username?.[0] ===
                  'Enter a valid username. This value may contain only letters, numbers, and @/./+/-/_ characters.' ? (
                  <small>
                    Usuário inválido. Use apenas letras, números e @/./+/-/_.
                  </small>
                ) : (
                  <small>Usuário já existe. Tente outro.</small>
                )}
              </>
            )}
            <Button
              type="submit"
              bgColor={colors.darkGray}
              title="Avançar para criar conta"
              textColor={colors.white}
            >
              Avançar
            </Button>
          </form>
        </>
      )}
    </S.Content>
  )
}

export default Signup
