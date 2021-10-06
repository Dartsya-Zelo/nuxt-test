
async function login() {
  return {
    token: "ok123123123123123123hhf123"
  }
}

async function user() {
  return {
    user: {
      id: 22,
      name: "Tester"
    }
  }
}
async function logout() {
  return {}
}

export { login, user, logout };
