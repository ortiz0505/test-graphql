import { IResolvers } from "@graphql-tools/utils";


const type: IResolvers= {

    Item: {
        city: parent =>{
            return parent.city
        },
        seller: parent => {
            return parent.seller
        }  
    }

} 

export default type;