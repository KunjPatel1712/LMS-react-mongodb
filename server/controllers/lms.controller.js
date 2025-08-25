const Model = require("../model/lms.model");

const lmsController = {
  test: (req, res) => {
    res.send("LMS API working ✅");
  },
  create: async(req, res)=>{
        const {title, author, category, content, status} =req.body
        if(!title || !author|| !category || ! content || ! status)
        {
            return   res.status(404).json("fill up all fields")
        }

        try {
            await  Model.create({...req.body})
            res.status(201).json("book is created")
            
        } catch (error) {
            res.status(404).json({message:error.message||"books is not create due to some err"})
        }
  },

  getallBook:async (req,res)=>{
        

        try {
            const books= await Model.find()
            res.json(books)
            
        } catch (error) {
            res.status(400).json({message:error.message||"books is not showing"})
        }
  },
  getbookbyId : async(req,res) =>{
    
    const {Book_id} =req.params
    const isexistbook= await Model.find({Book_id})
    if(!isexistbook)
    {
        return res.status(400).json({message:error.message||"books is not found"})
    }
    

    try {
        const books= await Model.findById(Book_id)
          return res.json(books)
    } catch (error) {
       res.status(500).json({message:error.message||"books is not found"})
    }
    
  },

updateBookStatus: async (req, res) => {
  try {
    const { Book_id } = req.params;
    const { status } = req.body;

   
    if (!status) {
      return res.status(400).json({ message: "Status is required " });
    }

  
    const updatedBook = await Model.findByIdAndUpdate(
      Book_id,
      { status },
      { new: true }
    );

   
    if (!updatedBook) {
      return res.status(404).json({ message: "Book not found ❌" });
    }

   
    return res.status(200).json({
      message: "Book status updated ✅",
      book: updatedBook
    });

  } catch (error) {
    res.status(500).json({ message: error.message || "Something went wrong ❌" });
  }
},
delete: async(req, res)=>{
     const {Book_id} =req.params
    const isexistbook= await Model.find({Book_id})
    if(!isexistbook)
    {
        return res.status(400).json({message:"books is not found"})
    }
    

    try {
        const books= await Model.findByIdAndDelete(Book_id)
       
          res.status(500).json({message:"books is deleted",books})
    } catch (error) {
       res.status(500).json({message:error.message||"books is not deleted"})
    }
    


}

}

module.exports = lmsController;