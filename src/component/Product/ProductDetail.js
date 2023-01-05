import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import "./ProductDetail.css"

function ProductDetail() {
  const [productDetail, setProductDetail] = useState({});

  const { id } = useParams();
  // const id = params.id;

  useEffect(() => {
    const productDetailUrl = `https://fakestoreapi.com/products/${id}`;
    fetchProductDetails(productDetailUrl);
  }, [id]);

  const fetchProductDetails = (productDetailUrl) => {
    fetch(productDetailUrl)
      .then(response => {
        return response.json();
      }).then(res => {
        setProductDetail(res);
      })
  };
  // console.log(productDetail)
  return (
    <>
      <div className="container ">
        <div className="row justify-content-center">
          <div className="col col-lg-6 mt-5">
            <div className="container text-center">
              {/* {productDetail.image ? "dsgsd":"dsgd"} */}
              {/* {Object.keys(productDetail).length > 0 } */}
              {productDetail.image &&
                <img src={productDetail.image} className="imgsize"/>
              }
              <h1>{productDetail.title}</h1>
            </div>
            <table className="table table-hover">
              <tbody>
                <tr>
                  <th scope="row">Price</th>
                  <td>{productDetail.price}</td>
                </tr>
                <tr>
                  <th scope="row">Description</th>
                  <td>{productDetail.description}</td>
                </tr>
                <tr>
                  <th scope="row">Category</th>
                  <td>{productDetail.category}</td>
                </tr>
                <tr>
                  <th scope="row">Count</th>
                  
                  <td>{productDetail.rating && productDetail.rating.count}</td>
                </tr>
                <tr>
                  <th scope="row">Rate</th>
                  
                  <td>{productDetail.rating ? productDetail.rating.rate : 0}</td>
                </tr> 
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetail