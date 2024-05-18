/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import MyContext from './myContext';
import { collection, deleteDoc, doc, onSnapshot, orderBy, query } from 'firebase/firestore';
import { fireDb } from '../firebase/firebaseConfig';
import toast from 'react-hot-toast';

function MyState({ children }) {
  const [loading, setLoading] = useState(false);

  // get All product state
  const [getAllProduct, setGetAllProduct] = useState([]);

  const getAllProductFunction = async () => {
    setLoading(true);

    try {
      const q = query(
        collection(fireDb, "products"),
        orderBy('time')
      );
      const data = onSnapshot(q, (QuerySnapshot) => {
        let productArray = [];
        QuerySnapshot.forEach((doc) => {
          productArray.push({ ...doc.data(), id: doc.id });
        });
        setGetAllProduct(productArray)
        setLoading(false)
      });
      return () => data;

    } catch (error) {
      console.log(error);
      setLoading(false)
    }

  }

  const [getAllOrder, setGetAllOrder] = useState([]);

  const getAllOrderFunction = async () => {
    setLoading(true);
    try {
      const q = query(
        collection(fireDb, "order"),
        orderBy('time')
      );
      const data = onSnapshot(q, (QuerySnapshot) => {
        let orderArray = [];
        QuerySnapshot.forEach((doc) => {
          orderArray.push({ ...doc.data(), id: doc.id });
        });
        setGetAllOrder(orderArray);
        setLoading(false);
      });
      return () => data;
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }
  const orderDelete = async (id) => {
    setLoading(true)
    try {
        await deleteDoc(doc(fireDb, 'order', id))
        toast.success('Order Deleted successfully')
        getAllOrderFunction();
        setLoading(false)
    } catch (error) {
        console.log(error)
        setLoading(false)
    }
}

const [getAllUser, setGetAllUser] = useState([]);

const getAllUserFunction = async () => {
  setLoading(true);
  try {
      const q = query(
          collection(fireDb, "user"),
          orderBy('time')
      );
      const data = onSnapshot(q, (QuerySnapshot) => {
          let userArray = [];
          QuerySnapshot.forEach((doc) => {
              userArray.push({ ...doc.data(), id: doc.id });
          });
          setGetAllUser(userArray);
          setLoading(false);
      });
      return () => data;
  } catch (error) {
      console.log(error);
      setLoading(false);
  }
}

  useEffect(() => {
    getAllProductFunction()
    getAllOrderFunction()
    getAllUserFunction()
  }, [])


  return (
    <MyContext.Provider value={{
      loading,
      setLoading,
      getAllProduct,
      getAllProductFunction,
      getAllOrder,
      orderDelete,
      getAllUser
    }}>
      {children}
    </MyContext.Provider>
  )
}

export default MyState