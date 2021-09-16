import { Document, Schema, model, createConnection, Number, ObjectId } from 'mongoose';
let autoIncrement = require('mongoose-auto-increment');

interface Item extends Document{

    id: Number,
    name: String,
    brand: String,
    thumbnail: String,
    pictures: [],
    city: {},
    price: Number,
    seller: {},
    description: String,
    rating: Number    
}

export const ItemSchema = new Schema({


    id:{
        type: Number,
        unique: true 
    },
    name:{
        type: String,
    },
    brand:{
        type: String,
    },
    thumbnail:{
        type: String,
    },
    pictures: {
        type: [],
    },
    city:{
        type: {},
    },
    price:{
        type: Number,
    },
    seller:{
        type: {},
    },
    description:{
        type: String,
    } ,
    rating:{
        type: Number,
    }   
})

let connection = createConnection("mongodb://admin:1234@graphqldb-shard-00-00.za8im.mongodb.net:27017,graphqldb-shard-00-01.za8im.mongodb.net:27017,graphqldb-shard-00-02.za8im.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-neqad9-shard-0&authSource=admin&retryWrites=true&w=majority");
autoIncrement.initialize(connection);

ItemSchema.plugin(autoIncrement.plugin, {
    model: 'Item',
    field: 'id',
    startAt: 1,
    incrementBy: 1
});

export const ItemModel = model<Item>('Item',ItemSchema)