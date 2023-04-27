import axios,{AxiosResponse} from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
interface ApiResponse{
  records:{
    id:string;
    createdTime:string;
    fields:{
      username:string;
      password:string;
    };
  }[];
}
const token = "keyfXgn8PL6pB3x32";

async function validateCredentials(username: string, password: string): Promise<boolean> {
  const response: AxiosResponse<ApiResponse> = await axios.get('https://api.airtable.com/v0/appjWdL7YgpxIxCKA/credenitals?maxRecords=3&view=Grid%20view', {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });
  const record = response.data.records.find(record=>record.fields.username == username && record.fields.password === password);
  return !!record;

}
function LoginPage(){
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');
const dispatch = useDispatch();
const navigate = useNavigate();
async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
  event.preventDefault();
  const isValid = await validateCredentials(username, password);
  if (isValid) {
    console.log('successful');
    dispatch({type:'LOGIN'});
  
    
    navigate('/landing-page');
  } else {
    alert('Please check ur Credentials');
  }
}
return (
  <div className='container'>
  <form onSubmit={handleSubmit} className='form'>
    <label>
      Username:
      <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
    </label>
    <label>
      Password:
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
    </label>
    <button type="submit">Login</button>
  </form>
  </div>
);


}
export default LoginPage;