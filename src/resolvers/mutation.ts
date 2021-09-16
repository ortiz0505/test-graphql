import { ItemModel } from './../data/Item';
import { IResolvers } from 'graphql-tools';

import _ from 'lodash';

const mutation: IResolvers = {
    Mutation: {
        newItem(__: void, { product }): any {

            let newProduct = new ItemModel(product);
            console.log(product)
            let res = newProduct.save()
                .then(savedProduct => {
                    console.log("Añadido producto: " + savedProduct)
                    return savedProduct;
                }).catch(error => {
                    console.log(error)
                    return new Error('Error añadiendo el curso: ' + error);
                });
            return res
        }
       
    }
}

export default mutation;
