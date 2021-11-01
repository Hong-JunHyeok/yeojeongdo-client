import Button from "components/Common/Button/Button";
import Form from "components/Common/Form/Form";
import Input from "components/Common/Input/Input";
import useInput from "hooks/useInput";
import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { JoinFormContainer } from "./joinFormStyles";
import joinValidation from "utils/joinValidation";
import useAuth from "hooks/redux/useAuth";

const JoinForm = () => {
  const [id, onChangeId] = useInput("");
  const [password, onChangePassword] = useInput("");
  const [confirmPassword, onChangeConfirmPassword] = useInput("");
  const [birth, onChangeBirth, setBirth] = useInput("");
  const [name, onChangeName] = useInput("");
  const [sex, setSex] = useState<string>("Male");

  const { join } = useAuth();

  const handleSubmit = useCallback(async () => {
    const joinData = {
      id,
      password,
      confirmPassword,
      birthDate: birth,
      sex,
      name,
    };
    if (joinValidation(joinData)) {
      // TODO : HTTP connection
      join(joinData);
    }
  }, [id, password, confirmPassword, birth, name, sex]);

  useEffect(() => {
    if (birth) {
      setBirth(
        birth.replace(/-/g, "").replace(/(\d{4})(\d{2})(\d{2})/, "$1-$2-$3")
      );
    }
  }, [birth, setBirth]);

  return (
    <Form hasSubmit submitText="회원가입" onSubmit={handleSubmit}>
      <JoinFormContainer>
        <h1>회원가입</h1>
        <p>여정도에 가입해서 당신의 여정을 공유해보세요</p>
        <div>
          아이디
          <Input
            type="text"
            placeholder="아이디를 입력해주세요."
            value={id}
            onChange={onChangeId}
          />
        </div>
        <div>
          비밀번호
          <Input
            type="password"
            placeholder="비밀번호를 입력해주세요."
            value={password}
            onChange={onChangePassword}
          />
        </div>
        <div>
          비밀번호 확인
          <Input
            type="password"
            placeholder="비밀번호를 다시 입력해주세요."
            value={confirmPassword}
            onChange={onChangeConfirmPassword}
          />
        </div>

        <div className="birth">
          생년월일
          <Input
            type="text"
            placeholder="생년월일을 입력해 주세요."
            value={birth}
            onChange={onChangeBirth}
          />
        </div>
        <div className="flexBox">
          <div className="name">
            이름
            <Input
              type="text"
              placeholder="이름을 입력해 주세요."
              value={name}
              onChange={onChangeName}
            />
          </div>
          <div className="sex">
            성별
            <div className="sexButtons">
              <Button
                type="button"
                onClick={() => {
                  setSex("Male");
                }}
                style={
                  sex !== "Male"
                    ? { background: "white", color: "black" }
                    : null
                }
              >
                남성
              </Button>
              <Button
                type="button"
                onClick={() => {
                  setSex("Female");
                }}
                style={
                  sex !== "Female"
                    ? { background: "white", color: "black" }
                    : null
                }
              >
                여성
              </Button>
            </div>
          </div>
        </div>
        <Link className="link-to-login" to="/login">
          이미 회원이신가요?
        </Link>
      </JoinFormContainer>
    </Form>
  );
};

export default JoinForm;
