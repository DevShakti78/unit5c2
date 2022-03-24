import "./Rentals.css";
import {useState,useEffect} from "react"

export const Rentals = () => {
const [data,setData] = useState([]);

useEffect(() => {
  getData()
},[])

const getData = (e) => { 
  fetch("http://localhost:8080/houses").then((res) => (res.json())).then((data) => 
  {
    // console.log(data) 
  setData(data) })
}

const handleSort = (field, ascending=true) => {
 const sortData = data.sort((a, b) => {
   if (ascending) {
     return a[field] - b[field]
   }
   return b[field] - a[field]
 })
//  console.log(sortData)
 setData([...sortData])
}
console.log({data})

  return (
    <div className="rentalContainer">
      <div className="sortingButtons">
        <button className="sortById" onClick={() => handleSort('id')}>Sort by ID</button>
        <button className="sortByRentAsc" onClick={() => handleSort('rent')}>Rent Low to high</button>
        <button className="sortByRentDesc" onClick={() => handleSort('rent', false)}>Rent High to low</button>
        <button className="sortByAreaAsc" onClick={() => handleSort('areaCode')}>Area Low to high</button>
        <button className="sortByAreaDesc" onClick={() => handleSort('areaCode', false)}>Area High to Low</button>
      </div>
      <input
        className="searchAddress"
        type="text"
        placeholder="Search Address"
      />
      <table className="table" border="1">
        <thead>
          <tr>
            <th>Sl.no.</th>
            <th>Name</th>
            <th>Owner Name</th>
            <th>Address</th>
            <th>Area Code</th>
            <th>Rent</th>
            <th>Available For</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {data.map((house, index) => {
            return (
              <tr key={house.id} className="houseDetails">
                <td className="houseId">{house.id}</td>
                <td className="houseName">{house.name} </td>
                <td className="ownersName">{house.ownerName}</td>
                <td className="address">{house.address}</td>
                <td className="areaCode">{house.areaCode}</td>
                <td className="rent">{house.rent}</td>
                <td className="preferredTenants">
                  {(house?.bachelor &&  house.married) ? "Both" : house.married || house.bachelor }
                </td>
                <td className="houseImage">
                  <img src={house.image} alt="house" />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};