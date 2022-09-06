import React, {useState, useEffect} from 'react'
import Select from 'react-select'
import '../sassStyles/layout/categorySelect.scss'
// import { useSelector, useDispatch } from 'react-redux'
// import { filteredProperties } from '../features/estateSlice'


const regions = [
    { value: 'North', label: 'North' },
    { value: 'Centre', label: 'Centre' },
    { value: 'South', label: 'South' }
]

const livingSpace = [
    { value: '500', label: '500 m\xB2' },
    { value: '750', label: '750 m\xB2' },
    { value: '1000', label: '1000 m\xB2' },
    { value: '1200', label: '1200 m\xB2' },
    { value: '1500', label: '1500 m\xB2' },
    { value: '2000', label: '2000 m\xB2' }
]

const plotSize = [
    { value: '1', label: '1 ha' },
    { value: '2', label: '2 ha' },
    { value: '3', label: '3 ha' },
    { value: '4', label: '4 ha' },
    { value: '5', label: '5 ha' },
    { value: '6', label: '6 ha' }
]




const customTheme = (theme) => {
    return {
        ...theme,
        colors: {
            ...theme.colors,
            primary25: '#f0ecf5',  // highlight options on hover
            primary: 'green',      // border active
            neutral20: '#a892a8',  // border on hover
            neutral30: '#967e96',
            neutral50: '#a892a8',  // placeholder
        }
    }
}


const CategorySelect = () => {

    const onChangeHandler = (value, actionMeta) => {
        console.log(value)
        console.log(actionMeta)
    }

    const handleInputChange = (inputValue, actionMeta) => {
        console.log(inputValue)
        console.log(actionMeta)
    }

return (
        <div className="selectMenus">
            <div className="select">search options</div>
            <Select theme={customTheme} options={regions} placeholder="Region" className="selectBox" onChange={onChangeHandler} onInputChange={handleInputChange} name={'Region'}/>
        <Select theme={customTheme} options={livingSpace} placeholder="Living Space" className="selectBox" onChange={onChangeHandler}  onInputChange={handleInputChange} name={'Living Space'}/>
        <Select theme={customTheme} options={plotSize} placeholder="Plot Size" className="selectBox" onChange={onChangeHandler}  onInputChange={handleInputChange} name={'Plot Size'}/>
        </div>
    )
}

export default CategorySelect
