import { ItemModel } from '../data/Item';
import { IResolvers } from "@graphql-tools/utils";

const query: IResolvers = {

    Query: {
        items(): any {
            return ItemModel.find({})
                .then((products) => { return products })
                .catch((error) => { return new Error('Error encontrando los productos: ' + error) });

        },
        item(__: void, { id }): any {
            return ItemModel.findOne({id: id})
                .then((item) => { return item })
                .catch((error) => { return new Error('Error encontrando los productos: ' + error) });

        },
        search(__: void, { name }): any {
            let items: Array<any> = [];
            return ItemModel.find({ "name": { $regex: name } })
                .then((itemsResponse) => {
                    items = itemsResponse;
                    
                    return {
                        query: `name=${name}`,
                        total: items.length,
                        items: items,
                        seller: items.length == 0? {} : items[0].seller
                    }}
                    );
        }
    }

}

export default query;