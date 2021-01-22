import React from 'react';
import './SigninForm.css';
import Signin from "../Signin/Signin";
import AgenceSignin from "../Signin/AgenceSignin";
const SigninForm = () => {
  return (
    <div>
      <div className="scene">
  <div className="card">
    <div className="card__face card__face--front">
      {/* <img src="https://i.loli.net/2019/11/23/cnKl1Ykd5rZCVwm.jpg" /> */}
      <Signin />
    </div>
    <div className="card__face card__face--back">
      {/* <img src="https://i.loli.net/2019/11/16/cqyJiYlRwnTeHmj.jpg" /> */}
      <AgenceSignin />
    </div>
  </div>
</div>
    </div>
  );
}

export default SigninForm;
