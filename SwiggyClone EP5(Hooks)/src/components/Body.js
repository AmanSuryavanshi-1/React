import React from 'react'
import { useState } from 'react';
import RestaurantCard from './RestaurantCard';
import resList from '../utils/MockData';
// $ 49) Creating a filter for top rated restaurants
//       -> Adding onclick(a JS event) to give functionality
//       -> u can add multiple events too.
//       ~ passing empty list instead of resList
//       

const Body = () =>{
// $ 49.1) Using const we will not be able to change the values which will be displayed in the cards
//       -> so to change and update the values we should use let for these instances

// $ 50) (STATES & HOOKS) When data changes the when we use filter the data should also get changed in UI.
//       -> This is the main problem which react is solving and other framework's are not able to do.
//       -> We have to keep data and UI layer to change together.
//       -> To do this React provides State variable
//       -> For this we will use a react hook known as useState.

// $ 50.1) REACT HOOKS
//   -> are normal JS utility functions
//   -> all these function are stored in nodeModules we import it from there while creating webapp with react 

//   ~ There are two important React Hooks
//   -> There are 2 Most Important hooks which are used almost 99% of times:-
//   -> 50.1.1) useState(); 
//   -> 50.1.2) useEffect();  

// ~50.1.1) useState()
//    a) You have to import it inside react form node modules
//    b) It maintains the state of a component
//    c) import { useState } from 'react';
//    d) local state variable is created inside the scope of component in our case inside Body

// State variable
        const [listOfRestaurants , setListOfRestaurants] = useState(resList);
// Normal JS variable
    //    let listOfRestaurantsJS = [];

//     e) inside [] data are passed it can be null or a object with a no. of restaurants in it
//  -> f) when we do setListOfRestaurants is used to update the list of restaurants in UI also
//  -> g) Then we can add it in onclick functionality by giving filtered list to it :-setListOfRestaurants(filteredList);
//     h) When we click on Top rated restaurants list of restaurants get's filtered according to the logic inside onclick
//     i) Then it is provided to setListOfRestaurants(filteredList) which will then use useState and update the list of restaurants.
//  ~  j) Whenever we want to change the data going to the UI we will give that logic to setListOfRestaurants() and will then change the original data in listOfRestaurants.
//  ~  k) Whenever a state variable changes react ReRender's the component

return(
        <div className="body">
            <div className="search">Search</div>
            <div className='filter'>

                <button className="filter-btn"
                onClick={() => {
                    const filteredList = listOfRestaurants.filter(
                      (res) => res.data.avgRating > 4
                    );
                    setListOfRestaurants(filteredList);
                  }}
                >
                    Top Rated Restaurants
                    </button>
            </div>
            <div className="RestaurantContainer">
            {listOfRestaurants && listOfRestaurants.length > 0 ? (
          listOfRestaurants.map((restaurant) => (
            <RestaurantCard resData={restaurant} key={restaurant.data.id} />
          ))
        ) : (
          <p>No restaurants to display</p>
        )}
            </div>
        </div>
    )
   };

export default Body

// $ 51) React Algorithm 

// $ 51.1) Reconciliation Algorithm / REACT FIBER 
// & React uses something known as Reconciliation Algorithm also known as React Fiber
// & React Reconciliation is the process through which React updates the Browser DOM. 
// & It makes the DOM updates faster in React. 
// & It updates the virtual DOM first and then uses the diffing algorithm to make efficient and optimized updates in the Real DOM.

//    -> suppose we have a RestaurantContainer and we have 7 cards init.
//    -> After using filter and useState only 3 cards  are showed on the browser.
//    -> React uses virtual DOM to achieve this smoothly.

// $ 51.1.1) ACTUAL DOM 
//    -> It is like a representation of actual DOM
//    -> Actual DOM stores the components of a website in a tree structure.
//    -> DOM structure is like  div in div inside there can be a img and a link in it etc.

// $ 51.1.2) VIRTUAL DOM 
//    -> VIRTUAL DOM is not an actual DOM
//    -> It is representation of actual DOM
//    -> It is a normal JS object.
//    -> React uses virtual DOM which is a lightweight version of the DOM. 
//    -> The only difference is the ability to write the screen like the real DOM,
 

// $ 51.1.3) DIFFING ALGORITHM => Diffing is short form for Differences Algorithm 
//    -> It is used to differentiate the DOM Tree for efficient updates.
//    -> Diff algo will calculate the difference between old and new virtual dom and actually update it 
//    -> It occurs after every render cycle. In fact, a new virtual DOM is created after every re-render.