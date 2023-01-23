import axios from "axios";

export function SignInPost(body) {
    const response = axios.post("http://localhost:5000/sign-in", body);
    return response;
}

export function SignUpPost(body) {
  const response = axios.post("http://localhost:5000/sign-up", body);
  return response;
}
