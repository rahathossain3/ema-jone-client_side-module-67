# Ema-Jhon-Shopping Cart with Router    -module-53

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

### 
