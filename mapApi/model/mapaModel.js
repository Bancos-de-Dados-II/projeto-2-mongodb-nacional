
import mongoose from "../database/mongoose";
import {randomUUID} from "crypto"
const{Schema}=mongoose;

const MapaSchema = new Schema({
    id:{
        type:String,
        default: () => randomUUID()
    },
    localizacao:{
        nome:{
            type: String
        },
        type:{
            type: String,
            enum: ['Point'],
            require: true
        },
       
         coordinates:{
            type: [Number],
            required:true
         }
    }
});
const MapaModel= mongoose.model("Mapa", MapaSchema)
export default MapaModel;