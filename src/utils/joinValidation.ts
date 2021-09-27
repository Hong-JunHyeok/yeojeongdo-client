interface JoinDataType {
  id: string;
  password: string;
  passwordCheck: string;
  birth: string;
  gender: "MAN" | "WOMAN";
}

const joinValidation = (joinData: JoinDataType) => {
  const { id, password, passwordCheck, birth, gender } = joinData;

  const hasId = !!id.trim();
  const hasPassword = !!password.trim();
  const hasPasswordCheck = !!passwordCheck.trim();
  const hasBirth = !!birth.trim();
  const hasGender = !!gender.trim();

  if (!hasId || !hasPassword || !hasPasswordCheck || !hasBirth || !hasGender) {
    if (!hasId) {
      console.error("The ID has not been delivered.");
      return false;
    } else if (!hasPassword) {
      console.error("The Password has not been delivered.");
      return false;
    } else if (!hasPasswordCheck) {
      console.error("The Password Check has not been delivered.");
      return false;
    } else if (!hasBirth) {
      console.error("The Birth Check has not been delivered.");
      return false;
    } else if (!hasGender) {
      console.error("The Gender Check has not been delivered.");
      return false;
    } else {
      throw new Error(`UnHandled Join Error`);
    }
  }

  if (password !== passwordCheck) {
    console.error("The password doesn't match.");
    return false;
  }

  const idReg = /^[a-zA-Z0-9]{4,20}$/g;
  const passwordReg = /^[a-zA-Z0-9]{8,50}$/g;
  const birthReg = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;
};

export default joinValidation;
