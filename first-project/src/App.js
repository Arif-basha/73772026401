
import './App.css';
<link rel="stylesheet" type="" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"/>

function App() {
  return (
    <div className="Input">
      <h1>Train Booking</h1>
      <div className="Pro">
        <label for="" name="text1">From</label>
        <input type="text" name="" value=""/>
        <br/>
        <br/>
        <label for="" name="text1">To</label>
        <input type="text" name="" value=""/>
        <br/>
        <br/>
        <label for="" name="text1">Date</label>
        <input type="text" name="" value=""/>

      <br/>
      <br/>
        <br/>
      <input type="button" className="btn1" value="View Trains"/>
      </div>
      <br/>
      <br/>
        <br/>
      <table class="table">
      
   <thead>
      <tr>
         <th>T No</th>
         <th>Train Name</th>
         <th>From</th>
         <th>Destination</th>
         <th>Time</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>1</td>
         <td>
            Chennai Express
            
         </td>
         <td>
            Chennai
            
         </td>
         <td>
            Coimbatore
         </td>
         <td>
            23:00
            
         </td>
      </tr>
      <tr>
      <td>2</td>
         <td>
            Namakkal Express
           
         </td>
         <td>
            Namakkal
            
         </td>
         <td>
            Coimbatore
            
         </td>
         <td>
            20:00
            
         </td>
      </tr>
      <tr>
         <td>3</td>
         <td>
            Nagercoil Express
            
         </td>
         <td>
            Nagercoil
          
         </td>
         <td>
            Madurai
            
         </td>
         <td>
            14:00
            
         </td>
      </tr>
      <tr>
         <td>4</td>
         <td>
            Egmore Express
            
         </td>
         <td>
            Chennai
            
         </td>
         <td>
            Bangalore
            
         </td>
         <td>
            12:00
            
         </td>
      </tr>
           <tr>
         <td>5</td>
         <td>
           Mangalore Express
            
         </td>
         <td>
            Hyderabad 
            
         </td>
         <td>
            Mangalore
            
         </td>
         <td>
            11:25
            
         </td>
      </tr>
     <tr>
         <td>6</td>
         <td>
           UP Express
            
         </td>
         <td>
            Uttar Pradesh
            
         </td>
         <td>
            West Bengal
            
         </td>
         <td>
            10:26
            
         </td>
      </tr>
   </tbody>
</table>
      
    </div>
  );
}

export default App;
