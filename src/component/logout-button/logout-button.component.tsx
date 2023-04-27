import { useDispatch } from 'react-redux';

function LogoutButton() {
  const dispatch = useDispatch();

  function handleLogout() {
   
    dispatch({ type: 'LOGOUT' });
  }

  return (
    <button type="button" onClick={handleLogout}>
      Logout
    </button>
  );
}

export default LogoutButton;
