const express = require("express");
const Posts = require("../models/Posts");
const router = express.Router();


//update a post

router.patch( '/:postId', async (req, res) => { 
  try {
    const updateOnePost =await  Posts.updateOne({_id: req.params.postId}, {$set: {title: req.body.title} });
    res.json(updateOnePost);
    console.log(updateOnePost);

  } catch(err) {
    res.json({message: err});
  }

});

//delete a post

router.delete( '/:postId', async (req, res) => { 
  try {
    const deleteOnePost =await  Posts.remove({_id: req.params.postId});
    res.json(deleteOnePost);
    console.log(deleteOnePost);

  } catch(err) {
    res.json({message: err});
  }

});

//get a specific post
router.get( '/:postId', async (req,res) => {
   console.log(req.params.postId);
   try {
    const retriveOnePost = await  Posts.findById(req.params.postId);
    res.json(retriveOnePost);
    console.log(retriveOnePost);
    } catch(err) {
      res.json({message: err});
      //console.log(err);
    }

});


//get back all the post
router.get("/", async (req, res) => {
  try {
  const retrivePost = await  Posts.find();
  res.json(retrivePost);
  console.log(retrivePost);
  } catch(err) {
    res.json({message: err});
    //console.log(err);
  }

  //console.log("post");
  //res.send("post url");
});


//submit all the post
router.post("/", async (req, res) => {
  console.log(req.body);
  const post = new Posts({
    title: req.body.title,
    description: req.body.description,
  });
 
  try{
   const savePost = await post.save();
   res.json(savePost);
   console.log(savePost);
  }
  catch(err){
    res.json({message: err});
  }
/*
  post
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json({ message: err });
    });
*/
});




module.exports = router;
