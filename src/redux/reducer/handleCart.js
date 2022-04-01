const initialState = {
    products : []
}
const handleCart = (state = initialState,action) => {
    switch (action.type) {
        case 'ADDITEM': {
           let newList = [...state.products];
           let newProduct = action.payload;
            // check product exist
            const exist = newList.find((oldProduct) =>oldProduct.id ===newProduct.id)
            if(exist) {
                newList=newList.map((oldProduct) =>{
                    return (oldProduct.id === newProduct.id ? {...oldProduct, qty: oldProduct.qty+1} : oldProduct);
                })
                return {
                    ...state,
                    products: newList
                }
            }else{
                newList.push({...newProduct,qty:1});
                return {
                    ...state,
                    products: newList,
                }
            }
            break;
        }
        case 'DELETEITEM':{
            let newList = [...state.products];
            let Product = action.payload;
            // check product exist
            const exist = newList.find((oldProduct) =>oldProduct.id ===Product.id)
            if(exist.qty ===1) {
                newList = newList.filter((product) =>{
                    return product.id !== Product.id;
                })
                return {
                    ...state,
                    products: newList
                }
            }else{
                newList=newList.map((oldProduct) =>{
                    return (oldProduct.id === Product.id ? {...oldProduct, qty: oldProduct.qty-1} : oldProduct);
                })
                return {
                    ...state,
                    products: newList
                }
            }
            
        }
        default:
            return state;
    }
}
export default handleCart