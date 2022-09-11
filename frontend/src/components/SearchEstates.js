import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { filteredProperties, getRealEstates } from '../features/estateSlice'
import '../sassStyles/layout/searchEstates.scss'
import reset from '../assets/icons/reset.png'

const SearchEstates = () => {

    const [region, setRegion] = useState("");
    const [livingSpace, setLivingSpace] = useState("");
    const [plotSize, setPlotSize] = useState("");
    const [rotate, setRotate] = useState(false);

    const dispatch = useDispatch()

    const realestates = useSelector(state => state.realestate)
    let { realestate } = realestates;

    useEffect(() => {
        
        const foundRegion = (region || "");
        const foundLivingSpace = (livingSpace || "");
        const foundPlotSize = (plotSize || "");

        const result = realestate.filter((est) => {
            return est.located.includes(foundRegion) &&
                est.livingspace.includes(foundLivingSpace) &&
                est.area.includes(foundPlotSize)

        });
        dispatch(filteredProperties(result))
    }, [dispatch, livingSpace, plotSize, realestate, region]);

    const handleClear = (e) => {
        setRotate(prev => !prev)
        setRegion("")
        setLivingSpace("")
        setPlotSize("")
        dispatch(filteredProperties(realestate))
    }

   return (
        <div className="searchFields">

            <div className="searchOptions">Search Options</div>

            <select onChange={(e) => setRegion(e.target.value)} value={region} placeholder="Region.." className="selectop">
                <option value="defaultValue">Regions...</option>
                <option value="North">North</option>
                <option value="Centre">Centre</option>
                <option value="South">South</option>
            </select>

            <select onChange={(e) => setLivingSpace(e.target.value)} value={livingSpace} placeholder="Living space.." className="selectop">
                <option defaultValue>Living space...</option>
                <option value="500" >{'500 m\xB2'}</option>
                <option value="1000">{'1000 m\xB2'}</option>
                <option value="2000">{'2000 m\xB2'}</option>
                <option value="3000">{'3000 m\xB2'}</option>
                <option value="5000">{'5000 m\xB2'}</option>
                <option value="10000">{'10000 m\xB2'}</option>
            </select>

            <select onChange={(e) => setPlotSize(e.target.value)} value={plotSize} placeholder="Plot size.." className="selectop">
                <option defaultValue>Plot size...</option>
                <option value="1">{'2 ha'}</option>
                <option value="3">{'3 ha'}</option>
                <option value="6">{'6 ha'}</option>
                <option value="8">{'8 ha'}</option>
                <option value="9">{'9 ha'}</option>
                <option value="10">{'10 ha'}</option>
            </select>

            <button type="button" className="searchbtn" onClick={handleClear}><img src={reset} alt="" className={rotate ? "resetIcon turn" : "resetIcon"} /></button>

        </div>
    )
}

export default SearchEstates
