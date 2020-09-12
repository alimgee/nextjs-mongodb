import { ObjectId } from "mongodb";
import { connectToDatabase } from "../../util/mongodb";

export default async (req, res) => {

  // Determining id passed through the url
  //const id = (req.url).replace('/api/', '')
  const { query: { id },} = req
  // find id in db
  const { db } = await connectToDatabase();
  const movie = await db
    .collection("movies")
    .findOne({ _id: ObjectId(`${id}`) })
  res.json(movie);
};

