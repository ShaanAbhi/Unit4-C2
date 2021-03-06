const mongoose = require('mongoose');

const branchSchema = mongoose.Schema({

    name :{ type: String, required:true } ,
address :{ type : String, required: true },
    IFSC:{type : String, required:true},
MICR :{ type:Number, required: true},
},
{

    // createdAt (required)
    // updatedAt (required)
    versionKey:false,
    timestamps:true,
});

const   Branch = mongoose.model("branch",branchSchema);

module.exports = Branch;