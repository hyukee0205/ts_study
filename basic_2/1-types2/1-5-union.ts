{
  /**
   *  Union Types: OR
   */

  type Direction = 'left' | 'right' | 'up' | 'down';
  function move(direction: Direction) {
    console.log(direction);
  }
  move('down');

  type TitleSize = 8 | 16 | 32;
  const title: TitleSize = 16;

  // function: login -> success, fail
  type SuccessState = {
    response: {
      body: string;
    };
  };
  type FailState = {
    reason: string;
  };
  type LoginState = SuccessState | FailState ;

  function login(): LoginState {
    return {
      response: {
        body: 'logged in!',
      }
    }
  }


  // printLoginState(state: LoginState)
  // success -> 🎉 body
  // fail -> 😭 reason

  function printLoginState(state: LoginState): void {
    if('response' in state) {
      console.log(`🎉 ${state.response.body}`);
    } else{
      console.log(`😭 ${state.reason}`)
    }
  }



}