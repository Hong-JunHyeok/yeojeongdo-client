import { toast } from "react-toastify";

interface LoginDataType {
  id: string;
  password: string;
}

const loginValidation = (loginData: LoginDataType) => {
  const { id, password } = loginData;

  const hasId = !!id.trim();
  const hasPassword = !!password.trim();

  if (!hasId || !hasPassword) {
    if (!hasId) {
      toast.error("아이디가 입력되지 않았습니다.");
      return false;
    } else if (!hasPassword) {
      toast.error("비밀번호가 입력되지 않았습니다.");
      return false;
    } else {
      throw new Error(`UnHandled Login Error`);
    }
  }

  const idReg = /^[a-zA-Z0-9]{4,20}$/g;
  const passwordReg = /^[a-zA-Z0-9]{8,50}$/g;

  if (!idReg.test(id)) {
    toast.error("아이디는 4 ~ 20자 사이여야 합니다.");
    return false;
  } else if (!passwordReg.test(password)) {
    toast.error("비밀번호는 8 ~ 50자 사이여야 합니다.");
    return false;
  } else {
    return true;
  }
};

export default loginValidation;
