import React, { Component } from 'react';
import { Button, Grid, Header, Form, Message, Image, Segment} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import "semantic-ui-css/semantic.min.css";






 class AboutSite extends Component {
    
   
        
   render() {
     console.log('hello')
        return (
          <div className='about'>
            <div class="ui form segment">
              
            <Header as='h2' color='black' textAlign='center' >
               <img  class="ui small circular image" src='https://res.cloudinary.com/dfgz2wntk/image/upload/v1598043093/socialogowhite_p8ql3j.png'  /> <div className="login">About Events</div>
             </Header>

          <div class="ui floating  message">
          <p>I'm baby poke adaptogen mustache disrupt af irony scenester man braid. Hell of echo park church-key
             cold-pressed heirloom woke tumeric XOXO photo booth everyday carry activated charcoal. Intelligentsia 
             letterpress listicle kinfolk meditation pinterest salvia subway tile forage gentrify chillwave taiyaki. 
             90's man bun stumptown cronut artisan, four loko DIY disrupt knausgaard blog selvage.

            Af wolf bitters ramps, coloring book put a bird on it marfa helvetica knausgaard gastropub etsy.
            Art party hashtag tumeric mumblecore, thundercats semiotics pour-over vexillologist. Vice single-origin coffee 
            fingerstache succulents prism. Asymmetrical echo park banjo shabby chic pinterest craft beer. Pabst adaptogen
            hammock yr master cleanse.

            Leggings ennui chambray roof party schlitz iPhone poutine offal yuccie bespoke shaman gochujang brunch you probably 
            haven't heard of them dreamcatcher. Venmo celiac brunch whatever, keytar photo booth gastropub flexitarian semiotics. 
            Pickled hashtag biodiesel, 3 wolf moon palo santo meditation tattooed wolf squid chartreuse +1 ethical. Selfies 
            cornhole try-hard prism pug blue bottle coloring book affogato poutine waistcoat cronut jean shorts drinking 
            vinegar vegan.
            Glossier wayfarers kickstarter thundercats XOXO VHS trust fund quinoa pork belly copper mug flannel tattooed 
            readymade crucifix. Edison bulb chambray next level bushwick 90's you probably haven't heard of them, church-key butcher. You probably haven't heard 
            them fingerstache green juice chia small batch selvage slow-carb heirloom roof party tattooed beard franzen 
            craft beer. Cred hammock single-origin coffee stumptown. Crucifix migas butcher man braid succulents before they
             sold out whatever pickled vaporware subway tile kinfolk synth franzen ugh farm-to-table. Adaptogen XOXO wayfarers cloud bread.</p>
        </div>
        </div>

        <div className='developers'>
        <div class="ui form segment">
            <Header as='h2' color='black' textAlign='center'>
              <div className="login">Meet the Developers </div>
             </Header>
      

      <div class="ui cards">
        <div class="card">
    <a class="image">
      <img   src="https://i.annihil.us/u/prod/marvel/i/mg/6/a0/55b6a25e654e6/standard_xlarge.jpg"/>
    </a> 
    <div class="content">
      <a class="header">AkashDeep(AK) Rattan</a>
      <div class="meta">
        <a>Full Stack Web Developer</a>
      </div>
      <div class="description1">
        <b>AK is a Web Developer from California</b>
        <Message>
        <i class="linkedin icon"></i> <a href='https://www.linkedin.com/in/akashrattan/'>Linkedin</a>
              </Message>
      </div>
    </div>
  </div>
  <div class="card">
    <a class="image">
      <img src="https://i.annihil.us/u/prod/marvel/i/mg/3/50/537ba56d31087/standard_xlarge.jpg"/>
    </a>
    <div class="content">
      <a class="header">Jordan Wiebe</a>
      <div class="meta">
        <a>Full Stack Web Developer</a>
      </div>
      <div class="description1">
        <b>Jordan is a Web Developer from Utah.</b>
        <Message>
        <i class="linkedin icon"></i> <a href='https://www.linkedin.com/in/jordan-wiebe-54496b187/'>Linkedin</a>
              </Message>
      </div>
    </div>
  </div>
  <div class="card">
    <a class="image">
      <img src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/008cmv_com_crd_01.jpg"/>
    </a>
    <div class="content">
      <a class="header">Gabrielle Atwood</a>
      <div class="meta">
        <a>Full Stack Web Developer</a>
      </div>
      <div class="description1">
        <b>Gabrielle is a Web Developer from Utah.</b>
        <Message>
        <i class="linkedin icon"></i> <a href='https://www.linkedin.com/in/gabrielle-atwood-261892156/'>Linkedin</a>
              </Message>
      </div>
    </div>
  </div>
  <div class="card">
    <a class="image">
      <img class="ui massive circular image" src= "https://i.annihil.us/u/prod/marvel/i/mg/5/c0/537ba730e05e0/standard_xlarge.jpg"/>
    </a>
    <div class="content">
      <a class="header">Kaden Klein</a>
      <div class="meta">
        <a>Full Stack Web Developer</a>
      </div>
      <div class="description1">
       <b> Kaden is a Web Developer from Utah.</b>
        <Message>
        <i class="linkedin icon"></i> <a href='https://www.linkedin.com/in/kaden-k-584720116/'>Linkedin</a>
              </Message>
      </div>
    </div>
  </div>
  <div class="card">
    <a class="image">
      <img src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/011blw_com_crd_01.jpg"/>
    </a>
    <div class="content">
      <a class="header">Natalie Gutierrez Smith</a>
      <div class="meta">
        <a>Full Stack Web Developer</a>
      </div>
      <div class="description1">
        <b>Natalie is a Web Developer from Utah.</b>
        <Message>
        <i class="linkedin icon"></i> <a href='#'>Linkedin</a>
              </Message>
      </div>
    </div>
  </div>
</div>
</div>
</div>
</div>





  
    
   
      
)


       
  
                     
              
    }
    }


export default AboutSite;