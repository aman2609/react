import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        items:[]
    },
    reducers:{
        addItem: (state, action) => {
            console.log("In add Item");
            console.log(state.items);
            flag = false
            state.items = current(state).items.map(obj => {
                console.log(obj.item);
                console.log(action.payload);
                
                
                if (obj.id == action.payload.card.info.id){
                    flag = flag || true
                    return {
                        'item': obj.item,
                        'id': obj.item.card.info.id,
                        'count': obj.count+1
                    }
                }
                return obj
            })
            if (flag == false){
                state.items.push({
                    'item':action.payload,
                    'id':action.payload.card.info.id,
                    'count':1
                });
            }
            
            console.log(state.items);
            console.log("Out add Item");
        },
        removeItem: (state, action) => {
            flag = false
            find =-1
            
            state.items = current(state).items.map((obj, index) => {
                console.log(obj.item);
                console.log(action.payload);
                
                
                if (obj.item == action.payload){
                    flag = flag || true
                    if(obj.count != 1){
                        return {
                            'item': obj.item,
                            'id': obj.id,
                            'count': obj.count-1
                        }
                    }else{
                        find = index
                    }
                    
                }
                return obj
            })
            if (find != -1){
                state.items.splice(find, 1)
            }
        },
        clearCart: (state) => {
            state.items=[]
        }
    }

})

export const {addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;