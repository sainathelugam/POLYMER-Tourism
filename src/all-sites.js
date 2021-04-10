/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';
import '@polymer/iron-image/iron-image.js';




class AllSites extends PolymerElement {
    static get template() {
        return html `


        

            <!---css--->
            <style is="custom-style">


            h2{
              margin-left:30px;
            }
            p{
              margin-left:10px;
              margin-right:10px;
            }

            iron-image {
              margin-left:10px;
              margin-right:10px;
              width: 1670px;
              height: 700px;
              
            }
     
      
      /**navbar css */
      .wrapper {
        height: 65px;
        display: flex;
        align-items: center;
        justify-content:center;/**The justify-content property aligns the flexible container's items when the items do not use all available space on the main-axis (horizontally). */
        background-color: green;
      }
      
      nav {
        display: flex;/**The Flexible Box Layout Module, makes it easier to design flexible responsive layout structure without using float or positioning. */
        width: 90%;
      }
      
      ul li a {
        margin-left: 1.5em;
      }
      
     
        .logo {
          margin-right: auto;
           color:Lightgreen;
          text-decoration:none !important;
          margin-top:10px;
        }
      
      
      ul {
        display: flex;
        list-style: none;
        margin: 0px;
        padding: 0px;
      }
      
      a {
        text-decoration: none;
        color: #ffffff;
        position: relative;
        font-size: 1.25em;
      }
      
      a::after {
        content:"";
        top: 80%;
        border-bottom: 2px solid #F8E71C;
        transition: all 0.35s;
        position: absolute;
      }
      
      a:hover::after {
        transition: all 0.35s;
      }
      
      a::after {
        right: 50%;
        left: 50%;
      }
      
      a:hover::after {
        right: 0;
        left: 0;
      }
      
      @media (max-width: 1024px) {
        .wrapper {
          height: auto;
        }
        
        nav {
          flex-direction: column;
          align-items: center;
        }
        
        a.logo {
          margin-top: 1.5em;
          margin-bottom: 1.5em;
          margin-right: 0px;
        }
        
        ul {
          width: 100%;
          margin-bottom: 1em;
          justify-content: flex-start;
        }
        
        ul li a {
          margin-left: 0px;
        }
      }
      
      @media (max-width: 768px) {
        a.logo {
          margin: 1.5em;
        }
        
        ul {
          flex-direction: column;
        }
        
        ul li {
          margin: -0.5em;
          text-align: center;
        }
        
        ul li a {
          margin-left: 0px;
        }
      }

      @media (max-width: 360px) {
        .wrapper {
          height: auto;
        }
        iron-image {
          
          width: 320px;
          height: 150px;
          
        }
      
        p{
          font-size:11px;
        }
        h2{
          font-size:20px;
        }
        h1{
          font-size:25px;
        }
        
      }
      
      </style>
     

  <!----app location---->
  <app-location route="{{route}}"></app-location>
<!---navbar--->
<div class="wrapper">
  <nav>
    <a href="#" class="logo">South India Toursim</a>
    
    <ul>
      <li>
      <a name="home" href="[[rootPath]]home"><paper-button >Home</paper-button></a>
      </li>
      <li>
      <a name="booking" href="[[rootPath]]booking"><paper-button >Tourist Booking</paper-button></a>
      </li>
      <li>
      <a name="sites" href="[[rootPath]]sites"><paper-button >Sites to Visit</paper-button></a>
      </li>
      <li>
      <a name="dashboard" href="[[rootPath]]dashboard"><paper-button >Dashboard</paper-button></a>
      </li>
      <li>
      <a name="logout" href="[[rootPath]]login"><paper-button >logout</paper-button></a>
      </li>
    </ul>
  </nav>

  </div>

  <h1 align="center">POPULAR DESTINATIONS IN SOUTH INDIA</h1>

  <h2>HYDERABAD</h2>
  <div class="card">
<p>Hyderabad is the perfect city to cater to the dreams and wishes of a curious traveler. From charming markets, delectable cuisines and numerous places to explore, the city has a lot to offer. Located in the Indian state of Telangana, Hyderabad is a quintessential metropolitan city. The economy of the city continues to flourish with time, without compromising on the integrity and cultural heritage of the city. The rustic, narrow lanes and Nawabi architecture of the old city make it impossible to believe that you are in one of the most technologically progressive cities in India. \r\n\r\nAs you venture out to the other parts of Hyderabad and Secunderabad, you will be surprised with glitzy malls, swanky multiplexes and offices of more companies than you could count. A shopaholic’s paradise, Hyderabad is also known as ‘City of Pearls’ for being a historically famous pearl and diamond trading center. It is home to numerous historical places such as Charminar, Mecca Masjid, and Falaknuma Palace. Though it is popular for its ‘Hyderabadi biryani,' the city will amaze you with its varied cuisine, the quality of which is hard to match elsewhere. The city has attracted people belonging to various cultures, religions, and regions, each of whom contributes to the legacy of the city in their own way.</p>
     </div>
<iron-image sizing="cover" preload src="../images/bddha.jpg"></iron-image>

<h2>CHENNAI</h2>

<p> Bounded by the Bay of Bengal on the east, the Indian Ocean to the south and the Arabian Sea on the west, Tamil Nadu depicts the heart of Dravidian culture in India. Along with its glorious past, vibrant culture, rich history, and natural bounty in the form of beaches and clear skies it is also the 11th largest state in India.

It is the historical home of the famous Chola, Chera, Pallava and Pandya kingdoms which blossomed in ancient and medieval India. Tamil Nadu is renowned for its classical dance form - Bharatanatyam, rich jewel colored silks of Kancheepuram, intricately carved wood, stone pillars, and brass temple lamps. Known as the 'Land of Temples the state harbors 274 of India’s holiest Shiva temples, and 108 are devoted to Vishnu. Also, five shrines devoted to the five Vedic elements (Earth, Wind, Fire, Water, and Ether) are found here.</p>
   
<iron-image sizing="cover" preload src="../images/chennai (1).jpg"></iron-image>


<h2>KERALA</h2>
<p> Popularly known as "God's Own Country", Kerala is one of the most sought after tourist destinations in the world. This exotic land is renowned for its rich cultural heritage, tropical climate, palm fringed beaches, misty hill stations, health resorts, wild life sanctuaries, enchanting art forms, grand festivals and, the serenity of the backwaters and the emerald blue Arabian Sea which promise an unforgettable holidaying experience to travellers. According to "National Geographic Travel", the leading travel Magazine, Kerala is one of the 50 must see destinations of a lifetime and one of the 10 paradises of the World.
</p>
     
<iron-image sizing="cover" preload src="../images/kerala.webp"></iron-image>

<h2>ALLEPPEY</h2>
<p>Alappuzha also known by its former name Alleppey, is the administrative headquarters of Alappuzha District in the Indian State of Kerala. Alappuzha is a city and a municipality in Kerala with an urban population of 174,164 and ranks third among the districts in literacy rate in the State of Kerala. In 2016, the Centre for Science and Environment rated Alappuzha as the cleanest town in India. Alappuzha is considered to be the oldest planned city in this region and the lighthouse built on the coast of the city is the first of its kind along the Laccadive Sea coast.
</p>
     
<iron-image sizing="cover" preload src="../images/Alleppey.jpg"></iron-image>

<h2>BANGALORE</h2>
<p>Karnataka, the land of ultimate natural beauty and rich cultural heritage is situated in the Southern India, bounded by Maharashtra and Goa in the north, Andhra Pradesh on the east and Tamil Nadu and Kerala on the south. The western coast of the state is splashed by Arabian Sea, which is dotted with picturesque beaches. Karnataka is blessed with the lush green Western Ghats, roaring Jog waterfalls, densely forested Sahayadri, and the rich wildlife sanctuaries like Nagarhole and Bandipur. Apart from its awe-inspiring natural beauty, majestic architecture, and pilgrimage sties, Karnataka is also renowned for its software industry, Carnatic music, and the exciting festivals that make it one of the most celebrated states in India.
</p>

<iron-image sizing="cover" preload src="../images/Mahabalipuram.jpg"></iron-image>

<h2>VARKALA</h2>
<p>Varkala is the only town in Kerala where cliffs are found adjacent to the Arabian Sea. These Cenozoic sedimentary formation cliffs are a unique geological feature on the otherwise flat Kerala coast, and are known among geologists as Varkala Formation. The cliffs have been declared a national geological monument by the Geological Survey of India for their protection, maintenance, promotion, and the enhancement of geotourism. There are numerous water spouts and spas on the sides of these cliffs. In 2015, the Ministry of Mines, the Government of India, and the Geological Survey of India (GSI) declared Varkala Cliffs a geo-heritage site.Varkala is under Varkala police jurisdiction.
                  
</p>

<iron-image sizing="cover" preload src="../images/var.jpg"></iron-image>
 `;

    }


}

window.customElements.define('all-sites', AllSites);