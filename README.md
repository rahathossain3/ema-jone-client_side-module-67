# Ema-Jhon-Shopping Cart with Auth   -module-59


module 49 

### Add Shopping Cart with using Local storage data

### calculate local storage data & showing result in order summary 


<!-- new add file from 53 -->

# Route

##        রাউটার সেটাপ করার জাস্ট পাঁচটা স্টেপ-
            ১. প্রথমেই তোমাকে BrowserRouter ইউজ করতে হবে index.js এ। 
            ২. তারপর আমরা App.js এ গিয়ে Routes সেট করবো। 
            ৩. তার ভিতরে থাকবে এক একটা Route  
            ৪. সেইসব Route এর মধ্যে থাকবে path 
            ৫. আর Route এর মধ্যে element নামে আরেকটা prop সেট করে দিবো তাহলেই কাজ শেষ। 



## Video-6

## Tartary Operator
#### Code example:
    {/* {condition ? true : false} */}

#### code example:
 {name.length > 20 ? name.slice(0, 20) : name}


 ## fontawesome icon

### code 
    import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


 {/* add fontawesome icon -------------------- */}
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>


## video 8

### Add children {dynamic element}

        Cart.js
    {props.children}

### Shopping.js

    <Cart cart={cart}>
            <Link to="/orders">
                    <button>Review Order</button>
            </Link>
        </Cart>

### button navigation 

  const navigate = useNavigate();

  <button onClick={() => navigate('/inventory')}>Proceed checkout</button>


<!-- new file+++------------------------- -->

## Module 59 

#### from er reload of korte  

<!-- event handler  -->
    const handleCreateUser = event => {
                event.preventDefault();
        }

<!-- form basic structure  -->
    <form onSubmit={handleCreateUser}>

    </form>

    
# projects steps

## project create steps --

    * 1. create a new firebase project in console.firebase.google.com 
    * 2. npm install firebase
    * 3. create firebase.init.js and import getAuth to export auth
    * 4. firebase settings > Authentication >  enable Email and password auth
    * 5. Create Login, SignUp component, setup route.
    * 6. Attach from field handler and from submit handler
    * 7. npm install --save react-firebase-hooks
    * 8. useCreateUserWithEmailAndPassword(auth) from react-firebase-hooks
    * 9. if user is created redirect to the expected page.
    * 10. useSignInWithEmailAndPassword(auth)  for Login
    * 11. Create RequireAuth component ==> check user exists also track user location.
    * 12. in route wrap protected Component  by using Require Auth Component
 



## firebase hosting steps-----------------------
    * 1. npm install -g firebase-tools (one time for your computer)
    * 2. firebase login (one time for your computer)
    * 3. firebase init (on time for each project )
    * 4. npm run build (every time you want to deploy) (build your project)
    * 5. firebase deploy (every time you want to deploy)


