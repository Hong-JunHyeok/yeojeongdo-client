import { toast } from "react-toastify";

interface JoinDataType {
  id: string;
  password: string;
  confirmPassword: string;
  birthDate: string;
  sex: string;
  name: string;
}

const joinValidation = (joinData: JoinDataType) => {
  const { id, password, confirmPassword, birthDate, sex, name } = joinData;

  const hasId = !!id.trim();
  const hasPassword = !!password.trim();
  const hasConfirmPassword = !!confirmPassword.trim();
  const hasBirth = !!birthDate.trim();
  const hasSex = !!sex.trim();
  const hasName = !!name.trim();

  if (
    !hasId ||
    !hasPassword ||
    !hasConfirmPassword ||
    !hasBirth ||
    !hasSex ||
    !hasName
  ) {
    if (!hasId) {
      toast.error("아이디가 입력되지 않았습니다.");
      return false;
    } else if (!hasPassword) {
      toast.error("비밀번호가 입력되지 않았습니다.");
      return false;
    } else if (!hasConfirmPassword) {
      toast.error("비밀번호 확인이 입력되지 않았습니다.");
      return false;
    } else if (!hasBirth) {
      toast.error("생년월일이 입력되지 않았습니다.");
      return false;
    } else if (!hasSex) {
      toast.error("성별이 입력되지 않았습니다.");
      return false;
    } else if (!hasName) {
      toast.error("이름이 입력되지 않았습니다.");
    } else {
      throw new Error(`UnHandled Join Error`);
    }
  }

  if (password !== confirmPassword) {
    toast.error(`비밀번호가 일치하지 않습니다 ${password}|${confirmPassword}`);
    return false;
  }

  const idReg = /^[a-zA-Z0-9]{4,20}$/g;
  const passwordReg = /^[a-zA-Z0-9]{8,50}$/g;
  const birthReg = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;

  if (!idReg.test(id)) {
    toast.error("아이디는 4 ~ 20자 사이여야 합니다.");
    return false;
  } else if (!passwordReg.test(password)) {
    toast.error("비밀번호는 8 ~ 50자 사이여야 합니다.");
    return false;
  } else if (!birthReg.test(birthDate)) {
    toast.error(
      "생년월일은 yyyy-mm-dd모양에 맞게 알맞은 값을 입력해야 합니다."
    );
  } else {
    return true;
  }
};

export default joinValidation;
