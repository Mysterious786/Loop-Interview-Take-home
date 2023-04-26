import { useEffect, useState } from 'react';
import axios from 'axios';
import {Stack,Autocomplete,TextField, Button} from "@mui/material"

interface Restaurant{
    id:string;
    createdTime:string;
    fields:{
        Name:string;
    };
}


const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

  const [value,setValue] = useState<string | null>(null);
  useEffect(() => {
    const fetchRestaurants = async () => {
      const response = await axios.get('https://api.airtable.com/v0/appjWdL7YgpxIxCKA/restaurants?maxRecords=3&view=Grid%20view', {
        headers: {
          Authorization: 'Bearer keyfXgn8PL6pB3x32'
        }
      });
      setRestaurants(response.data.records);
    };
    fetchRestaurants();
  }, []);

  const array:any =[];
  restaurants.map((restaurant)=>{
    array.push(restaurant.fields.Name);

  })
  const storeValue = value;
  const googleMapAdd = ()=>{
    console.log(storeValue);
  }
  
  

  return (
    <div className='autocomplete-container'>
      <h1>Restaurant Dashboard</h1>
      <Stack spacing={2} width='250px'>
        <Autocomplete  options={array} renderInput={(params)=><TextField {...params}/>}
        value={value}
        onChange={(event:unknown, newValue: string| null)=>setValue(newValue)} freeSolo
        />
      </Stack>
      <Button variant="contained" color="success" onClick={()=>googleMapAdd()}>
  Add
</Button>

    </div>
  );
};

export default RestaurantList;

