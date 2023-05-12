import React from "react";
import { Link } from "react-router-dom";
import BreadCrumb from "../../../src/components/BreadCrumb";
import Meta from "../../../src/components/Meta";
import Container from "../../../src/components/Container";
import CustomInput from "../../../src/components/CustomInput";
import './style.css';

const Login = () => {
  return (
    <>
      <Meta title={"Login | Camaleão Store "} />
      <BreadCrumb title="Login" />

      <Container class1="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">LOGIN</h3>
              <form action="" className="d-flex flex-column gap-15">
                <CustomInput type="email" name="email" placeholder="Email" />
                <CustomInput
                  type="password"
                  name="password"
                  placeholder="Password"
                />
                
                <div>
                  <Link to="/forgot-password">Esqueceu sua senha?</Link>

                  <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                    <button className="button border-0" type="submit">
                      Login
                    </button>

                    <Link to="/signup" className="button inscrever-se">
                    Inscrever-se
                    </Link>

                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

      </Container>

    </>
  );
};

export default Login;
