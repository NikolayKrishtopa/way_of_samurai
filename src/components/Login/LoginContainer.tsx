import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Login from './Login';
import { handleSubmitLoginReq } from '../../redux/authReducer';
import { LoginDataType } from '../../models/models';

type LoginContainerProps = {
  handleSubmitLoginReq: (
    values: LoginDataType,
    failureRedirect: () => void,
    successRedirect: () => void
  ) => void;
};

function LoginContainer(props: LoginContainerProps) {
  const { handleSubmitLoginReq } = props;
  const navigate = useNavigate();

  const successRedirect = () => {
    navigate('/profile');
  };
  const failureRedirect = () => {
    navigate('/login');
  };

  return (
    <Login
      onSubmit={(values) =>
        handleSubmitLoginReq(values, successRedirect, failureRedirect)
      }
    />
  );
}

export default connect(
  () => {
    return {};
  },
  { handleSubmitLoginReq }
)(LoginContainer);
