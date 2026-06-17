/**
 * Account module API client.
 * ABP Account endpoints: register, send-password-reset-code, reset-password.
 */
import { api } from './axios'

export interface RegisterDto {
  appName: string
  userName: string
  emailAddress: string
  password: string
  returnUrl?: string
  returnUrlHash?: string
}

export interface SendPasswordResetCodeDto {
  appName: string
  email: string
  returnUrl?: string
  returnUrlHash?: string
}

export interface ResetPasswordDto {
  userId: string
  resetToken: string
  password: string
}

const APP_NAME = 'React'

export const accountApi = {
  register: (input: Omit<RegisterDto, 'appName'>) =>
    api.post('/account/register', { ...input, appName: APP_NAME }),

  sendPasswordResetCode: (input: Omit<SendPasswordResetCodeDto, 'appName'>) =>
    api.post('/account/send-password-reset-code', {
      ...input,
      appName: APP_NAME,
    }),

  resetPassword: (input: ResetPasswordDto) =>
    api.post('/account/reset-password', input),
}
