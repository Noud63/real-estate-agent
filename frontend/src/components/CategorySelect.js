import React from 'react'
import Select from 'react-select'
import '../sassStyles/layout/categorySelect.scss'
import { useSelector, useDispatch } from 'react-redux'
import { filteredProperties } from '../features/estateSlice'


const regions = [
    { value: 'All Regions', label: 'All Regions',  category: 'region'},
    { value: 'North', label: 'North', category: 'region'},
    { value: 'Centre', label: 'Centre', category: 'region'},
    { value: 'South', label: 'South', category: 'region'}
]

const livingSpace = [
    { value: '500', label: '500 m\xB2', category: 'space' },
    { value: '750', label: '750 m\xB2', category: 'space' },
    { value: '1000', label: '1000 m\xB2', category: 'space' },
    { value: '1200', label: '1200 m\xB2', category: 'space' },
    { value: '1500', label: '1500 m\xB2', category: 'space' },
    { value: '2000', label: '2000 m\xB2', category: 'space' }
]

const plotSize = [
    { value: '1', label: '1 ha', category: 'plot' },
    { value: '2', label: '2 ha', category: 'plot' },
    { value: '3', label: '3 ha', category: 'plot' },
    { value: '4', label: '4 ha', category: 'plot' },
    { value: '5', label: '5 ha', category: 'plot' },
    { value: '6', label: '6 ha', category: 'plot' }
]

const allFilters = [...regions, ...livingSpace, ...plotSize]
// console.log(allFilters)

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
    let { realestate, filtered  } = realestates;

    const changeSearch = (value) => {
        
        let estate;
        for(let filter of allFilters){

            if (filtered.length === realestate.length){
                estate = realestate
            } else if (filtered.length < realestate.length){
                estate = filtered
            }
            
            if (filter.value === value.value && filter.category === 'region') {
               let filteredEst = estate.filter(el => el.located === value.value) 
                dispatch(filteredProperties(filteredEst))
            }

            if (filter.value === value.value && filter.category === 'space') {
                let filteredEst = estate.filter(el => el.livingspace === value.value)
                dispatch(filteredProperties(filteredEst))
            } 

            if (filter.value === value.value && filter.category === 'plot') {
                let filteredEst = estate.filter(el => el.area === value.value)
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
        <Select theme={customTheme} options={regions} placeholder="Region" className="selectBox" value={null} onChange={(e) => changeSearch(e)}  name={'Region'} />
        <Select theme={customTheme} options={livingSpace} placeholder="Living Space" className="selectBox" value={null} onChange={changeSearch} name={'Living Space'} />
        <Select theme={customTheme} options={plotSize} placeholder="Plot Size" className="selectBox"  value={null} onChange={changeSearch} name={'Plot Size'} />
    </div>
    )
}

export default CategorySelect
