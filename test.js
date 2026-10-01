import http from 'k6/http'
import { check } from 'k6'

export default function () {
  const res = http.get("http://localhost:3000/api/v1/ping")
  check(res, {
    'status is 200': (r) => r.status === 200,
  })
}

export const options = {
  stages: [
    { duration: '30s', target: 10 },
    { duration: '30s', target: 10 },
    { duration: '0s', target: 0 },
  ],
}
