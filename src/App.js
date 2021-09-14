import {useSelector, useDispatch} from 'react-redux'
import {actionCreators} from './state/index'
import {bindActionCreators} from 'redux'

function App() {
  const account = useSelector(state => state.account)
  const dispatch = useDispatch()
  const { depositeMoney, withdrawMoney} = bindActionCreators(actionCreators, dispatch)

  return (
    <div className="App">
      <header>
        Hey user, you account balance id {account} EARTH Currency.
      </header>
      <section>
        <button onClick={() => depositeMoney(1000)}>Deposite</button>
        <button onClick={() => withdrawMoney(1000)}>Withdraw</button>
      </section>
    </div>
  );
}

export default App;
