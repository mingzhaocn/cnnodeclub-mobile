export function checkStatus(response: Response): Response {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    const error = new Error(response.statusText)
    error['response'] = response
    throw error
  }
}

export function parseJSON(response: Response): any {
  return response.json()
}