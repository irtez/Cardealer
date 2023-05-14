import React, { useState, useEffect } from 'react';
import './styles/sections.css'
import { createBrand, getAllBrands } from '../http/brandAPI';
import { createCar } from '../http/carAPI';

const Admin = () => {
    //brand
    const [selectedBrandImage, setselectedBrandImage] = useState(null)
    const [newBrand, setnewBrand] = useState(null)

    const handleBrandSubmit = async (event) => {
        try {
            event.preventDefault()
            const brandName = event.target.brandname.value.trim()
            const formData = new FormData()
            formData.append('image', selectedBrandImage)
            formData.append('name', brandName)
            const response = await createBrand(formData)
            setnewBrand({name: response.name, imgurl: response.img})
            event.target.brandname.value = ""
            event.target.brandimg.value = ""
            setselectedBrandImage(null)
        } catch (error) {
            console.error("Error creating brand:", error)
        }
    }
    const handleBrandImgUpload = (event) => {
        setselectedBrandImage(event.target.files[0])
    }

    //car
    const [newCar, setnewCar] = useState(null)
    const [availableBrands, setavailableBrands] = useState(null)
    const [selectedCarImage, setselectedCarImage] = useState(null)
    const [selectedCarBrand, setselectedCarBrand] = useState(null)

    const chooseCarModel = (event) => {
        setselectedCarBrand(event.target.value)
    }

    const chooseCarPhoto = (event) => {
        setselectedCarImage(event.target.files[0])
    }

    const handleCarSubmit = async (event) => {
        try {
            event.preventDefault()
            const formData = new FormData()
            formData.append("name", event.target.carmodel.value.trim())
            formData.append("year", event.target.caryear.value.trim())
            formData.append("engine", event.target.carengine.value.trim())
            formData.append("body", event.target.carbody.value.trim())
            formData.append("transmission", event.target.cartransmission.value.trim())
            formData.append("mileage", event.target.carmileage.value.trim())
            formData.append("image", selectedCarImage)
            formData.append("brand", selectedCarBrand)
            formData.append("configuration", event.target.carconfig.value.trim())
            formData.append("price", event.target.carprice.value.trim())
            formData.append("color", event.target.carcolor.value.trim())
            
            const response = await createCar(formData)
            setnewCar({
                name: response.name,
                year: response.year,
                body: response.body,
                engine: response.engine,
                transmission: response.transmission,
                mileage: response.mileage,
                imgurl: response.img,
                brand: response.brand,
                configuration: response.configuration,
                price: response.price,
                color: response.color
            })
            setselectedCarBrand(null)
            setselectedCarImage(null)
            event.target.carmodel.value = ""
            event.target.carconfig.value = ""
            event.target.caryear.value = ""
            event.target.carbody.value = ""
            event.target.carengine.value = ""
            event.target.cartransmission.value = ""
            event.target.carmileage.value = ""
            event.target.carimg.value = ""
            event.target.carcolor.value = ""
            event.target.carprice.value = ""
            event.target.choosecarbrand.value = ""

        } catch (error) {
            console.error("Error creating car:", error)
        }
        

    }

    useEffect(() => {
        getAllBrands()
          .then(responseData => {
            setavailableBrands(responseData)
          })
          .catch(error => {
            console.log('Error fetching data:', error)
          })
      }, [])


  return (
    <section id="admin">
        <div className='creation'>
            <p>Создание бренда</p>
            <form onSubmit={handleBrandSubmit}>
                <input name="brandname" type="text" placeholder='Название бренда' required></input>
                <input name="brandimg" type="file" onChange={handleBrandImgUpload} required/>
                <button type="submit">Создать бренд</button>
            </form>
            {newBrand && (
                <div className='brandCreated'>
                    <p>Создан новый бренд {newBrand.name}</p>
                    <img src={newBrand.imgurl} alt="newBrand"></img>
                </div>
                ) 
            }
        </div>
        <div className='creation'>
            <p>Создание автомобиля</p>
            <form onSubmit={handleCarSubmit}>
                <input name="carmodel" type="text" placeholder='Модель автомобиля' required/>
                <input name="carconfig" type="text" placeholder='Комплектация' required/>
                <input name="caryear" type="text" placeholder='Год выпуска' required/>
                <input name="carengine" type="text" placeholder='Информация о двигателе' required/>
                <input name="carbody" type="text" placeholder='Тип кузова' required/>
                <input name="cartransmission" type="text" placeholder='Трансмиссия' required/>
                <input name="carmileage" type="text" placeholder='Пробег' required/>
                <input name="carimg" type="file" onChange={chooseCarPhoto} required/>
                <input name="carcolor" type="text" placeholder='Цвет' required/>
                <input name="carprice" type="text" placeholder='Цена' required/>
                {availableBrands ? (
                    <select name="choosecarbrand" onChange={chooseCarModel}>
                        <option value="">Бренд автомобиля:</option>
                        {availableBrands.map( item => <option value={item.name}>{item.name}</option> )}
                    </select>
                ) : (
                    <p>Загрузка...</p>
                )}
                <button type="submit">Создать автомобиль</button>
            </form>
            {newCar && (
                <div className='carCreated'>
                    <p>Создан новый автомобиль <b>{newCar.brand} {newCar.name}</b></p>
                    <p>Комплектация: {newCar.configuration}</p>
                    <p>Год выпуска: {newCar.year}</p>
                    <p>Двигатель: {newCar.engine}</p>
                    <p>Тип кузова: {newCar.body}</p>
                    <p>Трансмиссия: {newCar.transmission}</p>
                    <p>Пробег: {newCar.mileage} км</p>
                    <p>Цвет: {newCar.color}</p>
                    <p>Цена: {newCar.price} ₽</p>
                    <img src={newCar.imgurl} alt="newBrand"></img>
                </div>
                ) 
            }
        </div>
    </section>
  );
};
//name, year, engine, body, transmission, mileage, img, brand
export default Admin;