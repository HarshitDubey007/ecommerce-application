const express = require("express");
const env = require("dotenv");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");

//routes
const authRoutes = require("./routes/auth");
const adminRoutes = require("./routes/admin/auth");
const categoryRoutes = require("./routes/category");
const productRoutes = require("./routes/product");
const cartRoutes = require("./routes/cart");
const initialDataRoutes = require("./routes/admin/initialData");
const pageRoutes = require("./routes/admin/page");
const addressRoutes = require("./routes/address");
const orderRoutes = require("./routes/order");
const adminOrderRoute = require("./routes/admin/order.routes");

//environment variable or you can say constants
env.config();

// mongodb connection
//mongodb+srv://root:<password>@cluster0.8pl1w.mongodb.net/<dbname>?retryWrites=true&w=majority
mongoose.connect(`mongodb+srv://dbUser:dbUser@cluster0.fqkuj.mongodb.net/ecommerce?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
  }
)
  .then(() => {
    console.log("Database connected");
  });

app.use(cors());
app.use(express.json());
app.use("/public", express.static(path.join(__dirname, "uploads")));
app.use("/api", authRoutes);
app.use("/api", adminRoutes);
app.use("/api", categoryRoutes);
app.use("/api", productRoutes);
app.use("/api", cartRoutes);
app.use("/api", initialDataRoutes);
app.use("/api", pageRoutes);
app.use("/api", addressRoutes);
app.use("/api", orderRoutes);
app.use("/api", adminOrderRoute);


if (process.env.NODE_ENV == "production") {
  app.use("/", express.static("./client/build"))
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, './client/build/index.html'))
  })
}
//onst pat = con
//console.log(pat,"hello:::")
// if(process.env.NODE_ENV == "production"){
//   app.use(express.static(path.join(__dirname,"client","build")));
//   app.get("/*", (req, res ) => {
//     res.sendFile(path.resolve(__dirname,'client/build/index.html'))
//   })
// }

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



// async function updateValues() {
// const EMP = require("./emp")

//   try {
    
//     // const a  = await EMP.find({"project.name": "Project-2"  })
//     // console.log("AA", a)
//     EMP.deleteMany({ "project.name": "Project-2" , "project.Hrs": 4} ).then(() => {
//       console.log("Done")
//     })
//   } catch (error) {
//     console.log(error)
//   }
// }
