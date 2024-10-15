import { configureStore } from "@reduxjs/toolkit";

// Try different import statements based on your file structure:
// Option 1: If chatSlice.js is in the same directory
import chatReducer from "./chatSlice";

// Option 2: If chatSlice.js is in a parent directory
// import chatReducer from "../chatSlice";

// Option 3: If you're using a different file name
// import chatReducer from "./chatReducer";


const store = configureStore({
    reducer: {
      chat: chatReducer,
    },
  });
  
export default store 
