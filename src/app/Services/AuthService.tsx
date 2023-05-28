const loginWithEmailAndPassword = (email: string, password: string) => {
  let res;
  if (email === 'admin@thesame.com' && password === '123456') {
    res = true;
    return res;
  }
  res = false;
  return res;
};

export { loginWithEmailAndPassword };
