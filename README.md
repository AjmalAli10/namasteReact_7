# namasteReact_7 # Finding the Path

## What are various ways to add images into our App? Explain with code examples.

### In App.js I want to add img tag and wanted to display it. There are two ways I can do it in react.

#### 1. using cdn link or Ingenreal image link -
```

<img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" alt="image" />
```
#### 2. using import - 
```
Import Logo from "./src/assets/logo.svg";

<img src={Logo} alt="image" />

```
## What would happen if we do `console.log(useState())`?

### `return with array of two elements - [any DataType, function]`
>  **I will Take example to explain with array without distructring**

```
const use_State = useState({});

console.log(use_State) // [{}, function]

const state = use_State[0];

console.log(state) // {}


const setState = use_State[1];

console.log(setState) // Return - dispatchsetState(fiber, queue, action){
                                                  //.....
                                                  //....
                                                }
and This is setter funtion  to set new data to sate using the setState(any Data)
````
## How will `useEffect` behave if we `don't add a dependency array` ?
### In short, It depends on how are we using `useEffect`?

#### I will explain with example - 

The Nature of useEffect is to get called after initial render or every render;
```
With empty dependency and along with setter funtion.

const [index, setIndex] = useState(0);

    useEffect(()=>{
        console.log("useEffect");
        set()
    }, []);
    
    async function set(){
        await setIndex(index+ 1)
     };
     
    console.log("render", index)
    
    The output is -
    1. render 0
    2. useEffect
    3. render 1
```
```
Without dependency and along with setter funtion.

const [index, setIndex] = useState(0);

    useEffect(()=>{
        console.log("useEffect");
        set()
    });
    
    async function set(){
       await setIndex(index+ 1)
    };
    
    console.log("render", index);
    
    The output is -
    1. render 0
    2. useEffect
    **point 1 and point 2 happens in a same component call.**
    3. render 1
    4. effect
    .....
    ...
    ...
    ...
    ...
    **again this will render because the is no dependency and it will go into a LOOP.**
    
```
