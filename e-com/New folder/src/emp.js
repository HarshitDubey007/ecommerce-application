const mongoose = require("mongoose");

const empSchema = new mongoose.Schema({
        empno: {type: String},
        sal: {type: Number},
        dept: {
          deptno: {type: Number},
          dname: {type: String},
          loc: {type: String}
        },
        desg: {type: String},
        bonus: { type: Number, default: 0},
        mgr: {
          name: {type: String},
          num: {type: Number}
        },
        project: [
          {
            name: {type: String},
            Hrs: {type: Number}
          }
        ]
      },
);


module.exports = mongoose.model("emp", empSchema);
