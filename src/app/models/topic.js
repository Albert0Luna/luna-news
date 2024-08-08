import mongoose, { Schema } from 'mongoose';  // import mongoose and Schema

const topicSchema = new Schema(
  {
    title: String,  // create a title field of type String
    description: String,  // create a description field of type String
  },
  { 
    timestamps: true // enable timestamps for the schema
  }  
);

const Topic = mongoose.model.Topic || mongoose.model('Topic', topicSchema);  // create a Topic model using the topicSchema

export default Topic;  // export the Topic model to be used in other files