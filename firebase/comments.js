import { firebase, Comments } from './init';


export const saveComment = async comment => {
  const doc = Comments.doc();
  await doc.set({
    ...comment,
    date: new firebase.firestore.Timestamp.now()
  });
  return doc;
};
