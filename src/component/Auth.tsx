import { useAuth } from "../hooks/useAuth";
import { useEffect } from "react";
import { isEmpty } from "lodash";
import { firebaseLogin } from "../action/auth";
import Loading from "./common/Loading";
import { connect } from "react-redux";

const Auth = (props: any) => {
  const { login }: any = useAuth();

  useEffect(() => {
    if (!isEmpty(props.user.user)) {
      login(props.user.user);
    }
  }, [props.user]);

  return (
    <>
      <div>
        {props.user.isLogging && <Loading />}
        {!props.user.isLogging && (
          <button
            onClick={props.firebaseLogin}
            className="border w-full rounded-full"
          >
            <div className="content mx-auto flex items-center space-x-2 text-center w-fit p-2">
              <img
                src="https://www.svgrepo.com/show/355037/google.svg"
                className="icon"
                alt=""
              />{" "}
              <span>Login with Google</span>
            </div>
          </button>
        )}
      </div>
    </>
  );
};

const mapDispatchToProps = (dispatch: any, state: any) => {
  return {
    firebaseLogin: () => dispatch(firebaseLogin()),
  };
};

const mapStateToProps = (state: any) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
