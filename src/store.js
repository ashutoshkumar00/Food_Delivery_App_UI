import { configureStore } from '@reduxjs/toolkit'
import ProductSlice from './Components/ProductSlice/ProductSlice'

const store = configureStore({

    reducer:{
        product:ProductSlice
    }
})

export default store
