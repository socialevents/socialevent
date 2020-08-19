import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'
import "semantic-ui-css/semantic.min.css";

 class Register extends Component {
    constructor(props){
        super(props)
        this.state={
            name: '',
            email: '',
            gender: '',
            state: '',
            password: ''
            
        }


        
        this.register=this.register.bind(this)
    }

    
    
    
    
    
    register(name, email, gender, state, password){
        let user = {"name": name, "email": email, "gender": gender, "state": state, "password" : password}
        axios.post('/api/users/create', user).then(res=>{
                this.props.login(res.data.user);
                this.props.history.push('/dashboard');
            }).catch(res=>{
               
                console.log(res)
            })
    }


    render() {
        return (
            <div class="ui form segment">
            <Header as='h2' color='black' textAlign='center'>
               <img class="ui massive image"src='https://res.cloudinary.com/dfgz2wntk/image/upload/v1597780245/logo3icon_snbatb.png'  /> Register your new account
             </Header>
             <div class="field">
   <label>Name</label>
   <input type="text" name="name" placeholder="Name" onChange={event=>{this.setState({name: event.target.value})}} required></input>
 </div>

 <div class="field">
   <label>Email</label>
   <input type="text" name="email" placeholder="Email" onChange={event=>{this.setState({email: event.target.value})}} required></input>
 </div>

 
 <div class="field">
 <div class="field">
   <select>
     <option value="">Gender</option>
     <option value="2">Male</option>
     <option value="1">Female</option>
     <option value="0">Unicorn</option>
   </select>
 </div>
   </div>
   <div class="field">
     <label>State</label>
     <select class="ui fluid dropdown">
       <option value="">State</option>
   <option value="AL">Alabama</option>
   <option value="AK">Alaska</option>
   <option value="AZ">Arizona</option>
   <option value="AR">Arkansas</option>
   <option value="CA">California</option>
   <option value="CO">Colorado</option>
   <option value="CT">Connecticut</option>
   <option value="DE">Delaware</option>
   <option value="DC">District Of Columbia</option>
   <option value="FL">Florida</option>
   <option value="GA">Georgia</option>
   <option value="HI">Hawaii</option>
   <option value="ID">Idaho</option>
   <option value="IL">Illinois</option>
   <option value="IN">Indiana</option>
   <option value="IA">Iowa</option>
   <option value="KS">Kansas</option>
   <option value="KY">Kentucky</option>
   <option value="LA">Louisiana</option>
   <option value="ME">Maine</option>
   <option value="MD">Maryland</option>
   <option value="MA">Massachusetts</option>
   <option value="MI">Michigan</option>
   <option value="MN">Minnesota</option>
   <option value="MS">Mississippi</option>
   <option value="MO">Missouri</option>
   <option value="MT">Montana</option>
   <option value="NE">Nebraska</option>
   <option value="NV">Nevada</option>
   <option value="NH">New Hampshire</option>
   <option value="NJ">New Jersey</option>
   <option value="NM">New Mexico</option>
   <option value="NY">New York</option>
   <option value="NC">North Carolina</option>
   <option value="ND">North Dakota</option>
   <option value="OH">Ohio</option>
   <option value="OK">Oklahoma</option>
   <option value="OR">Oregon</option>
   <option value="PA">Pennsylvania</option>
   <option value="RI">Rhode Island</option>
   <option value="SC">South Carolina</option>
   <option value="SD">South Dakota</option>
   <option value="TN">Tennessee</option>
   <option value="TX">Texas</option>
   <option value="UT">Utah</option>
   <option value="VT">Vermont</option>
   <option value="VA">Virginia</option>
   <option value="WA">Washington</option>
   <option value="WV">West Virginia</option>
   <option value="WI">Wisconsin</option>
   <option value="WY">Wyoming</option>
     </select>
   </div>
   <div class="field">
   <label>Password</label>
   <input name="password" type="password" onChange={event=>{this.setState({password: event.target.value})}} required></input>
 </div>
 <div class="inline field">
   <div class="ui checkbox">
     <input name="terms" type="checkbox"></input>
     <label>I agree to the terms and conditions</label>
     <div class="ui divider"></div>
     <button class="ui button" type="submit">Submit</button>
   </div>
   </div>

 
         
</div>
        )
    }
}

export default Register;