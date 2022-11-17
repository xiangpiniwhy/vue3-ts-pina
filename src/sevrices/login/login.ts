import hyRequest from '../../sevrices/index'

export function accountLogin(account: any) {
  return hyRequest.post({
    url: '/login',
    data: account
  })
}

export function getUserInfoById(id: number) {
  return hyRequest.get({
    url: `/users/${id}`
  })
}

export function getUserMenusByRoleId(id: number) {
  return hyRequest.get({
    url: `role/${id}/menu`
  })
}
