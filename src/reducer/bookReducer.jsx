export const bookReducer = (state,{type,payload}) =>{
    
    switch(type){
        // case "":
        //     return{

        //     };
        // case "":
        //     return{

        //     };
        // case "":
        //     return{

        //     };
        case "HandleSearch":
        return{
            ...state,search:payload
        }
        default:
            return state;
    };
}