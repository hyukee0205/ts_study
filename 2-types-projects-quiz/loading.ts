{
  /**
   * Print Loading State
   */
  type LoadingState = {
    state: 'loading';
  };

  type SuccessState = {
    state: 'success';
    response: {
      body: string;
    };
  };

  type FailState = {
    state: 'fail';
    reason: string;
  };
  type ResourceLoadState = LoadingState | SuccessState | FailState;

  function printLoginState (command:ResourceLoadState) {
    switch(command.state) {
      case 'loading':
        console.log(command.state);
        break;
      case 'success':
        console.log(command.response.body);
        break; 
      case 'fail':
        console.log(command.reason); 
        break;
      default:
        throw new Error(`unknown state: ${command}`);
    }
  }
  printLoginState({ state: 'loading' }); // 👀 loading...
  printLoginState({ state: 'success', response: { body: 'loaded' } }); // 😃 loaded
  printLoginState({ state: 'fail', reason: 'no network' }); // 😱 no network
}
