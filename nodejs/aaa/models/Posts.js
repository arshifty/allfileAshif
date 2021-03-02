const mongoose = require('mongoose');
const PostSchema = mongoose.Schema({
title: {
  type: String
},
description: {
  type: String
}

});

module.exports = mongoose.model('Posts', PostSchema  );