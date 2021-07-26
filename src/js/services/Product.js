import ApiWrapper from "../api/ApiWrapper";
import { VALID_STATES, VALID_FRUITS } from '../constants';

export default class Product{

    

    randomData(){
        const stateRandom = Math.floor(Math.random() * Object.values(VALID_STATES).length);
        const expirationRandom = Math.floor(Math.random() * 60);
        const distanceRandom = Math.floor(Math.random() * 20);
        const providerRandom = Math.floor(Math.random() * 20);
        const precisionRandom = Math.floor(Math.random() * 12) + 88;
        const loteRandom = Math.floor(Math.random() * 15200) + 100000;
        const fruitRandom = Math.floor(Math.random() * Object.values(VALID_FRUITS).length);

        return {
            "user": "0001",
            "suggested_price": Math.random(1.0, 200.0) * 10.0 + 1.0,
            "status": stateRandom,
            "expiration": expirationRandom,
            "viable_distance": distanceRandom,
            "nearby_providers": providerRandom,
            "donatable": true,
            "salable": true,
            "precision": precisionRandom,
            "entity": VALID_FRUITS[fruitRandom],
            "category": "fruta",
            "lote": loteRandom,
        }
    }

    createData(id, name, batch, date, state) {
        return {
          id,
          data: [
            { value: id, style: {}, align: "left" },
            { value: name, style: {}, align: "left" },
            { value: batch, style: { width: 60 }, align: "left" },
            { value: date, style: { width: 160 }, align: "center" },
            { value: VALID_STATES[state], style: { width: 100 }, align: "left" },
            {
              style: {},
              align: "center",
              config: { url: "/results", hasUrl: true },
            },
          ],
        };
      }

    async upload(file){
        this.api = new ApiWrapper("post");
        // TODO: change input to file
        const dummy = this.randomData();
        const result = await this.api.makeRequest("/upload-product", dummy)
        return {
            data:{
                ...result.data,
                ...dummy,
            }
        }
    }

    async fetch(){
        let self = this
        self.api = new ApiWrapper("get");
        const result = await self.api.makeRequest(`/products`)
        const data = result.data.rows.map( row => {
            const { _id, entity, lote, createdAt, status } = row.doc
            return self.createData(_id, entity, lote, createdAt, status)
    })
        return {data}
    }

    async get(id){
        this.api = new ApiWrapper("get");
        const result = await this.api.makeRequest(`/product/${id}`)
        return {result}
    }

}