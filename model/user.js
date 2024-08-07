// models/Product.js
const mongoose = require('mongoose');
//ประกาศตัวแปร productSchema
const userSchema = new mongoose.Schema({
    //ใส่ แอคตีบิว เพื่อสร้างdatabase
    user_name: { type: String, required: true }, //required เป็นการเช็ค ถ้ากำหนด true แสดงว่าจำเป็นต้องใส่ข้อมูลครบ
    password: { type: String, required: true },
    name: { type: String, required: true },
    role: { type: String, required: true },
    
},
{timestamps: true, versionKey: false} //มันจะใส่วันที่โดยอัติโนมัติ
);
const user = mongoose.model('Product', userSchema); //ต้องทำการ export และ กำหนดชื่อตัว ที่จะเก็บ productSchema
module.exports = user