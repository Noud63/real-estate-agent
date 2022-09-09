import React from 'react'
import Select from 'react-select'
import '../sassStyles/layout/categorySelect.scss'
import { useSelector, useDispatch } from 'react-redux'
import { filteredProperties } from '../features/estateSlice'


const regions = [
    { value: 'All Regions', label: 'All Regions' },
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


const CategorySelect = ({setCurrentNumber}) => {

    const dispatch = useDispatch()

    const realestates = useSelector(state => state.realestate)
    let { realestate  } = realestates;

    const changeSearch = (value) => {
        
        for(let region of regions){
            if (region.value === value.value) {
                const filteredEst = realestate.filter(el => el.located === value.value)
                dispatch(filteredProperties(filteredEst))
            }
        }

        if(value.value === 'All Regions'){
            dispatch(filteredProperties(realestate))
            setCurrentNumber(1)
        }
        if (value.value === 'Centre'){
                 setCurrentNumber(1)
        }
    }
    
return (
    <div className="selectMenus">
        <div className="select">search options</div>
        <Select theme={customTheme} options={regions} placeholder="Region" className="selectBox" onChange={changeSearch}  name={'Region'} />
        <Select theme={customTheme} options={livingSpace} placeholder="Living Space" className="selectBox" onChange={changeSearch} name={'Living Space'} />
        <Select theme={customTheme} options={plotSize} placeholder="Plot Size" className="selectBox"  onChange={changeSearch} name={'Plot Size'} />
    </div>
    )
}

export default CategorySelect
